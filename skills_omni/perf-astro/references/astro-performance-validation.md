# Astro Performance Validation Guide

Use this file to document evidence for a PR, handoff, or review.

## Minimum evidence

Record all of the following:

1. affected pages or templates
2. baseline observation
3. changes made
4. after-change observation
5. known tradeoffs or open questions

## Compare like with like

Use the same:

- page type
- device profile
- network assumptions
- environment as much as practical

## Metrics to capture when available

- LCP
- CLS
- INP
- TTFB if SSR is involved
- total JS shipped
- image bytes for key pages
- count or size of third-party requests

## What to avoid

- comparing different templates and calling it improvement
- using a single score without context
- claiming success from package installation alone
- ignoring field data when it exists

## Suggested PR summary format

- **Target pages:** home page, landing page, docs article template
- **Primary issue:** slow LCP from hero image and excessive hydration
- **Changes:** moved hero to `astro:assets`, reduced client islands, self-hosted primary font
- **Result:** improved LCP and reduced shipped JS on tested pages
- **Tradeoffs:** analytics still deferred only after consent-safe point; SSR route not changed yet
