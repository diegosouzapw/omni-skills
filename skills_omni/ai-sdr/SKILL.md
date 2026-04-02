---
name: "ai-sdr"
description: "AI SDR workflow skill. Use this skill when a user needs to design, assess, or improve an AI sales development workflow, including qualification rules, signal-to-action routing, outreach guardrails, human handoff, pilot planning, CRM state design, and vendor evaluation. Use it for operational planning and review of AI SDR programs, not for legal advice, deliverability engineering implementation, or code-level agent development."
version: "0.0.1"
category: "development"
tags:
  - "ai-sdr"
  - "sales-automation"
  - "lead-qualification"
  - "outbound"
  - "routing"
  - "revops"
  - "ai-agents"
  - "deliverability"
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
upstream_skill: "skills/ai-sdr"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# AI SDR Skill

## Overview

Use this skill to design, assess, or improve an AI-assisted sales development workflow.

It is for operators who need help with:

- AI SDR deployment planning
- qualification logic and lead routing
- reply classification and safe automation boundaries
- outreach workflow design and sender-readiness gates
- CRM stage ownership and handoff SLAs
- pilot launch criteria, review gates, and scaling decisions
- vendor evaluation for managed AI SDR, sending, enrichment, or custom workflow options

This skill preserves the intent of the upstream AI SDR guidance while turning it into an operator-facing runbook. It emphasizes lawful outreach, sender readiness, CRM hygiene, evaluation discipline, and bounded autonomy.

AI SDR systems can automate repetitive sales development work, but they should not act as unsupervised closers. In most cases, the safest operating pattern is:

1. define ICP and qualification rules
2. verify outreach and data-handling boundaries
3. confirm sender and CRM readiness
4. automate only narrow, low-risk tasks first
5. require human review for sensitive or high-stakes interactions
6. measure quality before scaling volume

## When to Use This Skill

### Use this skill when

- A user wants to deploy an AI SDR or AI BDR workflow.
- A team wants to automate lead qualification, reply classification, or signal-based routing.
- A founder, sales lead, or RevOps lead needs a pilot plan for AI-assisted outbound.
- A user asks how to split work between AI SDRs and human SDRs.
- A team wants help comparing managed AI SDR vendors, sending platforms, enrichment tools, or a custom workflow.
- A user reports low meeting quality, weak qualification precision, stalled handoff, or deliverability decline.
- The request involves operating rules, approval gates, KPIs, CRM ownership, or handoff SLAs for an AI SDR program.

### Do not use this skill when

- The primary need is legal advice or jurisdiction-specific compliance interpretation.
- The task is code implementation, code review, system architecture, or tool integration details.
- The task is deep email infrastructure engineering beyond high-level readiness checks.
- The user needs copywriting only; route to a cold outreach or messaging skill if available.
- The task is mainly prompt tuning, eval implementation, or classifier engineering details; route to prompt engineering or eval-focused skills if that becomes dominant.

### Required intake questions before proceeding

Ask these first if they are not already known:

1. Which geographies are being targeted?
2. Which channels are in scope: email, LinkedIn, SMS, phone, or mixed?
3. Who owns CRM stages, routing, and follow-up once the AI identifies a qualified lead?
4. What is the current sales motion: outbound-led, inbound-led, PLG, or hybrid?
5. How mature is the ICP definition and suppression process?
6. What sending infrastructure already exists?
7. What counts as success: replies, qualified meetings, pipeline, or opportunities?

If geography, channel, suppression handling, or CRM ownership is unknown, do not jump straight to launch advice.

## Operating Table

