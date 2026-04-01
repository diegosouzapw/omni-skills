---
name: solo-founder-gtm
description: "Solo Founder GTM: The Complete Playbook for Scaling Without Hiring workflow skill. Use this skill when the user needs When the user is a solo founder building their GTM motion, wants to scale without hiring, or needs to design an AI agent team for go-to-market. Also use when the user mentions 'solo founder,' 'one-person startup,' 'solopreneur,' 'bootstrapped,' 'no team,' 'AI agents as team,' 'scaling without hiring,' 'founder-led sales,' 'lean GTM,' 'one-person company,' or 'no employees.' This skill covers the complete solo founder GTM playbook from stack selection through agent team design, revenue-stage transitions, time allocation, and when to finally hire. Do NOT use for technical implementation, code review, or software architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["solo-founder-gtm", "the", "user", "solo", "founder", "building", "gtm", "motion"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Solo Founder GTM: The Complete Playbook for Scaling Without Hiring

## Overview

This public intake copy packages `packages/skills-catalog/skills/(gtm)/solo-founder-gtm` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Solo Founder GTM: The Complete Playbook for Scaling Without Hiring You are an expert in solo founder go-to-market strategy, AI agent team design, lean operations, and founder-led distribution. You understand the 2025-2026 landscape where over one-third of new startups are solo-founded and a single person with the right stack can reach $100K+ MRR faster than a 20-person team could five years ago. You help founders choose between self-serve and sales-led motions, design AI agent workflows that replace traditional hires, allocate their most constrained resource (time), and know exactly when scaling without people stops working.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, 1. Taste as Moat: Why Judgment Beats Headcount, 2. The One-Person Startup Stack, 3. Revenue Stage Playbook, 4. Self-Serve vs Sales Calls Decision Framework, 5. AI Agent Team: Your GTM Org Chart.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Signal - What It Looks Like - Urgency
- Revenue leaving the table - Qualified leads going cold, cannot follow up - High
- Founder bottleneck on sales - Pipeline full, close rate dropping - High
- Burnout approaching - 65+ hour weeks for 3+ months - High
- Churn from support gaps - Customers leaving citing slow response - High
- Support consuming build time - 10+ hrs/week on support - Medium

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

1. Metric - Target - Red Flag
2. Calls to close - Under 3 - Over 5 per deal
3. Sales cycle - Under 14 days - Over 30 days
4. Close rate - 25-40% of qualified opps - Under 15%
5. No-show rate - Under 15% - Over 30%
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview, playbook, and source summary before loading any upstream support files.

### Imported Workflow Notes

#### Imported: 9. Founder-Led Sales Process

```
QUALIFY (5 min): ICP match? Can afford price? Has the problem?
  --> No: politely decline, refer elsewhere
  --> Yes: proceed

DISCOVER (15-20 min): Current state, cost of status quo,
  desired state, buying committee, timeline

DEMO (15-20 min, same call): Show the specific workflow
  that solves their stated pain. Skip unasked features.
  End with plan and price.

CLOSE (5 min): State price clearly. Offer money-back guarantee.
  If they need time, set follow-up date (never "let me know").

ONBOARD (async, 30 min): Guide within 1 hour. Setup call if
  needed. Check in at day 3 and day 7.
```

### Sales Velocity Targets

| Metric | Target | Red Flag |
|---|---|---|
| Calls to close | Under 3 | Over 5 per deal |
| Sales cycle | Under 14 days | Over 30 days |
| Close rate | 25-40% of qualified opps | Under 15% |
| No-show rate | Under 15% | Over 30% |

Document every conversation: objection log, winning phrases, losing patterns, pricing reactions, competitive mentions. This playbook becomes the training manual for your first sales hire.

---

#### Imported: Before Starting

Gather this context before building any solo founder GTM plan:

- What does the product do today? One paragraph, shipped features only, no roadmap.
- What is the current revenue? MRR, number of paying customers, and trend (growing, flat, declining).
- How are customers finding the product today? Organic, paid, outbound, referral, community, or a mix.
- What is the current tech stack? List every tool the founder pays for and every free tool in active use.
- How many hours per week does the founder spend on GTM vs building? Get the real split, not the aspirational one.
- What is the ACV (annual contract value) or average revenue per customer?
- Is the product self-serve today, or does every sale require a call?
- Does the founder have an existing audience? X followers, LinkedIn connections, newsletter subscribers, community members.
- What has the founder tried for GTM that did not work? Failed channels are as informative as successful ones.
- What is the founder's biggest constraint right now? Time, money, technical skill, distribution, or something else.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @solo-founder-gtm to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/solo-founder-gtm/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/solo-founder-gtm/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @solo-founder-gtm using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

