---
name: "ai-ugc-ads"
description: "AI UGC Ads workflow skill. Use this skill when a user needs to plan, brief, test, troubleshoot, and scale creator-led or AI-assisted UGC ad campaigns across TikTok, Meta, and YouTube Shorts, including creator sourcing, rights-aware briefs, Spark Ads or Partnership Ads planning, disclosure-safe messaging, and experiment-driven creative iteration. Do not use it for legal sign-off, deceptive synthetic media, ad account remediation, or technical ad platform implementation."
version: "0.0.1"
category: "development"
tags:
  - "ai-ugc-ads"
  - "ugc"
  - "creator-ads"
  - "spark-ads"
  - "partnership-ads"
  - "whitelisting"
  - "ai-ugc"
  - "creator-brief"
  - "ugc-testing"
  - "short-form-video"
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
upstream_skill: "skills/ai-ugc-ads"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# AI UGC Ads

## Overview

Use this skill to run a practical UGC ads workflow from intake through creator sourcing, briefing, testing, creator-permission planning, and iterative scale decisions.

It is designed for:

- creator recruitment and outreach
- human, AI, or hybrid UGC planning
- TikTok Spark Ads and Meta Partnership Ads planning
- disclosure and claims preflight checks
- experiment design for short-form ad creative
- fatigue management and creative refresh decisions
- weekly operating cadence for repeatable UGC production

This version preserves the upstream skill's core intent while improving operational safety and platform correctness. It emphasizes permissions, disclosure, truthful endorsements, asset readiness, and measurement discipline instead of fixed performance promises.

If rights, disclosures, policy constraints, or amplification permissions are unclear, stop optimization advice and resolve those constraints first.

## When to Use This Skill

Use this skill when the user needs to:

- create a UGC ad campaign for TikTok, Meta Reels, Facebook Reels, or YouTube Shorts
- recruit creators for paid UGC, seeding, affiliate content, or creator-led ads
- decide between human creators, AI-generated UGC, or a hybrid workflow
- build a creator brief with deliverables, claims boundaries, approvals, and usage rights
- plan Spark Ads, Partnership Ads, or another creator-permission amplification path
- diagnose creative fatigue, weak hooks, poor creator fit, or unclear test results
- create a structured test plan for hooks, bodies, CTAs, creators, or avatars
- operationalize weekly UGC production, approvals, launch, and refresh cycles

Common triggers include mentions of:

- UGC
- user-generated content
- creator ads
- Spark Ads
- whitelisting
- Partnership Ads
- AI UGC
- Arcads
- Creatify
- creator brief
- UGC testing

## Do Not Use This Skill When

Do not use this skill for:

- legal advice, contract drafting, or final compliance sign-off
- ad account suspension appeals or business asset remediation
- deceptive impersonation, deepfakes, or synthetic testimonials presented as real customers
- unsupported health, beauty, finance, or income-claim strategy
- technical implementation inside ad managers beyond procedural planning guidance
- code review, software architecture, or analytics instrumentation

If the request shifts into legal review, regulated-claim interpretation, consent/privacy review, or platform account remediation, escalate to the appropriate human owner or specialist workflow.

## Intake Checklist

Before recommending creators, AI tools, budgets, or testing plans, collect:

1. What product or service is being promoted?
2. What is the primary objective: awareness, traffic, conversion, retention, or marketplace sales?
3. Which channels matter now: TikTok, Instagram Reels, Facebook Reels, YouTube Shorts, or TikTok Shop?
4. What is the current monthly media budget and creative budget?
5. Are you starting with real creators, AI-generated content, existing customer footage, or a hybrid mix?
6. Do you already own rights to any existing creator footage or customer media?
7. Will the content be used organically only, or also in paid amplification?
8. Do you need Spark Ads, Meta Partnership Ads, or another creator-permission workflow?
9. What usage-rights duration is required, and do you need raw footage?
10. Are there regulated or sensitive claims involved, such as health, beauty, finance, weight loss, supplements, or earnings?
11. Will any AI avatar, cloned likeness, synthetic voice, or manipulated testimonial be used publicly?
12. What has already been tested, and what failed or succeeded?

