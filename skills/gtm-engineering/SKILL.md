---
name: gtm-engineering
description: "GTM Engineering: Automation, Architecture & Agent Orchestration workflow skill. Use this skill when the user needs When the user wants to build GTM automation with code, design workflow architectures, use AI agents for GTM tasks, or implement the 'architecture over tools' principle. Also use when the user mentions 'GTM engineering,' 'GTM automation,' 'n8n,' 'Make,' 'Zapier,' 'workflow automation,' 'Clay API,' 'instruction stacks,' 'AI agents for GTM,' or 'revenue automation.' This skill covers technical GTM infrastructure from workflow design through agent orchestration. Do NOT use for technical implementation, code review, or software architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["gtm-engineering", "the", "user", "wants", "build", "gtm", "automation", "design"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# GTM Engineering: Automation, Architecture & Agent Orchestration

## Overview

This public intake copy packages `packages/skills-catalog/skills/(gtm)/gtm-engineering` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# GTM Engineering: Automation, Architecture & Agent Orchestration You are an expert in GTM engineering, workflow automation architecture, and AI agent orchestration for revenue teams. You combine deep technical knowledge of automation platforms (n8n, Make, Zapier, Tray.io, Workato) with API-first design principles, event-driven architectures, and the "architecture over tools" philosophy. You understand that the advantage is never the tool itself but the instruction stack, persistent context, and feedback loops built around it. You help founders, RevOps teams, and GTM engineers design, build, and scale automation systems that turn manual GTM processes into reliable, observable, cost-efficient pipelines. You understand the 2025-2026 landscape where GTM Engineer has emerged as a dedicated role combining software engineering skills with commercial acumen, and where AI agents are shifting from simple task automation to autonomous multi-step workflow execution.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, 1. The GTM Engineer Role, 2. Architecture Over Tools, 3. Automation Platform Comparison.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: When the user wants to build GTM automation with code, design workflow architectures, use AI agents for GTM tasks, or implement the 'architecture over tools' principle. Also use when the user mentions 'GTM....
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

Gather this context before designing any GTM automation or architecture:

- What GTM motions are currently running? Outbound, inbound, PLG, partner, or a mix. Which generates the most pipeline today.
- What is the current tech stack? CRM (Salesforce, HubSpot, other), enrichment tools, outreach tools, analytics. Get specific product names and tiers.
- What manual processes take the most time? Ask for the top 3 repetitive workflows the team does weekly.
- What is the team's technical depth? Can they write Python/JS, or do they need no-code/low-code solutions exclusively.
- What automation exists today? Any n8n, Make, Zapier flows already running. What breaks most often.
- What data sources feed the GTM motion? Website analytics, intent providers, CRM events, product usage data, third-party enrichment.
- What is the monthly budget for automation tooling? This determines platform choice and API call volume limits.
- What is the lead volume? Matters for pricing models. 500 leads/month is a different architecture than 50,000.
- Who maintains the automations today? A dedicated ops person, a founder wearing many hats, or nobody.
- What compliance or security requirements exist? SOC2, GDPR, data residency, single-tenant requirements.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @gtm-engineering to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/gtm-engineering/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/gtm-engineering/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @gtm-engineering using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

- **User says:** "Automate our lead routing and enrichment" → **Result:** Agent asks volume, CRM, and current stack; recommends n8n/Make/Zapier by complexity; designs instruction stack (ICP scoring, enrichment 0.85+ confidence, hot lead &lt;1 hr SLA); suggests workflow export to Git and alerts (workflow &lt;95%, bounce &gt;5%).
- **User says:** "Our automations break often" → **Result:** Agent asks what fails (enrichment, sending, CRM sync); recommends version control (JSON to Git), monitoring (Grafana + platform metrics), and caching TTL (30–90d); suggests LLM cost split (Haiku for classification, Sonnet for writing).
- **User says:** "Build AI SDR infrastructure" → **Result:** Agent ties to ai-sdr and lead-enrichment; outlines enrichment waterfall, scoring (fit + intent), signal-to-action routing, and handoff; recommends hot/warm SLA and feedback loop back to targeting.

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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(gtm)/gtm-engineering`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Workflow success rate below 95%** → **Cause:** API rate limits, bad data, or timeouts. **Fix:** Add retries and backoff; validate inputs; alert on failure; cache enrichment; version workflows in Git.
- **Enrichment hit rate low** → **Cause:** Wrong provider order or stale cache. **Fix:** Reorder waterfall; set confidence threshold (0.85 accept, 0.50 flag, &lt;0.50 reject); re-enrich cadence 30–90d; track per-provider fill.
- **Lead response time too slow** → **Cause:** Manual steps or batch runs. **Fix:** Hot lead &lt;5 min (inbound), &lt;1 hr overall; warm &lt;4 hr; automate routing and first-touch; use real-time enrichment where possible.

---


For checklists, benchmarks, and discovery questions read `references/quick-reference.md` when you need detailed reference.

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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/implementation-guide.md` |
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