- **User says:** "I'm a solo founder, how do I do GTM?" → **Result:** Agent asks MRR and ACV, recommends time split (e.g. 40% conversations, 40% building at $0–1K MRR), suggests $50–450/mo stack and AI agent deploy order (Research → Writing → Outreach → …), and caps calls at 10–15/week.
- **User says:** "When should I hire my first sales person?" → **Result:** Agent uses Quick Reference thresholds (first contractor $10–30K MRR, first FTE $30–50K MRR), asks current pipeline and deal capacity, and suggests what to systematize before hiring.
- **User says:** "What tools should a solo founder use?" → **Result:** Agent recommends 8–10 tool max, maps by function (CRM, enrichment, sending, content, analytics), and suggests budget tier and content cadence (daily short + weekly newsletter).

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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(gtm)/solo-founder-gtm`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **No time for both building and selling** → **Cause:** No guardrails or too many channels. **Fix:** Block 3–4 hr morning deep work; cap sales calls at 10–15/week; focus on one acquisition channel until it converts.
- **Deals slipping or no-shows** → **Cause:** Too many active deals or weak qualification. **Fix:** Cap active deals at 20–30; tighten ICP and qualification; use objection log to improve messaging.
- **Revenue per founder-hour flat** → **Cause:** Low ACV or high-touch with no leverage. **Fix:** Aim for $100+/hr; add self-serve or product-led motion if ACV allows; automate outreach and content with AI agents.

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

#### Imported: Quick Reference

| Concept | Key Number or Rule |
|---|---|
| Total stack cost (solo founder) | $50-450/mo |
| AI agent team cost | $130-406/mo for all six agents |
| Equivalent single SDR hire | $4,000-6,000/mo fully loaded |
| Time split at $0-1K MRR | 40% conversations, 40% building, 20% content |
| Time split at $10-50K MRR | 30% systems, 30% distribution, 25% product, 15% strategy |
| Self-serve ACV ceiling | Under $1,000/yr |
| Sales-led ACV floor | Over $5,000/yr |
| First contractor threshold | $10-30K MRR |
| First full-time hire threshold | $30-50K MRR |
| SOC 2 skip-until threshold | $50K MRR or enterprise deal requires it |
| Max tools in stack | 8-10 before diminishing returns |
| Content cadence minimum | Daily short posts + weekly newsletter |
| Sales calls ceiling (solo) | 10-15/week before quality drops |
| Active deal ceiling (solo) | 20-30 before deals slip |
| Revenue per founder-hour target | $100+ and growing |
| Monthly churn ceiling (SMB) | Under 5% |
| Agent deploy order | Research > Writing > Outreach > Analytics > Support > Scheduling |
| Morning deep work block | 3-4 hrs, no meetings, no interruptions |

---

#### Imported: 1. Taste as Moat: Why Judgment Beats Headcount

AI handles execution at scale. Writing 100 cold emails, researching 500 prospects, generating 50 ad variations. All of that is commodity work now. The moat for a solo founder is judgment: knowing which market to enter, which messaging resonates, which customers to prioritize, and which signals to act on.

```
DELEGATE TO AI AGENTS              OWN PERSONALLY
+----------------------------+     +----------------------------+
| Research and data gathering|     | Strategic decisions         |
| First-draft writing        |     | Customer conversations      |
| Lead scoring and routing   |     | Pricing and packaging       |
| Email personalization      |     | Product direction           |
| Social media scheduling    |     | Partner relationships       |
| Competitive monitoring     |     | Brand voice and values      |
| Analytics and reporting    |     | Which market to enter next  |
| Data enrichment            |     | When to say no              |
| Basic customer support     |     | High-stakes sales calls     |
+----------------------------+     +----------------------------+
```

The rule: if a task requires taste, market context, or relationship capital, you do it. If a task requires throughput, pattern matching, or repetitive execution, an AI agent does it.

---

#### Imported: 2. The One-Person Startup Stack

| Function | Recommended Tool | Monthly Cost | Why This One |
|---|---|---|---|
| CRM | Attio or Folk | $0-30 | Lightweight, API-friendly, no enterprise bloat |
| Email outreach | Instantly or Smartlead | $30-97 | Multi-inbox rotation, warmup included |
| Enrichment | Clay (Starter) or Apollo Free | $0-149 | Clay for waterfall enrichment, Apollo for basic lookups |
| AI personalization | Claude API or GPT API | $20-50 | Per-message personalization at scale |
| Landing pages | Framer or Carrd | $0-24 | Ship in hours, not weeks |
| Analytics | PostHog or Plausible | $0 | PostHog for product analytics, Plausible for web |
| Scheduling | Cal.com or Calendly Free | $0 | Cal.com is open-source and self-hostable |
| Payments | Stripe | 2.9% + $0.30/txn | Standard, reliable, great API |
| Support | Crisp Free or Intercom Starter | $0-39 | Crisp for chat widget, Intercom if you need AI bot |
| Automation | n8n (self-hosted) or Make | $0-30 | n8n for full control, Make for visual workflows |
| AI coding | Cursor or Claude Code | $20-40 | Ship features without a dev team |
| Content | Claude or Notion AI | $0-20 | Long-form drafts, repurposing, research |
| Social scheduling | Buffer or Typefully | $0-15 | Typefully for X-native scheduling |
| Email marketing | Loops or Resend | $0-25 | Developer-friendly transactional + marketing |
| **Total** | | **$50-450/mo** | |

### Stack Selection by GTM Motion

```
Product-Led (self-serve) --> Analytics (PostHog), Landing page (Framer),
                             Email marketing (Loops), Support (Crisp)

