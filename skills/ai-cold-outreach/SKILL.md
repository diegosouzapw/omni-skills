---
name: ai-cold-outreach
description: "AI Cold Outreach workflow skill. Use this skill when the user needs When the user wants to build an AI-powered outreach system, write cold emails, improve deliverability, or scale personalized outreach. Also use when the user mentions 'cold email,' 'cold outreach,' 'outreach automation,' 'Instantly,' 'Smartlead,' 'Clay,' 'email sequences,' 'deliverability,' 'personalization at scale,' 'reply rate,' or 'outreach stack.' This skill covers the complete AI cold outreach system from signal detection through conversion. Do NOT use for technical implementation, code review, or software architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["ai-cold-outreach", "the", "user", "wants", "build", "ai-powered", "outreach", "system"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# AI Cold Outreach

## Overview

This public intake copy packages `packages/skills-catalog/skills/(gtm)/ai-cold-outreach` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# AI Cold Outreach You are an expert in AI-powered cold outreach systems. You help users build, optimize, and scale personalized cold email campaigns that generate pipeline. You understand the full stack from signal detection and enrichment through personalization, sequencing, sending infrastructure, and AI-generated follow-ups. You bias toward specific, actionable guidance grounded in current data rather than generic "best practices."

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, The AI Outreach Stack, The 3-Line Cold Email Framework.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: When the user wants to build an AI-powered outreach system, write cold emails, improve deliverability, or scale personalized outreach. Also use when the user mentions 'cold email,' 'cold outreach,' 'outreach....
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

Before building or optimizing any cold outreach system, gather:

1. **ICP definition** - Who are they targeting? (title, company size, industry, tech stack)
2. **Current state** - Are they starting from scratch or optimizing an existing system?
3. **Volume goals** - How many emails per day/week? How many meetings per month?
4. **Existing tools** - What CRM, enrichment, sending tools are already in place?
5. **Budget range** - Solo founder bootstrapping vs. funded team with budget?
6. **Offer clarity** - What is the value prop? Is it validated or being tested?
7. **Compliance requirements** - Geographic restrictions (GDPR, CAN-SPAM, CASL)?
8. **Timeline** - When do they need pipeline flowing? (Infrastructure takes 3-4 weeks to warm)

If the user skips these, ask. Building outreach without ICP clarity wastes send capacity and burns domains.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-cold-outreach to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/ai-cold-outreach/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/ai-cold-outreach/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @ai-cold-outreach using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

- **User says:** "Build a cold email sequence for our SaaS" → **Result:** Agent gathers ICP and volume, recommends 3-line email framework (observation + relevance + CTA), suggests Instantly + Clay stack, and outputs a 5–7 touch sequence with subject lines and spacing.
- **User says:** "Our reply rate is low" → **Result:** Agent runs 5-minute audit (subject, first line, length, CTA, spam words), identifies gaps, then suggests A/B tests and enrichment so first lines are specific.
- **User says:** "Set up our outreach infrastructure" → **Result:** Agent asks domain count and volume, recommends warmup (14–21 days), mailbox and domain math, and step-by-step Instantly/Smartlead + Clay setup.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(gtm)/ai-cold-outreach`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Low reply rates** → **Cause:** Generic first lines, no signal-based targeting, or weak CTA. **Fix:** Add enrichment and use one specific observation in the first line; use a single low-friction CTA (e.g. reply or short call).
- **Deliverability issues / spam folder** → **Cause:** Sending too fast, poor domain health, or spam triggers in copy. **Fix:** Warm up 14–21 days; cap at 25–30 sends/mailbox/day; remove links/images from first touch; run spam check.
- **Meetings don’t show up** → **Cause:** CTA is too big (e.g. "book 30 min") or sequence stops too early. **Fix:** Use lower-friction CTA first (reply, short call); extend to 5–7 touches with 3–5 day spacing.

---


For checklists, benchmarks, and discovery questions read `references/quick-reference.md` when you need detailed reference.

---

## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-seo` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/benchmarks-deliverability-tactics.md` |
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

#### Imported: The AI Outreach Stack

The modern cold outreach system is a six-stage pipeline. Each stage has specific tools, metrics, and failure modes.

```
+------------------+     +------------------+     +---------------------+
|  1. SIGNAL       |---->|  2. ENRICHMENT   |---->|  3. PERSONALIZATION |
|  DETECTION       |     |                  |     |                     |
|                  |     |  Clay waterfall  |     |  AI first lines     |
|  Clay triggers   |     |  Apollo          |     |  Pain point match   |
|  Bombora intent  |     |  ZoomInfo        |     |  Claude/GPT         |
|  G2 reviews      |     |  Hunter          |     |  Angle research     |
|  LinkedIn Sales  |     |  Clearbit        |     |                     |
|  Navigator       |     |  RocketReach     |     |                     |
+------------------+     +------------------+     +---------------------+
         |                                                   |
         v                                                   v