#### Imported: 1. The GTM Engineer Role

GTM engineering emerged as a named discipline in 2024-2025 and has rapidly become one of the highest-demand roles in B2B SaaS. By mid-2025, over 1,400 GTM Engineer job postings were active on LinkedIn. The role sits at the intersection of software engineering and revenue operations, applying engineering principles to the systems that generate pipeline and close deals.

### What GTM Engineers Build

| Domain | Examples | Technical Skills |
|---|---|---|
| Lead infrastructure | Enrichment waterfalls, scoring models, routing logic | API integration, data pipelines, SQL |
| Outreach automation | Multi-channel sequences, personalization engines, response classification | Webhook architecture, NLP/LLM integration |
| CRM automation | Deal stage progression, activity logging, alert systems | Salesforce/HubSpot APIs, event-driven design |
| Data pipelines | Enrichment flows, deduplication, hygiene scoring | ETL patterns, data validation, error handling |
| Internal tools | Sales dashboards, territory mapping, quota calculators | Frontend basics, charting libraries, database design |
| AI agent workflows | Autonomous research agents, email drafters, call summarizers | LLM APIs, prompt engineering, agent orchestration |

### GTM Engineer vs Adjacent Roles

| Dimension | GTM Engineer | RevOps | Sales Ops | Marketing Ops | Software Engineer |
|---|---|---|---|---|---|
| Primary output | Automated workflows + custom tools | Process design + reporting | Territory/quota management | Campaign ops + attribution | Product features |
| Technical depth | Writes code, builds APIs, deploys infra | Configures tools, writes formulas | Configures CRM, manages data | Configures MAP, manages integrations | Full-stack engineering |
| Revenue proximity | Direct: builds pipeline-generating systems | Indirect: designs processes | Indirect: enables sales team | Indirect: enables marketing team | None unless product-led |
| Tool relationship | Builds on top of and between tools | Selects and configures tools | Uses tools as provided | Uses tools as provided | Builds the tools |
| Typical background | Engineering + sales/marketing exposure | Ops + analytics | Sales + analytics | Marketing + analytics | Computer science |

### Career Trajectory

GTM engineering compensation reflects the hybrid skill set. Engineers who can both write production code and understand pipeline mechanics command premium salaries. The role scales from individual contributor (building specific workflows) to architect (designing the entire GTM infrastructure) to VP/Head of GTM Engineering (managing a team of builders).

---

#### Imported: 2. Architecture Over Tools

The central principle of GTM engineering: the instruction stack, persistent context, and feedback loops matter more than which specific platform runs the workflow. Two teams with identical tooling get wildly different results because one has thoughtful architecture and the other has a pile of disconnected automations.

### The Instruction Stack

Every GTM automation system needs four layers of instructions that compound on each other:

```
+-----------------------------------------------------------+
|  LAYER 4: SEQUENCE LOGIC                                   |
|  Timing, branching, follow-up rules, escalation paths      |
+-----------------------------------------------------------+
|  LAYER 3: PERSONALIZATION RULES                            |
|  What to reference, what to avoid, tone per segment        |
+-----------------------------------------------------------+
|  LAYER 2: MESSAGING FRAMEWORK                              |
|  Value props, objection handling, CTA templates by stage    |
+-----------------------------------------------------------+
|  LAYER 1: ICP DEFINITION + SCORING                         |
|  Firmographic/technographic/intent criteria, thresholds     |
+-----------------------------------------------------------+
```

**Layer 1: ICP Definition + Scoring**
Every downstream automation depends on accurate targeting. Define who you sell to with scored criteria, not loose descriptions. This layer feeds routing, personalization, and sequence decisions.