Outbound-Led (sales calls) --> Enrichment (Clay), Outreach (Instantly),
                               CRM (Attio), Scheduling (Cal.com)

Content-Led (audience-first) --> Content AI (Claude), Social (Typefully),
                                 Email marketing (Loops), Analytics (Plausible)

Community-Led --> Community platform (Discord/Circle),
                  Content AI (Claude), Email (Loops), CRM (Folk)
```

### Stack Anti-Patterns

| Anti-Pattern | Why It Hurts | What to Do Instead |
|---|---|---|
| Salesforce or HubSpot Enterprise | $150+/mo, 80% features unused, weeks to configure | Attio or Folk at $0-30/mo |
| Building internal tools pre-PMF | Engineering time that should go to the product | Off-the-shelf tools until $50K+ MRR |
| Buying annual contracts early | Locks in spend before you know what works | Stay monthly until a tool proves critical |
| Using 15+ tools at once | Context-switching tax exceeds the tool's value | Cap at 8-10 core tools |

---

#### Imported: 3. Revenue Stage Playbook

GTM strategy shifts at every revenue milestone. What works at $0 MRR actively hurts at $50K MRR.

### Stage 1: $0-1K MRR (Validation)

**Goal**: Find 10 people who will pay. Nothing else matters.
**Time split**: 40% customer conversations, 40% building, 20% content.

- DM 20 people per day on X or LinkedIn who match your hypothesis.
- Charge from day one. Free users give bad feedback. Even $9/mo filters for real need.
- Build the smallest thing that solves a real pain. One feature, not a platform.
- Track who says "I need this" vs "that is interesting." Only "I need this" counts.
- Do not automate anything yet. Manual processes reveal what matters.
- **Skip**: Outbound sequences, paid ads, SEO, partnerships, complex funnels.

### Stage 2: $1K-10K MRR (Traction)

**Goal**: Find a repeatable acquisition channel.
**Time split**: 50% distribution, 30% building, 20% customer conversations.

- Test 2-3 acquisition channels simultaneously. Give each 30 days and $500 (or equivalent time).
- Start building in public. Share metrics, lessons, and behind-the-scenes.
- Set up basic outbound if ACV supports it. 50 personalized emails per week using Clay + Instantly.
- Document every deal: objections, buying triggers, competitor mentions. This becomes your sales playbook.
- Deploy Research Agent and Writing Agent (see Section 5).
- **Skip**: Hiring, complex automations, enterprise features, annual plans.

### Stage 3: $10K-50K MRR (Scale the Machine)

**Goal**: Systematize what works and deploy AI agents to multiply output.
**Time split**: 30% systems/automation, 30% distribution, 25% product, 15% strategy.

- Deploy full AI agent team for proven channels.
- Batch-create content weekly, repurpose across channels, schedule with AI.
- Raise prices. Most solo founders underprice by 2-3x at this stage.
- Introduce annual plans. Offer 2 months free for annual commitment.
- Start evaluating first hire (see Section 7).
- **Skip**: Enterprise sales, custom integrations, complex RBAC, dedicated support tiers.

### Stage 4: $50K-100K+ MRR (Founder Leverage)

**Goal**: Maximize revenue per founder-hour. Decide on hiring vs staying solo.
**Time split**: 30% strategy, 25% distribution, 25% product, 20% team management.

- Every hour should generate $200+ in value. Audit ruthlessly.
- Consider fractional hires or contractors before full-time employees.
- Personal brand is now a real distribution channel. Invest 5-10 hrs/week.
- Build moats: integrations, data network effects, community, switching costs.
- Run quarterly positioning reviews. At this revenue, competitors notice you.

---

#### Imported: 4. Self-Serve vs Sales Calls Decision Framework

This is the highest-leverage decision a solo founder makes. The wrong motion wastes months.

| Factor | Go Self-Serve | Go Sales-Led | Hybrid |
|---|---|---|---|
| ACV | Under $1,000/yr | Over $5,000/yr | $1,000-5,000/yr |
| Setup complexity | Under 5 min to value | Requires config or training | 15-30 min setup |
| Buyer type | IC, developer | VP/Director, needs approval | Manager, can expense |
| Product complexity | Single use case, obvious value | Multi-stakeholder workflows | Clear value, benefits from guidance |
| Competition | Crowded, differentiate on UX | Few players, differentiate on outcomes | Moderate, differentiate on speed |
| Your time | Cannot do sales calls | 10+ hrs/week for calls | 5-10 hrs/week for high-value calls |

### Self-Serve Readiness Checklist

- [ ] Can a new user get value in under 5 minutes without talking to anyone?
- [ ] Is the pricing simple enough to not need explanation?
- [ ] Can you show the product's value in a 60-second demo video?
- [ ] Is the buyer authorized to spend this amount without approval?
- [ ] Can you handle support at scale with docs + AI chatbot?

If any answer is "no," you need at least a sales-assist layer.

### Founder-Led Sales Ceiling

| Metric | Solo Founder Ceiling | Red Flag |
|---|---|---|
| Discovery calls per week | 10-15 | Calendar is 60%+ calls |
| Active deals in pipeline | 20-30 | Deals slipping from lack of follow-up |
| Sales cycle | 30-45 days | Stretching to 60+ days |
| Revenue from sales-led | $30-50K MRR | Growth flatlines despite full pipeline |

When you hit these limits, see Section 7: When to Make the First GTM Hire.

---

#### Imported: 5. AI Agent Team: Your GTM Org Chart

```
                    +------------------+
                    |   YOU (Founder)  |
                    |  Strategy, Voice |
                    |  Relationships   |
                    +--------+---------+
                             |
            +----------------+----------------+
            |                |                |
    +-------v------+  +-----v--------+  +----v---------+
    | RESEARCH     |  | WRITING      |  | OUTREACH     |
    | AGENT        |  | AGENT        |  | AGENT        |
    | Clay + Claude|  | Claude API   |  | Instantly    |
    | Apollo       |  | Typefully    |  | + Clay       |
    +-------+------+  +-----+--------+  +----+---------+
            |                |                |
    +-------v------+  +-----v--------+  +----v---------+
    | ANALYTICS    |  | SUPPORT      |  | SCHEDULING   |
    | AGENT        |  | AGENT        |  | AGENT        |
    | PostHog      |  | Crisp AI     |  | Cal.com      |
    | Claude       |  | + Claude     |  | + Zapier     |
    +--------------+  +--------------+  +--------------+
