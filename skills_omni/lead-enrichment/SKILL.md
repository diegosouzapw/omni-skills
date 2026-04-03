---
name: "lead-enrichment"
description: "Lead enrichment workflow skill. Use this skill when a user needs to design or improve enrichment waterfalls, ICP scoring, contact verification, provider sequencing, or Clay-based enrichment operations while preserving compliance, provenance, and deliverability gates. Do not use it for CRM/API implementation, legal advice, or sending-infrastructure debugging."
version: "0.0.1"
category: "development"
tags:
  - "lead-enrichment"
  - "data-enrichment"
  - "clay"
  - "waterfall-enrichment"
  - "icp-scoring"
  - "lead-scoring"
  - "contact-verification"
  - "data-quality"
  - "intent-data"
  - "b2b-outbound"
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
upstream_skill: "skills/lead-enrichment"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Lead Enrichment Skill

## Overview

This skill packages the upstream workflow from `packages/skills-catalog/skills/(gtm)/lead-enrichment` in `https://github.com/tech-leads-club/agent-skills.git` into a reusable operational guide for designing B2B lead enrichment systems.

Use it to:

- define ICP scoring inputs and weighting
- design enrichment waterfalls in Clay or similar table-based workflows
- improve contact data quality and field provenance
- classify contacts by verification and routing readiness
- reduce wasted credits and bad downstream syncs
- preserve provenance when reviewing or handing off work

This skill is intentionally workflow-focused. It helps the operator decide what to enrich, in what order, with what gates, and what should or should not move downstream.

## When to Use This Skill

Use this skill when the request is about enrichment workflow design, operating rules, or QA, for example:

- building or revising a Clay enrichment table
- choosing provider order for a waterfall
- defining ICP scoring logic for accounts or contacts
- deciding which enriched records are safe to route to CRM or outbound tools
- reducing bounce rate caused by stale or low-confidence contact data
- improving data quality, provenance, freshness, and re-enrichment policy
- comparing enrichment strategies by coverage, cost, and verified yield
- troubleshooting low match rates, conflicting provider data, or runaway credit spend

## When Not to Use / Route Elsewhere

Do **not** use this skill as the primary workflow for:

- implementing APIs, webhooks, CRM sync logic, or production integrations
- debugging mailbox infrastructure, SPF, DKIM, or DMARC setup in detail
- giving legal conclusions about GDPR, PECR, CAN-SPAM, or regional marketing law
- security architecture, secrets handling, or access-control design
- code review or software architecture decisions unrelated to enrichment operations

Route to adjacent skills or specialists when the task becomes primarily:

- CRM operations or data engineering
- outbound deliverability remediation
- privacy/legal review
- application implementation

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New enrichment workflow | `references/discovery-intake-checklist.md` | Captures ICP, target regions, required fields, budget, suppression sources, and downstream systems before design starts |
| Choosing providers and order | `references/provider-waterfall-scorecard.md` | Compares providers by field fit, cost, region, verification yield, and operational risk |
| Defining what data is allowed and useful | `references/field-governance-matrix.md` | Maps each field to purpose, confidence, retention, provenance, and freshness rules |
| Deciding whether a contact should route downstream | `references/contact-verification-and-routing-checklist.md` | Applies verification, suppression, and eligibility gates before outreach or CRM sync |
| Reviewing compliance posture operationally | `references/compliance-review-worksheet.md` | Documents lawful-basis assumptions, opt-out propagation, source lineage, and retention controls |
| Measuring performance | `references/kpi-benchmark-scorecard.md` | Tracks coverage, verified coverage, cost per verified lead, disagreement rate, and bounce outcomes |
| Building a Clay-style workflow | `examples/clay-waterfall-blueprint.md` | Shows a practical table layout, gates, and routing columns |
| Designing an ICP model | `examples/icp-scoring-model-example.md` | Gives a worked example of score weighting and calibration |
| Sampling output quality before rollout | `examples/qa-sampling-playbook.md` | Prevents pushing a flawed waterfall into production use |
| Deciding on handoff | `agents/handoff-router.md` | Helps route legal, engineering, deliverability, or CRM implementation work elsewhere |

## Workflow

1. **Confirm the operating context**
   - Ask for ICP, target personas, target geographies, expected volume, budget, and downstream systems.
   - Ask whether the goal is coverage, verified contacts, account scoring, routing, or all of the above.
   - If the user already has a Clay table or draft workflow, review it before proposing changes.