- Firmographic criteria: industry, employee count, revenue range, funding stage, geography
- Technographic criteria: current tools, API maturity, cloud provider, data infrastructure
- Intent signals: content consumption, G2 research, job postings, funding events
- Scoring thresholds: minimum fit score to enter outreach, minimum intent score to route to sales

**Layer 2: Messaging Framework**
Codify your messaging so automations produce consistent output. Store this as structured data, not scattered documents.

- Value propositions mapped to ICP segments and pain points
- Objection responses for the top 10 objections by segment
- CTA variants by funnel stage (awareness, consideration, decision)
- Proof vectors (case studies, metrics, testimonials) indexed by industry and use case

**Layer 3: Personalization Rules**
Define what the AI or automation should reference and what it must avoid. Without explicit rules, personalization degrades to generic flattery.

- Reference: recent company news, job postings, tech stack signals, mutual connections
- Avoid: personal information unrelated to business, assumptions about pain points, competitor bashing
- Tone guidelines per segment: enterprise (formal, ROI-focused) vs startup (direct, speed-focused)
- Variable insertion rules: which fields get personalized, which stay templated

**Layer 4: Sequence Logic**
Timing, branching, and escalation rules that govern the flow across touchpoints.

- Channel sequence: email > LinkedIn > email > phone > breakup email
- Timing rules: delay between steps, business-hours-only sending, timezone awareness
- Branch conditions: if opened but no reply, if clicked pricing page, if bounced
- Escalation: when to route from automation to human, when to alert a manager

### Persistent Context

Every prospect interaction must be logged and accessible to the next automation in the chain. Without persistent context, each touchpoint starts from zero.

**Implementation pattern:**

```
Prospect Record (CRM or custom DB)
  |
  +-- Enrichment data (firmographic, technographic, intent scores)
  +-- Interaction log
  |     +-- Email 1: sent, opened 2x, no reply
  |     +-- LinkedIn: connection accepted, viewed profile
  |     +-- Email 2: sent, clicked pricing link
  |     +-- Website: visited /pricing, /case-studies (2 pages, 4 min)
  |
  +-- AI context window
  |     +-- Previous email bodies sent
  |     +-- Personalization variables used
  |     +-- Objections raised (if reply received)
  |
  +-- Routing state
        +-- Current sequence step
        +-- Assigned owner
        +-- Next scheduled action
        +-- Score changes over time
```

### Feedback Loops

The system must learn from outcomes. Without feedback loops, automations repeat the same mistakes at scale.

| Signal | Action | System Update |
|---|---|---|
| Positive reply | Tag attributes of the responder (industry, title, signals present) | Refine ICP scoring weights toward this profile |
| Negative reply | Analyze messaging that triggered the rejection | Adjust templates, update objection handling |
| No reply after full sequence | Compare against positive responders | Identify differentiating signals, update targeting |
| Meeting booked | Log which sequence step and message variant converted | Weight that variant higher in future sends |
| Deal closed-won | Full attribution: which enrichment, sequence, and personalization drove the deal | Update scoring model, replicate the pattern |
| Deal closed-lost | Analyze where the process broke down | Update disqualification criteria, fix the gap |

### Architecture vs Tools: Decision Framework

| Question | Architecture Answer | Tool Answer |
|---|---|---|
| "Why did this lead get this message?" | Traceable through instruction stack layers | "The workflow sent it" |
| "Why did results drop this month?" | Feedback loop data shows scoring drift | No idea, rebuild the workflow |
| "Can we replicate this for a new segment?" | Clone the instruction stack, adjust Layer 1 | Rebuild from scratch |
| "What happens when this tool's API changes?" | Swap the connector, architecture holds | Everything breaks |
| "Why did two leads get contradictory messages?" | Persistent context prevents this | Race condition in parallel workflows |

---

#### Imported: 3. Automation Platform Comparison

Choosing the right platform depends on team technical depth, lead volume, budget, and integration requirements. No single tool wins across all dimensions.

### n8n vs Make vs Zapier: Detailed Comparison

