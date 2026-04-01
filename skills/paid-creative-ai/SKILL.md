---
name: paid-creative-ai
description: "Paid Creative AI workflow skill. Use this skill when the user needs When the user wants to create AI-generated ad creative, test performance creative, manage creative fatigue, or optimize paid media with AI tools. Also use when the user mentions 'ad creative,' 'performance creative,' 'creative testing,' 'creative fatigue,' 'Meta ads,' 'Google ads,' 'TikTok ads,' 'AI ads,' 'ad budget,' 'ROAS,' 'Advantage+,' or 'Performance Max.' This skill covers AI-powered paid creative from generation through performance optimization. Do NOT use for technical implementation, code review, or software architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["paid-creative-ai", "the", "user", "wants", "create", "ai-generated", "creative", "test"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Paid Creative AI

## Overview

This public intake copy packages `packages/skills-catalog/skills/(gtm)/paid-creative-ai` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Paid Creative AI You are a performance creative strategist who builds AI-powered ad creative systems across Meta, Google, TikTok, YouTube, and LinkedIn. You combine platform-native AI tools (Advantage+, Performance Max, Smart+) with generative AI production (Runway, Midjourney, Pika) to create, test, and scale ad creative that drives measurable ROAS.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, Section 1: Platform AI Creative Systems, Section 2: AI Creative Generation Tools, Section 3: Budget Allocation Framework, Section 4: Modular Creative Testing Framework, Section 5: Creative Fatigue Management.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: When the user wants to create AI-generated ad creative, test performance creative, manage creative fatigue, or optimize paid media with AI tools. Also use when the user mentions 'ad creative,' 'performance creative,'....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Before Starting

Ask the user:
1. What product or service are you advertising?
2. Which platforms are you running ads on (Meta, Google, TikTok, YouTube, LinkedIn)?
3. What is your monthly ad spend budget?
4. What is your primary KPI (ROAS, CPA, CPL, brand awareness)?
5. Do you have existing creative assets or are you starting from scratch?
6. Are you open to AI-generated creative (images, video, copy) or do you need human-only production?
7. What does your current creative testing process look like?

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @paid-creative-ai to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/paid-creative-ai/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/paid-creative-ai/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @paid-creative-ai using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

- **User says:** "Scale our paid creative with AI" → **Result:** Agent asks spend and platform; uses spend tree (&lt;$1K → one platform, 3–5 creatives, kill at 48h; $5–15K → hybrid, 15–25 creatives, testing matrix); recommends Advantage+/PMax/Smart+ and weekly kill/scale; suggests creative hit rate target (&gt;15%).
- **User says:** "Our ROAS is dropping" → **Result:** Agent checks creative fatigue and testing cadence; recommends 3–5 new concepts from winners, refresh cycle, and budget allocation (winners vs tests); ties to break-even ROAS (1/margin) and gtm-metrics.
- **User says:** "Which platform for AI creative?" → **Result:** Agent recommends one platform at &lt;$1K (Meta or TikTok), two at $1–5K; outlines creative checklist (hook, CTA, &lt;20% text for Meta, ad review); suggests ai-ugc-ads for UGC layer.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Timeframe - Kill If - Minimum Data Required
- 24 hours - Hook rate < 15% - 5K+ impressions
- 48 hours - CTR < 0.5% - 2K+ impressions
- 3 days - CPA > 2x target - $50+ spend or 1K+ clicks
- 3 days - ROAS < 0.5x target - $100+ spend
- 5 days - No conversions - 3x target CPA in spend
- 7 days - CPA trending up 3 consecutive days - Statistically significant data

### Imported Operating Notes

#### Imported: Section 6: Kill Criteria and Scaling Rules

### Kill Criteria

