---
name: "solo-founder-gtm"
description: "Solo founder GTM workflow skill. Use this skill when a solo founder needs to choose a go-to-market motion, instrument a lean funnel, design safe AI-assisted GTM operations, improve founder-led sales, or decide when process is mature enough to hire. Do not use it for legal advice, analytics implementation, CRM migration, or software architecture."
version: "0.0.1"
category: "business"
tags:
  - "solo-founder-gtm"
  - "solo-founder"
  - "founder-led-sales"
  - "lean-gtm"
  - "bootstrapped"
  - "ai-agents"
  - "self-serve"
  - "sales-led"
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
upstream_skill: "skills/solo-founder-gtm"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Solo Founder GTM: The Complete Playbook for Scaling Without Hiring

## Overview

Use this skill to help a solo founder build a practical go-to-market operating system before defaulting to hiring. It covers founder-led discovery, motion selection, lightweight stack choices, KPI instrumentation, safe AI-assisted GTM delegation, stage-based operating priorities, and readiness criteria for the first GTM hire.

This version preserves the intent of the upstream community workflow from `tech-leads-club/agent-skills` while rewriting it into an operator-ready Omni format. The goal is execution quality: help an agent guide a founder through GTM decisions with measurable checkpoints, explicit tradeoffs, and safe handoff boundaries.

Core principle: automate throughput, not judgment. Customer discovery, positioning, pricing decisions, and high-stakes customer interactions remain founder-owned until the process is repeatable and well-instrumented.

## When to Use This Skill

Use this skill when:

- A solo founder needs to choose between self-serve, sales-led, hybrid, content-led, outbound-led, or community-led GTM.
- The founder is doing too much manually and needs to decide what to automate first.
- Founder-led sales exist, but qualification, follow-up, or close rates are inconsistent.
- The founder wants an AI agent team for research, drafting, reporting, support triage, or scheduling, but needs safe approval boundaries.
- Growth is flattening and the founder needs a stage-specific operating plan tied to metrics.
- The founder is asking when to hire a contractor or first GTM employee.
- The founder mentions: solo founder, one-person startup, solopreneur, bootstrapped, no team, scaling without hiring, founder-led sales, lean GTM, or AI agents as team.

## Do Not Use / Route Elsewhere

Do not use this skill when the primary task is:

- Legal advice or jurisdiction-specific compliance interpretation.
- Writing or implementing production outbound infrastructure.
- Analytics engineering, event schema implementation, or warehouse design.
- CRM migration, CRM administration, or vendor-specific setup.
- Product architecture, code review, security review, or software implementation.
- Paid media buying, SEO execution, or channel-specific specialist work that needs a dedicated execution skill.
- Deliverability remediation deep dives beyond basic GTM hygiene.

If the request shifts into one of those domains, use this skill to define the GTM requirement, then hand off to the more specific implementation skill.

## Operating Table

| Stage | Primary goal | Core metrics to review weekly | Red flags | Next move |
| --- | --- | --- | --- | --- |
| $0-1K MRR / pre-repeatability | Validate painful problem and willingness to pay | customer conversations completed, problem frequency, activation to first value, paid conversions | lots of polite interest, little urgency, no one pays | narrow ICP, run more interviews, simplify offer |
| $1K-10K MRR | Find one repeatable acquisition motion | qualified leads, activation rate, demo-to-close rate, first-value time, founder hours per channel | trying too many channels, poor qualification, flat activation | cut to 1-2 channels, improve qualification and onboarding |
| $10K-50K MRR | Systematize what works | revenue by channel, retention/churn, sales cycle, response times, founder hours saved by automation | founder remains bottleneck, support slows product work, data is noisy | add automation with approval gates, document process, evaluate first contractor |
| $50K+ MRR | Increase revenue per founder-hour without losing quality | churn, expansion, revenue per founder-hour, pipeline coverage, support quality, handoff quality | full pipeline but slow follow-up, pricing confusion, founder approval overload | tighten process ownership, hire only after process is documented and demand is sustained |

For KPI definitions and a weekly review template, use:

- [Founder GTM operating system](references/founder-gtm-operating-system.md)
- [Funnel metrics scorecard](references/funnel-metrics-scorecard.md)
- [Weekly GTM review template](examples/weekly-gtm-review-template.md)

## Before Starting

Collect this baseline before recommending tools, automation, or hiring:

- one-paragraph product description based on shipped functionality only
- current MRR, paying customer count, and trend
- ICP hypothesis and strongest current use case
- ACV or average revenue per customer
- current acquisition channels and which one converts best
- whether sales are self-serve, founder-led, or mixed today
- time to first value for a new user
- founder weekly time split across product, sales, support, content, and operations
- current support burden
- what has already been tried and failed
- current stack and monthly spend
- biggest current bottleneck: discovery, activation, conversion, retention, support, or founder capacity

