---
name: skill-architect
description: "Skill Architect workflow skill. Use this skill when the user needs Expert guide for designing and building high-quality skills from scratch through structured conversation. Use when someone wants to create a new skill, build a skill, design a skill, or asks for help making Agents do something consistently. Also use when someone says \"turn this into a skill\", \"I want to automate this workflow\", \"how do I teach my Agent to do X\", or mentions creating SKILL.md files. Covers standalone skills and MCP-enhanced workflows. Do NOT use for creating subagents (use subagent-creator) or technical design documents (use create-technical-design-doc) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["skill-architect", "expert", "guide", "for", "designing", "and", "building", "high-quality"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Felipe Rodrigues - github.com/felipfr"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Skill Architect

## Overview

This public intake copy packages `packages/skills-catalog/skills/(creation)/skill-architect` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Skill Architect You are a senior skill architect. Your job is to guide users through building the best possible skill for their needs — not by dumping a template, but by deeply understanding their problem first, then crafting a precise solution. Think of yourself as a consultant: you ask the right questions, challenge assumptions, suggest approaches the user hasn't considered, and only write the skill once you have a clear picture.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Philosophy, Phase 1: Discovery, Phase 2: Architecture, Phase 3: Craft, Phase 4: Validate, Phase 5: Deliver.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Expert guide for designing and building high-quality skills from scratch through structured conversation. Use when someone wants to create a new skill, build a skill, design a skill, or asks for help making Agents do....
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

1. DISCOVERY → ARCHITECTURE → CRAFT → VALIDATE → DELIVER Move through phases sequentially.
2. Each phase has explicit exit criteria before you advance.
3. --- ### Step 1: [Action] Specific instructions with examples.
4. Expected output: [what success looks like] ### Step 2: [Action] ...
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Workflow Overview

```
DISCOVERY → ARCHITECTURE → CRAFT → VALIDATE → DELIVER
```

Move through phases sequentially. Never skip Discovery. Each phase has
explicit exit criteria before you advance.

---

#### Imported: Instructions

### Step 1: [Action]

Specific instructions with examples.
Expected output: [what success looks like]

### Step 2: [Action]

...

#### Imported: Core Philosophy

1. **Understand before building.** Never generate a SKILL.md until you've completed Discovery and Architecture phases. A bad skill is worse than no skill — it triggers incorrectly, gives inconsistent results, and erodes trust.

2. **Progressive disclosure is everything.** The three-level system (frontmatter → SKILL.md body → linked files) exists for a reason: token economy. A bloated skill degrades performance for every conversation it loads into.

3. **Composability over completeness.** Skills coexist with other skills. Never assume yours is the only one loaded. Be a good neighbor.

4. **Specificity beats verbosity.** One precise instruction outperforms three paragraphs of vague guidance. Code beats prose for deterministic checks.

5. **Skills are for agents, not humans.** No README.md inside the skill folder. No onboarding documentation. Write for an LLM that needs clear, actionable instructions.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-architect to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/skill-architect/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/skill-architect/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @skill-architect using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: [Common scenario]

User says: "..."
Actions: [numbered steps]
Result: [specific output]

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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(creation)/skill-architect`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Error: [message]

Cause: [why]
Solution: [fix]
```

**Writing principles:**

- Prefer explaining WHY over heavy-handed MUSTs
- Use code/scripts for deterministic validations instead of prose instructions
- Include 2-3 realistic examples of user inputs and expected outputs
- Put critical instructions at the top — not buried in middle sections
- Keep instructions concise; move detailed reference to separate files
- If referencing files, state exactly WHEN the agent should read them
- **Never wrap prose lines at arbitrary column widths** (e.g. 80 chars). Let each sentence or paragraph be a single long line. Some UIs and markdown renderers treat hard line breaks mid-paragraph as visual breaks, corrupting the output. Code blocks are exempt — those can wrap for readability.

### 3.3 — Write Supporting Files

For each file in `references/` or `scripts/`:

- Reference it clearly from SKILL.md
- State the condition under which the agent should load/run it
- For reference files over 300 lines, include a table of contents

### 3.4 — Anti-Patterns to Avoid

Consult `references/examples.md` for the full anti-pattern list. The critical ones:

- ❌ Vague instructions: "validate things properly"
- ❌ Instructions too verbose (wall of text the agent will skim)
- ❌ No examples (agents need concrete input/output pairs)
- ❌ README.md inside the skill folder
- ❌ SKILL.MD or skill.md (must be exactly SKILL.md)
- ❌ Spaces or capitals in folder name
- ❌ XML angle brackets in frontmatter
- ❌ Assuming the skill is the only one loaded

