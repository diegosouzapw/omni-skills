---
name: "ai-seo"
description: "AI SEO workflow skill. Use this skill when the user needs a practical, Google-compliant plan for programmatic SEO, competitor alternative pages, extractable answer-first content, keyword prioritization, and scaled content operations without drifting into technical implementation."
version: "0.0.1"
category: "development"
tags:
  - "ai-seo"
  - "seo"
  - "programmatic-seo"
  - "content-strategy"
  - "keyword-research"
  - "competitor-pages"
  - "search-console"
  - "structured-data"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/ai-seo"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# AI SEO Skill

## Overview

Use this skill to design and operate an AI-assisted SEO workflow for:

- programmatic SEO page sets
- competitor alternative and comparison pages
- keyword strategy and prioritization
- answer-first content that is easier for search features and AI assistants to extract
- scaled editorial operations with quality controls

This skill is for strategy, page-pattern selection, content planning, quality review, and measurement. It is **not** for technical implementation, code review, analytics engineering, or software architecture.

The intent of the upstream skill is preserved, but this version is rewritten into an operator-ready workflow kit. It emphasizes people-first content, safe scaled publishing, explicit quality gates, Search Console-led measurement, and cautious guidance around AI Overviews and schema.

## When to Use This Skill

Use this skill when the user wants to:

- build programmatic SEO with AI-assisted content production
- create competitor alternative pages such as `[competitor] alternatives` or `[competitor] vs [your product]`
- prioritize BOFU, MOFU, and TOFU keyword opportunities
- improve extractability and citation fitness for search features and AI assistants
- scale page production while reducing duplication and low-value output
- diagnose why SEO pages are not indexing, not earning clicks, or not differentiating
- choose between optimizing existing pages versus creating net-new page sets

Typical triggers include mentions of:

- SEO
- programmatic SEO
- AI content
- competitor alternative pages
- AI Overviews
- search optimization
- DataForSEO
- content at scale
- keyword strategy
- organic traffic
- Search Console

## When Not to Use This Skill

Do **not** use this skill when the main need is:

- technical SEO implementation in code, CMS templates, or infrastructure
- code review, software architecture, or pipeline engineering
- legal review of comparative advertising, trademark, or logo usage
- analytics instrumentation implementation
- mass-producing low-value doorway-like pages with little unique value
- creating fake reviews, unsupported superiority claims, or unverifiable competitor comparisons
- adding schema that does not match visible page content

If the request shifts into engineering, legal, analytics, or automation buildout, hand off to a more appropriate skill after producing the strategy brief.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need to choose the right SEO motion | `references/seo-intake-decision-tree.md` | Prevents creating new pages when updating existing pages is the better move |
| Need policy boundaries for scaled AI publishing | `references/google-compliant-scaled-content-guardrails.md` | Keeps the workflow aligned to helpful-content and spam-policy boundaries |
| Planning a large page set launch | `references/programmatic-seo-launch-checklist.md` | Covers sitemap, canonicals, internal links, title patterns, robots, and crawl controls |
| Creating competitor or alternative pages | `references/competitor-page-evidence-checklist.md` | Forces evidence-backed claims, update dates, and review checkpoints |
| Choosing schema for a page type | `references/schema-selection-matrix.md` | Reduces misuse of FAQ, Product, Review, and related markup |
| Measuring performance and diagnosing SEO issues | `references/gsc-measurement-cadence.md` | Keeps Search Console as the primary operating source before adding third-party tools |
| Handoff to adjacent work | `agents/ai-seo-router.md` | Routes to implementation, legal, analytics, or content-ops automation when needed |

## Intake Questions / Preconditions

Before proposing a plan, gather these inputs:

1. What is the business goal: pipeline, signups, demo requests, self-serve conversions, or traffic growth?
2. What is the primary motion: optimize existing content, competitor pages, comparison pages, or a true programmatic cluster?
3. What properties already exist in Google Search Console for this site?
4. What pages already receive impressions for the target topic?
5. What proprietary data, product data, feature matrices, pricing tables, or local/entity data are available?
6. What CMS or publishing environment is in use?
7. Who owns factual review, editorial review, and final approval?
8. Are competitor mentions, logos, or comparative claims subject to legal or brand review?
9. What is the realistic publishing capacity per week?
10. Can the team maintain freshness for pricing, feature comparisons, and product changes?

Minimum preconditions for scaled page generation:

- a clear page pattern with unique value per page
- a data source that can produce differentiated content
- an owner for factual review
- a way to measure with Google Search Console after publishing
- agreement to test on a small cohort before scaling

## Workflow

1. **Clarify the objective**  
   Determine whether the user wants net-new traffic, higher-converting BOFU pages, better performance from existing pages, or broader search visibility.

2. **Inspect existing evidence first**  
   Review current Search Console pages and queries before proposing net-new content. If the site already has relevant impressions, improving existing pages may beat publishing a new cluster.