| Situation | Start here | Primary checks | Evidence to collect | Escalate to |
| --- | --- | --- | --- | --- |
| First AI SDR pilot | `references/deliverability-and-authentication-checklist.md`, `references/outbound-compliance-checklist.md`, `examples/handoff-sla-template.md` | geography, channel, sender readiness, CRM owner, handoff SLA | current stack, ICP definition, mailbox/domain status, pilot target metrics | legal/compliance review if cross-border or consent basis is unclear |
| Low reply quality | `references/eval-scorecard.md`, `examples/reply-classification-test-set.md` | ICP fit, message relevance, signal quality, routing logic | sample outreach, labeled replies, meeting outcomes | cold outreach / prompt engineering |
| Deliverability decline | `references/deliverability-and-authentication-checklist.md` | SPF, DKIM, DMARC, one-click unsubscribe, complaints, bounce rate | domain status, complaint trend, bounce trend, volume changes | deliverability specialist / email admin |
| Too many bad meetings | `references/crm-field-mapping-template.md`, `references/eval-scorecard.md`, `examples/handoff-sla-template.md` | qualification thresholds, disqualifiers, speed-to-lead, CRM stage updates | accepted meetings, show rate, rep feedback, false-positive examples | RevOps / CRM operations |
| Unsafe or off-policy reply automation | `references/human-in-the-loop-policy.md`, `examples/reply-classification-test-set.md` | approval gates, sensitive-response boundaries, risky claims | problematic replies, rules violated, current approval flow | security / AI governance |
| Vendor or platform selection | workflow below plus local checklists | use case fit, autonomy level, CRM fit, approval model, cost | budget, channels, process maturity, operator capacity | procurement / architecture review |

## Workflow

### Phase 1: Intake and boundary check

1. Confirm the business goal.
   - Examples: more qualified meetings, faster reply handling, lower SDR cost, better routing.
2. Confirm geography and channels.
   - Outreach rules vary by region and channel.
3. Confirm whether the request is strategic or implementation-heavy.
   - If implementation-heavy, hand off early.
4. Identify who owns human follow-up.
   - No owner means no launch.
5. Ask whether outreach volume, automation scope, or compliance posture has already caused incidents.

**Go / no-go gate:** Do not recommend an AI SDR launch until geography, channels, CRM ownership, and suppression handling are known.

### Phase 2: Readiness assessment

Assess five readiness areas:

1. **ICP clarity**
   - defined target segments
   - inclusion signals
   - exclusion rules
2. **Data quality and minimization**
   - source quality
   - enrichment quality
   - duplicate control
   - suppression lists
   - only necessary prospect fields exposed to automation
3. **Sender readiness**
   - mailbox/domain setup
   - authentication status
   - one-click unsubscribe handling where applicable
   - complaint and bounce monitoring
4. **CRM readiness**
   - lifecycle stages
   - owner assignment
   - state transitions
   - SLA for follow-up
5. **Automation boundaries**
   - what the AI may do alone
   - what requires approval
   - what must always route to a human

Use:

- `references/deliverability-and-authentication-checklist.md`
- `references/outbound-compliance-checklist.md`
- `references/privacy-and-data-minimization-worksheet.md`
- `references/crm-field-mapping-template.md`
- `references/human-in-the-loop-policy.md`

**Go / no-go gate:** If sender authentication, unsubscribe processing, suppression logic, privacy review, or CRM ownership is undefined, recommend a readiness plan instead of launch.

### Phase 3: Qualification and routing design

Define the AI SDR operating model.

1. Build a qualification matrix.
   - required signals
   - optional signals
   - score bands
   - disqualifiers
2. Define reply classes.
   - positive
   - neutral
   - objection
   - negative
   - compliance-sensitive
3. Map each class to an action.
   - human handoff
   - approved follow-up
   - suppress
   - escalate
4. Map each action to a CRM update.
5. Define SLA targets for handoff and follow-up.
6. Define what evidence is retained for audit and review.

Use:

- `references/crm-field-mapping-template.md`
- `references/human-in-the-loop-policy.md`
- `examples/handoff-sla-template.md`
- `examples/reply-classification-test-set.md`

**Recommended operator output:** a routing matrix, qualification scorecard, CRM field map, and handoff SLA table.

### Phase 4: Pilot design

Start narrow.