2. **Define the minimum required fields**
   - Separate must-have fields from nice-to-have fields.
   - Map each field to a business purpose before enriching it.
   - Avoid collecting personal data that is not needed for the stated workflow.

3. **Check operational constraints before enrichment**
   - Identify target regions and any stricter privacy or outreach constraints.
   - Confirm suppression, do-not-contact, prior opt-out, and exclusion sources.
   - Stop and escalate if lawful basis or outreach eligibility is unclear.

4. **Design the provider waterfall**
   - Choose providers by field type, region fit, freshness, and cost.
   - Put the cheapest or highest-yield acceptable source first for each field.
   - Use separate logic by field; do not assume one provider should lead every enrichment step.
   - Track source, timestamp, and confidence for every enriched field.

5. **Build the table or workflow structure**
   - Keep raw inputs, enriched outputs, verification results, scores, and routing decisions in distinct columns.
   - In Clay-style workflows, use formulas for scoring and gating rather than manual interpretation.
   - Keep eligibility and suppression logic explicit.

6. **Verify and classify contact data**
   - Treat verification as more than “email exists.”
   - Classify records into at least: deliverable, risky, catch-all/unverifiable, and reject.
   - Separate records that are technically found but not suitable for immediate outreach.

7. **Apply ICP scoring and routing**
   - Score firmographic, technographic, and intent layers separately.
   - Calibrate weightings against historical outcomes when available.
   - Route by both fit and sending eligibility, not by score alone.

8. **Run QA before broad rollout**
   - Sample records manually.
   - Check whether titles, companies, domains, and emails match the real target.
   - Review disagreement between providers and ensure the final chosen value is defensible.

9. **Push only approved outputs downstream**
   - Sync only records that pass verification, suppression, and routing gates.
   - Keep provenance fields with the output when possible.
   - Do not overwrite better first-party data without a rule.

10. **Monitor, recalibrate, and re-enrich**
   - Track fill rate, verified coverage, disagreement rate, bounce rate, complaint rate, and cost per verified lead.
   - Revisit provider order if cost rises faster than verified coverage.
   - Re-enrich on a field-specific cadence rather than re-running everything blindly.

## Clay Workflow Notes

Clay uses a table model: each row is a record, each column is a field, formula, enrichment step, or routing output. For this skill, use that model as an operational pattern rather than a product-specific lock-in.

### Recommended column groups

| Column group | Purpose |
| --- | --- |
| Input columns | Raw lead/account inputs such as company domain, contact name, LinkedIn URL, geography |
| Pre-qualification columns | ICP filters, domain validity checks, target-region flags |
| Enrichment columns | Provider-specific outputs for email, title, firmographics, technographics, intent |
| Verification columns | syntax/DNS/MX result, catch-all flag, role-account flag, confidence, last verified |
| Scoring columns | firmographic score, technographic score, intent score, composite ICP score |
| Governance columns | source provider, timestamp, confidence, retention class, exclusion state |
| Routing columns | approved for CRM, approved for nurture, approved for outbound, reject reason |

### Safe workflow pattern

1. Pre-filter before expensive enrichment.
2. Enrich only fields required for the use case.
3. Verify contactability before routing.
4. Keep suppression and opt-out checks separate from provider confidence.
5. Route catch-all or risky records into separate handling, not the main send path.

## ICP Scoring Framework

Use three signal layers and keep them independently visible:

| Signal layer | Question answered | Typical inputs |
| --- | --- | --- |
| Firmographic | Does this company match our target profile? | employee count, revenue band, industry, geography, funding stage |
| Technographic | Does their stack indicate fit or readiness? | tools in use, integration fit, migration triggers, stack complexity |
| Intent | Are they showing relevant buying signals now? | intent data, category research, hiring signals, funding, first-party activity |

### Baseline scoring model

```text
ICP Score = (Firmographic Fit × 0.30) + (Technographic Fit × 0.30) + (Intent Score × 0.40)
```

That weighting is a starting point, not a rule. Adjust it based on actual conversion data.

### Calibration guidance

- Start with simple, explainable weights.
- Compare score bands against historical meetings, opportunities, and wins.
- If high-scoring leads do not convert, inspect stale data, wrong weighting, or misleading intent inputs.
- Do not hide disqualifiers inside a composite score; preserve hard-stop flags separately.

## Enrichment Waterfall Design

A waterfall queries multiple sources in sequence until a field is sufficiently filled or verified.