**Exit criteria for Craft:**

- [ ] Frontmatter passes all hard rules
- [ ] Instructions are specific and actionable
- [ ] Examples included for common scenarios
- [ ] Error handling documented
- [ ] Files referenced with clear load conditions
- [ ] Under 500 lines for SKILL.md body

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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/examples.md` |
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

#### Imported: Phase 1: Discovery

**Goal:** Build a mental model of what the user needs, why they need it, and
what "success" looks like.

### 1.1 — Understand the Problem

Start by asking about the OUTCOME, not the implementation. Key questions
(ask conversationally, not as a checklist dump):

- **What workflow do you want to make consistent?** Get a concrete example
  of what they do today, step by step.
- **What goes wrong without the skill?** Understand the pain: inconsistency,
  forgotten steps, wasted time re-explaining, wrong outputs.
- **Who will use this skill?** Just them? Their team? Public distribution?
  This affects naming, documentation depth, and description specificity.
- **What tools are involved?** Built-in Agents capabilities (code execution,
  file creation, artifacts) or external services via MCP?

### 1.2 — Define Use Cases

Nail down 2-3 concrete use cases. For each, capture:

```
Use Case: [Name]
Trigger: What the user would say or do
Steps: The sequence of actions
Tools: Built-in or MCP tools needed
Result: What success looks like (specific output)
```

If the user is vague, give them examples to react to. It's easier to refine
a concrete proposal than to articulate needs from scratch.

### 1.3 — Identify the Category

Determine which category fits best (consult `references/patterns.md` for
detailed pattern guidance):

| Category                  | When to use                             | Example                                    |
| ------------------------- | --------------------------------------- | ------------------------------------------ |
| Document & Asset Creation | Consistent output generation            | Reports, presentations, code, designs      |
| Workflow Automation       | Multi-step processes with methodology   | Sprint planning, onboarding, deployments   |
| MCP Enhancement           | Workflow guidance on top of tool access | Sentry code review, Linear sprint planning |

### 1.4 — Establish Success Criteria

Before moving on, agree on how they'll know the skill works:

- **Trigger accuracy:** What should trigger it? What should NOT?
- **Output quality:** What does a good result look like concretely?
- **Efficiency:** How many interactions should it take?

**Exit criteria for Discovery:**

- [ ] 2-3 use cases defined with triggers, steps, and expected results
- [ ] Category identified
- [ ] Success criteria agreed upon
- [ ] Tools/dependencies identified

---

#### Imported: Phase 2: Architecture

**Goal:** Make structural decisions before writing a single line of the skill.

### 2.1 — Choose the Pattern

Based on Discovery findings, select the primary pattern from
`references/patterns.md`:

1. **Sequential Workflow** — Steps in a specific order with dependencies
2. **Multi-MCP Coordination** — Workflows spanning multiple services
3. **Iterative Refinement** — Output quality improves through cycles
4. **Context-Aware Selection** — Same goal, different tools based on context
5. **Domain-Specific Intelligence** — Specialized knowledge beyond tool access

Most skills combine patterns. Identify the primary one and note any secondary.

### 2.2 — Plan the Folder Structure

Decide what goes where:

```
skill-name/
├── SKILL.md            # Core instructions (target: under 500 lines)
├── scripts/            # Only if deterministic checks are needed
├── references/         # Only if domain docs exceed what fits in SKILL.md
└── assets/             # Only if templates or static files are used in output
```

**Decision criteria:**

- Is there logic that MUST be deterministic? → Put it in `scripts/`
- Is there reference material over ~100 lines? → Put it in `references/`
- Does the output use templates, fonts, or icons? → Put it in `assets/`
- Everything else → Keep it in SKILL.md

### 2.3 — Design the Description (Critical)

The description field is the most important piece of the entire skill. It
controls when the agent loads the skill. Draft it now following this structure:

```
[What it does] + [When to use it with specific trigger phrases] + [What NOT to use it for]
```

Consult `references/examples.md` for good and bad description examples.

**Key principles:**

- Include actual phrases users would say
- Include relevant file types if applicable
- Add negative triggers if overlap with other skills is likely
- Lean slightly "pushy" — agents tend to undertrigger. Better to load and
  not need it than to miss a relevant query.

### 2.4 — Plan Progressive Disclosure

Map content to the three levels:

| Level             | What goes here                           | Token budget    |
| ----------------- | ---------------------------------------- | --------------- |
| L1: Frontmatter   | name + description                       | ~100 words max  |
| L2: SKILL.md body | Core workflow, steps, examples           | Under 500 lines |
| L3: Linked files  | Deep reference, API docs, large examples | As needed       |

SKILL.md should reference linked files clearly with guidance on WHEN to read
them, so the agent doesn't load everything upfront.

**Exit criteria for Architecture:**

- [ ] Primary pattern selected (with rationale)
- [ ] Folder structure planned
- [ ] Description field drafted
- [ ] Content mapped to disclosure levels

---

#### Imported: Phase 3: Craft

**Goal:** Write the skill with precision.

### 3.1 — Write the Frontmatter

```yaml
---
name: kebab-case-name # Must match folder name
description: [What + When + Not-when, all on this single line]
license: CC-BY-4.0
metadata:
  author: [ask the user if unknown]
  version: 1.0.0