If answers to questions 6-11 are missing, pause and resolve permissions, claims, disclosure, and representation requirements before planning scale.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need a creator-facing brief | `references/creator-brief-template.md` | Gives a reusable brief covering deliverables, rights, approvals, disclosures, and claims limits |
| Need Spark Ads or Partnership Ads preflight | `references/platform-permissions-checklist.md` | Prevents avoidable creator-permission and authorization failures |
| Need disclosure or claims guardrails | `references/compliance-review-checklist.md` | Helps screen endorsements, testimonials, before/after, and synthetic-media risk |
| Need testing structure | `references/creative-testing-playbook.md` | Replaces vague iteration with hypothesis-led, variable-controlled testing |
| Need weekly program management | `references/weekly-ugc-ops-checklist.md` | Provides a repeatable cadence for briefing, launch, review, and refresh |
| Need outreach copy | `examples/creator-outreach-messages.md` | Speeds recruiting while keeping asks narrow and professional |
| Need a concrete test example | `examples/test-matrix-example.md` | Shows a controlled creative test layout |
| Need a compliance-safe example brief | `examples/compliance-safe-brief-example.md` | Demonstrates safer language and disclosure handling |
| Need routing help | `agents/handoff-router.md` | Helps stop and escalate when work drifts into legal, analytics, or media-ops territory |

## Workflow

1. **Diagnose the business goal**  
   Identify whether the objective is awareness, conversion, product launch, creator sourcing, fatigue recovery, affiliate growth, or marketplace sales. Tie every recommendation to that objective.

2. **Choose the distribution path**  
   Decide whether the plan is organic-only validation, TikTok Spark Ads, Meta Partnership Ads, standard brand-run ads, YouTube Shorts adaptation, or a staged path from organic validation into paid amplification.

3. **Choose the content model**  
   Select human creators, AI-generated UGC, existing customer footage, or a hybrid model. Use AI UGC primarily for concept velocity and controlled testing, not as a deceptive substitute for real customer experience.

4. **Validate rights, disclosures, and claim boundaries**  
   Confirm usage rights, raw-footage rights, amplification permissions, disclosure needs, testimonial truthfulness, and regulated-claim constraints before drafting scripts or scale plans.

5. **Build the brief and sourcing plan**  
   Create a concise creator brief with hook options, approved claims, visual guidance, deliverables, deadlines, revisions, disclosure expectations, and usage-rights terms. If recruiting, define creator profile, outreach channel, target volume, and compensation model.

6. **Prepare assets for platform use**  
   Confirm orientation, approximate duration fit, captions/subtitles, audio rights, visible product handling, CTA treatment, and whether the final asset can be adapted safely across TikTok, Meta, and YouTube environments.

7. **Design a narrow test matrix**  
   Define the hypothesis, variable, audience consistency, success metric, and decision threshold. Keep one major variable controlled where possible.

8. **Launch a limited validation cycle**  
   Start with organic validation, limited paid spend, or both, depending on budget and permissions. Do not scale before confirming that the content is usable, compliant, and technically eligible for the intended amplification path.

9. **Read results by failure point**  
   Determine whether the issue is hook quality, message-body fit, CTA, creator fit, landing-page mismatch, permissions failure, policy rejection, or underpowered test design.

10. **Scale or refresh deliberately**  
   Scale only when the account's actual data supports it. Refresh hooks first, then intros, then creators or concepts as fatigue appears. Archive learnings in a reusable experiment tracker.

## Decision Guide: Human vs AI vs Hybrid

| Model | Best for | Main strengths | Main limits | Default recommendation |
| --- | --- | --- | --- | --- |
| Human creator UGC | Product demos, trust-heavy offers, creator amplification | Authenticity, platform-native behavior, creator identity products | Slower sourcing, higher coordination cost | Use when trust and product realism matter most |
| AI UGC | Script velocity, avatar testing, multilingual variants, low-budget concept exploration | Fast iteration, lower marginal production cost, broad concept coverage | Authenticity risk, disclosure risk, rights/licensing review needed | Use for concept testing, not deceptive substitution |
| Hybrid | Most mature UGC programs | AI accelerates ideation; humans validate and scale winners | Requires stronger process discipline | Preferred default for most teams |

## Operating Table by Objective

| Objective | Recommended first move | Validation path | Scale path |
| --- | --- | --- | --- |
| Awareness | Brief 3-5 creator or AI concepts around one core pain point | Organic posting and early paid view-quality tests | Expand winning hook structures across more creators |
| Conversion | Start with product demo, problem-solution, or testimonial-safe formats | Small paid test with strict claims review | Add creators, offers, and landing-page-aligned variants |
| Creative fatigue recovery | Preserve offer, replace hooks and openings first | Test 3-5 new hooks on existing structure | Rotate creators and concepts only after hook refresh fails |
| Creator sourcing | Recruit a small pool matched to the ICP and platform | Approve concept samples before full rollout | Deepen with repeat creators and rights extensions |
| AI UGC exploration | Generate multiple controlled script/avatar variants | Human review, then narrow paid or organic testing | Promote only variants that survive trust and compliance checks |