```

### Agent Definitions

| Agent | Tools | Workflow | Output | Time Saved |
|---|---|---|---|---|
| Research | Clay, Apollo, Claude API | Identify prospect > Enrich data > Score ICP > Find decision maker > Pull personalization context | Enriched prospect with personalization brief | 15-20 hrs/wk |
| Writing | Claude API, Typefully | Pull topic > Draft in founder's voice > Generate variations > Queue for review > Schedule | 5-10 posts/wk, 1-2 long-form/mo | 8-12 hrs/wk |
| Outreach | Instantly, Clay, Claude API | Receive prospect brief > Personalize first line > Select template > Send sequence > Suggest replies | 200-500 personalized emails/wk | 20+ hrs/wk |
| Analytics | PostHog, Claude API, n8n | Pull metrics > Compare trailing averages > Flag anomalies > Generate summary | Daily brief, weekly trend report | 5-8 hrs/wk |
| Support | Crisp AI, Claude API | Classify issue > Check knowledge base > Auto-respond or escalate | 60-80% tickets resolved without you | 10-15 hrs/wk |
| Scheduling | Cal.com, Zapier, CRM | Detect intent > Send link > Confirm > Prep meeting doc > Remind | Zero back-and-forth scheduling | 3-5 hrs/wk |

### Deployment Priority and Cost

| Priority | Agent | Deploy At | Monthly Cost |
|---|---|---|---|
| 1 | Research | $1K MRR | $60-170 |
| 2 | Writing | $1K MRR | $15-45 |
| 3 | Outreach | $5K MRR | $40-117 |
| 4 | Analytics | $10K MRR | $5-10 |
| 5 | Support | $10K MRR | $10-59 |
| 6 | Scheduling | $15K MRR | $0-5 |
| **Full team** | | | **$130-406/mo** |

Compare to hiring: one junior SDR costs $4,000-6,000/mo fully loaded. The full agent team costs under $500/mo and works 24/7.

---

#### Imported: 6. Building in Public and Personal Brand as Distribution

Personal brand is the cheapest, highest-converting acquisition channel for a solo founder. Your audience trusts you before they trust your product. Every post is free distribution.

### Content Cadence

| Content Type | Frequency | Platform | Time | Purpose |
|---|---|---|---|---|
| Short posts (insights, lessons) | Daily | X, LinkedIn | 15-20 min | Stay visible, build trust |
| Thread or long-form post | 2x/week | X, LinkedIn | 30-45 min | Demonstrate expertise |
| Newsletter | Weekly | Email | 1-2 hrs | Own the audience (not rented) |
| Product update | Bi-weekly | X, LinkedIn, blog | 30 min | Show momentum |
| Metrics transparency post | Monthly | X, LinkedIn | 20 min | Build trust through honesty |

### What to Share vs Keep Private

| Share Freely | Keep Private |
|---|---|
| Revenue milestones and growth rate | Specific customer names without permission |
| Lessons from failures | Technical vulnerabilities |
| Product decisions and reasoning | Exact pricing strategy mechanics |
| Tool stack and workflows | Unreleased competitive advantages |
| Customer feedback themes | Individual customer data |

### Community as Moat

| Stage | Channel | Why |
|---|---|---|
| $0-5K MRR | X/LinkedIn engagement + DMs | Low overhead, high signal |
| $5-20K MRR | Discord or Slack group | Direct access to power users |
| $20K+ MRR | Dedicated platform (Circle, Bettermode) | Owned community with structured content |

A healthy community has 40%+ member-to-member conversations (not founder answering everything), regular actionable feature requests, and growing organic referrals. If the community consumes 15+ hrs/week, the ROI has turned negative.

---

#### Imported: 8. Enterprise Features to Skip

Solo founders waste months building features that enterprise buyers demand but that generate zero revenue before PMF.

| Feature | Skip Until | Why |
|---|---|---|
| SAML/SSO | $50K MRR or first enterprise deal requires it | Weeks of dev, zero SMB customers care |
| Complex RBAC | $30K MRR | Admin/member is enough for 95% of early customers |
| SOC 2 compliance | $50K MRR or enterprise pipeline demands it | $20-50K and 3-6 months |
| Custom SLAs | $50K MRR | You cannot guarantee uptime you do not measure |
| Custom integrations | Per-deal over $10K ACV | Build standard integrations first |
| Annual invoicing with PO | $30K MRR | Manual invoicing works for small deal counts |
| Audit logs | $50K MRR | Enterprise compliance feature |
| White-labeling | Never (unless it IS the product) | Massive complexity for rare demand |

**Build instead**: Dead-simple onboarding (under 2 min), one killer integration with the tool your ICP lives in, excellent docs, webhook/API for power users, and usage-based billing via Stripe. These ship in days and move activation, retention, and revenue.

---

#### Imported: Questions to Ask

1. What is your current MRR and how many paying customers do you have?
2. How are customers finding you today, and which channel converts best?
3. How many hours per week do you actually spend on GTM vs building?
4. What is your ACV and does every sale require a conversation?
5. Do you have an existing audience on any platform? How large and how engaged?
6. What have you tried for acquisition that did not work?
7. What is your biggest time sink each week that is not directly building or selling?
8. Are you burning personal savings, generating revenue, or funded?
9. What does your current tool stack cost monthly?
10. When you lose a deal or a customer churns, what reason do they give?
11. Have you documented your sales process and objection responses?
12. Are you building in public? If so, what content performs best?
13. What manual process do you repeat more than 3 times per week?
14. At what point would you consider your first hire, and for what role?
15. What is the single highest-leverage thing you could do this week that you are not doing?

---
