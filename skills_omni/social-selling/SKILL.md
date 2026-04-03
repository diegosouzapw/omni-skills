---
name: "social-selling"
description: "Social selling workflow skill. Use this skill when a user needs a safer, measurable system for LinkedIn-led social prospecting, profile optimization, Sales Navigator research, DM sequencing, employee advocacy, or turning content engagement into pipeline without relying on scraping, spam, or unsupported automation claims."
version: "0.0.1"
category: "development"
tags:
  - "social-selling"
  - "linkedin-selling"
  - "sales-navigator"
  - "dm-sequences"
  - "social-prospecting"
  - "employee-advocacy"
  - "content-to-pipeline"
  - "linkedin-optimization"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
upstream_skill: "skills/social-selling"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Social Selling Skill

## Overview

This skill helps an operator design or improve a social selling system centered on LinkedIn and adjacent professional channels.

It preserves the upstream intent from `tech-leads-club/agent-skills` while replacing brittle or weakly sourced tactics with a safer operating model:

- optimize professional presence for credibility and relevance
- use Sales Navigator for research, prioritization, and trigger monitoring
- convert content engagement into consent-based conversations
- track social activity through CRM-visible stages
- avoid scraping, deceptive behavior, spam, and unsupported automation advice

Use this skill for strategy, workflow design, message drafting, profile rewrites, outreach planning, and content-to-pipeline attribution. Do not use it to justify scraping, mass automation, platform workarounds, or unverifiable “algorithm hacks.”

## When to Use This Skill

Use this skill when the user needs to:

- improve a LinkedIn profile so it supports credibility, positioning, and sales conversations
- build a social selling workflow from profile to content to DM to meeting
- use LinkedIn Sales Navigator for account research, list building, or trigger-based prioritization
- create personalized connection requests or DM sequences for warm, lukewarm, or trigger-based outreach
- turn content engagement into a repeatable pipeline motion with CRM attribution
- design founder-led or employee-led advocacy that routes replies into sales follow-up
- diagnose weak profile views, low connection acceptance, poor reply rates, or weak social attribution

Do **not** use this skill when the task is primarily:

- scraping LinkedIn or exporting data through unauthorized means
- setting up bots, browser automation, or bulk message systems
- paid social ad operations
- CRM implementation or API integration work
- legal advice, privacy review, or policy interpretation beyond basic safe-use guidance
- requests to game reach with unsupported algorithm myths or artificial engagement schemes

## Operating Table

| Situation | Start here | Output |
| --- | --- | --- |
| Profile is underperforming | `references/profile-audit-checklist.md` | Gap list and rewritten profile draft |
| Targeting is unclear | `references/sales-navigator-workflow.md` | ICP, account list, lead list, and trigger plan |
| Messages are being ignored | `references/dm-safety-and-personalization-rules.md` | Safer sequence with stronger personalization |
| Content gets engagement but no meetings | `references/content-to-pipeline-attribution.md` | CTA map, attribution fields, and review cadence |
| Team-led advocacy is needed | `references/employee-advocacy-operating-model.md` | Roles, review flow, escalation path |
| The task may belong elsewhere | `agents/router.md` | Handoff to adjacent specialization |

## Workflow

1. **Clarify the motion.** Confirm whether the user needs profile optimization, prospecting, DMs, content strategy, employee advocacy, or full social-selling system design.
2. **Collect core inputs.** Ask for ICP, offer, typical buyer titles, deal size, sales cycle, current posting cadence, current profile state, CRM, and whether Sales Navigator is available.
3. **Set platform and risk boundaries.** Default to policy-safe, human-reviewed workflows. Do not recommend scraping, deceptive identity use, engagement pods, or bulk automation.
4. **Audit the profile first.** If credibility is weak, fix headline, About section, Featured proof, experience outcomes, contact path, and public profile hygiene before scaling outreach.
5. **Define targeting logic.** Build the ICP, then convert it into account criteria, lead criteria, saved searches, and trigger events.
6. **Map the conversation path.** Decide how a prospect should move from profile visit or content engagement to connection, DM, reply, and meeting.
7. **Create content and outreach assets.** Draft profile copy, message variants, CTA options, content themes, and follow-up logic tied to buyer readiness.
8. **Add measurement.** Use the attribution model and scorecard so social activity can be reviewed weekly as a pipeline input, not just as vanity engagement.
9. **Troubleshoot by bottleneck.** If results are weak, determine whether the problem is profile credibility, targeting quality, message quality, content-to-CTA fit, or logging discipline.
10. **Route or hand off when necessary.** If the request turns into copywriting-heavy work, SDR operations, CRM implementation, or legal/policy review, use `agents/router.md`.

### Intake Questions

Ask only the questions needed to move the workflow forward:

