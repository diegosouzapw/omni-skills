# Skill Discovery Question Bank

Use this guide when the user wants a new skill but the request is incomplete, vague, or overly broad.

Ask one topic at a time. Do not paste the whole list unless the user explicitly asks for a checklist.

## Discovery order

1. Outcome
2. Current workflow
3. Pain and failure modes
4. Users and context
5. Tools and dependencies
6. Triggers and non-triggers
7. Success criteria

## Topic 1: Outcome

Use questions like:

- What do you want the skill to make consistent?
- What result should the agent produce every time?
- If this skill worked perfectly, what would be different?

## Topic 2: Current workflow

Use questions like:

- Walk me through the process step by step as it happens today.
- What inputs does the agent usually receive?
- What decisions or branches happen in the middle?

## Topic 3: Pain and failure modes

Use questions like:

- What goes wrong today without the skill?
- Which steps are most often forgotten or done inconsistently?
- What poor outputs are you trying to prevent?

## Topic 4: Users and context

Use questions like:

- Who will use this skill?
- Is this personal, team-internal, or public?
- How technical are the intended users and operators?

## Topic 5: Tools and dependencies

Use questions like:

- Does this rely on built-in tools, local files, or MCP services?
- Are there systems the skill must read from or write to?
- Are there any required file formats, APIs, or templates?

## Topic 6: Triggers and non-triggers

Use questions like:

- What would a user actually say that should trigger this skill?
- What nearby requests should not trigger it?
- Which adjacent workflows might get confused with this one?

## Topic 7: Success criteria

Use questions like:

- What makes the result good enough to trust?
- How many interactions should the workflow usually take?
- What should the final package include: only `SKILL.md`, or support files too?

## Recovery pattern for vague requests

If the user is too vague, propose candidate use cases:

```text
I see at least three possible skill shapes here:
1. A checklist-driven onboarding skill
2. A report-generation skill
3. An MCP-assisted workflow orchestration skill
Which is closest to what you want?
```

## Minimum bar before Architecture

Do not move on until you have:

- at least 2 realistic use cases
- at least 1 clear non-goal
- intended users
- likely triggers
- success criteria
- tool or dependency expectations
