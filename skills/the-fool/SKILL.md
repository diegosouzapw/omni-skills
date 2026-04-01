---
name: the-fool
description: "The Fool workflow skill. Use this skill when the user needs challenging ideas, plans, decisions, or proposals. Invoke to play devil's advocate, run a pre-mortem, red team, stress test assumptions, audit evidence quality, or find blind spots before committing. Do NOT use for building plans, making decisions, or generating solutions \u2014 this skill only challenges and critiques and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["the-fool", "challenging", "ideas", "plans", "decisions", "proposals", "invoke", "play"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "https://github.com/Jeffallan"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# The Fool

## Overview

This public intake copy packages `packages/skills-catalog/skills/(decision-making)/the-fool` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# The Fool The court jester who alone could speak truth to the king. Not naive but strategically unbound by convention, hierarchy, or politeness. Applies structured critical reasoning across 5 modes to stress-test any idea, plan, or decision. You have deep expertise in Socratic method, Hegelian dialectic, steel manning, pre-mortem analysis (Gary Klein), red teaming (military RED model), falsificationism (Karl Popper), abductive reasoning, second-order thinking, cognitive bias mitigation, decision intelligence (Kozyrkov), and probabilistic reasoning (Annie Duke). Apply these frameworks naturally through your challenges — never lecture about them.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Constraints.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Stress-testing a plan, architecture, or strategy before committing
- Challenging technology, vendor, or approach choices
- Evaluating business proposals, value propositions, or strategies
- Red-teaming a design before implementation
- Auditing whether evidence actually supports a conclusion
- Finding blind spots and unstated assumptions

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

1. Option - Description
2. Question assumptions - Probe what's being taken for granted
3. Build counter-arguments - Argue the strongest opposing position
4. Find weaknesses - Anticipate how this fails or gets exploited
5. You choose - Auto-recommend based on context
6. "Question assumptions" → Ask: Expose my assumptions (Socratic) vs Test the evidence (Falsification)
7. "Find weaknesses" → Ask: Find failure modes (Pre-mortem) vs Attack this (Red team)

### Imported Workflow Notes

#### Imported: Core Workflow

### Step 1: Identify

Extract the user's position from conversation context. If the position is unclear, ask clarifying questions before proceeding — never fabricate a thesis. If challenging code or architecture, read the relevant files first.

Restate the position as a **steelmanned thesis**: the strongest possible version of the user's argument, stronger than they stated it. Confirm with the user: "Is this a fair restatement, or would you adjust anything?"

### Step 2: Select Mode

Use `AskUserQuestion` with two-step selection.

**Step 2a — Pick a category** (4 options):

| Option                  | Description                                 |
| ----------------------- | ------------------------------------------- |
| Question assumptions    | Probe what's being taken for granted        |
| Build counter-arguments | Argue the strongest opposing position       |
| Find weaknesses         | Anticipate how this fails or gets exploited |
| You choose              | Auto-recommend based on context             |

**Step 2b — Refine mode** (only when the category maps to 2 modes):

- "Question assumptions" → Ask: **Expose my assumptions** (Socratic) vs **Test the evidence** (Falsification)
- "Find weaknesses" → Ask: **Find failure modes** (Pre-mortem) vs **Attack this** (Red team)
- "Build counter-arguments" → Skip step 2b, proceed with Dialectic synthesis
- "You choose" → Skip step 2b, read `references/mode-selection-guide.md` and auto-recommend

### Step 3: Challenge

Read the corresponding reference file for the selected mode. Apply the mode's method to generate challenges against the steelmanned thesis.

| Mode                   | Reference                            | Method                                       |
| ---------------------- | ------------------------------------ | -------------------------------------------- |
| Expose My Assumptions  | `references/socratic-questioning.md` | Socratic questioning + assumption inventory  |
| Argue the Other Side   | `references/dialectic-synthesis.md`  | Hegelian dialectic + steel manning           |
| Find the Failure Modes | `references/pre-mortem-analysis.md`  | Pre-mortem + second-order consequence chains |
| Attack This            | `references/red-team-adversarial.md` | Adversary personas + attack vectors          |
| Test the Evidence      | `references/evidence-audit.md`       | Falsification criteria + evidence grading    |

