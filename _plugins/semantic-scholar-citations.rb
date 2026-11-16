# Fetches citation counts from the Semantic Scholar API once per build and exposes them
# to templates as site.data["semantic_scholar"][<bibtex key>] = { "count" => "1.2K", "url" => ... }.
#
# Papers are matched by the bib entry's `semanticscholar_id` (optional override),
# otherwise `arxiv`, otherwise `doi`. All papers go in one batch request, so the
# build stays fast and well within the API's rate limits. Unlike Google Scholar,
# the API works from GitHub Actions. If the request fails, the badges are hidden
# for that build rather than showing "N/A".
#
# Optional: set an S2_API_KEY secret/env var to use a dedicated API key.

require "json"
require "net/http"
require "uri"
require "bibtex"

module Jekyll
  class SemanticScholarCitations < Generator
    safe true
    priority :high

    API = URI("https://api.semanticscholar.org/graph/v1/paper/batch?fields=citationCount,url")

    def generate(site)
      badges = site.config["enable_publication_badges"] || {}
      return unless badges["semantic_scholar"]

      scholar = site.config["scholar"] || {}
      path = File.join(site.source, scholar.fetch("source", "_bibliography"), scholar.fetch("bibliography", "papers.bib"))
      return unless File.exist?(path)

      entries = BibTeX.open(path, filter: nil).data.select { |e| e.respond_to?(:key) && e.respond_to?(:fields) }
      wanted = {}
      entries.each do |e|
        ids = []
        ids << clean(e[:semanticscholar_id]) if e.field?(:semanticscholar_id)
        ids << "ARXIV:#{clean(e[:arxiv])}" if e.field?(:arxiv)
        ids << "DOI:#{clean(e[:doi])}" if e.field?(:doi)
        wanted[e.key.to_s] = ids unless ids.empty?
      end

      results = {}
      # Round 1 uses each paper's first identifier; round 2 retries misses with the next one.
      2.times do |round|
        pending = wanted.reject { |k, _| results.key?(k) }.select { |_, ids| ids[round] }
        break if pending.empty?
        papers = fetch_batch(pending.map { |_, ids| ids[round] })
        break if papers.nil?
        pending.keys.zip(papers).each do |key, paper|
          next unless paper && paper["citationCount"]
          results[key] = { "count" => humanize(paper["citationCount"]), "url" => paper["url"] }
        end
      end

      site.data["semantic_scholar"] = results
      missing = wanted.keys - results.keys
      Jekyll.logger.info "Semantic Scholar:", "citation counts for #{results.size}/#{wanted.size} papers"
      Jekyll.logger.warn "Semantic Scholar:", "no match for #{missing.join(', ')}" unless missing.empty?
    end

    private

    def clean(value)
      value.to_s.gsub(/[{}]/, "").strip
    end

    def humanize(n)
      n = n.to_i
      return n.to_s if n < 1000
      format("%.1fK", n / 1000.0).sub(".0K", "K")
    end

    def fetch_batch(ids)
      http = Net::HTTP.new(API.host, API.port)
      http.use_ssl = true
      http.open_timeout = 10
      http.read_timeout = 30
      4.times do |attempt|
        req = Net::HTTP::Post.new(API, "Content-Type" => "application/json")
        req["x-api-key"] = ENV["S2_API_KEY"] if ENV["S2_API_KEY"]
        req.body = { ids: ids }.to_json
        res = http.request(req)
        return JSON.parse(res.body) if res.is_a?(Net::HTTPSuccess)
        Jekyll.logger.warn "Semantic Scholar:", "HTTP #{res.code} (attempt #{attempt + 1})"
        sleep(2**(attempt + 1)) # unauthenticated requests share a rate limit; back off on 429
      end
      nil
    rescue StandardError => e
      Jekyll.logger.warn "Semantic Scholar:", "request failed: #{e.class} - #{e.message}"
      nil
    end
  end
end