### Design rules

- Build waterfalls per field, not one universal provider order.
- Start with lower-cost or higher-yield acceptable sources.
- Stop once the field meets your quality threshold.
- Preserve the winning provider and fallback history.
- Evaluate by **verified yield**, not only raw fill rate.

### Common scenario patterns

| Scenario | Typical design emphasis | Notes |
| --- | --- | --- |
| High-volume outbound | cost control, high email yield, strong verification | prioritize pre-filtering and aggressive QA on risky segments |
| Enterprise account targeting | accuracy, firmographics, provenance | tolerate lower volume for stronger field confidence |
| EU/UK-sensitive workflows | minimization, provenance, suppression discipline | use tighter review before outreach sync |
| Intent-led routing | freshness and scoring calibration | stale intent can make a strong model look broken |
| Data hygiene remediation | verification and deduplication | treat outreach readiness as a separate decision from enrichment completeness |

## Verification and Routing

A contact is not “ready” just because an email was found.

Treat final routing as the intersection of:

- field-level enrichment success
- recent verification status
- catch-all or risky-domain handling
- suppression / opt-out / do-not-contact status
- downstream use case eligibility

### Recommended classification

| Class | Meaning | Default action |
| --- | --- | --- |
| Deliverable | Verified recently, not suppressed, acceptable risk | Eligible for approved downstream routing |
| Risky | Partial verification, stale verification, or domain-level uncertainty | Hold out of primary send path; review or throttle |
| Catch-all / unverifiable | Technically reachable but unreliable for scale | Segregate from core outbound path |
| Reject | Invalid, suppressed, or disallowed | Do not route |

### Hard gates

Do not route a contact to outreach if:

- suppression or opt-out status is unknown
- lawful-basis handling is unclear for the operating context
- verification is stale beyond the team’s acceptable window
- the address is classified as invalid or high-risk
- the workflow would overwrite more trusted first-party data without approval

## Compliance / Data Handling

This section is operational guidance, not legal advice.

When enrichment touches personal data, especially in UK/EU contexts, use these controls:

- document the purpose of each enriched field
- minimize collection to what the workflow actually requires
- record source provider, enrichment date, and confidence
- preserve exclusion, opt-out, and suppression signals across systems
- define retention and re-enrichment rules instead of keeping data indefinitely
- be ready to locate and remove enriched personal data if policy or law requires it

### Practical review questions

- What is the business purpose of each personal field?
- What lawful-basis assumption or operational justification is being relied on?
- Where do opt-out and suppression states come from?
- How are they propagated to Clay, CRM, and outbound tools?
- How long should each field remain trusted before re-enrichment?
- Which records should never be enriched or routed?

Avoid blanket assumptions such as “B2B outreach is always opt-out” or “verification makes outreach compliant.” It does not.

## Examples

### Example 1: Intake a new enrichment workflow

```text
Use @lead-enrichment to design a waterfall for 8,000 US and UK SaaS accounts. We need verified work emails, titles, employee count, CRM status, and ICP score. Optimize for verified coverage and cost control. Include suppression and re-enrichment gates.
```

**Expected outcome:** A staged workflow covering intake, required fields, provider order, verification classes, scoring logic, and approved routing outputs.

### Example 2: Improve an existing Clay table

```text
Use @lead-enrichment to review our current Clay enrichment table. Find places where we are wasting credits, missing provenance, or routing risky contacts into outbound.
```

**Expected outcome:** A review of current table structure, waterfall sequencing, verification/routing gates, and suggested column-level changes.

### Example 3: Build an ICP scoring model

```text
Use @lead-enrichment to create an ICP scoring model for mid-market fintech. Weight firmographic, technographic, and intent signals, then define hot/warm/nurture/reject routing bands.
```

**Expected outcome:** A score model with assumptions, weighting, disqualifiers, and calibration guidance.

### Example 4: Troubleshoot bounce issues after enrichment

```text
Use @lead-enrichment to diagnose why our 'verified' enriched emails still bounce. Separate provider-quality issues from verification staleness, catch-all domains, and sending-eligibility gaps.
```

**Expected outcome:** A root-cause checklist and a revised routing policy that keeps risky records out of the main send path.

## Best Practices

### Do

