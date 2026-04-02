---
name: "learning-opportunities"
description: "Learning Opportunities workflow skill. Use this skill when a user wants to understand code, learn from architectural changes, or build durable intuition during AI-assisted development through short, optional, code-anchored exercises. Do not use it for urgent debugging, incidents, or explicit delivery-first requests such as 'just ship it'."
version: "0.0.1"
category: "development"
tags:
  - "learning-opportunities"
  - "learning"
  - "developer-education"
  - "code-understanding"
  - "retrieval-practice"
  - "self-explanation"
  - "refactoring"
  - "schema-changes"
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
upstream_skill: "skills/learning-opportunities"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Learning Opportunities

## Overview

This skill helps an agent create short, optional learning moments during AI-assisted coding work without blocking delivery. It is best used when the user wants to understand a change, learn a pattern, or build confidence after architectural work such as new modules, schema changes, or refactors.

The core operating model is simple:

1. detect a real learning opportunity in the current task
2. ask consent before switching into exercise mode
3. ask exactly one narrow, code-anchored question
4. stop and wait
5. give direct feedback based on the user's answer
6. tie the lesson back to the code and resume the task

This skill preserves the intent of the upstream workflow from `packages/skills-catalog/skills/(learning)/learning-opportunities` in `https://github.com/tech-leads-club/agent-skills.git`, while reorganizing it into an execution-focused Omni Skills workflow.

For the learning-science principles behind the workflow, start with [references/PRINCIPLES.md](references/PRINCIPLES.md). For operational selection and boundaries, use [references/exercise-selection-guide.md](references/exercise-selection-guide.md) and [references/session-boundaries.md](references/session-boundaries.md).

## When to Use This Skill

Use this skill when the user would benefit from understanding the code or design choice, not just receiving the implementation.

Common triggers:

- the user asks "help me understand", "teach me", "why does this work", or "give me a learning exercise"
- you just created a new file, module, component, migration, or test harness
- you made a meaningful refactor and the user may benefit from seeing the reasoning
- you introduced an unfamiliar API, dependency, framework feature, or pattern
- you made a schema or data-model change that has downstream effects
- the task involved a design tradeoff that is educational, not just procedural
- the user seems to be passively accepting generated code and wants stronger intuition

Use it after delivery progress is already real or when the user explicitly wants learning built into the task.

### Consent gate

Before starting an exercise, ask a lightweight permission question such as:

> Would you like a 1-3 minute learning exercise on this change, or should I just keep shipping?

If the user declines, continue normally without friction.

## When Not to Use This Skill

Do not use this skill when learning mode would slow down urgent execution or feel coercive.

Avoid it when:

- the user says "just ship it", "just fix it", or otherwise signals speed over explanation
- the session is urgent debugging, incident response, or production recovery
- the user is blocked on a narrow bug and needs immediate resolution first
- the task is already overloaded with context and an exercise would create confusion
- you have already offered learning mode 1-2 times this session and the user is not engaging
- the conversation has drifted into a different primary workflow such as debugging, testing, security review, or release work

If in doubt, default to delivery and optionally leave a short recap at the end.

## Operating Table

| Situation | Recommended exercise | Timebox | Ask/Stop rule | Success signal | Escalate / handoff |
| --- | --- | --- | --- | --- | --- |
| New file or module created | Predict then observe | 1-3 min | Ask one question tied to one file or function, then stop | User predicts behavior or responsibility accurately enough to compare | Hand off if the task becomes architecture planning |
| Schema migration or data-model change | Error analysis or transfer prompt | 2-4 min | Ask about one migration consequence, then stop | User identifies one effect on reads, writes, constraints, or rollback risk | Hand off if migration design becomes the main task |
| Refactor or pattern extraction | Generate then compare | 2-4 min | Ask how they would structure one function or boundary, then stop | User can compare their mental model to the implemented design | Hand off if the task becomes deep design review |
| Unfamiliar dependency or API | Predict then observe | 1-3 min | Ask what they expect one API call, hook, or middleware step to do, then stop | User updates their model using the real behavior | Hand off if the problem is actually debugging vendor behavior |
| User asks for explanation of existing code | Teach it back | 2-4 min | Ask them to explain one component in their own words, then stop | User can describe purpose, data flow, or invariants with one correction or fewer | Hand off if they need a direct walkthrough instead |
| Post-implementation reflection | Transfer prompt | 1-3 min | Ask where else the same pattern applies, then stop | User names a plausible reuse point in the codebase | Hand off if the conversation becomes roadmap or architecture strategy |
| User declines exercise | No exercise; continue delivery | 0 min | Do not retry immediately | Work proceeds without friction | Optionally offer a one-line recap at the end |

## Workflow

1. **Detect the opportunity**  
   Notice a legitimate learning moment tied to the current work: a new module, schema change, refactor, unfamiliar pattern, or explicit request to understand.

2. **Check boundaries**  
   Confirm this is not urgent debugging, incident work, or an explicit delivery-first request. If it is, suspend learning mode.