1. Limit audience to a well-defined ICP slice.
2. Start with approved templates or reviewed message variants.
3. Restrict autonomous behavior to low-risk actions.
4. Require human review for pricing, legal, procurement, security, or custom claims.
5. Define pause conditions before launch.
6. Define sample window and metrics before the first send.

**Pause conditions:** complaint spike, bounce spike, repeated false qualification, duplicate CRM state errors, unauthorized claims, or unresolved opt-out handling.

### Phase 5: Evaluation before scaling

Measure quality, not vanity alone.

Track at least:

- delivery rate
- bounce rate
- complaint rate
- unsubscribe rate
- positive reply rate
- positive reply precision
- qualified meeting rate
- meeting acceptance rate
- show rate
- opportunity conversion rate
- time to human handoff
- routing accuracy on labeled cases

Use:

- `references/eval-scorecard.md`
- `references/experiment-log-template.md`
- `examples/reply-classification-test-set.md`

Do not scale based on opens or raw reply rate alone.

### Phase 6: Optimization and handoff

1. Review reply misclassification cases.
2. Review false-positive qualification cases.
3. Review sender-health trends.
4. Review rep feedback on meeting quality.
5. Tighten prompts, templates, score thresholds, or routing rules.
6. Log each meaningful change with hypothesis, sample window, and rollback criteria.
7. Hand off adjacent tasks when the work becomes primarily:
   - copy optimization
   - CRM redesign
   - prompt tuning
   - evaluation engineering
   - compliance review

## Examples

### Example 1: Intake for a first pilot

```text
Use @ai-sdr to design a first AI SDR pilot for a B2B SaaS company targeting the US and UK. Start by checking geography, channels, CRM ownership, sender readiness, suppression handling, privacy review, and qualification criteria. If readiness is incomplete, return a no-launch checklist before suggesting vendors or sequences.
```

**Expected outcome:** A readiness-first plan with explicit gaps, launch gates, and a narrow pilot recommendation.

### Example 2: Diagnose poor meeting quality

```text
Use @ai-sdr to diagnose why our AI SDR is booking meetings that never convert. Review qualification thresholds, disqualifiers, reply classification, CRM stage changes, and human handoff speed. Return likely root causes, immediate containment steps, and metrics to review next.
```

**Expected outcome:** A structured diagnosis focused on qualification precision, routing errors, and handoff discipline.

### Example 3: Review deliverability risk before launch

```text
Use @ai-sdr to run a launch-readiness review for outbound email. Verify SPF, DKIM, DMARC, unsubscribe handling, complaint monitoring, bounce handling, and ownership of suppression lists. Return a launch/no-launch recommendation with unresolved blockers.
```

**Expected outcome:** A concise readiness checklist the operator can attach to a review packet.

### Example 4: Compare vendor approaches safely

```text
Use @ai-sdr to compare a managed AI SDR vendor, a sending platform plus enrichment stack, and a custom workflow. Evaluate autonomy level, approval controls, CRM fit, deliverability ownership, and pilot complexity. Do not assume vendor claims are validated.
```

**Expected outcome:** A decision worksheet that favors fit and controls over marketing claims.

### Example 5: Build a reply review set

```text
Use @ai-sdr to label 25 historical replies into positive, neutral, objection, negative, and compliance-sensitive categories, then propose routing rules and human-review boundaries before any auto-response policy is enabled.
```

**Expected outcome:** A starter eval set and routing policy draft.

## Best Practices

### Do

- Confirm region, channel, and suppression handling before recommending outbound automation.
- Keep AI SDR scope narrow at first: qualification, routing, templated follow-up, and CRM logging are safer than broad autonomy.
- Require clear CRM ownership and handoff SLAs.
- Use explicit disqualifiers and exclusion lists before enrollment.
- Track positive reply precision and meeting quality, not just volume.
- Pause scaling if complaint rate, bounce rate, or routing errors worsen.
- Use human approval for pricing, security, procurement, legal, contract, or custom technical claims.
- Minimize the data exposed to reply-classification and drafting systems.
- Treat inbound replies as untrusted input; do not let them trigger arbitrary tool actions.
- Verify vendor fit against process maturity and operating capacity, not just headline automation claims.
- Test one major change at a time and record why it was made.

