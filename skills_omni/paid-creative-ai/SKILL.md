---
name: "paid-creative-ai"
description: "Paid Creative AI workflow skill. Use this skill when a user needs AI-assisted ad creative planning, platform-ready asset packaging, creative testing design, fatigue management, or diagnosis of paid creative issues across Meta, Google, TikTok, and LinkedIn. Use it for creative strategy and operations guidance, not for legal review, tracking implementation, or account-specific policy appeals."
version: "0.0.1"
category: "development"
tags:
  - "paid-creative-ai"
  - "ad-creative"
  - "performance-creative"
  - "creative-testing"
  - "meta-ads"
  - "google-ads"
  - "tiktok-ads"
  - "performance-max"
  - "advantage-plus"
  - "creative-fatigue"
  - "ai-ads"
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
upstream_skill: "skills/paid-creative-ai"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Paid Creative AI

## Overview

Use this skill to plan, package, test, refresh, and troubleshoot AI-assisted paid ad creative across major ad platforms.

It is strongest when the user needs help with:

- generating or refining ad concepts for paid media
- adapting creative for Meta, Google Performance Max, TikTok, or LinkedIn
- designing structured creative tests instead of guessing
- managing creative fatigue and refresh cadence
- diagnosing whether poor results are caused by assets, packaging, policy, or measurement

This skill focuses on **creative strategy and platform operations**. It does **not** replace legal review, direct account troubleshooting, custom tracking implementation, or landing-page engineering.

The original upstream intent is preserved: AI-powered paid creative from generation through performance optimization. This enhanced version makes the workflow more operational, safer, and easier for agents to execute.

## When to Use This Skill

Use this skill when the request includes any of these situations:

- The user wants AI-generated ad creative ideas, scripts, images, or video concepts.
- The user wants to package assets for **Meta Advantage+**, **Google Performance Max**, **TikTok Smart+ / Symphony**, or **LinkedIn ads**.
- The user wants a creative testing plan with hypotheses, variables, metrics, and review windows.
- The user says performance is dropping and suspects **creative fatigue**.
- The user needs help deciding whether weak results are caused by creative quality, asset coverage, policy rejection, or attribution mismatch.
- The user mentions terms like: **ad creative**, **performance creative**, **creative testing**, **creative fatigue**, **Meta ads**, **Google ads**, **TikTok ads**, **AI ads**, **ROAS**, **Advantage+**, **Performance Max**, or **Smart+**.

### Do Not Use This Skill When

Route elsewhere when the task is primarily about:

- **legal or regulatory advice** about disclosures, claims, or jurisdiction-specific ad rules
- **tracking or implementation work** such as pixels, conversion APIs, tag setup, feeds, or analytics instrumentation
- **account enforcement or appeals** that require direct platform support workflows
- **landing-page development** or CRO implementation beyond creative-to-page message alignment
- **software architecture, code review, or debugging**

## Intake Questions

Ask these before giving recommendations:

1. What product, service, or offer is being advertised?
2. Which platforms are in scope: Meta, Google, TikTok, LinkedIn, or others?
3. What is the primary business goal: purchases, leads, app installs, awareness, or another conversion?
4. What is the primary KPI: CPA, ROAS, CPL, CAC, qualified pipeline, or another metric?
5. What is the current monthly spend and expected test budget?
6. What creative assets already exist: images, video, scripts, UGC, brand guidelines, logos, landing pages?
7. Is the team open to AI-generated media, AI-assisted editing only, or human-only production?
8. What conversion event and attribution settings are currently being used?
9. Has anything changed recently: audience, offer, tracking, feed, landing page, budget, or seasonality?
10. Is the task net-new concept generation, asset refresh, platform packaging, troubleshooting, or scaling?

## Operating Table