Use [Founder intake questionnaire](examples/founder-intake-questionnaire.md) if the user has not provided enough context.

## Workflow

1. **Capture the baseline**
   - Gather the intake inputs above.
   - Separate facts from assumptions.
   - Label missing data explicitly instead of guessing.

2. **Classify the current stage**
   - Determine whether the founder is mainly in validation, traction, systematization, or leverage.
   - Identify the single largest GTM constraint right now.
   - Use [Founder GTM operating system](references/founder-gtm-operating-system.md).

3. **Choose the primary motion**
   - Decide whether self-serve, sales-led, or hybrid is the core buying motion.
   - Decide whether content, outbound, community, or product-led loops should be the main acquisition motion.
   - Avoid recommending multiple primary motions unless there is evidence the founder can support them.

4. **Define the minimum measurable funnel**
   - At minimum, track:
     - acquisition source
     - signup or lead created
     - activation event
     - time to first value
     - payment started
     - payment completed
     - churn or cancel
     - support contact
   - Use [Funnel metrics scorecard](references/funnel-metrics-scorecard.md).

5. **Run founder-led discovery or sales correctly**
   - Interview prospects and recent users.
   - Document painful workflows, budget authority, buying triggers, objections, and exact customer language.
   - For early sales calls, keep the flow simple: qualify, discover, demo only the relevant workflow, state price clearly, and set an explicit next step.

6. **Design one short experiment cycle**
   - Write a hypothesis, intervention, success metric, sample target, and decision date.
   - Keep the cycle short enough for a solo founder to complete within 14 days.
   - Use [14-day GTM experiment plan](examples/14-day-gtm-experiment-plan.md).

7. **Automate throughput, not judgment**
   - Safe early AI uses: research summaries, CRM cleanup, content drafting, KPI summaries, support triage drafts.
   - Founder approval stays required for: pricing changes, refunds, legal/privacy/security claims, final outbound sends, and sensitive support responses.
   - Use [AI agent governance checklist](references/ai-agent-governance-checklist.md).

8. **Review weekly and cut aggressively**
   - Review one dashboard and one experiment at a time.
   - Kill channels that consume founder time without producing signal.
   - Re-check whether the founder is still spending time on judgment-heavy work.

9. **Decide whether to simplify, automate, or hire**
   - Simplify if the process is still noisy.
   - Automate if the process is repeatable but repetitive.
   - Hire only if demand is sustained and the founder can hand off a documented process.

## Decision Framework: Self-Serve vs Sales-Led vs Hybrid

| Factor | Self-Serve | Sales-Led | Hybrid |
| --- | --- | --- | --- |
| ACV | Usually lower | Usually higher | Mid-range or mixed |
| Time to first value | Minutes | Requires setup, training, or trust | Fast with some guidance |
| Buyer | Individual contributor or low-friction buyer | Manager or executive with approval chain | Manager with limited approval complexity |
| Product complexity | Narrow, obvious use case | Multi-stakeholder or configurable workflow | Clear value but benefits from onboarding help |
| Founder time available for calls | Very limited | Meaningful weekly time available | Some time available for high-value calls |
| Instrumentation readiness | Checkout and activation are observable | CRM stages and follow-up are observable | Both sides are partially instrumented |

Use these as starting assumptions, not rigid laws.

### Self-Serve Readiness Checklist

Recommend self-serve only if most of these are true:

- a new user can reach first value quickly without a live call
- pricing is simple enough to explain on-page
- checkout is low-friction
- onboarding steps are measurable
- support burden is manageable without founder intervention for every case
- activation can be observed clearly in analytics

### Founder-Led Sales Readiness Checklist

Recommend founder-led sales only if most of these are true:

- the founder can reliably take and follow up on calls each week
- qualification criteria are explicit
- the buyer likely needs trust, explanation, or coordination
- there is a system for objection logging and next-step tracking
- close and lost-reason data can be captured consistently

### Hybrid Motion Guidance

Use hybrid when self-serve should remain the default path but high-intent accounts benefit from optional human help. Typical pattern:

- self-serve onboarding and checkout for the default path
- scheduling link or assist CTA for qualified leads
- founder call reserved for stuck, larger, or higher-intent accounts

## AI Agent Team Boundaries

Use AI agents to multiply throughput, not to replace founder judgment blindly.

