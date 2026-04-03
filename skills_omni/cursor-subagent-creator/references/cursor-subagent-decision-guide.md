# Cursor Subagent Decision Guide

Use this guide to decide whether to create a Cursor subagent or use a simpler mechanism.

## Choose a Cursor subagent when

- the task is specialized and reusable
- isolated context improves reliability
- the work is multi-step
- you want delegation to happen repeatedly
- independent verification or parallel work is valuable

## Choose a Cursor rule when

- you need persistent behavior or standing project guidance
- the instruction should shape many future interactions
- you do not need a separate specialist execution unit

## Choose a skill or slash command when

- the task is short and direct
- isolated context is unnecessary
- delegation overhead would exceed the value of specialization

## Choose `subagent-creator` instead when

- the user wants a subagent design not tied to Cursor
- the target environment is another editor, framework, or agent runtime

## Quick checks

Ask these in order:

1. Is this specifically for Cursor?
2. Is the task reusable?
3. Does it need isolated context?
4. Is it genuinely multi-step or specialized?
5. Would a rule or command be simpler and sufficient?

If the answer to 1 is no, route away from this skill.
If the answer to 2 through 4 is mostly no, prefer a simpler tool.
