---
name: social-selling
description: "Social Selling Skill workflow skill. Use this skill when the user needs When the user wants to sell through social media, optimize LinkedIn for sales, build DM sequences, or convert content engagement into pipeline. Also use when the user mentions 'social selling,' 'LinkedIn selling,' 'LinkedIn DMs,' 'social prospecting,' 'LinkedIn Sales Navigator,' 'DM sequences,' 'LinkedIn outreach,' 'social pipeline,' or 'LinkedIn optimization.' This skill covers social selling strategy from profile optimization through DM-to-deal conversion. Do NOT use for technical implementation, code review, or software architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["social-selling", "the", "user", "wants", "sell", "social", "media", "optimize"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Social Selling Skill

## Overview

This public intake copy packages `packages/skills-catalog/skills/(gtm)/social-selling` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Social Selling Skill You are a social selling strategist who builds systems that turn LinkedIn (and multi-platform) presence into qualified pipeline. You combine profile optimization, content strategy, engagement tactics, and DM sequences into a repeatable revenue engine. Every touchpoint is intentional, personalized, and designed to move a prospect closer to a conversation.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, 1. LinkedIn Profile Optimization for Sales, 2. LinkedIn Sales Navigator, 3. Content-to-Conversation Framework, 4. DM Sequence Templates, 5. LinkedIn Automation Tools.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: When the user wants to sell through social media, optimize LinkedIn for sales, build DM sequences, or convert content engagement into pipeline. Also use when the user mentions 'social selling,' 'LinkedIn selling,'....
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

Confirm these with the user before executing:

1. **Platform focus** - LinkedIn only, or multi-platform (LinkedIn + X + YouTube)?
2. **Current state** - Active LinkedIn profile? SSI score?
3. **ICP clarity** - Who are they selling to? (title, company size, industry)
4. **Content cadence** - Already posting? How often?
5. **Tool stack** - Sales Navigator, Taplio, Expandi, etc.?
6. **Sales cycle** - Average deal size and cycle length
7. **Goal** - Pipeline meetings, inbound leads, brand authority, or all three?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @social-selling to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/social-selling/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/social-selling/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @social-selling using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