| Task | AI can draft? | AI can act autonomously? | Founder review required? | Restricted data allowed? |
| --- | --- | --- | --- | --- |
| prospect research summaries | yes | yes, if source-limited | spot checks | avoid unnecessary PII |
| CRM note cleanup and categorization | yes | yes | periodic review | minimize personal data |
| content drafts and repurposing | yes | yes for internal drafts | required before publish early on | no sensitive customer data |
| outbound personalization | yes | draft only | yes, before send | avoid sensitive personal data |
| support triage drafts | yes | limited to low-risk FAQs | yes for sensitive cases | no payment or sensitive support data |
| refunds, discounts, contracts, privacy/security claims | no autonomous action | no | always | do not expose sensitive data |

Operational rules:

- minimize personal data in prompts and workspaces
- redact customer details when exact identity is unnecessary
- version prompts for recurring workflows
- test automations on a small sample before wider use
- keep a rollback path for every customer-facing automation

See [AI agent governance checklist](references/ai-agent-governance-checklist.md).

## Metrics and Instrumentation

Use the smallest metrics set that can change a decision.

Minimum weekly dashboard:

- acquisition source by lead or signup
- activation rate
- time to first value
- demo booked and attended
- close rate for qualified opportunities
- paid conversion rate
- churn or cancel count and reason
- support contacts per customer or account
- founder hours spent by channel

Guidelines:

- define one activation event that reflects real product value
- track lost reasons and churn reasons in plain language
- if a metric does not change a decision, remove it
- do not increase top-of-funnel spend when activation is unclear

Use:

- [Funnel metrics scorecard](references/funnel-metrics-scorecard.md)
- [Weekly GTM review template](examples/weekly-gtm-review-template.md)

## Examples

### Example 1: Build a stage-appropriate GTM plan

```text
Use @solo-founder-gtm. I am a solo founder at $3K MRR with 18 paying customers, ACV around $1,800, weak onboarding, and no CRM discipline. Help me choose between self-serve and sales-assist, define my weekly dashboard, and tell me what to automate first.
```

**Expected output:** A diagnosis, motion recommendation, minimum KPI set, one-channel focus, and a short list of safe automations.

### Example 2: Decide whether outbound is appropriate

```text
Use @solo-founder-gtm. My product sells to operations managers at roughly $8K ACV. I can spend 8 hours a week on sales. Should I run founder-led outbound now, and what compliance and deliverability checks must be in place first?
```

**Expected output:** A sales-led or hybrid recommendation, qualification guidance, and a preflight checklist covering compliance and domain authentication.

### Example 3: Evaluate if the founder is ready to hire

```text
Use @solo-founder-gtm. I am at $22K MRR. I have steady inbound demos, documented objections, and a repeatable onboarding flow, but follow-up is slipping. Help me decide whether to hire a contractor, keep using agents, or delay hiring.
```

**Expected output:** A readiness assessment using process and demand criteria, plus a suggested handoff structure.

### Example 4: Audit an AI-agent GTM setup

```text
Use @solo-founder-gtm. I want AI agents for prospect research, content drafting, support triage, and outbound personalization. Tell me which actions must stay human-approved and give me a simple evaluation rubric.
```

**Expected output:** A task-risk table, approval gates, and a lightweight eval checklist.

## Best Practices

### Do

- Start with user conversations before scaling channels.
- Keep one primary GTM motion until evidence justifies a second.
- Track a small number of decision-driving metrics every week.
- Keep CRM stages and lost-reason notes clean enough to learn from them.
- Treat numeric thresholds as practitioner heuristics, not universal truths.
- Use AI for throughput and summarization before trusting it with customer-facing autonomy.
- Minimize personal data in prompts, spreadsheets, and ad hoc notes.
- Review outbound legality and privacy expectations for the target geography before launch.
- Keep a founder-owned objection log, pricing reaction log, and churn reason log.
- Hire only after the founder can explain the process clearly enough to transfer it.

### Don't

- Add multiple channels because one channel feels slow.
- Buy a complex tool before the founder can name the decision it will improve.
- Assume more traffic fixes weak activation.
- Let agents send outreach or support answers without guardrails.
- Store unnecessary customer data in prompts or long-lived notes.
- Treat deliverability setup as optional for outbound.
- Hire a salesperson before messaging, qualification, and onboarding are repeatable.

## Troubleshooting

### Problem: Lots of signups, weak activation

**Symptoms:** Traffic or signup volume is growing, but few users reach first value or convert to paid.

**Likely causes:** Activation is defined poorly, onboarding is too slow, product value is unclear in the first session, or setup friction is too high.

**Solution:** Re-check the activation event definition, inspect first-session friction, shorten setup, add onboarding help, and pause top-of-funnel expansion until first value improves.

### Problem: Many conversations, few closes

**Symptoms:** Plenty of demos or discovery calls, but low close rate, long sales cycles, frequent no-shows, or repeated objections.