3. **Ask consent**  
   Offer a short, skippable learning exercise. Do not force it. Do not repeat the offer more than 1-2 times per session.

4. **Select an exercise type**  
   Choose the smallest exercise that matches the task:
   - **Predict then observe** for behavior, runtime flow, or API effects
   - **Generate then compare** for structure or implementation choices
   - **Teach it back** for self-explanation of an existing component
   - **Transfer prompt** for applying a pattern elsewhere
   - **Error analysis** for likely mistakes or failure modes

5. **Anchor to the code**  
   Tie the question to one concrete artifact: one file, function, query, migration, test, or interface. Prefer path-based guidance over abstract explanation.

6. **Ask exactly one question**  
   Keep the prompt narrow. After the question, stop output immediately unless adding a short allowed parenthetical such as `(Take your best guess.)` or `(We can skip it.)`.

7. **Wait for the user's answer**  
   Do not answer your own question. Do not stack multiple follow-up questions. Do not add hints unless the user asks for help.

8. **Evaluate and respond directly**  
   - If correct: confirm what is right and optionally deepen with one variation.
   - If partially correct: say what is right, then identify the missing piece.
   - If incorrect: say what is incorrect clearly, explain the gap, and reconnect to the code.
   - If no response or decline: exit learning mode and continue the task.

9. **Tie back to the current task**  
   Explain why the answer matters for the code you just changed. Keep the lesson connected to implementation, not abstract theory alone.

10. **Resume delivery**  
    Continue the original task. Learning mode should support shipping, not replace it.

### Mandatory stop-after-question rule

This is the highest-priority execution rule in the skill.

After posing a question:

1. stop generating immediately
2. do not supply the answer
3. do not add examples, hints, or mini-lectures
4. wait for the user's actual response

Allowed short suffixes after the question:

- `(Take your best guess.)`
- `(We can skip it if you prefer.)`

## Exercise Types

### 1. Predict then observe

Use when the learner should anticipate behavior before seeing the outcome.

Example prompt:

> In `src/middleware/auth.ts`, what do you think happens when `validateToken` receives an expired token? (Take your best guess.)

Best for:

- middleware flow
- caching behavior
- request lifecycle
- hook execution
- API responses

### 2. Generate then compare

Use when the learner should sketch an approach before seeing the implementation.

Example prompt:

> Before I show the refactor, how would you separate validation from persistence in this handler?

Best for:

- refactors
- error handling structure
- separation of concerns
- test design

### 3. Teach it back

Use when the learner already saw the code and should explain it in their own words.

Example prompt:

> Explain how this caching layer works as if I just joined the team.

Best for:

- existing modules
- system understanding
- reviewing a completed feature
- strengthening mental models

### 4. Transfer prompt

Use when the learner should apply one pattern in a new context.

Example prompt:

> We used this strategy for auth middleware. Where else in this codebase would the same pattern help?

Best for:

- design pattern reuse
- generalization
- post-implementation reflection

### 5. Error analysis

Use when the learner should identify likely mistakes and their consequences.

Example prompt:

> If this migration runs without backfilling existing rows, what do you think breaks first?

Best for:

- schema changes
- rollout risk
- invariants
- failure-mode awareness

## Examples

See the full local transcripts for execution details:

- [examples/predict-then-observe-transcript.md](examples/predict-then-observe-transcript.md)
- [examples/generate-then-compare-transcript.md](examples/generate-then-compare-transcript.md)
- [examples/teach-it-back-transcript.md](examples/teach-it-back-transcript.md)
- [examples/decline-and-resume-transcript.md](examples/decline-and-resume-transcript.md)
- [examples/schema-change-learning-exercise.md](examples/schema-change-learning-exercise.md)
- [examples/refactor-learning-exercise.md](examples/refactor-learning-exercise.md)

### Example 1: Offer a short exercise after creating a new module

```text
I added the new rate-limiter module. Would you like a 2-minute learning exercise on why the state is stored at the middleware boundary, or should I keep shipping?
```

### Example 2: Ask one narrow prediction question

```text
Open `src/middleware/auth.ts`. What do you think happens when the refresh token is present but expired? (Take your best guess.)
```

### Example 3: Graceful decline and resume

```text
No problem — I'll keep moving. Short version: the refactor separates parsing from persistence so the handler is easier to test. I'll continue with the implementation.
```

### Example 4: Teach-back after a schema change

```text
We finished the migration. Can you explain, in your own words, why the new foreign key is nullable during rollout?
```

## Best Practices

### Do

- ask permission before switching into exercise mode
- keep exercises short, optional, and tied to the current task
- use exactly one question at a time
- anchor every exercise to a real file, symbol, query, migration step, or test
- prefer file discovery and self-explanation over dumping long code excerpts
- give direct feedback on wrong answers without shaming or hedging
- adapt the difficulty based on what the user has already shown they understand
- resume the delivery task promptly after the learning loop closes
- preserve provenance when the upstream workflow materially shaped the interaction

