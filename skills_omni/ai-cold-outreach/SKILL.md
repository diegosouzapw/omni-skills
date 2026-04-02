---
name: "ai-cold-outreach"
description: "AI Cold Outreach workflow skill. Use this skill when a user needs to design or improve an AI-assisted cold outreach system, write compliant cold emails, diagnose deliverability issues, or scale personalization safely. Also use when the request mentions cold email, cold outreach, outreach automation, Instantly, Smartlead, Clay, email sequences, deliverability, personalization at scale, reply rate, or outreach stack. This skill covers the operating workflow from ICP and signal selection through compliance checks, list quality, copy, sequencing, sending readiness, and reply handling. Do not use this skill for legal determinations, mailbox or DNS administration execution, or custom software implementation."
version: "0.0.1"
category: "development"
tags:
  - "ai-cold-outreach"
  - "cold-email"
  - "deliverability"
  - "email-sequences"
  - "personalization"
  - "clay"
  - "instantly"
  - "smartlead"
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
upstream_skill: "skills/ai-cold-outreach"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# AI Cold Outreach

## Overview

This skill packages the upstream workflow from `packages/skills-catalog/skills/(gtm)/ai-cold-outreach` in `https://github.com/tech-leads-club/agent-skills.git` while curating it into a safer, more operational Omni Skills format.

Use it to plan, audit, and improve AI-assisted cold outreach systems across:

- ICP and signal selection
- list enrichment and verification
- cold email copy and sequence design
- deliverability readiness and diagnostics
- unsubscribe and suppression handling
- reply handling and conversion workflow

This skill is **deliverability-first**, not copy-first. Do not jump straight to writing sequences if the sender lacks compliance clarity, domain ownership, mailbox readiness, authentication, or suppression handling.

This skill can summarize compliance considerations and help prepare review packets, but it is **not legal advice**. Route jurisdiction-specific questions and edge cases to qualified counsel or a compliance specialist.

## When to Use This Skill

Use this skill when:

- the user wants to build an AI-powered cold outreach system from scratch
- the user wants to improve reply rate, inbox placement, or sequence quality
- the user mentions cold email, outbound, Instantly, Smartlead, Clay, enrichment, first-line personalization, list quality, or outreach stack
- the operator needs a structured workflow from signals through conversion, with troubleshooting and support files
- the task is mainly strategic, editorial, diagnostic, or operational rather than code implementation

Do **not** use this skill when:

- the user needs legal interpretation or definitive compliance approval for a jurisdiction
- the user needs DNS changes, mailbox admin work, or provider-console remediation executed directly
- the user needs CRM/API/webhook implementation, automation architecture, or software debugging
- the user only needs generic copywriting with no outreach-system context
- the user wants deceptive sending, hidden sender identity, opt-out avoidance, or bulk spam tactics

Before giving launch guidance, confirm:

1. target geography and audience type
2. how contacts were sourced
3. whether messages are commercial or promotional in nature
4. which sending domain and mailbox setup are in scope
5. whether unsubscribe and suppression handling already exist

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New outreach program | `references/compliance-decision-tree.md` and `examples/campaign-preflight-brief.md` | Establishes legal-review boundaries, sender readiness, and go/no-go checks before copy or scaling |
| New sending domain or mailbox setup under consideration | `references/dns-authentication-checklist.md` and `references/sender-requirements-summary.md` | Clarifies SPF, DKIM, DMARC, alignment, TLS, and unsubscribe requirements before launch |
| Sequence drafting or copy refresh | `references/metrics-and-thresholds.md` and `examples/unsubscribe-and-objection-response-templates.md` | Keeps copy specific, measurable, and aligned with reply handling and suppression duties |
| Low reply rates | `references/deliverability-troubleshooting-matrix.md` and `references/metrics-and-thresholds.md` | Distinguishes targeting/copy problems from inbox-placement or list-quality problems |
| Spam-rate spike or bulk-folder placement | `references/sender-requirements-summary.md` and `references/deliverability-troubleshooting-matrix.md` | Provides a pause-and-diagnose flow before more domains are damaged |
| Geo-specific compliance uncertainty | `references/compliance-decision-tree.md` | Helps summarize considerations without presenting legal advice as a final determination |
| Handoff or review packet | upstream import references plus local worksheets in this skill | Preserves provenance while adding operator-ready audit assets |