**Likely causes:** Weak qualification, vague ROI framing, wrong buyer, too much product shown, or no explicit next step.

**Solution:** Tighten ICP and qualification, shorten the demo to the buyer's stated pain, log objections consistently, state price clearly, and always set a dated next step.

### Problem: Users praise the product but do not buy

**Symptoms:** Interviews are positive, feedback sounds encouraging, but there is little urgency, low willingness to pay, or repeated delay.

**Likely causes:** The founder is collecting compliments instead of evidence of painful problems, talking to the wrong segment, or asking leading validation questions.

**Solution:** Return to problem-first interviews, ask about current behavior and cost of the problem, look for real urgency and budget evidence, and stop treating positive opinions as demand.

### Problem: Outbound reply rate is near zero

**Symptoms:** Low reply rate, spam placement, bounce spikes, complaints, or domain reputation issues.

**Likely causes:** Poor targeting, generic personalization, no suppression hygiene, missing SPF/DKIM/DMARC, or too much volume too quickly.

**Solution:** Reduce send volume, fix authentication, review targeting and lawful-basis assumptions, ensure unsubscribe and suppression flows work, and re-check message quality before scaling again.

### Problem: Founder calendar is full but revenue is flat

**Symptoms:** Many calls, heavy follow-up, little compounding, and no improvement in close rate or cycle time.

**Likely causes:** Weak qualification, too many low-intent calls, unclear assist path, or the founder is over-serving a motion that should be lower-touch.

**Solution:** Tighten qualification, cap low-value calls, shorten demo paths, push more of onboarding into self-serve or guided self-serve flows, and reserve founder time for high-intent accounts.

### Problem: AI-generated GTM output sounds generic or unsafe

**Symptoms:** Hallucinated personalization, off-brand copy, incorrect customer claims, unsafe support suggestions, or repetitive content.

**Likely causes:** Weak prompts, poor examples, no evaluation rubric, missing approval gates, or too much autonomy too early.

**Solution:** Add claim constraints, require source-backed personalization, score outputs with a rubric, keep high-risk actions human-approved, and test on a small sample before wider use.

## Safety and Privacy

- This skill is not legal advice.
- Privacy, direct marketing, and consent requirements vary by geography and use case.
- Collect and retain the minimum customer data needed to run the GTM motion.
- Do not place sensitive personal data, payment details, or unnecessary customer content into prompts or enrichment flows.
- Keep unsubscribe handling, suppression lists, and truthful sender identity in place for outbound.
- If the user asks for legal interpretation or compliance sign-off, route to counsel or a qualified advisor.

See:

- [Outbound deliverability basics](references/outbound-deliverability-basics.md)
- [Privacy and outbound compliance notes](references/privacy-and-outbound-compliance-notes.md)

## Related Skills

- `@ai-pricing` - Use when pricing tiers, packaging, annual plans, or monetization design become the main task.
- `@ai-cold-outreach` - Use when the founder already chose outbound and now needs sequence strategy, copy variants, or campaign operations.
- `@ai-sdr` - Use when building a more explicit SDR workflow or handoff process for pipeline generation.
- Analytics or instrumentation skill - Use when event design, dashboards, or analytics implementation is the bottleneck.
- Legal/compliance review skill or human advisor - Use when jurisdiction-specific privacy, direct marketing, or data-processing interpretation is required.

For sharper routing triggers, use [Router boundaries](agents/router-boundaries.md).

## Additional Resources

### Local references

- [Founder GTM operating system](references/founder-gtm-operating-system.md)
- [Funnel metrics scorecard](references/funnel-metrics-scorecard.md)
- [AI agent governance checklist](references/ai-agent-governance-checklist.md)
- [Outbound deliverability basics](references/outbound-deliverability-basics.md)
- [Privacy and outbound compliance notes](references/privacy-and-outbound-compliance-notes.md)

### Local examples

- [Founder intake questionnaire](examples/founder-intake-questionnaire.md)
- [14-day GTM experiment plan](examples/14-day-gtm-experiment-plan.md)
- [Self-serve vs sales-led decision memo](examples/self-serve-vs-sales-led-decision-memo.md)
- [Weekly GTM review template](examples/weekly-gtm-review-template.md)

### Upstream intent preserved from the imported community workflow

The enhanced version keeps these useful upstream ideas in scope:

- judgment is the founder's moat; throughput is what AI can multiply
- the best GTM motion depends on ACV, buyer complexity, and time-to-value
- stage-based operating shifts matter; what helps at validation can hurt at scale
- a solo founder should cap complexity before adding people
- hiring should follow documented process and sustained demand, not panic