## Examples

### Example 1: Intake and route safely

```text
We sell a skincare product and want UGC ads for TikTok and Reels. We have a $3,000/month ad budget, no existing creators, and want to test AI avatars too.
```

**Expected response shape:**

- ask about substantiation for skincare claims
- confirm whether before/after visuals or testimonials will be used
- decide whether Spark Ads or Meta Partnership Ads are needed
- recommend a hybrid plan: AI for concept testing, human creators for scale
- produce a creator brief and first test matrix

### Example 2: Build a creator brief from scratch

```text
Create a brief for 5 nano creators for a hydration product. Goal is conversion on TikTok. We need raw footage and 60-day paid usage rights.
```

**Expected response shape:**

- identify allowed and prohibited claims
- define creator persona, deliverables, deadlines, and revisions
- specify disclosure expectations and rights
- include Spark Ads eligibility questions if amplification is planned

### Example 3: Diagnose a Spark Ads problem

```text
Our creator sent a TikTok authorization code, but the post is not usable in Ads Manager. Help us troubleshoot before we brief new creators.
```

**Expected response shape:**

- check authorization expiry and eligibility
- confirm creator-side ad authorization settings
- verify the selected post and account alignment
- stop creative advice until the permissions path is fixed
- route to the permissions checklist

### Example 4: Use the packaged helper script

```bash
python3 scripts/print_platform_policy_links.py
```

**Expected output:**

A grouped list of official platform and regulatory reference URLs for TikTok, Meta, YouTube, and FTC guidance.

## Best Practices

### Do

- treat disclosure, endorsement truthfulness, and usage rights as pre-launch requirements
- prefer current platform help-center documentation over hearsay or static screenshots
- treat KPI thresholds as hypotheses to calibrate against account history, vertical, and funnel stage
- start with small tests and isolate one major variable at a time when possible
- use AI UGC for speed, but require human review before publication
- maintain a written record of which creator granted which rights for which channels and duration
- refresh hooks before rebuilding the entire concept when fatigue appears
- keep creator briefs specific enough to reduce rework, but flexible enough to avoid robotic delivery
- document whether content is intended for organic posting, Spark Ads, Partnership Ads, or standard brand-run ads before production starts
- confirm current creative specs in official platform docs before final export

### Don't

- promise fixed CPA, CTR, ROAS, or completion benchmarks as universal truths
- present AI-generated testimonials, avatars, or voices as real customers without clear permission and disclosure
- advise amplification before creator permissions and platform eligibility are confirmed
- use misleading before/after framing or unsupported health, beauty, finance, or income claims
- assume a creator post is automatically eligible for Spark Ads or Partnership Ads
- change hook, body, CTA, audience, and placement all at once unless you explicitly accept a noisier result
- overfit on one winning creative without building refresh capacity

### Measurement Guidance

Use metrics as decision support, not as hard promises. Separate:

- **Leading indicators:** opening retention, hold rate, CTR, comments, saves, or creator engagement quality
- **Business outcomes:** CPA, CVR, revenue quality, qualified leads, repeat purchase, or marketplace sales
- **Program health signals:** fatigue rate, creative hit rate, approval speed, creator turnaround, and rights coverage

For stronger decisions, define:

1. the hypothesis being tested
2. the variable being changed
3. what remains held constant
4. the main success metric
5. the minimum evidence needed before declaring a winner

Use `references/creative-testing-playbook.md` for a reusable worksheet.

## Troubleshooting

### Problem: Low hook rate or weak early retention

**Symptoms:** Strong product or offer, but viewers drop early; creators deliver usable footage yet openings do not stop the scroll.

**Likely causes:** Weak first line, slow visual start, too many ideas in the first seconds, mismatch between platform style and creative.

**Solution:** Keep the body and CTA stable, then test 3-5 new openings. Swap between pain-point, result, curiosity, demo-first, and reaction-first hooks.

**Prevention:** Require every brief to include multiple first-3-second options.

### Problem: TikTok Spark Ads authorization is invalid, expired, or unusable

**Symptoms:** Authorization code fails, the post cannot be selected, or the ad cannot proceed even though creative exists.

**Likely causes:** Expired authorization, creator-side setting not enabled, wrong post selected, post not eligible, account mismatch, or policy review issue.

**Solution:** Stop creative iteration and use `references/platform-permissions-checklist.md`. Verify authorization status, post eligibility, creator settings, and account alignment before briefing more creators.

**Prevention:** Add authorization duration, post eligibility, and fallback organic-only validation to the creator workflow.

### Problem: Meta Partnership Ad is not selectable

