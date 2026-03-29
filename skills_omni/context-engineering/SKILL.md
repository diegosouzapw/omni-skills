---
name: "context-engineering"
description: "Context engineering workflow skill. Use this skill when a user needs to shape prompts, retrieval context, memory, and tool context into a reliable context packet for an agent or LLM system."
version: "0.0.1"
category: "ai-agents"
tags:
  - "context"
  - "prompts"
  - "retrieval"
  - "memory"
  - "tools"
  - "agent-design"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "antigravity"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-29"
upstream_skill: "skills/context-engineering"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Context Engineering

## Overview

Use this skill when a team needs to shape what an LLM or agent sees, in what order, and with what constraints. It is for system or developer instructions, retrieval payloads, memory summaries, task state, tool descriptions, context-budget allocation, and the contract between raw data and model-visible context.

Good output should reduce context chaos. The goal is to make the model's working context intentional, bounded, and testable instead of a pile of prompt fragments, stale memory, oversized retrieval dumps, and irrelevant tool descriptions.

A strong context packet does four things well:

1. separates instructions from evidence
2. separates durable memory from current task state
3. gives retrieved material clear provenance and freshness signals
4. stays within a deliberate token budget with explicit trim rules

## When to Use This Skill

Use this skill when:

- a prompt works inconsistently because too much context is being injected without structure
- a RAG or agent workflow needs clearer rules for retrieval, summarization, provenance, and tool context
- memory, instructions, retrieved evidence, and task state are competing for limited context budget
- model behavior changes depending on ordering or formatting of context blocks
- a team needs a reusable context packet design before scaling to more tasks, tools, or longer conversations
- answers degrade as conversation history grows and nobody can explain what should be kept, summarized, or dropped
- a tool-heavy agent is choosing the wrong tool because tool context is too broad or overlapping

### Do not use this skill when...

- the main problem is wording a single prompt rather than composing multi-source context; use `@prompt-engineer`
- the main problem is retrieval quality, chunking, indexing, or search ranking; use `@rag-engineer`
- the main problem is whether a change actually improved outcomes across a task set; use `@eval-design`
- the main problem is designing tool APIs or side-effect boundaries rather than deciding what tool context enters the packet; use a tool-design skill if available

## Operating Table

| Context class | Purpose | Freshness requirement | Provenance requirement | Trim policy |
| :------------ | :------ | :-------------------- | :--------------------- | :---------- |
| Instructions | Define role, constraints, style, and success criteria | Stable unless policy changes | Version or owner recommended | Keep concise; do not duplicate in other sections |
| Current task state | Capture the active goal, plan, user constraints, and intermediate results | Must be current for this request | Optional but useful for generated state | Keep only what is needed for the next step |
| Retrieved evidence | Supply task-relevant facts from external sources | Prefer freshest source that matches the task | Required: source, timestamp, chunk or document identity | Keep only relevant snippets; summarize low-value repetition |
| Summarized evidence | Compress larger evidence sets into usable context | Must reflect current evidence set | Required: source set and summary method | Replace raw evidence only after checking summary fidelity |
| Durable memory | Preserve stable user or system facts worth reusing later | Review for staleness on each use | Required if sourced from prior turns or storage | Include only memory that changes the answer |
| Tool contracts | Tell the model what tools exist and when to use them | Current tool availability only | Tool name and input expectations required | Expose only relevant tools for the task |
| Conversation history | Preserve only necessary prior turns | Recent and relevant only | Turn identity optional | Prefer summary over replay once history becomes repetitive |
| Exclusions | Record what was intentionally omitted | Current to the packet version | Rationale recommended | Small section; useful for debugging and evals |

## Core Concepts

### Not All Context Has the Same Job

Instructions, memory, retrieved evidence, task state, and tool contracts should not compete in one undifferentiated blob. Each block needs a distinct role and a clear reason to exist.

### Context Budget Is an Operational Constraint

If the context packet grows without policy, the model becomes less predictable, slower, and more expensive. Good context engineering chooses what to omit just as deliberately as what to include.

### Provenance Is Part of the Payload

