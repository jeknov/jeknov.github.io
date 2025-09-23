---
layout: page
title: WiAIR Podcast
permalink: /podcast/
description: Women in AI Research WiAIR podcast
nav: true
nav_order: 3
display_categories: [episodes]
horizontal: false
images:
  slider: true
---
<style>
.swiper-img-small {
  max-width: 400px;
  height: auto;
  margin: 0 auto;
  display: block;
}
</style>

International Women's Day has always been a very special day for me, the day when I reflect on the great impact that women had throughout my life and career. I am extremely lucky to have met many amazing women who were my mentors, advisors, colleagues, collaborators, friends and role models during various stages of my professional life, and I appreciate the very important role they have played in my life.

In 2025, the day of March 8th was even more special to me because that day, together with the team of brilliant people, I launched the new podcast [Women in AI Research WiAIR](https://women-in-ai-research.github.io/). With this podcast, I celebrate the remarkable contributions of female AI researchers from around the globe.

I’d love for you to be part of this journey - subscribe to the podcast, follow us on social media for updates about our amazing guests and their work, and come say hello in our LinkedIn and Discord communities!

- [Youtube](https://www.youtube.com/@WomeninAIResearch)
- [Spotify](creators.spotify.com/pod/show/wiair)
- [LinkedIn](https://www.linkedin.com/company/women-in-ai-research)
- [X/Twitter](https://x.com/WiAIR_podcast)
- [Bluesky](https://bsky.app/profile/wiair.bsky.social)

<!-- pages/podcast.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.podcast | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.podcast | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