| Situation | Primary action | Primary metric to inspect | Minimum review window | Escalate when |
| --- | --- | --- | --- | --- |
| Need broad placement adaptation on Meta | Prepare diverse source assets and package for Advantage+ creative review | CTR, CPA, delivery quality, placement breakdown | Allow a meaningful learning period before judging | Results degrade after adequate spend and creative diversity is low |
| Performance Max underdelivers or has weak coverage | Audit asset completeness, asset group strength, final URL controls, and search themes | Asset group strength, conversions, cost per conversion, search quality | Usually days to weeks, not same-day judgment | Asset group strength stays low or measurement is unclear |
| TikTok creative looks polished but unnatural | Use Symphony selectively, then QA for native feel and trust | Hook rate, hold rate, CTR, comments | Several days with enough impressions | Engagement is weak and users react negatively to the asset style |
| LinkedIn adaptation needed | Reframe concept for professional context and format constraints | CTR, lead quality, conversion rate | Several days to one test cycle | Message fit is weak or the format is mismatched |
| Creative fatigue suspected | Compare current metrics against prior peaks and rotate concepts or formats | CTR decline, CPM increase, frequency, CPA trend | At least a few days of trend data | Performance falls across multiple creatives or offer/audience issues are also present |
| Policy rejection blocks launch | Review claims, landing-page alignment, manipulated-media risk, and platform policy category | Approval status, rejection reason, asset edits required | Immediate triage, then re-review after revision | The issue requires legal interpretation or account-level escalation |
| Platform-reported winner conflicts with blended business results | Compare attribution windows, event definitions, brand effects, and reporting views | Platform ROAS/CPA vs blended revenue or CRM outcomes | Review after enough post-click time has passed | Tracking, attribution, or sales-lag issues dominate the decision |

## Workflow

### 1. Confirm objective, constraints, and routing

Identify:

- campaign objective
- platform or platforms in scope
- available creative inputs
- measurement source and KPI
- brand, legal, or policy constraints
- whether this is a net-new launch, test cycle, refresh, or troubleshooting task

**Output:** short operating brief with goal, platform, KPI, constraints, and scope.

### 2. Check measurement readiness before judging creative

Before proposing tests or calling a creative a winner/loser, confirm:

- the conversion event being optimized toward
- the reporting view being used
- attribution window assumptions
- URL and landing-page destination consistency
- whether platform-native reporting is being compared with blended or CRM reporting

If measurement is unclear, say so explicitly and avoid confident performance conclusions.

**Output:** measurement note using `references/measurement-and-attribution-guide.md`.

### 3. Build a concept matrix

Create concepts as modular combinations of:

- **hook**
- **body / proof / narrative**
- **CTA**
- **format**
- **platform adaptation**

Keep one test variable clear at a time whenever possible. Separate:

- new concepts
- iterations of known winners
- pure formatting changes for placement fit

**Output:** concept or test matrix using `examples/creative-test-matrix-template.md`.

### 4. Generate and quality-check assets

Use AI generation selectively and review every asset for:

- realism and trustworthiness
- readable text at mobile size
- brand consistency
- product accuracy
- natural human features, motion, and audio
- landing-page alignment
- policy risk

Reject assets that look uncanny, misleading, inconsistent, or overproduced for the platform.

**Output:** approved asset list and QA notes using `references/ai-ad-compliance-checklist.md`.

### 5. Package assets for the target platform

Translate raw creative into platform-native structure:

- **Meta:** placement-flexible assets, copy variants, Advantage+ compatible inputs
- **Google Performance Max:** complete asset groups with strong coverage and clear thematic grouping
- **TikTok:** native-feeling video variants, Smart+ compatible creative inputs, selective Symphony usage
- **LinkedIn:** format-specific adaptations for professional context

Use the local specs reference instead of relying on memory.

**Output:** platform-ready asset packet using `references/platform-asset-specs.md`.

### 6. Launch with a controlled test plan

Define:

- hypothesis
- variable under test
- success metric
- review date
- minimum data needed before action
- next action if the result is positive, negative, or inconclusive

Treat aggressive kill thresholds as **operator heuristics**, not universal truth. Do not overreact to tiny samples.

**Output:** launch/test plan using `examples/creative-test-matrix-template.md`.

### 7. Review diagnostics before replacing assets

When performance is weak, inspect platform diagnostics before blaming the concept:

- policy and review status
- asset coverage and strength
- recommendation quality
- placement mismatches
- comments and qualitative reactions
- audience / offer / landing-page mismatch signals
- attribution discrepancies

**Output:** problem statement plus likely causes using `references/platform-diagnostics-playbook.md`.

### 8. Refresh, scale, or retire

Use observed patterns to decide whether to:

- scale a winner gradually
- create variations of the winning hook or proof structure
- adapt the same concept to new placements or audiences
- refresh fatigued creative with new hooks, formats, or creator angles
- retire a creative that has enough data and remains noncompetitive

For fatigue work, start with iterations of winners before reinventing everything.

**Output:** refresh or scale brief using `examples/fatigue-refresh-brief.md`.

## Platform Notes

### Meta

Use Meta guidance to frame Advantage+ as a tool for adaptation and enhancement, not a substitute for core concept quality.

