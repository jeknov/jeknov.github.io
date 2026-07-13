---
layout: page
permalink: /research/
title: Research Vision
description: 
nav: true
nav_order: 1
---

## Evaluation That Earns Trust
 
After everything foundation models can now do for us, here's what we still can't do: tell in advance, with any real justification, when to trust them. 
This problem is more worrisome than it first appears. Imagine you reword a question and the model's answer flips, while it sounds every bit as sure of itself both times. 
Now imagine that what the model generates decides your loan approval, or your health diagnosis. And the worst part: the model never tells you the answer was a coin flip. 
A system that's unstable and can't report its own instability is, to my mind, the core unsolved problem in deploying these models, 
and it's what my research is about.

Here is my claim: we've over-invested in calibration and under-invested in consistency. A model that is consistently wrong is easier to govern 
than one that is unpredictably right. If it fails the same way every time, you can find the failure, describe it, and design around it. 
Unpredictability is what actually wrecks audits and oversight. Evaluation should be rebuilt around that priority. 
Three commitments guide mine:
 
- **From scores to predictions of deployment behavior.** A benchmark number tells you about the past. What a team shipping a model actually needs is a forecast: how will this thing behave once it meets paraphrase, distribution shift, a conversation that runs twenty turns instead of one? That is what I try to measure.
- **Reliability for everyone, not only English speakers.** Benchmarks built by translating English erase the regional and cultural knowledge real users bring. With INCLUDE (ICLR 2025 Spotlight), we built evaluation grounded in 44 languages and local contexts, because otherwise we certify a reliability that only some people actually receive.
- **Open and shared.** Trust cannot rest on evaluations no one can inspect. I aim to have my benchmarks, datasets, and tools open, so the community can scrutinize, reproduce, and build on top.

These commitments converge on a single deliverable: evaluation infrastructure that a deploying institution — a hospital, a bank, a regulator — 
could run in their own language, on their own cases, and audit end to end. I pursue this in the domains where the cost of being wrong 
is highest, first in healthcare and now in finance. In these domains, regulators do not ask about averages, they ask about the worst case, 
the specific customer, the reproducibility of a specific decision. Academic benchmarks were never designed to answer these questions, and 
that generate new evaluation problems.
 
The next five years of my work aim at three of them: reliability evaluation for multi-turn agentic systems, where single-shot benchmarks simply cannot see the problem; 
a dynamic reliability leaderboard; and consistency metrics mature enough to serve as deployment gates in regulated industries. 
The field has built instruments for catching models when they can't be trusted; too few for knowing in advance when they can. 
Within five years, no consequential model decision should ship without a reliability profile attached — and I intend to build the 
instruments that make that possible.

## People & Mentoring

These questions are pursued with and through people. I've had the privilege of
supervising the following early-career researchers as they developed their own
work on evaluation, reliability, and multilingual NLP:

- **[Zining Zhu](https://www.stevens.edu/profile/zzhu41)**: research intern at Winterlight Labs (later - PhD student at University of Toronto, now - Asst. Prof. at Stevens Institute of Technology)
- **[Aparna Balagopalan](https://www.linkedin.com/in/aparna-b/)** — research engineer at Winterlight Labs (later - PhD student at MIT, now - AI Research Scientist at Writer)
- **[Benjamin Eyre](https://scholar.google.com/citations?hl=en&user=Ww1QOOkAAAAJ)** — research intern at Winterlight Labs (now - PhD student at Columbia University)
- **[Brian Diep](https://www.linkedin.com/in/brian-diep/)** — intern research engineer at Winterlight Labs (now - ML Engineer at Flagler Health)
- **[Mashrura Tasnim](https://apps.ualberta.ca/directory/person/mashrura)** - intern research engineer at Winterlight Labs (now - Assoc. Lecturer at University of Alberta)
- **[Marija Stanojevic](https://marija-stanojevic.github.io/)** — applied ML scientist at Cambridge Cognition (now - Lead Applied ML Scientist at Ellipsis Health)
- **[Freyam Mehta](https://www.linkedin.com/in/freyam-mehta/)** - AI/ML security researcher at AVID (now - Founding Engineer at Overmind)
- **[Prince Mireku](https://pmireku.github.io/princemireku/)** - supervised on [AfriCaption](https://aclanthology.org/2026.africanlp-main.5/) paper / accpeted at AfricaNLP @ ACL (now - Student Researcher at Google)
- **[Mardiyyah Oduwole](https://mardiyyahoduwole.com/)** - supervised on [AfriCaption](https://aclanthology.org/2026.africanlp-main.5/) paper / accpeted at AfricaNLP @ ACL (now - ML Engineer at Peppa)