1. Who is the ICP? Include title, company size, industry, and geography.
2. What is the offer or outcome being sold?
3. Is the motion founder-led, seller-led, or team-led?
4. What is the current LinkedIn state: profile active, posting cadence, SSI if known, Sales Navigator access?
5. What social proof exists already: case studies, testimonials, metrics, customer stories, media, or assets?
6. What conversion step matters most right now: profile credibility, connections, replies, meetings, or opportunities?
7. What CRM or tracking system is being used today?
8. Are there any account warnings, message restrictions, or prior automation concerns?

## Examples

### Example 1: Rewrite a LinkedIn profile for selling

```text
Use @social-selling to audit my LinkedIn profile for B2B SaaS selling. My ICP is RevOps leaders at 50-500 employee SaaS companies. Rewrite my headline, About section, and Featured section using a prospect-centered structure.
```

Expected output:

- a short gap analysis
- revised headline options
- a 4-part About draft
- recommended proof assets for Featured
- one clear CTA

### Example 2: Build a Sales Navigator prospecting plan

```text
Use @social-selling to create a LinkedIn Sales Navigator workflow for selling security services to mid-market fintech companies. Prioritize trigger events and produce a weekly prospecting routine plus CRM fields to log.
```

Expected output:

- ICP definition
- account and lead list logic
- saved search ideas
- trigger-event priorities
- weekly operating cadence
- attribution fields

### Example 3: Repair a DM sequence that feels too salesy

```text
Use @social-selling to rewrite this outbound LinkedIn DM sequence so it feels relevant and low-pressure. Keep it personalized, reference real context, and include stop conditions after non-response.
```

Expected output:

- issues with the current sequence
- revised warm and lukewarm variants
- safer asks
- stop or nurture rules

### Example 4: Turn content engagement into meetings

```text
Use @social-selling to create a 2-week content-to-conversation playbook for a founder who posts 3 times per week and wants more qualified discovery calls from LinkedIn.
```

Expected output:

- content themes
- CTA by post type
- comment and DM follow-up rules
- weekly attribution review process

### Example 5: Team advocacy rollout

```text
Use @social-selling to design an employee advocacy motion for a 12-person sales and leadership team. We need roles, content review rules, response routing, and a simple scorecard.
```

Expected output:

- spokesperson model
- publishing and amplification workflow
- lead routing rules
- participation scorecard

## Best Practices

### Do

- optimize the profile before increasing outreach volume
- use LinkedIn and Sales Navigator as research and relationship tools, not extraction engines
- personalize every connection request or DM with real context
- keep the first ask small and relevant
- use one CTA per post or message
- treat SSI as a directional diagnostic, not proof of business impact by itself
- log social touches in CRM with source, trigger, and outcome fields
- stop repeated follow-up after clear non-response and move the contact to nurture
- use founder, executive, or employee voices only when the person can genuinely stand behind the content

### Do Not

- recommend scraping, bulk exporting, or unauthorized automation
- present third-party LinkedIn automation tools as inherently safe
- cite unsupported universal limits, reply rates, or algorithm penalties as facts
- send generic pitch-first DMs immediately after connecting
- use fake familiarity, deceptive identity, or bait-and-switch messaging
- treat content impressions as pipeline without a visible conversation path
- keep pushing after negative replies or account-warning signals

### Message Safety Rules

1. Be truthful about why you are reaching out.
2. Reference only context you can actually see or verify.
3. Ask for one next step at a time.
4. Avoid links in the first touch unless the user specifically asks for one.
5. If there is no reply after a reasonable sequence, stop and return to light nurture.
6. If the account shows warnings or restrictions, reduce activity and review platform policy before continuing.

### Automation Risk Classes

| Class | Examples | Risk guidance |
| --- | --- | --- |
| Native manual use | Profile edits, manual search, manual DMs, saved searches, alerts | Lowest risk; preferred default |
| Read-only analytics or drafting support | Content formatting, performance review, copy drafting | Lower risk, but verify current platform compatibility |
| Scheduling or workflow support outside LinkedIn actions | Internal planning, CRM logging, calendar follow-up | Usually acceptable if it does not impersonate platform actions |
| Tools that send invites/messages or automate browsing on the user’s behalf | Bulk outreach, auto-visits, auto-follows, scraping, browser bots | High risk; do not recommend as default and require explicit human policy review |

## Troubleshooting

### Problem: Profile views increase but conversations do not

**Symptoms:** More profile visits or post impressions, but few connection requests, inbound replies, or meetings.

**Likely causes:** Weak headline, vague About section, missing proof, unclear CTA, or content that attracts the wrong audience.

**Solution:** Audit the profile using `references/profile-audit-checklist.md`. Tighten positioning, add proof assets, and make the CTA explicit. Check whether the content themes match the ICP and buying problem.

### Problem: Connection acceptance is low