Retrieved facts are more reliable when the packet preserves where they came from, how fresh they are, and whether they were transformed. Provenance should survive trimming and summarization.

### Memory and State Are Different

Durable memory is not the same thing as current task state. Memory should hold stable facts worth carrying forward. Task state should hold the active objective, decisions, and next-step context for this run.

### Tool Context Should Be Narrow

Do not paste a full tool catalog into every request. Tool descriptions should be scoped to the current task, with concise contracts, input expectations, and clear do-not-use boundaries.

## Workflow

1. **Scope the task**
   - Define the user outcome, model role, required tools, and failure modes.
   - State what the model must know now versus what can remain external.
   - Write down obvious risks: stale memory, noisy retrieval, conflicting instructions, or tool overload.

2. **Inventory candidate context sources**
   - List all possible sources: system or developer instructions, conversation history, retrieval results, durable memory, current task state, and tool descriptions.
   - Mark each source as required, optional, or likely noise.
   - Remove anything that is interesting but not decision-relevant.

3. **Classify each item by role**
   - Put each remaining item into one context class: instructions, task state, retrieved evidence, summarized evidence, durable memory, tool contract, or history.
   - If one item seems to belong in multiple places, split it instead of duplicating it.
   - Keep evidence separate from policy.

4. **Define packet ordering**
   - Put stable instructions first.
   - Place current task state before large supporting material.
   - Place retrieved evidence near the task it supports and keep citations visible.
   - Put tool contracts after the task is clear, and include only relevant tools.
   - Prefer a short session summary over replaying long history.

5. **Assign a context budget**
   - Set explicit token or size targets per section.
   - Decide what happens when a section exceeds budget: keep raw, summarize, truncate, or drop.
   - Use the decision aid in [references/context-budget-decision-tree.md](references/context-budget-decision-tree.md).

6. **Build the packet with labels and contracts**
   - Use stable section headers and section semantics.
   - Preserve provenance for retrieved or summarized evidence.
   - Record omitted context that reviewers may ask about later.
   - Start from [references/context-packet-template.md](references/context-packet-template.md).

7. **Check memory boundaries**
   - Verify that durable memory does not override fresh evidence.
   - Move temporary findings into task state rather than persistent memory.
   - Review privacy and retention implications before persisting user facts.
   - Use [references/memory-boundary-checklist.md](references/memory-boundary-checklist.md).

8. **Scope tool context**
   - Expose only tools relevant to the task.
   - Reduce overlapping descriptions that make tool choice ambiguous.
   - Keep credentials, secrets, and internal-only operational details out of the prompt.
   - Use [references/tool-contract-template.md](references/tool-contract-template.md).

9. **Validate before rollout**
   - Compare the packet against a small regression set.
   - Test ablations: remove one section at a time to see what truly matters.
   - Capture expected behaviors, known omissions, and failure cases.
   - Use [references/context-change-eval-plan.md](references/context-change-eval-plan.md).

## Examples

### Example 1: Agent context cleanup request

```text
Use @context-engineering to redesign this agent's context packet so system instructions, retrieved docs, memory, and tool descriptions stop competing with each other. Keep only the context required for the next action, and identify what should be summarized or dropped.
```

**Expected outcome:** A packet proposal that separates instructions, task state, retrieval, memory, and tool contracts, with explicit trim rules.

### Example 2: Render a packet skeleton

```bash
python3 scripts/context_packet_linter.py examples/context-packet-regression-cases.md
```

**Expected outcome:** A lightweight structural check that flags missing packet labels, provenance gaps, oversized sections, or unclear tool boundaries in a review artifact.

### Example 3: Budget review for long context

```text
Use @context-engineering to review this context packet. Tell me which sections must stay raw, which should be summarized, which should be dropped, and what the over-budget fallback policy should be.
```

**Expected outcome:** A keep/summarize/drop decision with rationale tied to task criticality and recency.

### Example 4: Retrieval provenance review

```text
Use @context-engineering to rewrite these retrieved snippets into a model-ready evidence block that preserves source, timestamp, and why each snippet was included.
```

**Expected outcome:** A cleaned evidence block with provenance retained and noisy snippets removed.