Practical guidance:

- Provide diverse high-quality inputs rather than many weak variants.
- Allow a reasonable learning period before making heavy edits.
- Review policy status and delivery quality before concluding the creative is bad.
- Do not rely on outdated blanket language like a universal "20% text rule"; excessive text can still hurt quality or delivery.

### Google Performance Max

Treat asset packaging as a first-class performance variable.

Practical guidance:

- Build complete asset groups instead of shipping the minimum.
- Review asset group strength and improve diversity when it is weak.
- Check whether final URL expansion, brand settings, feeds, and search themes affect query quality.
- Review automatically created assets and generated assets rather than assuming they are always correct.

### TikTok

Optimize for native feel and fast hook clarity.

Practical guidance:

- Use AI enhancement tools selectively; polished is not always persuasive.
- Validate that the creative still feels platform-native after generation or dubbing.
- Prioritize the first seconds, captions, and natural pacing.
- If comments or engagement indicate distrust, simplify and humanize the asset.

### LinkedIn

Adapt the idea to professional context rather than reposting a TikTok or Reels concept unchanged.

Practical guidance:

- Sharpen the business claim and proof.
- Use less chaotic editing and more explicit value framing.
- Ensure format and copy fit the placement and audience expectations.

## Examples

### Example 1: Build a launch-ready creative test plan

```text
Use @paid-creative-ai to create a paid creative test plan for a new product launch on Meta and Google Performance Max. Ask intake questions first, then produce a concept matrix, a platform packaging checklist, a measurement-risk note, and a 14-day review plan.
```

**Expected output:** a structured brief with concepts, assets needed, test variables, review windows, and clear cautions where measurement or policy risk is unclear.

### Example 2: Diagnose creative fatigue

```text
Use @paid-creative-ai to diagnose whether our Meta and TikTok ads are fatigued. Compare recent CTR, CPM, frequency, CPA trend, and comments against prior winners. Recommend what to refresh first without changing too many variables at once.
```

**Expected output:** a fatigue diagnosis, likely causes, and a refresh plan that distinguishes creative issues from audience, offer, or measurement issues.

### Example 3: Review a policy-rejected AI ad

```text
Use @paid-creative-ai to review an AI-generated ad that was rejected on Google or Meta. Identify possible issues in claims, manipulated-media risk, landing-page mismatch, and asset realism. Do not give legal advice or guarantee appeal success.
```

**Expected output:** a remediation packet using `examples/policy-rejection-remediation-packet.md` structure.

### Example 4: Package assets for Performance Max

```text
Use @paid-creative-ai to turn these landing-page messages and brand assets into a Performance Max asset-group plan. Check asset completeness, likely asset-group strength issues, search-theme opportunities, and what should be manually reviewed before launch.
```

**Expected output:** a grouped asset plan with likely gaps and review notes.

## Best Practices

### Do

- Start with business goal, conversion event, and platform constraints before generating creative.
- Use AI to increase creative velocity, not to bypass review.
- Supply diverse, high-quality source assets when using platform-native automation.
- Package assets according to platform-native structure, not one-size-fits-all exports.
- Use hypotheses and controlled variables in tests.
- Allow enough time and data before killing, scaling, or replacing assets.
- Separate creative issues from audience, offer, feed, landing-page, and tracking issues.
- Review generated or automatically created assets before launch.
- Align ad claims, visuals, and landing-page promises.
- Keep a rolling refresh pipeline so fatigue does not create dead periods.

### Don't

- Promise benchmark outcomes or lift claims as universal truth.
- Treat early results from tiny samples as conclusive.
- Assume platform recommendations are always correct.
- Repost the exact same asset unchanged across TikTok, Reels, LinkedIn, and PMax placements.
- Use AI-generated media that looks deceptive, uncanny, or materially misrepresents the product.
- Give jurisdiction-specific legal advice on disclosure obligations.
- Assume poor creative is the cause when measurement setup is uncertain.

### Heuristic kill/scale guidance

These are **operator heuristics**, not first-party guarantees. Use them carefully and only after checking data quality, spend level, and platform learning state.

| Situation | Heuristic action | Guardrail |
| --- | --- | --- |
| Very weak early hook or CTR signal | Queue replacement concepts | Do not judge from tiny impression counts |
| CPA worsens after a budget increase | Revert or hold budget | Check whether the campaign is still stabilizing |
| Winner remains efficient over multiple review windows | Scale gradually | Prefer controlled increases over sudden jumps |
| Fatigue appears in a formerly strong concept | Refresh hook, format, or proof angle | Avoid changing audience, offer, and creative all at once |
| PMax or Smart+ results are unclear | Audit asset quality and measurement first | Automation can obscure weak inputs |