+------------------+     +------------------+     +---------------------+
|  6. FOLLOW-UP    |<----|  5. SENDING      |<----|  4. SEQUENCING      |
|                  |     |                  |     |                     |
|  AI contextual   |     |  Instantly       |     |  Multi-step         |
|  replies         |     |  Smartlead       |     |  Conditional logic  |
|  Objection       |     |  Multi-mailbox   |     |  A/B variants       |
|  handling        |     |  rotation        |     |  Channel mixing     |
|  Meeting booking |     |  IP sharding     |     |  Timing rules       |
+------------------+     +------------------+     +---------------------+
```

### Stage 1: Signal Detection

Signals tell you WHO to reach out to and WHEN. Cold email without signals is spam with extra steps.

**Signal types ranked by conversion intent:**

| Signal Type | Source | Intent Level | Timing Window |
|---|---|---|---|
| Category page view on G2 | G2 Buyer Intent | Very High | 7-14 days |
| Competitor evaluation | Bombora + G2 | Very High | 7-21 days |
| Job posting for your category | LinkedIn, Indeed | High | 14-30 days |
| Funding announcement | Crunchbase, Clay | High | 30-60 days |
| Tech stack change | BuiltWith, HG Data | Medium-High | 14-30 days |
| Leadership hire | LinkedIn Sales Nav | Medium | 30-45 days |
| Content engagement | Bombora cooperative | Medium | 7-14 days |
| Company growth spike | Clay, LinkedIn | Medium-Low | 30-60 days |

**Signal layering strategy:**
Single signals produce 3-5% reply rates. Layer two or more signals and reply rates jump to 8-15%. Example: "Recently hired a VP Sales" + "Evaluating CRM tools on G2" = high-intent prospect with budget authority and active need.

**Bombora intent data:**
Bombora operates the largest B2B data cooperative, tracking content consumption across 5,000+ websites. It surfaces "surge" scores when a company researches topics above their baseline. G2 and Bombora have a direct integration that combines review-site activity with broader web research signals.

Best practice: Use G2 for speed (signals come from active buyers) and Bombora for stability (aggregated data delivers more consistent results over time). Layer both for full coverage.

**Clay as the signal orchestrator:**
Clay connects 150+ data sources into a single workflow. Use Clay tables to monitor trigger events, then automatically route qualified signals into enrichment and personalization pipelines. Clay's HTTP request action lets you connect any API as a signal source.

### Stage 2: Enrichment

Enrichment turns a company name + signal into a deliverable contact with context.

**The waterfall enrichment model:**

```
Lead enters Clay table
        |
        v
  [Provider A: Apollo]
  Found email? ----YES----> Verified? --YES--> Done
        |                       |
       NO                      NO
        |                       |
        v                       v
  [Provider B: Hunter]    [Provider C: ZoomInfo]
  Found email? ----YES----> Verified? --YES--> Done
        |                       |
       NO                      NO
        |                       |
        v                       v
  [Provider D: RocketReach]  [Provider E: Dropcontact]
  Found email? ----YES----> Verified? --YES--> Done
        |
       NO
        |
        v
  Skip or manual research