- Define required fields before building the waterfall.
- Track source, timestamp, confidence, and verification result per field.
- Use different provider order by field and segment.
- Measure success by verified yield and downstream outcomes, not fill rate alone.
- Keep suppression and legal/compliance review steps visible in the workflow.
- Sample enriched records manually before scaling volume.
- Recalibrate ICP scores against real conversion data.
- Keep first-party truth distinct from inferred or third-party-enriched data.

### Don’t

- Don’t enrich every possible field “just in case.”
- Don’t treat provider confidence as the same thing as outreach eligibility.
- Don’t send catch-all or risky records through the same path as high-confidence contacts.
- Don’t overwrite trusted CRM values without a rule and provenance trail.
- Don’t assume a strong database vendor eliminates the need for verification or suppression checks.
- Don’t present regional privacy rules as universal legal conclusions.

## Troubleshooting

### Problem: Email coverage is lower than expected after the waterfall

**Symptoms:** Many records remain without work emails, or incremental yield from later providers is minimal.

**Solution:** Check whether the provider order fits the target region and segment. Verify that upstream inputs are strong enough, especially company domain and LinkedIn URL. Compare per-provider fill rate, verified yield, and disagreement rate before adding more paid steps.

### Problem: “Verified” contacts still bounce in campaigns

**Symptoms:** Verification passes, but live campaigns show elevated bounce or poor deliverability.

**Solution:** Separate provider quality from routing quality. Check verification age, catch-all handling, role-account filtering, suppression hygiene, and whether the sender setup itself is part of the issue. Keep risky or catch-all records out of the main send path even if a verifier marked them as acceptable.

### Problem: ICP scores are not predicting meetings or pipeline

**Symptoms:** High-scoring leads do not convert better than average, or obvious good-fit accounts score too low.

**Solution:** Review weighting, stale fields, and hidden disqualifiers. Re-test score bands against closed-won and closed-lost history. Preserve separate sub-scores so you can see whether the problem is firmographic fit, tech fit, or intent noise.

### Problem: Credit spend rises faster than verified coverage

**Symptoms:** Additional enrichment steps increase cost but do not improve verified output enough to justify them.

**Solution:** Calculate cost per verified lead by waterfall step. Move low-yield expensive providers later or remove them. Pre-filter harder before expensive steps and stop enriching non-ICP records earlier.

### Problem: Different providers disagree on core fields

**Symptoms:** Title, company, employee count, or email differs across sources.

**Solution:** Define field-level source precedence. Keep provenance for each candidate value, prefer more recent or higher-confidence sources, and manually QA a sample before setting overwrite rules.

### Problem: Suppressed or excluded contacts leak into downstream tools

**Symptoms:** Previously opted-out or do-not-contact records appear in CRM syncs or outbound lists.

**Solution:** Treat suppression as a hard gate, not a post-processing cleanup step. Verify where suppression state enters the workflow, how it is merged, and whether downstream tools inherit it reliably.

## Related Skills

- `@ai-sdr` - use when the next task is outbound sequencing, SDR workflows, or sales execution
- `@ai-cold-outreach` - use when the next task is messaging, personalization, or sequence creation
- compliance/privacy review skill - use when lawful-basis or regional outreach interpretation becomes the main task
- CRM ops / data engineering skill - use when implementation, sync architecture, or field mapping becomes the main task
- deliverability remediation skill - use when sender authentication, inbox placement, or mailbox infrastructure becomes the main task

## Additional Resources

- [Discovery intake checklist](references/discovery-intake-checklist.md)
- [Provider waterfall scorecard](references/provider-waterfall-scorecard.md)
- [Field governance matrix](references/field-governance-matrix.md)
- [Contact verification and routing checklist](references/contact-verification-and-routing-checklist.md)
- [Compliance review worksheet](references/compliance-review-worksheet.md)
- [KPI benchmark scorecard](references/kpi-benchmark-scorecard.md)
- [Clay waterfall blueprint example](examples/clay-waterfall-blueprint.md)
- [ICP scoring model example](examples/icp-scoring-model-example.md)
- [QA sampling playbook](examples/qa-sampling-playbook.md)
- [Handoff router](agents/handoff-router.md)

## Upstream Provenance Notes

This enhanced version preserves the original skill intent:

- ICP scoring framework
- enrichment waterfall architecture
- Clay table workflow design
- contact verification pipeline
- performance benchmarking
- compliance-aware operating guidance

Where the upstream material included vendor pricing, accuracy claims, or benchmark numbers that can change quickly, this enhanced version treats them as examples to validate locally rather than fixed truths.