3. **Choose the motion**  
   Use `references/seo-intake-decision-tree.md` to select one of four paths:
   - optimize an existing page
   - create competitor alternative pages
   - create comparison pages
   - launch a programmatic cluster

4. **Apply compliance and quality gates**  
   Use `references/google-compliant-scaled-content-guardrails.md` to confirm the content is people-first, original enough, and not just a templated rank-manipulation play.

5. **Define the page pattern and data model**  
   Specify:
   - target keyword pattern
   - search intent
   - page template structure
   - required unique fields per page
   - proof sources for claims
   - schema candidates, if any

6. **Prioritize keywords by business value**  
   Start with BOFU and high-intent comparison terms when the domain can compete. Use MOFU and programmatic patterns only when you can provide real differentiation.

7. **Create the editorial brief**  
   Build a page brief with:
   - primary keyword
   - secondary entities/questions
   - intent
   - unique angle
   - required sections
   - facts requiring citation or verification
   - internal linking targets
   - schema decision

8. **Draft answer-first, extractable content**  
   Write sections that are self-contained, direct, and scannable. Favor concise answers, tables, entity-rich headings, and explicit evidence over vague promotional prose.

9. **Run the pre-publish quality review**  
   Check for:
   - unique value per page
   - visible evidence and sourcing
   - claim accuracy
   - title uniqueness
   - internal link inclusion
   - canonical and sitemap readiness
   - schema matching visible content

10. **Launch a small cohort first**  
    Publish a limited set, then inspect indexing, impressions, and click behavior before rolling out the full cluster.

11. **Measure and iterate**  
    Use Search Console as the primary operating source. Only add paid rank or visibility tooling after GSC indicates what needs deeper analysis.

12. **Escalate or hand off when needed**  
    If the work becomes technical SEO implementation, legal review, analytics engineering, or bulk automation design, hand off deliberately using `agents/ai-seo-router.md`.

## Workflow Branches

### Branch A: Optimize an Existing Page

Choose this when:

- the site already gets impressions for a relevant query set
- CTR is weak relative to impressions
- the page exists but does not answer the search intent clearly
- a refresh is faster than launching a new page type

Priority fixes:

- tighten title and description patterns
- move the direct answer higher on the page
- improve section clarity and extractability
- add missing entities, examples, comparisons, or tables
- strengthen internal links from relevant pages

### Branch B: Competitor Alternative Pages

Choose this when:

- buyers actively compare you to named competitors
- you can support claims with current evidence
- the page can help users choose, not just attack a competitor
- legal or brand review can be obtained if needed

Use `references/competitor-page-evidence-checklist.md` before drafting.

### Branch C: Comparison Pages

Choose this when:

- the search intent is direct evaluation between options
- you can create balanced feature/pricing/use-case comparisons
- you can maintain freshness over time

These pages require strong evidence discipline. Distinguish clearly between facts, opinion, and recommendations.

### Branch D: Programmatic SEO Cluster

Choose this when:

- there is a repeatable page pattern with meaningful variation
- each page can contain unique data or logic
- the site can support crawl discovery and internal linking
- a pilot cohort can be tested before scale

Use `references/programmatic-seo-launch-checklist.md` before launch.

## Examples

### Example 1: Build an SEO strategy brief

```text
Use @ai-seo to decide whether we should update existing pages or create new comparison pages for our CRM product. Start with Search Console evidence, then produce a prioritized page plan with quality gates and measurement steps.
```

**Expected output:** A decision-oriented brief with page-pattern selection, keyword priorities, content requirements, risks, and next actions.

### Example 2: Draft a competitor alternative page brief

```text
Use @ai-seo to create a brief for a "Mailchimp alternatives" page. Include evidence requirements, comparison structure, FAQ candidates, legal-review flags, and post-publish measurement.
```

**Expected output:** A structured brief similar to `examples/alternative-page-brief-template.md`.

### Example 3: Score a pilot page set before scale

```text
Use @ai-seo to review 5 draft programmatic pages for uniqueness, helpfulness, internal links, indexability, and schema fit before we publish the other 200 pages.
```

**Expected output:** A scorecard and go/no-go recommendation similar to `examples/programmatic-page-quality-scorecard.md`.

### Example 4: Diagnose poor indexing and low clicks

```text
Use @ai-seo to diagnose why our newly published comparison pages are in Search Console with impressions but very low clicks, and why half of our city pages are discovered but not indexed.
```

**Expected output:** A symptom-led debug plan similar to `examples/gsc-debug-runbook.md`.

## Best Practices

### Do

- start with Search Console evidence before proposing net-new content
- prefer people-first, task-completing pages over search-first filler
- require unique value for every page pattern before scaling
- test a small cohort before publishing hundreds of pages
- use direct answers high on the page for extractability
- include specific entities, concrete comparisons, and source-backed claims
- keep competitor content balanced, dated, and evidence-backed
- use structured data only when it matches visible page content
- control duplicate URLs with canonicals and URL discipline
- build internal linking intentionally so new pages are discoverable and not orphaned

### Don't