| Timeframe | Kill If | Minimum Data Required |
|-----------|---------|----------------------|
| 24 hours | Hook rate < 15% | 5K+ impressions |
| 48 hours | CTR < 0.5% | 2K+ impressions |
| 3 days | CPA > 2x target | $50+ spend or 1K+ clicks |
| 3 days | ROAS < 0.5x target | $100+ spend |
| 5 days | No conversions | 3x target CPA in spend |
| 7 days | CPA trending up 3 consecutive days | Statistically significant data |
| 14 days | CPA 1.5x above target with no improvement | Full test cycle complete |

**Never kill before minimum data.** Bad decisions from small samples cost more than extra test spend.

### Scaling Rules

| Condition | Action | Frequency |
|-----------|--------|-----------|
| CPA < target for 48 hours | Increase budget 20% | Every 2-3 days |
| CPA < 50% of target for 72 hours | Increase budget 30-50% | Every 2 days |
| Winner holds after 3 budget increases | Duplicate ad set to new audience | Once per winner |
| Creative at 100K impressions | Commission 3 variations | Immediately |
| Creative at 500K impressions | Test new hooks on same structure | Immediately |
| CPA rises after budget increase | Revert to previous budget, wait 48 hours | As needed |
| CPA holds but volume plateaus | Test broader audiences or new placements | Weekly |

