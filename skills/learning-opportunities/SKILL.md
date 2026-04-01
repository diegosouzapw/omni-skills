---
name: learning-opportunities
description: "Learning Opportunities workflow skill. Use this skill when the user needs Facilitates deliberate skill development during AI-assisted coding. Offers interactive learning exercises after architectural work (new files, schema changes, refactors). Use when completing features, making design decisions, or when user asks to understand code better. Triggers on \"learning exercise\", \"help me understand\", \"teach me\", \"why does this work\", or after creating new files/modules. Do NOT use for urgent debugging, quick fixes, or when user says \"just ship it\" and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["learning-opportunities", "facilitates", "deliberate", "development", "during", "ai-assisted", "coding", "offers"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Learning Opportunities

## Overview

This public intake copy packages `packages/skills-catalog/skills/(learning)/learning-opportunities` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Learning Opportunities Facilitate deliberate skill development during AI-assisted coding sessions. Offer short, optional exercises that counteract passive consumption of AI-generated code. When adapting techniques or making judgment calls about learning approaches, consult references/PRINCIPLES.md for the underlying learning science.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Exercise types, Hands-on code exploration, Techniques to weave in naturally, Anti-patterns to avoid.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating new files or modules
- Database schema changes
- Architectural decisions or refactors
- Implementing unfamiliar patterns
- Any work where the user asked "why" questions during development
- User declined an exercise this session

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

#### Imported: Exercise types

### 1. Predict then observe

Ask what they predict will happen in a specific scenario before revealing the answer.

```
Example:
User just created auth middleware.

Agent: "Would you like a quick learning exercise on middleware patterns?"
User: "sure"
Agent: "What do you think happens when a request hits your middleware with an expired token?

(Take your best guess — wrong predictions are useful data.)"

[STOP — wait for response]

After response:
Agent: "Actually [correct behavior]. The key difference is [explanation].
What surprised you about that?"

[STOP — wait for response]
```

### 2. Generate then compare

Ask them to sketch an approach before showing the actual implementation.

```
Example:
Agent: "Before I show you — how would you structure the error handling for this API endpoint?"

[STOP — wait for response]

After response:
Agent: "Here's what we went with: [implementation].
What's similar to your approach? What's different, and why do you think we chose this direction?"

[STOP — wait for response]
```

### 3. Teach it back

Ask them to explain a component as if to a new team member.

```
Example:
Agent: "Explain how the caching layer we just built works, as if I'm a new developer joining the project."

[STOP — wait for response]

After response:
Agent: "You nailed [specific part]. One thing to refine: [specific gap]."
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @learning-opportunities to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/learning-opportunities/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/learning-opportunities/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @learning-opportunities using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Stop generating immediately. Do not continue after the question mark.
- Do not generate suggested answers, hints, examples, or encouragement like "Think about..." or "Consider..."
- Wait for the user's actual response before continuing.
- "(Take your best guess — wrong predictions are useful data.)"
- "(Or we can skip this one.)"
- If correct: confirm and deepen ("Exactly. And what would change if [variation]?")
- If wrong: be direct about what's incorrect, then explore the gap — this is high-value learning

### Imported Operating Notes

#### Imported: Core principle: Pause for input

This is the most important rule. After posing a question:

1. **Stop generating immediately.** Do not continue after the question mark.
2. Do not generate suggested answers, hints, examples, or encouragement like "Think about..." or "Consider..."
3. Wait for the user's actual response before continuing.

Allowed after the question:

- "(Take your best guess — wrong predictions are useful data.)"
- "(Or we can skip this one.)"

After their response:

- If correct: confirm and deepen ("Exactly. And what would change if [variation]?")
- If wrong: **be direct** about what's incorrect, then explore the gap — this is high-value learning

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(learning)/learning-opportunities`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/PRINCIPLES.md` |
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

#### Imported: Hands-on code exploration

Prefer directing users to files over showing code snippets. Having learners locate code themselves builds codebase familiarity.

**Adjust guidance based on demonstrated familiarity:**

- Early: "Open `src/middleware/auth.ts`, around line 45. What does `validateToken` return?"
- Later: "Find where we handle token refresh."
- Eventually: "Where would you look to change how session expiry works?"

After they locate code, prompt self-explanation:

"You found it. Before I say anything — what do you think this line does?"

#### Imported: Techniques to weave in naturally

- **"Why" questions:** "Why did we use a Map here instead of an object?"
- **Transfer prompts:** "This is the strategy pattern. Where else in this codebase might it apply?"
- **Varied context:** "We used this for auth — how would you apply it to API rate limiting?"
- **Error analysis:** "Here's a bug someone might introduce — what would go wrong and why?"

#### Imported: Anti-patterns to avoid

- Dumping multiple questions at once
- Softening wrong answers into ambiguity ("well, that's partially right...")
- Offering exercises more than twice per session
- Making exercises feel like tests rather than exploration
- Continuing to generate after posing a question