## Workflow

1. **Confirm scope and boundaries**  
   Gather ICP, offer, volume goal, current tools, target geographies, audience type, and data source. If these are missing, ask before proposing a send plan.

2. **Check compliance posture first**  
   Determine whether the campaign is commercial/promotional, what jurisdictions are implicated, whether opt-out handling exists, and whether legal review is required. Use `references/compliance-decision-tree.md`.

3. **Check sender readiness**  
   Confirm the operator controls the sending domain, understands mailbox/domain strategy, and has access to the team that manages DNS and mailbox settings. Use `references/dns-authentication-checklist.md` and `references/sender-requirements-summary.md`.

4. **Verify authentication before launch**  
   Require test-send validation for SPF pass, DKIM pass, and DMARC alignment on the actual sending path. Do not treat DNS records as complete until the test path verifies correctly.

5. **Review list quality and enrichment path**  
   Audit contact source, verification method, waterfall enrichment logic, and whether recent verification is in place. Do not recommend scale if bounce risk is unclear.

6. **Design targeting and personalization**  
   Select signals, define segmentation, and draft first-line personalization rules that avoid unverifiable, invasive, or creepy claims.

7. **Draft the sequence**  
   Build the opener, follow-ups, CTA progression, and reply branches. Keep the first touch lightweight and avoid links, images, or attachments unless there is a specific reason.

8. **Run pre-send QA**  
   Validate claims, CTA count, sender identity clarity, unsubscribe handling, segmentation fit, and first-touch hygiene. Use `examples/campaign-preflight-brief.md` as an intake and review scaffold.

9. **Define launch gates**  
   Set initial pacing, monitoring cadence, ownership for replies and removals, and stop conditions for bounce spikes, complaint spikes, or abnormal inbox placement.

10. **Monitor and troubleshoot**  
    Review bounce rate, spam/complaint signals, unsubscribe handling, reply quality, and domain reputation indicators. Use `references/metrics-and-thresholds.md` and `references/deliverability-troubleshooting-matrix.md`.

11. **Escalate when needed**  
    Route legal ambiguity to counsel, DNS/provider remediation to mail administrators, and implementation work to a technical automation skill or owner.

### Intake Questions

Ask these before giving build or scale advice:

1. Who is the exact ICP: title, segment, company size, industry, and relevant stack?
2. Are you building net-new outbound or improving an existing system?
3. What daily or weekly send volume is planned?
4. Which tools are already in use for CRM, enrichment, sequencing, and reply handling?
5. Which countries or regions will recipients be in?
6. How were the contacts sourced, and when were emails last verified?
7. Which domain(s) and mailbox pool will send the campaign?
8. What unsubscribe and suppression process exists today?
9. Who will monitor deliverability and process replies or opt-outs?
10. What result matters most right now: reply rate, meetings booked, inbox placement, or safe launch?

### Imported Workflow Notes

The upstream workflow remains useful and is preserved in intent: signal detection, enrichment, AI personalization, sequencing, sending infrastructure, and AI-powered follow-up. Use that model, but apply it with the readiness and compliance gates above.

## Examples

### Example 1: New outbound system intake

```text
Use @ai-cold-outreach to design a founder-led outbound motion for a B2B SaaS product. Start by asking for ICP, target geography, contact source, current tools, sending domains, unsubscribe handling, and target volume. Do not draft the sequence until sender readiness and compliance-review needs are clear.
```

**Expected outcome:** A phased plan covering ICP, signal strategy, compliance routing, deliverability readiness, sequence structure, launch gates, and what must be confirmed before sending.

### Example 2: Diagnose low reply rate safely

```text
Use @ai-cold-outreach to audit why our cold campaign has low reply rates. Separate list quality, inbox placement, and copy issues. Use the metrics glossary and troubleshooting matrix, then propose the top 3 fixes in priority order.
```

**Expected outcome:** A diagnostic summary that distinguishes targeting, deliverability, and copy problems instead of assuming the copy is the only issue.

### Example 3: Pre-send QA packet

```text
Use @ai-cold-outreach to review this 5-touch sequence before launch. Check first-touch hygiene, CTA count, claims, sender identity, personalization safety, unsubscribe handling, and whether any step should be rewritten or removed.
```

**Expected outcome:** A launch-readiness checklist with red flags, rewrites, and a clear go / revise / pause recommendation.