- claim guaranteed visibility in AI Overviews or AI assistants
- treat schema markup as a ranking shortcut
- mass-produce near-duplicate pages by swapping city, tool, or entity names only
- publish unsupported pricing, migration, or superiority claims
- rely on AI-generated text without factual review and template-level QA
- let faceted or parameterized URLs explode into indexable low-value pages
- assume IndexNow is a Google indexing shortcut

## Measurement and Iteration

Use `references/gsc-measurement-cadence.md` as the operating cadence.

Primary KPI groups:

- **Discoverability:** indexed pages, sitemap coverage, impressions
- **Engagement:** CTR, query-to-page fit, title effectiveness
- **Coverage quality:** internal links, duplicate/canonical issues, discovered or crawled-not-indexed states
- **Business outcomes:** conversions from BOFU pages, assisted conversions, demo requests, signups

Suggested operating rhythm:

- **Weekly:** inspect impressions, CTR shifts, indexing states, and internal link coverage for priority pages
- **Monthly:** compare published cohorts, prune weak templates, merge duplicates, refresh stale comparison data, and expand only proven patterns
- **After template changes:** re-check schema visibility, title patterns, canonical behavior, and a sample of pages in Search Console

## Troubleshooting

### Problem: Programmatic pages are discovered or crawled but not indexed

**Symptoms:** Many new URLs appear in the Page indexing report as discovered or crawled but not indexed. Traffic does not materialize despite sitemap submission.

**Solution:**
1. Check whether the pages are too similar to each other.
2. Confirm each page has unique value beyond token swaps.
3. Verify canonical tags are self-referential and not pointing elsewhere by mistake.
4. Confirm the pages are included in sitemaps and linked internally.
5. Reduce low-value URL variants from filters or parameters.
6. Publish a smaller cohort and improve weak templates before scaling again.

### Problem: Pages get impressions but very few clicks

**Symptoms:** Search Console shows growing impressions, but CTR is poor and clicks remain flat.

**Solution:**
1. Compare the title pattern to actual search intent.
2. Tighten the opening section so the page clearly matches the query.
3. Make the title more specific and less boilerplate.
4. Add a stronger differentiation hook such as pricing clarity, migration steps, or use-case fit.
5. Check whether the page ranks for adjacent but mismatched intent.

### Problem: Competitor pages feel risky or untrustworthy

**Symptoms:** Drafts include vague superiority claims, stale pricing, copied review sentiment, or unsupported migration promises.

**Solution:**
1. Rebuild the page with source-backed facts only.
2. Date every pricing or feature check.
3. Separate editorial opinion from factual claims.
4. Add legal or brand review if using stronger comparative language.
5. Remove anything that cannot be verified.

### Problem: Rich results or FAQ visibility disappeared after a template change

**Symptoms:** Structured data still validates syntactically, but rich-result appearance drops or becomes inconsistent.

**Solution:**
1. Confirm the marked-up content is still visible on the page.
2. Re-check the page type against `references/schema-selection-matrix.md`.
3. Remove markup that no longer matches the visible page content.
4. Treat valid schema as eligibility guidance, not a guarantee of display.

### Problem: A large publishing push caused overall performance decline

**Symptoms:** After many pages were launched, impressions or clicks flatten, weaker clusters accumulate, or site quality appears diluted.

**Solution:**
1. Pause rollout.
2. Sample pages for thinness, duplication, and weak differentiation.
3. Merge or prune low-value clusters.
4. Improve internal linking to strong pages.
5. Resume only after a pilot cohort shows healthy indexing and engagement.

## Additional Resources

### Local references

- [SEO intake decision tree](references/seo-intake-decision-tree.md)
- [Google-compliant scaled content guardrails](references/google-compliant-scaled-content-guardrails.md)
- [Programmatic SEO launch checklist](references/programmatic-seo-launch-checklist.md)
- [Competitor page evidence checklist](references/competitor-page-evidence-checklist.md)
- [GSC measurement cadence](references/gsc-measurement-cadence.md)
- [Schema selection matrix](references/schema-selection-matrix.md)

### Local examples

- [Alternative page brief template](examples/alternative-page-brief-template.md)
- [Programmatic page quality scorecard](examples/programmatic-page-quality-scorecard.md)
- [GSC debug runbook](examples/gsc-debug-runbook.md)

### Primary external references

- Google Search Central: Helpful, reliable, people-first content
- Google Search Central: Spam policies and Search Essentials
- Google Search Console Help: Performance report and Page indexing report
- Google Search Central: Sitemaps, canonicals, title links, snippets, structured data policies, faceted navigation guidance

## Related Skills

- `@analytics` - use when the work becomes analytics instrumentation or reporting implementation
- `@content-strategy` - use when the work shifts toward editorial planning outside SEO operations
- `@growth` - use when SEO becomes one channel in a wider acquisition strategy
- `@legal-review` - use when competitor claims, logos, or comparative statements require review
- `@technical-seo` - use when the task becomes implementation of templates, canonicals, robots, schema, or crawl controls