### Don't

- do not use this skill during urgent debugging, incidents, or explicit speed-first requests
- do not continue generating after posing the exercise question
- do not ask multiple questions in one turn
- do not turn the interaction into a test or gate the task on a correct answer
- do not offer more than 1-2 unsolicited exercises per session
- do not teach in abstractions detached from the code in front of the user
- do not soften incorrect answers into ambiguity if precision matters
- do not keep pushing learning mode after the user declines

### Progressive scaffolding for code exploration

Prefer helping the user locate code themselves.

Increase guidance only as needed:

1. **Precise path hint** — `Open src/middleware/auth.ts around the token validation branch.`
2. **Symbol hint** — `Look for the function that decides between refresh and reject.`
3. **Architectural hint** — `Find where session expiry is enforced on inbound requests.`

Then ask for self-explanation:

> You found it. Before I explain, what do you think this line is doing?

## Troubleshooting

See the fuller operational playbook at [references/troubleshooting-playbook.md](references/troubleshooting-playbook.md).

### Problem: The assistant answered its own question

**Symptoms:** The exercise asks a question, then immediately explains the answer or adds a lecture.

**Solution:** Acknowledge the mistake, restate a narrower version of the question, and stop. Example: `I answered too early. Let me narrow it: what value do you think this function returns on an expired token? (Take your best guess.)`

### Problem: The user feels quizzed or blocked

**Symptoms:** The user seems annoyed, says "just tell me," or stops engaging after an exercise prompt.

**Solution:** Exit exercise mode immediately. Give a direct 2-4 sentence explanation tied to the code, then continue the task. Optionally offer a follow-up question only if the user wants it.

### Problem: The exercise is too broad

**Symptoms:** The question spans an entire subsystem, multiple files, or several concepts at once.

**Solution:** Convert it into one bounded prompt tied to one function, query, migration step, or test. Use compare, predict, or explain-one-line variants instead of open-ended teaching.

### Problem: The learner cannot find the relevant code

**Symptoms:** The user says they do not know where to look or keeps opening unrelated files.

**Solution:** Use progressive scaffolding: precise file/path hint, then symbol hint, then architectural hint. Avoid pasting the full answer immediately unless they ask for it.

### Problem: The session drifted into debugging or shipping pressure

**Symptoms:** The task becomes time-sensitive, failure-focused, or explicitly delivery-first.

**Solution:** Suspend learning mode. Continue with direct execution and preserve only a brief recap if helpful. Use the handoff guidance in [agents/handoff-guide.md](agents/handoff-guide.md).

### Problem: Feedback is too vague

**Symptoms:** The response says "close" or "partly right" without telling the user what was actually wrong.

**Solution:** State exactly what was correct, what was incorrect, and why it matters in the current code path. Keep the correction specific and respectful.

## Related Skills

Use these as handoff targets when learning mode stops being the primary need.

- `@debugging` - use when the session becomes root-cause analysis under time pressure
- `@architecture-review` - use when the task becomes broader design evaluation rather than code understanding
- `@testing` - use when the best next step is strengthening tests, examples, or verification
- `@refactoring` - use when the main work is structural cleanup rather than guided understanding
- `@database-migrations` - use when schema design, backfills, and rollout safety become the dominant concern
- `@security-review` - use when the change introduces auth, permission, secrets, or trust-boundary questions

When handing off, preserve:

- the current code area or file path
- what the user already understands
- which exercise type was attempted, if any
- whether the user declined learning mode
- the implementation state and next delivery task

## Additional Resources

### Core references

- [Learning principles](references/PRINCIPLES.md)
- [Exercise selection guide](references/exercise-selection-guide.md)
- [Session boundaries](references/session-boundaries.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)
- [Review checklist](references/review-checklist.md)

### Reusable prompts

- [Exercise prompt library](references/exercise-prompts.md)

### Worked examples

- [Predict then observe transcript](examples/predict-then-observe-transcript.md)
- [Generate then compare transcript](examples/generate-then-compare-transcript.md)
- [Teach-it-back transcript](examples/teach-it-back-transcript.md)
- [Decline and resume transcript](examples/decline-and-resume-transcript.md)
- [Schema change learning exercise](examples/schema-change-learning-exercise.md)
- [Refactor learning exercise](examples/refactor-learning-exercise.md)

### Handoff support

- [Handoff guide](agents/handoff-guide.md)

## Upstream Provenance

This skill preserves the intent of the upstream community workflow from `tech-leads-club/agent-skills`, specifically `packages/skills-catalog/skills/(learning)/learning-opportunities`.

Imported ideas preserved in this curated version include:

- predict-then-observe exercises
- generate-then-compare exercises
- teach-it-back prompts
- hands-on code exploration
- techniques to weave in naturally
- anti-patterns to avoid

The curated version improves execution boundaries, consent handling, troubleshooting depth, and handoff clarity while keeping the same skill identity and purpose.