### Example 4: Unsubscribe and objection handling

```text
Use @ai-cold-outreach to draft compliant reply handling for unsubscribes, not-interested replies, and timing objections. Keep the language brief, respectful, and suitable for suppression workflows.
```

**Expected outcome:** Low-risk reply templates that confirm removal, avoid arguing with the recipient, and route legitimate referrals or timing follow-ups safely.

### Example 5: Review provenance and local support materials

```bash
python3 skills/ai-cold-outreach/scripts/omni_import_print_origin.py
python3 skills/ai-cold-outreach/scripts/omni_import_list_support_pack.py
```

**Expected outcome:** A quick review of upstream origin plus the available local support pack for audit and handoff.

## Best Practices

### Do

- start with geography, data source, and sender-readiness questions before drafting outreach
- treat deliverability and unsubscribe handling as launch blockers, not cleanup tasks
- keep claims specific and supportable; prefer observable business signals over guesswork
- verify contacts and maintain suppression lists before scaling volume
- keep first touches simple: one CTA, minimal links, no attachments by default
- preserve provenance to the upstream workflow when summarizing or handing off
- use pause conditions when bounce, complaint, or reputation signals worsen
- route legal uncertainty, DNS changes, and mailbox remediation to the right owner
- inventory all legitimate senders before tightening DMARC policy
- propagate objections and unsubscribes across all tools that may continue sending

### Do Not

- present compliance summaries as legal advice
- recommend deceptive sender identity, misleading domains, or disguised commercial intent
- assume warmup, authentication, or unsubscribe support exists without confirmation
- use invasive personalization based on sensitive or weakly inferred personal data
- scale volume because copy looks good while bounce or spam signals remain unresolved
- rely on open rate alone as the main success metric
- add multiple CTAs, images, banners, or attachments to first-touch emails by default
- recommend bypassing mailbox-provider sender requirements by rotating more domains or mailboxes

### Copy Rules That Usually Improve Outcomes

- keep the opener anchored to one concrete trigger, observation, or timing cue
- use one credibility statement, not a stack of vague social proof
- make the CTA low-friction and easy to answer by reply
- avoid over-personalizing every line; strong first-line relevance usually matters more
- remove hype phrases, fake familiarity, and unverifiable superlatives
- avoid personal or social details that may feel invasive even if publicly accessible

## Troubleshooting

### Problem: Messages are landing in spam or bulk folders

**Symptoms:** Reply rate drops sharply, inbox placement collapses after volume increases, or mailbox providers begin rejecting or bulk-foldering mail.

**Solution:** Pause scaling. Check SPF, DKIM, and DMARC presence and alignment; confirm the visible From domain aligns with authenticated mail; verify TLS and any tracking or return-path configuration; review spam-rate indicators and recent volume pacing; confirm first-touch messages are not carrying extra links, images, or aggressive formatting. Use `references/sender-requirements-summary.md` and `references/deliverability-troubleshooting-matrix.md`.

### Problem: Bounce rate rises above safe range

**Symptoms:** Hard bounces increase, valid-contact coverage looks suspiciously high, or a new provider/import causes more invalid addresses.

**Solution:** Audit list source, verification recency, catch-all handling, role-account usage, and enrichment waterfall logic. Suppress poor sources, re-verify before the next send wave, and reduce volume until the issue is isolated. Use `references/metrics-and-thresholds.md` and `references/deliverability-troubleshooting-matrix.md`.

### Problem: DMARC reports show failures after adding a new sender tool

**Symptoms:** Aggregate reports show new alignment failures, previously healthy traffic starts failing policy checks, or mailbox providers begin rejecting a subset of messages.

**Solution:** Inventory every legitimate sender, confirm which domain appears in the visible From address, ensure the new tool is authorized in SPF or signs with aligned DKIM, and retest with controlled sends before resuming scale. Do not move to stricter DMARC enforcement until alignment is stable. Use `references/dns-authentication-checklist.md`.

### Problem: Unsubscribe complaints or removal failures appear

**Symptoms:** Recipients say they already opted out, campaigns are flagged as spam instead of unsubscribed, or suppression handling is unclear across tools.