---
```

**Hard rules:**

- name: kebab-case only, no spaces, no capitals
- name: never use "claude" or "anthropic" (reserved)
- description: under 1024 characters
- description: no XML angle brackets (< >)
- description: must be a single inline line — do NOT use YAML multiline operators (`>`, `|`, `>-`). Write `description: Your text here` all on one line.
- license: always `CC-BY-4.0`
- Delimiters: exactly `---` on their own lines

### 3.2 — Write the Instructions

Use imperative form. Be specific and actionable. Structure:

```markdown
# Skill Name

Brief purpose statement (1-2 sentences).

#### Imported: Phase 4: Validate

**Goal:** Verify the skill before delivery.

### 4.1 — Structural Validation

Run the full checklist from `references/quality-checklist.md` and execute
`scripts/validate_skill.py` against the generated skill to check:

- SKILL.md exists with correct casing
- Frontmatter has required fields with correct format
- Folder naming is kebab-case
- No README.md in the skill folder
- No XML angle brackets in frontmatter
- Description includes trigger phrases

### 4.2 — Trigger Testing

Propose 3-5 test phrases and verify mentally:

**Should trigger:**

- Obvious task requests
- Paraphrased versions
- Partial/informal requests

**Should NOT trigger:**

- Unrelated topics
- Tasks handled by other skills
- Generic questions

If the description is too broad or too narrow, refine it now.

### 4.3 — Instruction Quality Review

Read the skill as if you're an agent encountering it for the first time:

- Can you follow every step without ambiguity?
- Are there missing decision points?
- Would you know when to stop?
- Are the examples realistic and complete?

### 4.4 — Present Findings

Share the validation results with the user. If issues exist, fix them
before delivery. If everything passes, move to delivery.

**Exit criteria for Validate:**

- [ ] Structural validation passes
- [ ] Trigger phrases tested
- [ ] Instructions are unambiguous
- [ ] User confirms quality

---

#### Imported: Phase 5: Deliver

**Goal:** Package and present the completed skill.

### 5.1 — Package

Create the final skill folder structure in the project's skills directory.

### 5.2 — Present

Use `present_files` to share the packaged skill. Include a brief summary:

- What the skill does
- How to install it in the user's preferred AI agent or IDE
- Suggested test phrase to try first

### 5.3 — Next Steps

Suggest:

- Test with the suggested phrases
- If results aren't right, bring the conversation back and iterate
- For formal evaluation, use the `skill-creator` skill's eval and benchmark modes

---

#### Imported: Conversation Style

- Ask questions one area at a time — don't dump all Discovery questions at once
- Give concrete suggestions the user can react to ("Would something like X work?")
- If the user provides a vague request, propose a specific interpretation and ask
  if it matches their intent
- If the conversation already contains a workflow (user says "turn this into a
  skill"), extract what you can from history FIRST, then fill gaps with questions
- Match the user's technical level — explain terms if they seem non-technical
- Be direct about tradeoffs: if a design choice has a downside, say so

#### Imported: Important Boundaries

- This skill is for CREATING new skills. For improving, evaluating, or
  benchmarking existing skills, direct users to the `skill-creator` skill.
- Never generate a SKILL.md without completing Discovery and Architecture.
  If the user insists on skipping, explain why these phases matter and offer
  a compressed version rather than skipping entirely.
- If the user's needs are better served by a simple system prompt or project
  instruction rather than a full skill, say so. Not everything needs to be a skill.