### Do not

- Do not present this skill as legal advice.
- Do not recommend high-volume scaling before authentication, unsubscribe handling, and complaint monitoring are in place.
- Do not allow the AI SDR to make pricing promises, contractual statements, or security commitments autonomously.
- Do not enroll weak-fit leads just to increase sequence volume.
- Do not optimize on opens or raw reply rate alone.
- Do not let reply automation access more CRM context than it needs.
- Do not assume a tool swap will fix weak ICP, poor messaging, or unclear handoff rules.
- Do not infer sensitive attributes or enrich more personal data than is necessary for the workflow.

### Practical operating defaults

Use these as conservative defaults unless the operator provides better evidence:

- launch with a narrow ICP slice, not the whole TAM
- define disqualifiers before defining scale targets
- keep per-stage CRM ownership explicit
- require human review for high-stakes replies
- review pilot results weekly before expanding scope
- keep a labeled reply set for regression checks after rule changes

## Troubleshooting

### Problem: Deliverability degraded after launch

**Symptoms:** Delivery rate falls, bounce rate rises, spam complaints increase, or mailbox reputation appears to worsen after a volume increase.

**Likely causes:**
- missing or broken SPF, DKIM, or DMARC
- missing one-click unsubscribe handling where expected
- poor list quality
- abrupt volume expansion
- sender readiness assumptions were never validated

**Solution:**
1. Pause expansion immediately.
2. Verify authentication and alignment.
3. Check unsubscribe and suppression handling.
4. Review bounce and complaint trends by mailbox and segment.
5. Reduce sends to the last known stable level.
6. Resume only after sender readiness is re-confirmed.

Use `references/deliverability-and-authentication-checklist.md`.

### Problem: Reply rate is acceptable, but meetings are low quality

**Symptoms:** Replies increase, but accepted meetings do not progress, show rates fall, or AEs report poor fit.

**Likely causes:**
- weak qualification thresholds
- over-broad personalization claims
- bad-fit segments included in enrollment
- routing too early on neutral signals

**Solution:**
1. Review the qualification score bands.
2. Add or tighten disqualifiers.
3. Compare positive reply labels against actual meeting outcomes.
4. Reclassify borderline replies conservatively.
5. Route fewer ambiguous cases directly to meetings.

Use `references/eval-scorecard.md` and `references/crm-field-mapping-template.md`.

### Problem: The AI SDR qualifies too many false positives

**Symptoms:** Many leads are marked qualified, but reps reject them, or downstream conversion is poor.

**Likely causes:**
- missing required signals
- poor CRM stage definitions
- intent or fit signals overweighted
- no exclusion list

**Solution:**
1. Separate required signals from optional signals.
2. Add a manual-review band between auto-qualify and disqualify.
3. Track false-positive examples in a labeled set.
4. Adjust thresholds based on actual opportunity creation, not reply volume.

Use `references/crm-field-mapping-template.md` and `examples/reply-classification-test-set.md`.

### Problem: The agent made an unsafe or unauthorized response

**Symptoms:** The AI promised pricing, made a legal or security statement, overcommitted on product capability, or answered a sensitive objection without approval.

**Likely causes:**
- unclear autonomy boundaries
- weak approval policy
- excessive context exposure
- no sensitive-reply escalation path

**Solution:**
1. Stop autonomous replies for the affected class immediately.
2. Review the exact instructions, rules, and context supplied.
3. Move the reply class behind human approval.
4. Add the example to the eval set and policy notes.
5. Re-launch only after approval gates are explicit.

Use `references/human-in-the-loop-policy.md` and `examples/reply-classification-test-set.md`.

### Problem: CRM stages, owners, or sync behavior are inconsistent