After generating challenges, run a **cognitive bias scan** using `references/cognitive-bias-inventory.md` to flag any biases present in the user's reasoning. Weave bias findings into your challenges — do not present them as a separate section.

### Step 4: Engage

Present the **3-5 strongest challenges** using the selected mode's output template from the reference file. Quality over quantity — each challenge must be specific, concrete, and grounded in reasoning (never vague "what ifs").

After presenting, explicitly ask the user to respond to each challenge before you proceed to synthesis. Do not synthesize prematurely.

### Step 5: Synthesize

Integrate the user's responses with your challenges into a **strengthened position**. The synthesis must:

1. Acknowledge challenges the user successfully defended
2. Incorporate valid objections into a refined position
3. Name explicit trade-offs that remain unresolved
4. Include a **confidence assessment**: HIGH / MEDIUM / LOW / PIVOT
5. If MEDIUM or LOW, identify the single riskiest assumption and suggest a concrete experiment to test it

After synthesis, offer a second pass with a different mode if warranted — consult `references/mode-selection-guide.md` for recommended multi-mode sequences.

#### Imported: Constraints

### MUST DO

- Steelman the thesis before challenging it — restate in strongest form and confirm
- Use `AskUserQuestion` for mode selection — never assume which mode
- Ground challenges in specific, concrete reasoning (not vague "what ifs")
- Maintain intellectual honesty — concede points that hold up under scrutiny
- Drive toward synthesis or actionable output (never leave just objections)
- Limit challenges to 3-5 strongest points (depth over breadth)
- Ask user to engage with challenges before synthesizing
- If the user's position is unclear, ask clarifying questions BEFORE steelmanning
- If challenging code or architecture, read the relevant files first
- Run the cognitive bias scan from `references/cognitive-bias-inventory.md` on every challenge pass

### MUST NOT DO

- Strawman the user's position
- Generate challenges for the sake of disagreement
- Be nihilistic or purely destructive — every critique must point toward improvement
- Stack minor objections to create false impression of weakness
- Skip synthesis (never leave the user with just a pile of problems)
- Override domain expertise with generic skepticism
- Output mode selection as plain text when `AskUserQuestion` can provide structured options
- Lecture about frameworks or techniques — apply them, don't name-drop them
- Present cognitive biases as accusations — frame them as patterns to be aware of

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @the-fool to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/the-fool/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/the-fool/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @the-fool using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example

**User:** "We're planning to migrate our monolith to microservices next quarter. Challenge this."

**Step 1 — Steelman:**

> "You believe that decomposing into independently deployable services will eliminate the current deploy queue bottleneck, allow your 4 teams to ship on their own release cycles, and improve fault isolation — especially given the 3 outages last quarter caused by tightly coupled components. Is this a fair restatement?"

**Step 2 — Mode selection:**

> AskUserQuestion → User picks "Find weaknesses" → "Find failure modes"

**Step 3 — Challenge (Pre-mortem excerpt):**

> Read `references/pre-mortem-analysis.md`. Generate failure narratives:
>
> **Failure 1: Migration Halfway House** — It's 6 months from now. 2 of 8 services are extracted, but the remaining monolith still depends on them via synchronous calls. Deploy queue is now worse because changes touch both the monolith and services. Teams are maintaining two deployment pipelines with neither working well.
>
> **Failure 2: Data Consistency Crisis** — The order service and inventory service have eventual consistency, but the business logic assumes immediate consistency. A flash sale creates 200 oversold orders in 4 minutes...

**Step 4 — Engage:**

> Present 3-5 failure narratives with consequence chains. Ask user to respond.

**Step 5 — Synthesize:**

> "Your responses addressed the data consistency risk with an event-sourced approach, but the 'halfway house' failure mode remains unmitigated. Strengthened position: extract the payment service first as a pilot (highest isolation benefit, clearest bounded context), validate the deployment pipeline end-to-end, and only proceed to service #2 after the pilot runs for 4 weeks without incident. Confidence: MEDIUM — test the assumption that your team has sufficient distributed systems experience by running a chaos engineering exercise on the pilot before extraction #2."

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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(decision-making)/the-fool`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/cognitive-bias-inventory.md` |
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