- **User says:** "Help me improve my LinkedIn for sales" → **Result:** Agent asks for ICP and SSI score, then suggests profile optimization (headline, About, featured content), 3–5 post themes, and a DM sequence template with 3–5 touchpoints.
- **User says:** "We want to do social selling as a team" → **Result:** Agent clarifies roles (who posts vs who engages), recommends advocacy workflow, content calendar cadence, and how to track pipeline from social in CRM.
- **User says:** "What should I post about to get meetings?" → **Result:** Agent identifies 2–3 content themes tied to buyer pain and provides 3 example hooks plus a CTA that leads to a low-friction next step (e.g. asset, poll, or DM).

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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(gtm)/social-selling`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Low profile views / no engagement** → **Cause:** Inconsistent posting or generic content. **Fix:** Post at least 3x/week, use one clear idea per post, and add a clear CTA; check SSI and fix weak areas (e.g. finder vs creator).
- **DMs ignored or marked spam** → **Cause:** Too salesy first message or high volume. **Fix:** Lead with value (insight, resource, or question), keep first message under 100 words, and space touches 3–5 days apart.
- **Content doesn’t convert to pipeline** → **Cause:** No path from content to conversation or meeting. **Fix:** Add one explicit next step per post (DM, comment, asset), and track which themes drive replies; double down on those.

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

### Daily Routine (30 min)

```
[5 min]  SSI dashboard + profile views
[10 min] Comment on 5 ICP prospect posts
[5 min]  Send 2-3 warm DMs
[5 min]  Reply to comments on your posts
[5 min]  Sales Navigator trigger event alerts
```

### Weekly Routine

```
Mon: Plan 3-5 posts for the week
Tue: Publish + 20 min engagement
Wed: Review DM pipeline, send follow-ups
Thu: Publish + 20 min engagement
Fri: Publish + review weekly metrics
```

### Target Benchmarks

| Metric                 | Target |
|-----------------------|--------|
| SSI Score              | 70+    |
| Posts per week         | 3-5    |
| Connection acceptance  | 40%+   |
| DM reply rate (warm)   | 30%+   |
| Meetings from social/mo| 8+     |
| Engagement rate        | 3%+    |
| Profile views/week     | 200+   |

---

#### Imported: 1. LinkedIn Profile Optimization for Sales

Your profile is your storefront. Prospects evaluate credibility within seconds.

### Profile Audit Checklist

| Element        | Optimization Target                                                        |
|---------------|---------------------------------------------------------------------------|
| Photo          | Professional headshot, good lighting. Profiles with photos get 14x views. |
| Banner         | Brand graphic with value prop, social proof, or CTA.                      |
| Headline       | Outcome-driven. BAD: "CEO at Acme" GOOD: "Helping B2B SaaS teams close 30% more deals with outbound systems" |
| About          | Written TO the prospect. Structure: Problem > Solution > Proof > CTA. First 3 lines must hook before fold. |
| Featured       | Pin best content, lead magnet, case study, or booking link. Max 3. Rotate quarterly. |
| Experience     | Outcomes, not duties. Include metrics.                                     |
| Skills         | Top 3 match ICP searches. Get endorsements from clients.                  |
| Recommendations| 3-5 from clients (not colleagues). ICP recommendations carry the most weight. |

### Headline Formulas

- **Outcome**: "I help [ICP] achieve [outcome] through [method]"
- **Authority**: "[Role] | [Credibility metric] | [What you talk about]"
- **Curiosity**: "[Specific outcome] for [audience] - without [common pain]"

### About Section (4 paragraphs)

1. **Hook** (first 3 lines): State the problem your ICP faces. Be specific.
2. **Bridge**: How you solve it. Reference your method or framework.
3. **Proof**: 2-3 specific results with numbers.
4. **CTA**: "DM me [keyword]" or "Book 15 min here: [link]"

---

#### Imported: 2. LinkedIn Sales Navigator

Sales Navigator provides 36 lead filters and 16 account filters vs. 18 in basic search.

### Key Filter Combinations

| Filter Stack                              | Use Case                                          |
|------------------------------------------|--------------------------------------------------|
| Title + Seniority + Company Size + Industry | Core ICP targeting. Start here.                  |
| Changed Jobs (last 90 days) + Seniority   | Warm prospects with new budget and motivation.   |
| Posted on LinkedIn (30 days) + Title      | Active users likely to see content and reply.     |
| Past Company + Current Company            | Alumni targeting. Shared experience = rapport.    |
| Keyword in profile + Company Size         | People using your solution-space language.        |
| Buyer Intent signals + Growth Rate        | Accounts actively researching your category.      |

### Boolean Search Patterns

- **AND**: `"VP Sales" AND "SaaS"` - both terms must appear
- **OR**: `"Head of Marketing" OR "Marketing Director"` - either term
- **NOT**: `"CEO" NOT "co-founder"` - exclude terms
- **Parentheses**: `("VP" OR "Director") AND "Marketing"` - grouped logic

### Lead List Management

- **Save searches**: Refresh weekly. Navigator surfaces new matches automatically.
- **List hygiene**: B2B data decays 2.1%/month. Update lists every 90 days.
- **Tiered lists**: Tier 1 (high-fit, high-intent) = manual outreach. Tier 2 = semi-automated. Tier 3 = content nurture only.
- **AI search**: Navigator accepts conversational prompts like "Find sales leaders at mid-market SaaS companies on the West Coast."

---

#### Imported: 3. Content-to-Conversation Framework

Content is the top of the social selling funnel. The goal is conversations that lead to pipeline.

### The 4-Stage Flow

```
POST (attract) --> ENGAGE (warm up) --> DM (open) --> CALL (close)
   |                  |                   |              |
 Content ICP       Comments on        Value-first    Discovery
 cares about       their posts        message with   call or
                   first              shared context  demo booked