```

**Why waterfall beats single-provider:**
No single provider covers more than 60-70% of B2B contacts. Running a waterfall across 3-5 providers routinely triples coverage to 80%+ valid emails. Clay automates this with sequential enrichment steps that stop as soon as a verified email is found, saving credits.

**Enrichment data to collect (in priority order):**

1. **Verified work email** - Required. Bounce rate must stay under 2%.
2. **Title and seniority** - Required for sequence routing and personalization.
3. **Company size and revenue** - Required for ICP filtering.
4. **Recent company news** - Funding, product launches, expansions. Powers first lines.
5. **Tech stack** - BuiltWith or HG Data. Critical for displacement plays.
6. **LinkedIn profile URL** - For multichannel sequences and AI research.
7. **Hiring signals** - Open roles that indicate pain points or growth.
8. **Social posts or articles** - Fuel for AI-personalized first lines.

**Email verification is non-negotiable:**
Run every email through verification (ZeroBounce, NeverBounce, or MillionVerifier) before sending. A bounce rate above 2% triggers spam filters at Google and Microsoft. One bad list can burn a domain in a day.

### Stage 3: AI Personalization

Generic cold emails get 1-2% reply rates. AI-personalized emails get 8-12%. The difference is the first two lines.

**The AI personalization pipeline:**

```
Enriched lead data (company news, tech stack, hiring, social)
        |
        v
  [AI Agent: Claude or GPT]
        |
        +---> Research summary (2-3 key findings)
        +---> Personalization angle (why NOW, why THEM)
        +---> Custom first line (specific observation)
        +---> Pain hypothesis (inferred from signals)
        |
        v
  Merge into email template via {{variables}}
```

**First line frameworks that work:**

| Framework | Example | Best For |
|---|---|---|
| Observation + Implication | "Saw you just opened a London office - scaling support across time zones gets messy fast." | Funding/expansion signals |
| Compliment + Bridge | "Your post on PLG metrics was sharp - especially the bit about activation rate vs. NPS." | Content-active prospects |
| Trigger + Question | "You're hiring 3 AEs this quarter - curious how you're thinking about ramp time." | Hiring signals |
| Mutual Connection | "Alex Chen mentioned your team is rethinking outbound - we helped his team at Acme do the same." | Referral/warm intro |
| Timeline Narrative | "When we started working with teams your size, most were spending 6 hours/week on manual enrichment." | Timeline hooks (highest reply rate) |

**Timeline hooks outperform everything else:**
Data from 2025 shows timeline-based hooks achieve 10% reply rates vs. 4.4% for problem-based hooks - a 2.3x gap. Timeline narratives trigger urgency without artificial pressure and mirror the prospect's own decision-making process.

**AI model selection for personalization:**

| Model | Strength | Best Use |
|---|---|---|
| Claude Sonnet | Natural tone, avoids corporate speak | First lines, full email drafts |
| Claude Opus | Deep research synthesis | Complex enterprise personalization |
| GPT-4o | Speed, structured output | Batch processing at scale |
| Claude Haiku | Cost-efficient | Simple variable generation |

Claude models produce the most natural-sounding cold emails. They avoid buzzwords by default and adopt a conversational register that reads as human-written. GPT models tend to default to known spam triggers like "Quick question" and "Hope this finds you well" unless heavily prompted against it.

**Scaling AI personalization with Clay:**
1. Build a Clay table with enriched leads
2. Add an AI enrichment column using Claude
3. Prompt: "Research this company using the data provided. Write a 1-sentence observation about [specific context]. Do not use corporate jargon."
4. Output flows into Instantly/Smartlead as a merge field
5. Cost: roughly $0.01-0.03 per lead for Sonnet-tier models

### Stage 4: Sequencing

A sequence is the multi-step campaign structure. It defines how many emails, when they send, and what each email does.

**The anatomy of a high-performing sequence:**

```
Day 0:  Email 1 - The opener (personalized, carries the hook)
         |
Day 3:  Email 2 - Value add (case study, data point, or insight)
         |
Day 7:  Email 3 - Social proof (specific result for similar company)
         |
Day 12: Email 4 - Breakup/new angle (shift approach entirely)
         |
Day 18: Email 5 - Permission-based close ("Should I close this out?")
```

**Sequence length and timing rules:**

| Factor | Recommendation | Why |
|---|---|---|
| Total emails | 4-7 | First email captures 58% of replies. Diminishing returns after 7. |
| Gap between emails | 2-4 business days | 3 days is the sweet spot. Less feels pushy, more loses momentum. |
| Total sequence duration | 14-25 days | Beyond 25 days, leads go stale. |
| SMB sequences | 5-8 touches over 30 days | Shorter decision cycles. |
| Enterprise sequences | 10-18 touches over 30-60 days | Multiple stakeholders, longer cycles. |

**Conditional branching logic:**
Modern sequences are not linear. Build branches based on:
- **Opens without reply** - Send a shorter follow-up with different angle
- **Link clicks** - Accelerate sequence, add phone call step
- **No opens** - Test different subject line, change send time
- **Positive reply** - Route to AE or book directly
- **Objection reply** - Trigger AI objection handler or manual review

**A/B testing framework:**
Test ONE variable at a time across minimum 200 sends per variant:

| Priority | Variable | Impact on Reply Rate |
|---|---|---|
| 1 | Subject line | 20-40% swing in open rate |
| 2 | First line / hook | 2-3x reply rate difference |
| 3 | CTA style | 1.5-2x reply rate difference |
| 4 | Email length | Moderate impact |
| 5 | Send time | Marginal impact |

### Stage 5: Sending Infrastructure

Infrastructure is where most outreach systems break. Perfect copy with bad deliverability lands in spam.

**Domain and mailbox architecture:**

```
Primary Domain: yourcompany.com
  (NEVER use for cold outreach)