**Symptoms:** Personalized invites are being ignored or acceptance is materially below the user’s normal baseline.

**Likely causes:** ICP mismatch, weak personalization, unclear relevance, or outreach to cold contacts without visible context.

**Solution:** Narrow the targeting logic. Reference a real trigger, shared context, or relevant content interaction. Test a simpler connection request with no pitch and a clearer reason to connect.

### Problem: Connections accept but do not reply

**Symptoms:** New contacts accept the request, but first DMs receive little or no response.

**Likely causes:** The first message asks for too much, sounds templated, or arrives before any relationship warmth exists.

**Solution:** Use `references/dm-safety-and-personalization-rules.md` and `examples/dm-sequence-variants.md`. Remove the pitch, shorten the message, reference specific context, and ask one low-pressure question. If still weak, add a visible engagement step before the DM.

### Problem: Content gets engagement but no pipeline

**Symptoms:** Posts receive likes or comments, but few meaningful conversations, booked meetings, or opportunities.

**Likely causes:** The content has no clear next step, the CTA is too broad, or replies are not being converted into follow-up.

**Solution:** Use `references/content-to-pipeline-attribution.md` and `examples/content-to-conversation-playbook.md`. Assign one CTA per post type, route commenters into follow-up categories, and log the handoff in CRM.

### Problem: Outreach quality is fine, but targeting is weak

**Symptoms:** Message quality seems strong, but replies are low and meetings are poorly qualified.

**Likely causes:** The list is too broad, account triggers are weak, or lead selection is not tied to timing.

**Solution:** Rebuild the workflow with `references/sales-navigator-workflow.md`. Start from ICP, use account and lead filters conservatively, prioritize trigger events, and refresh saved searches on a regular cadence.

### Problem: Team advocacy creates inconsistent or risky messaging

**Symptoms:** Employees repost generic copy, claims become inconsistent, or leads are not routed cleanly.

**Likely causes:** No editorial process, unclear ownership, or no escalation path for comments and DMs.

**Solution:** Use `references/employee-advocacy-operating-model.md`. Define spokesperson roles, review rules, response ownership, and escalation handling before scaling participation.

### Problem: Account warnings, restrictions, or spam signals appear

**Symptoms:** Invitation limits, messaging warnings, account restrictions, or concern that prior tooling may have violated platform rules.

**Likely causes:** Aggressive activity, repetitive messages, poor recipient relevance, or unsafe automation.

**Solution:** Pause higher-risk activity. Return to manual, conservative use only. Review current LinkedIn policy and invitation guidance before resuming. Do not suggest workarounds. If tooling is involved, require human review before any continued use.

### Problem: Social activity cannot be attributed to pipeline

**Symptoms:** The team is active on LinkedIn, but cannot show which content, conversations, or triggers lead to meetings or opportunities.

**Likely causes:** Missing CRM fields, inconsistent logging, or no shared taxonomy for social touches.

**Solution:** Adopt the template in `assets/crm-attribution-template.csv` and the review process in `references/content-to-pipeline-attribution.md`. Track first touch, engaged touch, conversion touch, and outcome stage weekly.

## Related Skills

- `@ai-sdr` - use when the task becomes broader outbound-sales process design beyond social channels
- `@ai-cold-outreach` - use when the user needs email-first or multichannel outbound sequence writing
- `@ai-pricing` - use when the bottleneck is offer packaging, pricing, or commercial positioning
- `@accessibility` - unrelated to social selling; only route if the request actually changes domain and this skill is no longer appropriate

## Additional Resources

### Local support pack

- [Profile audit checklist](references/profile-audit-checklist.md)
- [Sales Navigator workflow](references/sales-navigator-workflow.md)
- [DM safety and personalization rules](references/dm-safety-and-personalization-rules.md)
- [Content-to-pipeline attribution](references/content-to-pipeline-attribution.md)
- [Employee advocacy operating model](references/employee-advocacy-operating-model.md)
- [Profile rewrite prompt](examples/profile-rewrite-prompt.md)
- [DM sequence variants](examples/dm-sequence-variants.md)
- [Content-to-conversation playbook](examples/content-to-conversation-playbook.md)
- [CRM attribution template](assets/crm-attribution-template.csv)
- [Social selling scorecard](assets/social-selling-scorecard.md)
- [Routing guidance](agents/router.md)

### Source and provenance notes

This enhanced version preserves the original upstream skill identity and intent from the public intake while curating the workflow into English and replacing weakly sourced claims with safer, more durable guidance.

Primary guidance reflected here includes:

- LinkedIn profile and public-profile hygiene guidance
- LinkedIn Sales Navigator workflow framing
- LinkedIn invitation and messaging policy boundaries
- LinkedIn User Agreement and Professional Community Policies
- vendor guidance on social selling attribution and CRM-connected workflow design