**Symptoms:** The creator approved the collaboration verbally, but the post or identity is unavailable in Ads Manager.

**Likely causes:** Missing branded content approval, wrong business partner setup, account mismatch, ineligible post state, or asset restrictions.

**Solution:** Use `references/platform-permissions-checklist.md` to check branded content permissions, partner setup, and post eligibility in sequence.

**Prevention:** Confirm partner approval and ad identity workflow before the creator publishes the post.

### Problem: Creative is rejected for claims or policy

**Symptoms:** Ads are rejected, delivery is limited, or the creative requires multiple revisions for policy reasons.

**Likely causes:** Unsupported testimonial claims, misleading before/after framing, sensitive category restrictions, weak disclosure, or synthetic media that appears deceptive.

**Solution:** Pause testing and review `references/compliance-review-checklist.md`. Remove or substantiate the claim, add clearer disclosure where required, and escalate for human review in regulated categories.

**Prevention:** Put claims boundaries and disclosure instructions directly in the brief.

### Problem: Creator content is off-brief

**Symptoms:** Content is technically usable but misses the product angle, audience, tone, or required deliverables.

**Likely causes:** Vague brief, poor creator fit, too many talking points, or no approved examples.

**Solution:** Tighten the brief, reduce required points, give 2-3 clear reference styles, and cast creators based on audience fit instead of only follower count.

**Prevention:** Use the bundled brief template and require concept approval before full production.

### Problem: AI UGC looks inauthentic or harms trust

**Symptoms:** Lip-sync artifacts, uncanny delivery, unrealistic product handling, suspicious comments, or negative trust signals.

**Likely causes:** Over-rendered avatar choice, weak script realism, missing disclosure, or using AI where physical product proof is expected.

**Solution:** Route AI variants through a human-review gate. Reduce script complexity, improve editing, switch to concept-only use, or replace with human creator footage.

**Prevention:** Use AI UGC as an experimentation layer, not as a deceptive stand-in for real customer evidence.

### Problem: Test results are inconclusive

**Symptoms:** No clear winner emerges, metrics move inconsistently, or multiple versions seem equally weak.

**Likely causes:** Too little spend or volume, too many variables changed, audience inconsistency, or measurement window too short.

**Solution:** Reduce the number of variables, hold the audience and offer stable, and rerun a narrower test using the testing playbook.

**Prevention:** Define the hypothesis, variable, and decision threshold before launch.

### Problem: Performance falls after initial success

**Symptoms:** CTR, watch quality, or CPA drifts down while spend or frequency rises.

**Likely causes:** Creative fatigue, audience saturation, stale hooks, comment sentiment decline, or overuse of one creator/concept.

**Solution:** Refresh hooks first, then intros, then creators or concepts. Keep the offer stable long enough to isolate the fatigue source.

**Prevention:** Maintain a rolling creative backlog and weekly refresh cadence.

## Related Skills

- `@ai-cold-outreach` - use when the work shifts from creator recruitment to outbound lead-generation systems
- `@ai-pricing` - use when the main question becomes offer, packaging, or price strategy rather than creative execution
- `@ai-sdr` - use when the workflow becomes sales qualification or pipeline operations
- `@accessibility` - use when deliverables need accessibility review for captions, readability, or inclusive communication standards

## Additional Resources

### Local references

- [Creator brief template](references/creator-brief-template.md)
- [Platform permissions checklist](references/platform-permissions-checklist.md)
- [Compliance review checklist](references/compliance-review-checklist.md)
- [Creative testing playbook](references/creative-testing-playbook.md)
- [Weekly UGC ops checklist](references/weekly-ugc-ops-checklist.md)

### Local examples

- [Creator outreach messages](examples/creator-outreach-messages.md)
- [Test matrix example](examples/test-matrix-example.md)
- [Compliance-safe brief example](examples/compliance-safe-brief-example.md)

### Local scripts

- [Print official platform and policy links](scripts/print_platform_policy_links.py)

### Escalation guidance

- [Handoff router](agents/handoff-router.md)

## Notes on Upstream Intent Preservation

This enhanced version preserves the original skill identity and core workflow:

- creator recruitment remains a core entry point
- AI UGC remains part of the workflow, especially for concept velocity
- Spark Ads and whitelisting remain key amplification paths
- creator briefs, test matrices, and refresh cycles remain central

The main changes are operational hardening:

- permissions and disclosure move earlier in the workflow
- unsupported fixed performance claims are replaced with experiment framing
- platform authorization gets explicit checklists and troubleshooting
- AI UGC is bounded by rights, authenticity, and human review requirements