Secondary Domains (for outreach only):
  yourcompany-team.com    --> mailbox1@, mailbox2@
  tryyourcompany.com      --> mailbox1@, mailbox2@
  getyourcompany.com      --> mailbox1@, mailbox2@
  yourcompanyhq.com       --> mailbox1@, mailbox2@

Formula:
  Daily volume target / 150 = domains needed (round up)
  Add 30-50% for rotation reserve

Example: 600 emails/day
  600 / 150 = 4 domains minimum
  + 50% reserve = 6 domains total
  x 2 mailboxes each = 12 mailboxes
```

**Infrastructure sizing guide:**

| Daily Volume | Domains Needed | Mailboxes | Monthly Domain Cost |
|---|---|---|---|
| 100-200 | 2-3 | 4-6 | $20-30 |
| 300-500 | 3-5 | 6-10 | $30-50 |
| 500-1,000 | 5-8 | 10-16 | $50-80 |
| 1,000-2,000 | 8-15 | 16-30 | $80-150 |
| 2,000+ | 15+ | 30+ | $150+ |

**Per-mailbox sending limits:**

| Type | Daily Limit | Notes |
|---|---|---|
| Warmup emails | 15-20/day | Run for 14-21 days before cold sends |
| Cold emails | 25-30/day | Never exceed 40 |
| Combined total | 40-50/day | Stay under provider thresholds |

**Domain warmup protocol:**

| Week | Daily Volume/Mailbox | Activity |
|---|---|---|
| Week 1 | 10-15 | Warmup only, no cold sends |
| Week 2 | 20-30 | Warmup + 5-10 cold sends |
| Week 3 | 30-40 | Warmup + 15-20 cold sends |
| Week 4 | 40-50 | Full cold sending capacity |

**Authentication setup checklist (do this on Day 1):**

- [ ] SPF record published (authorize sending servers)
- [ ] DKIM signing enabled (cryptographic signature per message)
- [ ] DMARC record set (start at p=none, move to p=quarantine, then p=reject)
- [ ] Custom tracking domain (not shared tracking domains)
- [ ] List-Unsubscribe header added (required by Google, Yahoo, Microsoft)
- [ ] MX records configured properly
- [ ] Reverse DNS (PTR record) set up

Authenticated senders are 2.7x more likely to reach the inbox vs. unauthenticated.

**DMARC rollout sequence:**
1. Week 1-2: `p=none` with reporting (`rua=mailto:dmarc@yourdomain.com`)
2. Week 3-4: Review reports, fix any alignment issues
3. Week 5-6: `p=quarantine` (soft enforcement)
4. Week 7+: `p=reject` (full enforcement)

Never jump straight to `p=reject` before inventorying all legitimate senders.

**Sending platform comparison: Instantly vs. Smartlead**

| Feature | Instantly | Smartlead |
|---|---|---|
| **Best for** | Solo founders, small teams | Agencies, high-volume senders |
| **Pricing (entry)** | $37/mo | $33/mo |
| **Pricing (scale)** | $97-358/mo | $94-174/mo |
| **Email accounts** | Unlimited (Growth+) | Unlimited (all plans) |
| **Built-in lead database** | Yes (SuperSearch, 450M+) | No (import only) |
| **Warmup network** | 4.2M+ accounts | Smaller network |
| **AI reply agent** | Yes (responds in <5 min) | Limited |
| **Deliverability approach** | IP sharding + rotation (SISR) | Human-mimicking variable volume |
| **Sending behavior** | Exact daily volume | Variable (sends 22 when set to 25) |
| **API and webhook support** | Good | Excellent (API-first) |
| **White-label** | Limited | Full white-label |
| **CRM integration** | Built-in basic CRM | Via integrations |
| **Clay integration** | Native | Native |
| **Inbox rotation** | Automatic | Automatic |
| **Campaign analytics** | Detailed dashboards | Detailed dashboards |
| **Multi-channel** | Email + LinkedIn (beta) | Email focused |

**Decision framework:**

```
Need built-in lead database?
  YES --> Instantly
  NO  --> Continue