## Troubleshooting

### Problem: Policy rejection blocks launch

**Symptoms:** The ad is rejected or limited; rejection mentions claims, misrepresentation, prohibited content, or manipulated media.

**Likely causes:** Exaggerated claims, mismatch between ad and landing page, unrealistic AI imagery, restricted before/after framing, or platform-specific policy issues.

**Solution:** Review `references/ai-ad-compliance-checklist.md`. Compare the ad claim, visual, CTA, and landing page side by side. Remove unsupported claims, reduce misleading visual edits, and revise the asset before resubmission. Route to legal/compliance if the issue depends on jurisdiction-specific disclosure or regulated-category interpretation.

### Problem: Performance Max asset group strength is low

**Symptoms:** Asset-group strength is weak, coverage is incomplete, or results are volatile despite spend.

**Likely causes:** Missing asset types, low diversity, weak thematic grouping, low-quality generated assets, or poor URL/brand controls.

**Solution:** Use `references/platform-asset-specs.md` and `references/platform-diagnostics-playbook.md` to fill missing assets, improve variety, separate themes more clearly, and review automatically created assets. Do not assume bidding or targeting is the only issue.

### Problem: Meta or TikTok ads get impressions but weak clicks

**Symptoms:** Delivery occurs, but hook rate, CTR, or downstream engagement is weak.

**Likely causes:** Weak first impression, unclear value proposition, too much visual noise, unnatural AI feel, message-platform mismatch, or wrong format adaptation.

**Solution:** Isolate the hook first. Simplify the message, improve the opening visual or text, and create native-feeling variants for each platform. Review comments and qualitative reactions, not just dashboard metrics.

### Problem: The ad looks obviously AI-generated and hurts trust

**Symptoms:** Users react negatively, comment on fake visuals, or the asset feels uncanny even if technically polished.

**Likely causes:** Unrealistic faces or hands, over-smoothed motion, synthetic audio, excessive editing, or mismatch with the product reality.

**Solution:** Reject the asset. Rebuild using more realistic source inputs, lighter enhancement, clearer product truth, and stronger human review. Prefer authenticity over novelty when trust is central to conversion.

### Problem: Platform says there is a winner, but business reporting disagrees

**Symptoms:** Platform ROAS or CPA looks strong, but blended revenue, CRM, or finance reporting does not confirm the result.

**Likely causes:** Different attribution windows, click/view credit differences, brand search capture, reporting lag, or event mismatch.

**Solution:** Use `references/measurement-and-attribution-guide.md`. Compare event definitions, windows, reporting dates, and brand/non-brand effects before changing budget. If the measurement basis is unresolved, present findings as directional rather than definitive.

### Problem: Creative fatigue is suspected, but the real issue may be elsewhere

**Symptoms:** CTR declines, CPM rises, frequency climbs, or CPA drifts up over time.

**Likely causes:** Genuine creative fatigue, audience saturation, offer fatigue, seasonality, landing-page issues, or tracking changes.

**Solution:** Compare recent performance to prior peaks, then isolate variables. Refresh hooks or formats first if the offer and audience are stable. If several campaigns degrade at once, investigate broader causes before blaming the assets.

## Additional Resources

Use these local files as the operating support pack for this skill:

- [Platform asset specs](references/platform-asset-specs.md)
- [AI ad compliance checklist](references/ai-ad-compliance-checklist.md)
- [Measurement and attribution guide](references/measurement-and-attribution-guide.md)
- [Platform diagnostics playbook](references/platform-diagnostics-playbook.md)
- [Creative test matrix template](examples/creative-test-matrix-template.md)
- [Fatigue refresh brief example](examples/fatigue-refresh-brief.md)
- [Policy rejection remediation packet](examples/policy-rejection-remediation-packet.md)
- [Paid media router](agents/paid-media-router.md)

## Related Skills

- Use a tracking or analytics skill when the problem is event setup, attribution plumbing, or reporting implementation.
- Use a CRO or landing-page skill when the message matches but conversion still fails on-page.
- Use a legal/compliance skill or human reviewer when disclosure, regulated claims, or jurisdiction-specific policy interpretation is required.
- Use a platform-specific media buying skill when the issue is budget structure, bidding, feeds, or account configuration rather than creative.