**Budget increase limits:** Max 30% per day on Meta (algorithm needs recalibration time). Google PMax and TikTok Smart+ tolerate up to 50% increases.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(gtm)/paid-creative-ai`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Creative fatigue** → **Cause:** Same creative too long or broad. **Fix:** Monitor hook/hold rate weekly; refresh every 2–4 weeks; test 3–5 new concepts from winning patterns; use dynamic creative where possible.
- **Ad review rejection** → **Cause:** Policy (health before/after, exaggerated claims) or creative mismatch. **Fix:** No before/after for health; match landing page to creative; human review before launch; disclose AI where required.
- **Low hook rate** → **Cause:** First 3s don't stop scroll. **Fix:** Test hooks in isolation; use trending sounds/formats; single message per creative; benchmark &gt;30% hook rate.

---


For checklists, benchmarks, and discovery questions read `references/quick-reference.md` when you need detailed reference.

---

## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Section 1: Platform AI Creative Systems

### Platform AI Tool Comparison

| Platform | AI System | What It Does | Best For |
|----------|-----------|-------------|----------|
| Meta | Advantage+ Creative | Auto-generates background variants, text overlays, aspect ratios from one asset | Scaling static + video across placements |
| Meta | GEM (Generative Ads Model) | Personalizes ad delivery per user, auto-enhances Reels creative | Reels-first campaigns, conversion lift |
| Google | Performance Max (Gemini) | Generates headlines, descriptions, images from landing page + existing assets | Full-funnel cross-channel (Search, Display, YouTube, Shopping) |
| TikTok | Smart+ | Module-level automation (targeting, budget, creative, placement) | TikTok-native performance campaigns |
| TikTok | Symphony Creative | Gen AI video creation, auto-enhancements, translation, dubbing | Multi-language, high-volume TikTok creative |

### Meta Advantage+ Creative

Advantage+ takes a single product image and generates multiple variants with different backgrounds, colors, and layouts optimized for every placement (Feed, Stories, Reels, Audience Network).

**Setup best practices:**
- Upload diverse creative inputs: videos (6-15 seconds), carousel images, and single images
- Creative diversity matters more than creative volume - repurpose winning messaging across new formats
- Let Advantage+ auto-enhance for at least 7 days before judging results
- Enable GEM for Reels placements (reported 5% conversion lift in Meta testing)
- Test one Advantage+ campaign against your manual setup before full migration
- Feed quality data: ensure Pixel or Conversions API tracks every key event

**What Advantage+ automates:**
- Background generation and replacement
- Text overlay placement and sizing
- Aspect ratio adaptation (1:1, 4:5, 9:16)
- Music and audio enhancements for Reels
- Brightness, contrast, and filter adjustments

**What you still control:**
- Core creative concept and messaging
- Brand guidelines and color palette
- CTA selection
- Audience exclusions and budget caps
- Which placements to include

### Google Performance Max

Performance Max uses Gemini to generate headlines, descriptions, images, and video assets from your landing page and existing creative. Campaigns run across Search, Display, YouTube, Discover, Gmail, and Maps simultaneously.

**Asset group requirements (maximize all):**
- Up to 15 headlines (30 char each)
- Up to 5 long headlines (90 char each)
- Up to 5 descriptions (90 char each)
- Up to 20 images (landscape, square, portrait)
- Up to 5 videos (landscape, square, portrait) - upload your own, auto-generated videos underperform by 25-40%
- Up to 5 logos
- Business name and final URL

**PMax optimization rules:**
- Create separate asset groups by theme, product category, or audience segment
- Wait 2-3 weeks before replacing low-performing assets
- Add campaign-level negative keywords to control irrelevant traffic
- Manually created videos outperform auto-generated content significantly
- Use audience signals (custom segments, your data) to guide the AI without restricting it

### TikTok Smart+ and Symphony

Smart+ unifies manual and automated experiences into a single flow with module-by-module control over targeting, budget, creative, and placement.

**Smart+ creative features:**
- Auto-select: scans existing ads and creator content, recommends best performers
- Each ad functions as an asset group with its own URL, product set, and up to 50 creative assets
- Module-level automation: choose full auto, partial auto, or fully manual per component

**Symphony creative tools:**
- Recommended Creatives: AI predicts best-performing creatives for your campaign goal
- Automatic Enhancements: resizes video, refreshes music, translates/dubs, improves quality
- Symphony Gen AI: generates net-new video concepts from product information
- Integrates with TikTok One creator marketplace for authentic content

#### Imported: Section 2: AI Creative Generation Tools

### Generative AI for Ad Creative

| Tool | Type | Best For | Price Range | Key Strength |
|------|------|----------|-------------|-------------|
| Midjourney | Image | Hero images, product shots, lifestyle scenes | $10-$120/mo | Photorealistic quality, text rendering (v6.1+) |
| DALL-E 3 | Image | Rapid ideation, text-heavy creatives | Via ChatGPT Plus $20/mo | Strong text rendering, fast iteration |
| Adobe Firefly | Image | Brand-safe commercial use, editing workflows | $10/mo (unlimited) | Commercially licensed, Photoshop integration |
| Runway Gen-4 | Video | Product demos, B-roll, character-consistent ads | $12-$76/mo | Character consistency across shots |
| Pika | Video | Quick social video, animated product shots | $8-$58/mo | Cost-efficient, lively output |
| Sora | Video | High-quality brand video, cinematic ads | Via ChatGPT Plus | Cinematic quality, longer clips |
| Creatify | Full pipeline | URL-to-video ads, AI avatars, batch creation | $33-$69/mo | 1,000+ avatars, 29 languages, batch rendering |
| Arcads | UGC-style | Conversion-focused talking-head ads | $110-$220/mo | Most authentic AI UGC, natural gestures |

### AI Creative Production Workflow

**Step 1 - Concept generation (Day 1):**
Write 5-10 ad concepts following the hook/body/CTA framework. Use ChatGPT or Claude to brainstorm variations on winning angles. Each concept = 1 hook + 1 narrative + 1 CTA.

**Step 2 - Asset creation (Days 1-2):**
- Static images: Generate 3-5 hero images per concept in Midjourney or DALL-E
- Video B-roll: Create 5-10 second product shots or lifestyle clips in Runway
- Talking head: Render avatar versions of top scripts in Creatify or Arcads
- Batch render: 10 scripts x 3-5 avatars = 30-50 raw variations

**Step 3 - Assembly (Day 2-3):**
- Combine assets in CapCut or Premiere: hook clip + body + CTA card
- Add captions (required for TikTok, recommended everywhere)
- Add trending sounds for TikTok, licensed music for Meta/YouTube
- Export in platform specs: 9:16 vertical, 1:1 square, 16:9 landscape

**Step 4 - Quality filter (Day 3):**
- Reject 20-30% of AI renders that look uncanny or off-brand
- Check text legibility at mobile size
- Verify CTA is clear and prominent
- Confirm brand colors and logo placement

**Step 5 - Deploy and test (Day 4+):**
- Upload to platform AI systems (Advantage+, PMax, Smart+)
- Run through modular testing framework (Section 4)
- Let platform AI optimize delivery for 48-72 hours before judging

### AI vs Traditional Production Decision

| Factor | Use AI Creative | Use Traditional Production |
|--------|----------------|--------------------------|
| Budget | Under $5K/month creative spend | Over $10K/month creative spend |
| Volume needed | 20+ variations per week | 5-10 polished pieces per month |
| Speed | Need assets in 24-48 hours | Can plan 2-4 week production cycles |
| Product type | Digital, SaaS, info products | Physical products needing real demos |
| Brand stage | Testing/iterating on positioning | Established brand with strict guidelines |
| Languages | Multi-market, 5+ languages | Single market, 1-2 languages |

**Hybrid approach (recommended for $5K-$50K/month):** AI for 70% of volume (variations, hooks, B-roll, retargeting). Human production for 30% (hero ads, testimonials, demos). Use AI to test concepts cheaply, then brief human production on proven winners.

#### Imported: Section 3: Budget Allocation Framework

### The 70/20/10 Rule for Creative Spend

**70% - Proven winners (scale):** Allocate to creatives with CPA below target for 5+ days. Increase budget 20-30% every 2-3 days while performance holds. These are your revenue drivers.

**20% - Validated iterations (optimize):** New variations of winning concepts. Swap hooks on proven bodies. Test new audiences with winning creative. Same messaging, different formats (static to video, video to carousel).

**10% - New concepts (test):** Completely new angles, formats, and audiences. This is where breakthrough creative comes from. Expect 70-80% of tests to fail. Budget $20-50/day per new concept for 3-5 days minimum.

### Budget Allocation by Monthly Spend

| Monthly Spend | Winners (70%) | Iterations (20%) | New Tests (10%) | Active Creatives |
|--------------|---------------|-------------------|-----------------|------------------|
| $1K-$3K | $700-$2,100 | $200-$600 | $100-$300 | 5-10 |
| $3K-$10K | $2,100-$7,000 | $600-$2,000 | $300-$1,000 | 10-20 |
| $10K-$30K | $7,000-$21,000 | $2,000-$6,000 | $1,000-$3,000 | 20-40 |
| $30K-$100K | $21,000-$70,000 | $6,000-$20,000 | $3,000-$10,000 | 40-80 |
| $100K+ | $70,000+ | $20,000+ | $10,000+ | 80+ |

### Cross-Platform Budget Split Decision

| Scenario | Meta | Google | TikTok | YouTube | LinkedIn |
|----------|------|--------|--------|---------|----------|
| B2C e-commerce (<$50 AOV) | 40% | 30% | 25% | 5% | 0% |
| B2C e-commerce ($50+ AOV) | 45% | 35% | 15% | 5% | 0% |
| DTC brand launch | 30% | 15% | 40% | 10% | 5% |
| B2B SaaS (SMB) | 35% | 40% | 10% | 10% | 5% |
| B2B SaaS (Enterprise) | 15% | 30% | 5% | 10% | 40% |
| Local service business | 30% | 50% | 10% | 10% | 0% |
| Info products / courses | 35% | 15% | 35% | 15% | 0% |

### Creative Testing Budget (Separate from Media)

Allocate 20-30% of total ad spend to creative testing (concept development, AI tools, production).

| Monthly Ad Spend | Creative Test Budget | AI Tool Budget | Production Budget |
|-----------------|---------------------|----------------|-------------------|
| $1K-$5K | $200-$1,500 | $50-$100 | $150-$1,400 |
| $5K-$15K | $1,000-$4,500 | $100-$300 | $900-$4,200 |
| $15K-$50K | $3,000-$15,000 | $300-$500 | $2,700-$14,500 |
| $50K+ | $10,000+ | $500-$1,000 | $9,500+ |

#### Imported: Section 4: Modular Creative Testing Framework

### The Hook/Body/CTA Matrix

Build modular creative by mixing and matching components:

3-5 hooks x 2-3 body narratives x 2-3 CTAs = 12-45 unique combinations

Each component is tested independently to isolate what drives performance.

### Phase 1 - Concept Testing (Days 1-5)

**Goal:** Find which concepts resonate before optimizing elements.
**Budget:** $20-50/day per concept, test 3-5 concepts simultaneously.
**Metrics:** Hook rate (>25%), CTR (>1%), initial CPA direction.
**Decision:** Advance top 2 concepts to Phase 2. Kill concepts with hook rate <15%.

### Phase 2 - Element Isolation (Days 6-12)

**Goal:** Identify winning hooks, bodies, and CTAs independently.
**Process:**
- Test 3-5 hooks with same body/CTA. Pick winner by hook rate.
- Test 2-3 bodies with winning hook. Pick winner by hold rate and CTR.
- Test 2-3 CTAs with winning hook + body. Pick winner by CPA.
**Budget:** $30-50/day per variation.
**Decision:** Combine winning elements into 2-3 final creatives.

### Phase 3 - Winner Scaling (Day 13+)

**Goal:** Scale proven creative while maintaining CPA.
**Process:**
- Increase budget 20-30% every 2-3 days on winners
- Duplicate to new audiences once creative holds at 100K impressions
- Commission 3 format variations of each winner (static, video, carousel)
- Begin audience expansion: lookalikes, interest stacks, broad
**Ceiling signal:** When budget increases no longer maintain CPA, you have hit the creative's ceiling. Time for new variations.

### Testing Timeline Template

| Week | Focus | Budget/Day | Key Metric |
|------|-------|-----------|------------|
| 1 | Launch 3-5 concepts | $100-$250 | Hook rate, CTR |
| 2 | Isolate winning elements | $150-$300 | Hold rate, CPA |
| 3 | Scale 2-3 winners | $200-$500 | CPA, ROAS |
| 4 | Iterate on winners + new concepts | $300-$700 | CPA trend, creative hit rate |

### Platform-Specific Testing Features

**Meta Dynamic Creative:** Upload 5 images, 5 headlines, 5 descriptions, 5 CTAs. Meta tests all combinations and optimizes delivery. Review after 50K impressions per element. Best for $10K+/month accounts.

**TikTok Smart Creative:** Load up to 50 assets per ad. Smart+ auto-selects top performers and recommends new creative from your library. Pair with Symphony for auto-enhancement.

**Google PMax Asset Groups:** Create themed groups with full asset sets. Google serves the best combination per user and placement. Create 3-5 asset groups per campaign to test themes.

#### Imported: Section 5: Creative Fatigue Management

### Early Warning Signals

| Signal | Threshold | Action |
|--------|-----------|--------|
| CTR declining | 20%+ drop from peak over 3 days | Queue replacement creative |
| CPM rising | 15%+ increase with same targeting | Expand audience or refresh creative |
| Frequency climbing | Above 2.5 for prospecting | Introduce new creative variations |
| Frequency critical | Above 3.0 for retargeting | Immediate creative swap required |
| Hook rate dropping | Below 20% after previously >25% | New hooks needed |
| Comment sentiment | Shift from positive to "I keep seeing this" | Creative is burnt, retire it |
| CPA creep | 15%+ above target for 3+ days | Test new angles, not just variations |

### Creative Lifespan by Platform

| Platform | Format | Typical Lifespan | Refresh Cadence |
|----------|--------|-----------------|-----------------|
| TikTok | In-feed video | 1-3 weeks | Weekly new creative |
| TikTok | Spark Ads | 2-4 weeks | Bi-weekly refresh |
| Meta | Reels | 2-3 weeks | Weekly new creative |
| Meta | Feed static | 1-2 weeks | 2x weekly refresh |
| Meta | Carousel | 3-4 weeks | Bi-weekly refresh |
| Google PMax | Mixed assets | 3-6 weeks | Monthly asset refresh |
| YouTube | In-stream | 4-8 weeks | Monthly refresh |
| LinkedIn | Sponsored content | 3-5 weeks | Bi-weekly refresh |

### Creative Refresh Pipeline

Maintain a rolling pipeline to prevent gaps when creative fatigues:

**Always have in production:** 3-5 concepts in development, 3-5 assets in production, 3-5 in testing queue, 5-10 running live.

**Weekly cadence:** Mon - review and kill/scale. Tue - brief new creative. Wed - AI generate assets. Thu - refine and assemble. Fri - launch to test campaigns.

### Anti-Fatigue Tactics

- **Format rotation:** Cycle between video, static, carousel. When one format fatigues, another stays fresh.
- **Audience rotation:** Move fatigued creative to new audiences before retiring. Burnt on prospecting may still work on retargeting.
- **Seasonal refresh:** Plan refreshes around seasonal moments and product updates. Proactive beats reactive.
- **Iteration first:** Test new hooks on winning body before reinventing the full concept.

#### Imported: Section 7: Platform Cost Benchmarks (2025-2026)

### CPM by Platform

| Platform | Low CPM | Avg CPM | High CPM | Primary Factor |
|----------|---------|---------|----------|---------------|
| TikTok | $3 | $4-$7 | $15 | Audience targeting specificity |
| YouTube | $3 | $6-$8 | $12 | Ad format (bumper vs in-stream) |
| Meta (Reels) | $4 | $7-$10 | $18 | Q4 competition, audience size |
| Meta (Feed) | $5 | $8-$12 | $20 | Industry competition |
| Google Display | $1 | $3-$5 | $10 | Placement quality |
| Google Search | N/A | $10-$30 | $50+ | Keyword competition |
| LinkedIn | $20 | $33-$65 | $100+ | Job title targeting specificity |

### CPC by Platform

| Platform | Avg CPC | Range |
|----------|---------|-------|
| TikTok | $0.50-$1.00 | $0.20-$2.00 |
| YouTube | $2.00-$4.00 | $0.50-$6.00 |
| Meta | $0.50-$1.50 | $0.30-$3.00 |
| Google Search | $2.00-$5.00 | $0.50-$50+ |
| Google Display | $0.50-$1.00 | $0.20-$3.00 |
| LinkedIn | $5.00-$12.00 | $3.00-$20.00 |

### ROAS Benchmarks by Channel

| Channel | Median ROAS | Strong ROAS | Top Performer |
|---------|-------------|-------------|---------------|
| Google Search | 4.0-8.0x | 8.0-12.0x | 15x+ |
| Google Shopping | 3.0-6.0x | 6.0-10.0x | 12x+ |
| Meta (overall) | 2.5-4.0x | 4.0-6.0x | 8x+ |
| TikTok | 1.5-3.0x | 3.0-5.0x | 6x+ |
| YouTube | 2.0-4.0x | 4.0-7.0x | 10x+ |
| LinkedIn | 1.0-2.0x | 2.0-3.5x | 5x+ |
| Overall median | 2.19x | 2.87x+ | Industry-dependent |

### Industry CPA Benchmarks

| Industry | Meta CPA | Google CPA | TikTok CPA |
|----------|----------|-----------|------------|
| E-commerce (<$50 AOV) | $12-$25 | $15-$30 | $8-$20 |
| E-commerce ($50+ AOV) | $25-$60 | $30-$75 | $15-$40 |
| SaaS (SMB) | $50-$150 | $40-$120 | $30-$80 |
| SaaS (Enterprise) | $150-$500 | $100-$400 | N/A |
| Lead gen (B2B) | $30-$100 | $25-$80 | $20-$60 |
| Education / courses | $20-$60 | $15-$50 | $10-$35 |
| Health / wellness | $15-$40 | $20-$50 | $10-$30 |
| Finance / fintech | $40-$150 | $30-$100 | $25-$80 |

#### Imported: Section 8: Cross-Platform Creative Strategy

### Creative Adaptation Matrix

One concept, adapted per platform. Never just repost the same file everywhere.

| Element | TikTok | Meta Reels | Meta Feed | YouTube | LinkedIn |
|---------|--------|-----------|-----------|---------|----------|
| Tone | Raw, native, trend-aware | Polished casual | Professional casual | Educational, longer | Thought leadership |
| Length | 15-30s | 15-30s | 15-45s (video), N/A (static) | 30s-2min | 15-30s (video), N/A (text) |
| Hook style | Pattern interrupt, trending sound | Visual hook, text overlay | Bold headline, eye-catching image | Question or stat | Insight or contrarian take |
| CTA | "Link in bio" / "Comment X" | "Tap to learn more" | "Shop now" / "Learn more" | "Subscribe" / "Link below" | "Comment your take" / "DM me" |
| Captions | Required, native style | Required, clean | Optional for static | Recommended | Not typical |
| Music/sound | Trending sounds critical | Licensed music | Optional | Background only | Rarely |
| Format | 9:16 vertical | 9:16 vertical | 1:1 or 4:5 | 16:9 or 9:16 | 1:1 or 16:9 |

### Creative Repurposing Workflow

1. Produce hero creative for your primary platform
2. Re-edit hook for each secondary platform (first 3 seconds differ most)
3. Adjust aspect ratio and swap music/sounds per platform norms
4. Update CTA text and add platform-specific captions
5. Test repurposed creative independently (do not assume cross-platform performance)

#### Imported: Section 9: Attribution and Measurement

### Measurement Framework

**Level 1 - Platform reporting (baseline):** Use each platform's native attribution (Meta Ads Manager, Google Ads, TikTok Ads Manager). Good for directional optimization but overreports due to overlap.

**Level 2 - Unified analytics (recommended):** Tools like Triple Whale, Cometly, or Rockerbox for cross-platform creative-level attribution. Track which specific creatives drive purchases, not just clicks.

**Level 3 - Incrementality testing (advanced):** Geo-lift tests and holdout experiments to measure true incremental impact. Tools: Measured, Triple Whale, or platform-native lift studies. Run quarterly on top-spending channels.

**Level 4 - Marketing mix modeling (enterprise):** Statistical models combining all spend, creative, and revenue data. Best for $100K+/month accounts. Tools: Measured, Recast, internal data science.

### Creative Analytics Metrics

| Metric | What It Tells You | Benchmark |
|--------|-------------------|-----------|
| Hook rate | First 3 seconds holding attention | >25% good, >35% great |
| Hold rate | Viewers past 50% of video | >15% |
| Thumb-stop rate | Stopping scroll on static ads | >3% |
| CTR | Interest in clicking through | >1% good, >2% great |
| Conversion rate | Clicks turning into actions | 2-5% landing page |
| Creative win rate | % of tested creatives that beat CPA target | 15-25% is healthy |
| Creative velocity | New creatives launched per week | 5-10 for $10K+/month |
| Time to fatigue | Days until creative performance degrades 20% | Track and increase over time |

### Attribution Pitfalls

- Platforms double-count cross-platform journeys - set 1-day view, 7-day click attribution windows
- Google PMax claims branded search conversions as campaign wins - segment brand vs non-brand
- Incrementality testing is the only way to know true channel contribution

#### Imported: Section 10: AI Creative Compliance

### AI Creative Launch Checklist

Before launching any AI-generated ad:
- [ ] Image/video looks natural at mobile size (no uncanny artifacts)
- [ ] Hands, fingers, and text rendered correctly
- [ ] Product matches reality (no exaggerated features)
- [ ] Brand logo placed correctly and legible
- [ ] Passes platform-specific ad review (no before/after for health, no exaggerated claims)
- [ ] AI generation disclosed where required by local law
- [ ] Landing page matches ad creative promise
- [ ] Human review completed before going live
- [ ] Text <20% of image area for Meta (penalized otherwise)

---