```

### Stage 1: Post (Attract)

| Content Type        | Purpose                   | Frequency   |
|--------------------|---------------------------|-------------|
| Problem-aware posts | Show you understand pain   | 2x/week     |
| Framework posts     | Demonstrate methodology    | 1x/week     |
| Case study snippets | Social proof in feed       | 1x/week     |
| Contrarian takes    | Pattern interrupt, reach    | 1x/2 weeks  |
| Personal stories    | Build trust and likability  | 1x/week     |

### Stage 2: Engage (Warm Up)

**Daily routine (20 min):** Comment on 5 ICP prospect posts. React to 10 ICP accounts. Reply to 3 comments on your own posts with depth.

Comment quality matters. Add insight, share a related experience, or ask a genuine question. "Great post!" does nothing.

### Stage 3: DM (Open)

Only DM after engaging 2-3 times. They should recognize your name.

- Reference something specific (their post, company news, shared connection)
- Lead with value, not a pitch
- Keep under 75 words
- Ask one question, not three
- No links in first message

### Stage 4: Call (Convert)

Transition when they show buying signals: ask about pricing, describe a problem you solve, ask "how does this work?", or share timeline pressure.

**Transition phrase**: "This sounds like something worth a 15-min conversation. Want me to send a calendar link?"

---

#### Imported: 4. DM Sequence Templates

### Sequence Architecture

```
Day 0:   Connection request (personalized note, under 300 chars)
Day 1:   Accept - no message (patience)
Day 3:   First DM - value-first, reference context
Day 7:   Follow-up - share relevant resource
Day 14:  Social proof follow-up
Day 30:  Final low-pressure check-in
STOP:    After 3 unanswered follow-ups - move to content nurture
```

Personalized connection requests get 40% higher acceptance rates.

### Template: Connection Request

> Hey [Name] - I've been following your posts on [topic]. Your take on [specific point] resonated. Would love to connect and swap notes on [shared interest].

### Template: First DM (Day 3)

> [Name] - thanks for connecting. I noticed [observation about their company/role]. We've been working on [related topic] and found [one specific insight]. Curious - are you seeing something similar?

### Template: Value-Add Follow-Up (Day 7)

> [Name] - came across this [article/report] on [relevant topic]. Thought of you given your work on [specific area]. No strings attached.

### Template: Social Proof (Day 14)

> [Name] - we just helped [similar company] [achieve specific outcome] in [timeframe]. The biggest lever was [one tactic]. Happy to share details over a quick call if that resonates.

### Template: Final Touch (Day 30)

> [Name] - circling back one last time. If [problem you solve] is on your radar this quarter, happy to chat. If timing isn't right, no worries - I'll keep sharing useful stuff in the feed.

### Voice Note and Video DMs

Voice notes get 2-3x higher response rates. Use for Tier 1 prospects. Keep 30-60 seconds, say their name, reference something specific, end with one question. Video DMs (45-90 sec) with screen-shares are even harder to ignore.

---

#### Imported: 5. LinkedIn Automation Tools

### Tool Comparison

| Tool       | Best For           | Key Feature              | Safety  | Price/mo  |
|-----------|--------------------|--------------------------|---------|-----------|
| Taplio     | Content creators   | AI content from 500M+ posts | Moderate | $32-149  |
| Shield     | Analytics          | Deep stats, 100% safe (read-only) | Highest | $25-50  |
| AuthoredUp | Content writers   | Post formatting, preview  | Highest | $15-19   |
| Dripify    | Sales teams        | Visual drip campaigns     | High    | $59-99   |
| Expandi    | High-vol outreach  | Cloud-based, dedicated IPs | Highest | $99     |

### Tool Selection by Role

- **Solo founder**: Taplio or AuthoredUp (cheaper)
- **Sales team outbound**: Expandi + Shield
- **Agency**: Dripify (multi-account) + Shield
- **Content-first seller**: AuthoredUp + Shield
- **Budget-conscious**: AuthoredUp ($15/mo) + manual outreach

### Automation Safety Limits

- Connection requests: Max 80-100/week
- Messages: Max 100-150/week to existing connections
- Profile views: Max 150-200/day
- Warm-up period: 2-3 weeks of gradually increasing activity for new tools
- Cloud-based tools safer than browser extensions (dedicated IPs)

---

#### Imported: 6. Social Selling Metrics

### SSI Score (0-100, four pillars at 25 pts each)

| Pillar                    | How to Improve                                    |
|--------------------------|--------------------------------------------------|
| Professional brand        | Complete profile, publish content, endorsements   |
| Find the right people     | Sales Navigator, connect with ICP, view targets  |
| Engage with insights      | Comment on industry content, share with commentary|
| Build relationships       | Message regularly, grow network with decision-makers |

**Benchmarks:** Average user: 40-50. Active seller: 60-70. Top performer: 75+. SSI above 70 = 45% more opportunities, 51% more likely to hit quota. Check at linkedin.com/sales/ssi

### Core Metrics Dashboard

| Metric                      | Good      | Great   |
|-----------------------------|-----------|---------|
| Connection acceptance rate   | 30-40%   | 50%+    |
| DM reply rate (cold)         | 7-15%    | 25%+    |
| DM reply rate (warm)         | 25-40%   | 50%+    |
| Content engagement rate      | 2-3%     | 5%+     |
| Profile views/week           | 100-200  | 300+    |
| Meetings booked/month        | 4-8      | 12+     |
| InMail response rate         | 10-15%   | 25%+    |

### Attribution

Tag every meeting source in CRM: "LinkedIn - inbound DM", "LinkedIn - outbound DM", "LinkedIn - content reply", "LinkedIn - Sales Navigator." Track first touch (content/connection), influence touch (multiple post engagements), and conversion touch (meeting trigger).

---

#### Imported: 7. Multi-Platform Social Selling

LinkedIn is home base. Multi-platform amplifies reach and deepens trust.

### Platform Roles

| Platform   | Role                     | Content Focus                                  |
|-----------|--------------------------|------------------------------------------------|
| LinkedIn   | Primary pipeline         | Frameworks, case studies, DMs                  |
| X/Twitter  | Thought leadership       | Hot takes, threads, real-time commentary       |
| YouTube    | Deep trust               | Long-form tutorials, interviews, case studies  |
| Newsletter | Owned audience           | Weekly insights, deeper frameworks             |

### Content Multiplication

One core idea becomes 5+ pieces: YouTube long-form > LinkedIn post (key takeaway) > X thread (numbered insights) > Newsletter section > LinkedIn carousel > Short-form video clip (60-90 sec).

### Platform Tactics

**LinkedIn:** PDF carousels = highest reach. External links = -60% reach (put in comments). Dwell time matters more than likes. Specific details (company names, exact metrics) get 3-4x more reach than generic framework posts.

**X/Twitter:** Build-in-public narratives. Quote-tweets with real insight. Engage in reply threads of 10K-100K follower accounts.

**YouTube:** 92% of marketers maintaining or increasing video investment. Repurpose clips to LinkedIn and X.

---

#### Imported: 8. Thought Leadership as GTM

47% of B2B marketers plan to increase data-driven thought leadership investment in 2026. Enterprise buyers spend only 17% of their purchase journey meeting vendors. 84% of C-level buyers are influenced by social media.

### Content Tiers

| Tier   | Content Type                   | Effort | Impact  |
|-------|-------------------------------|--------|---------|
| Tier 1 | Original research / data      | High   | Highest |
| Tier 2 | Contrarian POV with evidence  | Medium | High    |
| Tier 3 | Framework / methodology posts | Medium | High    |
| Tier 4 | Industry commentary           | Low    | Medium  |
| Tier 5 | Curated insights with opinion | Low    | Medium  |

### Founder-Led Playbook

For companies under $1M ARR, founder brand is the highest-ROI GTM channel (LinkedIn organic: 113% ROAS benchmark).

**Cadence:** 4-5 LinkedIn posts/week. 1 long-form piece/week. Daily 20-min engagement. 1 carousel or thread/week.

**Content pillars (pick 3-4):** Behind-the-scenes building. Industry problems + your POV. Customer stories. Tactical how-to. Personal stories revealing values.

---

#### Imported: 9. Employee Advocacy and Company Pages

Company pages get ~5% feed allocation vs. ~65% for personal profiles. Employee advocacy is the primary brand distribution channel.

Employee-shared posts get 2.75x more impressions and 5x more engagement than company page posts. Only 3% of employees share, yet they drive 30% of total company engagement.

### Advocacy Program Phases

**Phase 1 - Activate (Month 1):** Identify 5-10 already-active employees. Optimize their profiles (Section 1). Run 30-min training.

**Phase 2 - Enable (Month 2-3):** Weekly content suggestions with ready-to-share snippets. Encourage personal reflections over generic reshares. Shared Slack channel for ideas.

**Phase 3 - Scale (Month 4+):** Track participation per employee. Recognize advocates. Advanced social selling training.

### Company Page Role

Use for credibility validation (prospects check after seeing employee content), job postings, LinkedIn ad retargeting base, and pinned foundational content.

---

#### Imported: 10. LinkedIn Algorithm (2026)

### Three Core Signals

1. **Initial engagement quality** - First 60 minutes critical
2. **Dwell time** - Most important metric (how long people actually read)
3. **Creator authenticity** - Genuine expertise vs. engagement bait

### What Hurts Reach

- External links in post body: -60% (put in comments)
- Engagement pods: Algorithm detects with 97% accuracy, penalties applied
- Single images: -30% vs. text-only
- Generic framework posts: 3-4x less reach than posts with specific details

### What Helps Reach

- PDF carousels (highest dwell time)
- LinkedIn Live (7x more reactions than standard video)
- Text with concrete details (company names, exact metrics, timeframes)
- Fast replies to comments in first hour
- Posting Tuesday-Thursday 8-10 AM local for B2B

**Pod warning:** If using engagement pods, exit immediately. Recovery takes several weeks as trust scoring recalibrates.

### Content Format Performance Ranking

1. PDF carousels (highest engagement + dwell time)
2. LinkedIn Live (7x reactions vs. standard video)
3. Text-only with specifics (strong reach per effort ratio)
4. Standard video (good engagement, moderate reach)
5. Text with single image (underperforms text-only by 30%)
6. Posts with external links (60% reach penalty)

---

#### Imported: Questions to Ask

1. What is your ICP? (Title, company size, industry, geography)
2. What is your current LinkedIn SSI score?
3. Do you have Sales Navigator? Which tier?
4. How many posts per week are you publishing?
5. Average deal size and sales cycle?
6. Solo or team to activate for advocacy?
7. Existing content to repurpose (blog, newsletter, podcast)?
8. What CRM for pipeline tracking?
9. Comfort level with DM outreach?
10. Budget for LinkedIn automation tools?

---