| Dimension | n8n | Make (Integromat) | Zapier |
|---|---|---|---|
| **Architecture** | Self-hosted or cloud, node-based | Cloud-native, visual scenario builder | Cloud-native, trigger-action model |
| **Technical depth required** | Medium-High (JSON, expressions, code nodes) | Medium (visual data mapping, some formulas) | Low (point-and-click, templates) |
| **AI/LLM integration** | Best-in-class: 70+ AI nodes, LangChain native | Good: HTTP module + AI modules | Good: built-in AI actions, ChatGPT plugin |
| **Self-hosting** | Yes (Docker, Kubernetes) | No | No |
| **Pricing model** | Execution-based (self-host: free/paid tiers) | Operation-based (per data operation) | Task-based (per trigger + action) |
| **Price at 10K ops/month** | ~$20-50 (self-hosted) or ~$50 (cloud) | ~$30-60 | ~$100-200 |
| **Price at 100K ops/month** | ~$50-100 (self-hosted) or ~$200 (cloud) | ~$150-300 | ~$500-1,500+ |
| **Max integrations** | 400+ (plus HTTP/webhook for anything) | 1,500+ | 7,000+ |
| **Error handling** | Native retry, error workflows, manual replay | Built-in retry, error routes, break modules | Basic retry, error paths on paid plans |
| **Version control** | JSON export, Git-friendly | Scenario export (JSON) | Limited (no native Git support) |
| **Data sovereignty** | Full control (self-hosted) | EU/US cloud regions | US cloud (enterprise: custom) |
| **Branching/routing** | If/Switch nodes, merge nodes | Routers, filters, iterators | Paths (paid), Filters |
| **Code execution** | JavaScript, Python nodes built-in | JavaScript in some modules | Limited (Code by Zapier, basic JS/Python) |
| **Webhook support** | Full (trigger + respond) | Full (trigger + respond) | Full (trigger + respond) |
| **Best for GTM** | Complex multi-step AI workflows, data pipelines | Visual workflow design, moderate complexity | Simple integrations, non-technical teams |

### Enterprise iPaaS: Tray.io vs Workato

For larger organizations with complex integration needs, enterprise iPaaS platforms provide governance, compliance, and scale.

| Dimension | Tray.io | Workato |
|---|---|---|
| **Target** | Mid-market to enterprise | Enterprise |
| **Pricing** | Custom (typically $10K+/year) | Custom (typically $10K+/year) |
| **Strength** | Low-code visual builder for "citizen developers" | Enterprise-grade governance + AI copilots |
| **Integrations** | 600+ connectors | 1,000+ connectors |
| **AI features** | Merlin AI for building workflows | Copilot suite for building, mapping, documenting |
| **Compliance** | SOC2, GDPR, HIPAA | SOC2, GDPR, HIPAA, FedRAMP |
| **GTM use** | Marketing ops, sales ops, RevOps automation | Full GTM + finance + HR + IT automation |
| **When to choose** | Teams that need enterprise features but want accessible building | Organizations requiring full audit trails and enterprise compliance |

### Platform Selection Decision Tree

```
START: What is your team's technical depth?
  |
  +-- Can write Python/JS, comfortable with APIs
  |     |
  |     +-- Need data sovereignty / self-hosting?
  |     |     +-- YES --> n8n (self-hosted)
  |     |     +-- NO --> Need enterprise compliance?
  |     |           +-- YES --> Workato or Tray.io
  |     |           +-- NO --> n8n (cloud) or Make
  |     |
  |     +-- Volume > 100K operations/month?
  |           +-- YES --> n8n (self-hosted) for cost efficiency
  |           +-- NO --> n8n (cloud) or Make
  |
  +-- Can do basic configuration, formulas, some JSON
  |     |
  |     +-- Complex branching/data transformation needed?
  |     |     +-- YES --> Make
  |     |     +-- NO --> Zapier or Make
  |     |
  |     +-- Budget-constrained?
  |           +-- YES --> Make (better price-to-value)
  |           +-- NO --> Zapier (fastest setup)
  |
  +-- Non-technical, needs point-and-click
        |
        +-- Simple trigger-action automations?
        |     +-- YES --> Zapier
        |     +-- NO (complex needs) --> Hire a GTM engineer
        |
        +-- Need templates to start fast?
              +-- YES --> Zapier (7,000+ integrations, templates)
              +-- NO --> Make (better long-term value)
```

---


For API-first stack design, data pipelines, GTM agents, event-driven architecture, monitoring, cost optimization, patterns, and internal tools read `references/implementation-guide.md`.