**Solution:** Treat this as an operational defect. Confirm unsubscribe language and process, platform suppression behavior, cross-tool suppression sync, and whether the relevant sender requirements apply for easy or one-click unsubscribe support. Route unclear legal requirements for the target geography to counsel. Use `references/compliance-decision-tree.md`, `references/sender-requirements-summary.md`, and `examples/unsubscribe-and-objection-response-templates.md`.

### Problem: Reply rate is low but delivery looks normal

**Symptoms:** Bounce and complaint indicators are stable, but prospects do not respond.

**Solution:** Audit ICP fit, signal quality, first-line specificity, proof sentence credibility, and CTA friction. Compare segments separately rather than averaging all results together. Test one major variable at a time: subject line, first line, or CTA. Use `references/metrics-and-thresholds.md` and the upstream three-line framework notes.

### Problem: Tracking or rich formatting seems to hurt placement

**Symptoms:** Placement worsens after enabling open/click tracking, adding multiple links, or using heavier templates.

**Solution:** Simplify the first touch. Remove non-essential links and images, test plain formatting, verify the tracking domain is configured correctly if used, and compare placement on a small cohort before restoring extras. Use `references/deliverability-troubleshooting-matrix.md`.

### Problem: AI-generated copy sounds generic, risky, or fabricated

**Symptoms:** The email reads like template spam, includes claims that cannot be verified, or uses oddly intimate personalization.

**Solution:** Tighten the prompt to only use provided facts, ban hype phrases, require one concrete observation, and prohibit inferred personal details. Regenerate against a smaller set of trusted inputs.

### Problem: The task drifts into legal, admin, or implementation work

**Symptoms:** The user asks whether the campaign is lawful in a specific jurisdiction, asks you to modify DNS or mailbox settings, or wants API, webhook, or CRM build-out details.

**Solution:** Keep the outreach strategy packet, summarize the operational issue, and hand off deliberately. Preserve provenance to the upstream workflow.

## Related Skills

- `@ai-sdr` - Use when the task shifts from outreach-system design toward SDR process design and sales execution.
- `@ai-pricing` - Use when weak conversion appears rooted in offer packaging or commercial positioning instead of outreach mechanics.
- `@ai-seo` - Use when the real need is inbound demand capture rather than outbound prospecting.
- a legal or privacy/compliance specialization - Use when jurisdiction-specific email marketing rules or profiling questions require formal interpretation.
- an email-admin or infrastructure specialization - Use when DNS, mailbox authentication, reverse DNS, or provider remediation must be executed.
- an automation or implementation specialization - Use when the user needs APIs, webhooks, CRM syncing, or workflow code.

## Additional Resources

### Planning and launch readiness

- [Compliance decision tree](references/compliance-decision-tree.md)
- [Metrics and thresholds](references/metrics-and-thresholds.md)
- [Campaign preflight brief](examples/campaign-preflight-brief.md)

### Infrastructure and authentication

- [DNS authentication checklist](references/dns-authentication-checklist.md)
- [Sender requirements summary](references/sender-requirements-summary.md)

### Troubleshooting and reply handling

- [Deliverability troubleshooting matrix](references/deliverability-troubleshooting-matrix.md)
- [Unsubscribe and objection response templates](examples/unsubscribe-and-objection-response-templates.md)

### Imported provenance and upstream support

Keep the original import support available for provenance, audit, and review flow:

- `references/omni-import-checklist.md`
- `references/omni-import-rubric.md`
- `references/omni-import-playbook.md`
- `references/omni-import-source-summary.md`
- `examples/omni-import-operator-packet.md`
- `examples/omni-import-prompt-template.md`
- `scripts/omni_import_print_origin.py`
- `scripts/omni_import_list_support_pack.py`

## Imported Reference Notes

### Imported: The AI Outreach Stack

The upstream six-stage model remains a useful mental model:

1. Signal detection
2. Enrichment
3. Personalization
4. Sequencing
5. Sending
6. Follow-up

Apply it with this skill's stronger launch gates:

- compliance before send
- authentication before scale
- verification before volume
- suppression before automation
- monitoring before iteration

### Imported: The 3-Line Cold Email Framework

The upstream three-line structure is still useful when adapted safely:

- **Line 1:** one specific observation tied to a real signal
- **Line 2:** one concise, supportable proof point
- **Line 3:** one low-friction CTA

Use this shape for simplicity, but do not treat it as permission to skip compliance, sender readiness, or list quality review.