Running an agency or white-labeling?
  YES --> Smartlead
  NO  --> Continue

Need AI auto-replies?
  YES --> Instantly
  NO  --> Continue

Sending 1,000+/day and need API control?
  YES --> Smartlead
  NO  --> Continue

Want simplest setup and UI?
  YES --> Instantly
  NO  --> Smartlead
```

### Stage 6: AI-Powered Follow-Up

Most replies are not "Yes, let's meet." They are questions, objections, or soft interest. AI follow-up handles these at scale.

**Reply categories and handling:**

| Reply Type | % of Replies | AI Action |
|---|---|---|
| Positive interest | 25-35% | Book meeting link, confirm time |
| Question about offer | 20-30% | Answer with specifics, re-CTA |
| Objection (timing) | 15-20% | Acknowledge, offer future follow-up |
| Objection (budget) | 5-10% | Share ROI data, offer smaller entry |
| Referral to colleague | 10-15% | Thank, ask for intro or direct email |
| Not interested | 10-15% | Thank, remove from sequence |
| Auto-reply/OOO | 5-10% | Pause, re-send after return date |

**AI reply handling setup:**
1. Classify reply intent with AI (positive, question, objection, referral, not interested)
2. Route positive replies to a human or booking link immediately
3. Generate contextual responses for questions and objections
4. Set a human review flag for any edge cases
5. Auto-remove "not interested" from all sequences (compliance requirement)

Instantly's AI Reply Agent handles this natively and responds in under 5 minutes. Smartlead users typically build this with Clay + webhook integrations.

---

#### Imported: The 3-Line Cold Email Framework

The highest-performing cold emails in 2026 follow a simple structure: three lines, under 80 words, zero fluff.

```
Line 1 (PAIN): A specific observation about their situation.
               Derived from signal data + AI research.
               NOT "Are you struggling with X?" (everyone sends this).

Line 2 (PROOF): One sentence of credibility.
                A specific result for a similar company.
                NOT "We're the leading platform for..."

Line 3 (CTA):  A low-friction ask.
                NOT "Book 30 minutes on my calendar."
                YES "Worth a quick look?" or "Open to hearing more?"
```

**Example (good):**

> Noticed you just raised your Series B and are hiring 4 AEs - ramping that many reps
> without standardized outbound playbooks usually means 2-3 months of wasted pipeline.
>
> We helped Acme's team cut AE ramp from 90 to 45 days after their Series B.
>
> Worth a 10-minute look at how?

**Example (bad):**

> Hi [Name], I hope this email finds you well. I'm reaching out because I noticed your
> company is growing. We're the leading sales enablement platform trusted by 500+
> companies. I'd love to schedule a 30-minute call to discuss how we can help you
> scale your sales team. Would Tuesday at 2pm work?

**Why the bad example fails:**
- "Hope this finds you well" - spam trigger, zero value
- Generic observation - "growing" applies to everyone
- Self-centered proof - "leading platform" is unverifiable
- High-friction CTA - 30 minutes is a big ask from a stranger
- Too long - 75 words of fluff before any value

**Cold email anatomy rules:**

| Element | Rule | Why |
|---|---|---|
| Subject line | 2-5 words, lowercase, no punctuation | Looks like an internal email |
| Preview text | First 40 chars of body visible in inbox | Make the hook visible |
| Word count | 50-125 words | Under 50 feels incomplete, over 125 loses attention |
| Paragraphs | 1-2 sentences each | Mobile-friendly whitespace |
| Links | Zero in first email | Links trigger spam filters |
| Images | Zero in first email | Images trigger spam filters |
| Attachments | Zero in first email | Attachments trigger spam filters |
| Signature | Name + title + company only | Minimal, no banners or social icons |
| CTA | One per email | Multiple CTAs reduce response rate |
| Personalization | First 1-2 lines | Generic everything else is fine if the hook lands |

---


For benchmarks, deliverability playbook, week-by-week build, cost analysis, failure modes, and advanced tactics read `references/benchmarks-deliverability-tactics.md`.