**Symptoms:** Duplicate lead states, missing owners, delayed follow-up, or disagreement between AI labels and CRM lifecycle stages.

**Likely causes:**
- undefined lifecycle transitions
- no owner mapping by reply type
- duplicate creation across tools
- inconsistent SLA handling

**Solution:**
1. Map each reply class to a single CRM state transition.
2. Assign one accountable owner per transition.
3. Review duplicate creation paths.
4. Set and monitor a handoff SLA.
5. Fix lifecycle definitions before further scale.

Use `references/crm-field-mapping-template.md` and `examples/handoff-sla-template.md`.

### Problem: The workflow was paused because compliance or privacy risk is unclear

**Symptoms:** The team cannot confirm opt-out handling, sender identification, regional review requirements, or whether enrichment fields are necessary and appropriate.

**Likely causes:**
- no documented review process for new regions or channels
- unclear ownership of suppression lists
- too much prospect data collected for the workflow
- compliance assumptions made from vendor marketing

**Solution:**
1. Stop scaling or expansion into the affected region or channel.
2. Review sender identification, opt-out, and suppression handling.
3. Reduce enrichment fields to the minimum needed.
4. Document open questions for legal or privacy review.
5. Resume only after obligations and ownership are clear.

Use `references/outbound-compliance-checklist.md` and `references/privacy-and-data-minimization-worksheet.md`.

### Problem: Swapping vendors or tools did not improve outcomes

**Symptoms:** New tooling changed workflow cost or UI, but reply quality, qualification precision, or meeting quality did not improve.

**Likely causes:**
- weak ICP
- poor message system
- bad data quality
- no evaluation loop
- unclear human handoff rules

**Solution:**
1. Re-check ICP and exclusion logic.
2. Audit signal quality and enrichment coverage.
3. Evaluate reply classification on a labeled set.
4. Review rep feedback on meetings.
5. Change process and rules before changing tools again.

Use `references/eval-scorecard.md` and `references/experiment-log-template.md`.

## Related Skills

- `@ai-cold-outreach` - Use when the work shifts to sequence copy, messaging tests, or personalization quality.
- `@prompt-engineering` - Use when classifier prompts, objection-handling prompts, or prompt structure become the main problem.
- `@evals` - Use when the task becomes building or improving formal evaluation sets, scoring, precision and recall review, or regression checks.
- `@crm-ops` - Use when lifecycle stages, deduplication, ownership, or routing integrity become the main issue.
- `@security` - Use when approval boundaries, data leakage, prompt injection, or governance controls dominate the work.
- `@legal` or jurisdiction-specific counsel - Use when the team needs legal interpretation rather than operational review guidance.

## Additional Resources

### Local support pack

- [Deliverability and authentication checklist](references/deliverability-and-authentication-checklist.md)
- [Outbound compliance checklist](references/outbound-compliance-checklist.md)
- [Privacy and data minimization worksheet](references/privacy-and-data-minimization-worksheet.md)
- [Human-in-the-loop policy](references/human-in-the-loop-policy.md)
- [Eval scorecard](references/eval-scorecard.md)
- [CRM field mapping template](references/crm-field-mapping-template.md)
- [Experiment log template](references/experiment-log-template.md)
- [Reply classification test set](examples/reply-classification-test-set.md)
- [Handoff SLA template](examples/handoff-sla-template.md)
- [AI SDR router note](agents/ai-sdr-router.md)

### Upstream intent preserved

The upstream source emphasized:

- AI SDR deployment sequencing
- signal-based ICP scoring
- enrichment workflows
- multi-step outreach logic
- routing and handoff discipline
- platform comparisons and budget-aware selection

Those themes are preserved here, but this version adds stronger operational guardrails for compliance boundaries, deliverability readiness, CRM governance, evaluation, and safe autonomy.

### Provenance note

This enhanced candidate preserves the identity and scope of the original AI SDR skill while replacing generic import-wrapper language with a directly usable operator workflow in English.