## Best Practices

### Do

- Separate instruction blocks from evidence blocks so the model can distinguish policy from facts.
- Keep task state short and current; treat it as execution context, not long-term memory.
- Preserve provenance for retrieved evidence, including source identity and freshness.
- Define explicit per-section budget rules with over-budget actions.
- Keep tool contracts concise and scoped to the current task.
- Prefer stable packet structure across requests so evals and debugging stay comparable.
- Document what is intentionally excluded from context and why.
- Test packet changes with eval cases instead of trusting anecdotal improvement.

### Don't

- Do not dump full history when a session summary will do.
- Do not mix retrieved facts, agent policy, and user instructions into one unlabeled block.
- Do not persist temporary observations as durable memory by default.
- Do not expose every available tool on every request.
- Do not assume more retrieved text always improves grounding.
- Do not place secrets, credentials, or hidden operational tokens inside context packets.
- Do not rely on hidden reasoning capture or chain-of-thought exposure as a packet design strategy.

## Troubleshooting

### Problem: The prompt keeps growing, but behavior does not improve

**Symptoms:** More documents, more instructions, or more memory are added, yet the model still misses key constraints or becomes inconsistent.

**Solution:** Count section size, remove low-value duplication, and rebuild around the minimum required instructions, task state, and evidence. Use section ablation to confirm which blocks help versus distract.

### Problem: Retrieval quality is acceptable, but answers still drift

**Symptoms:** Relevant material is retrieved, but the model overweights stale memory, generic instructions, or noisy snippets.

**Solution:** Reorder the packet so current task state and evidence are explicit, trim noisy chunks, preserve provenance, and check whether stale memory is overriding fresh evidence. If needed, replace raw retrieval with a verified summary plus citations.

### Problem: Tool-heavy agents behave unpredictably

**Symptoms:** The model oscillates between tools, ignores preconditions, or forgets how to use them correctly.

**Solution:** Shrink tool context to concise contracts, remove irrelevant tools, reduce overlapping tool descriptions, and make failure handling explicit. If tool selection is still ambiguous, split the task or narrow the available tool set per request.

### Problem: Answers degrade as the packet grows

**Symptoms:** Early prototypes work, but quality falls after adding more history, retrieval, or memory.

**Solution:** Do token accounting by section, compare raw versus summarized history, and run ablations to identify the section causing degradation. Large packets often fail because too much low-value context remains unsummarized.

### Problem: Stale memory overrides fresh evidence

**Symptoms:** The model repeats old facts even when newer retrieved material contradicts them.

**Solution:** Demote those facts from durable memory, refresh the session summary, and force fresh evidence to carry visible provenance. Only promote facts to durable memory when they are stable, reusable, and policy-approved.

### Problem: A packet redesign improves one case but breaks others

**Symptoms:** One scenario gets better after a packet change, but adjacent tasks regress.

**Solution:** Evaluate the new packet on a small regression set, compare section-by-section diffs, and identify which change affected which slice. Keep packet structure stable enough that results are comparable across tasks.

## Related Skills

- `@prompt-engineer` — Use when the main bottleneck is instruction wording after the packet boundary is already clear.
- `@rag-engineer` — Use when retrieval mechanics, chunking, indexing, or ranking are the real cause of drift.
- `@eval-design` — Use when a packet change needs measurable validation, acceptance criteria, and regression slices.

## Additional Resources

- [Context packet template](references/context-packet-template.md)
- [Context budget decision tree](references/context-budget-decision-tree.md)
- [Retrieval provenance schema](references/retrieval-provenance-schema.md)
- [Tool contract template](references/tool-contract-template.md)
- [Memory boundary checklist](references/memory-boundary-checklist.md)
- [Context change eval plan](references/context-change-eval-plan.md)
- [State vs memory example](examples/state-vs-memory-example.md)
- [Retrieval provenance example](examples/retrieval-provenance-example.md)
- [Tool scope example](examples/tool-scope-example.md)
- [Context packet regression cases](examples/context-packet-regression-cases.md)
- [Context packet linter](scripts/context_packet_linter.py)
