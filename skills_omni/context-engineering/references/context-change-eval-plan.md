# Context Change Eval Plan

Use this plan before rolling out a packet redesign.

## 1. Change summary

- What changed in the packet?
- Why was the change made?
- Which sections were added, removed, or compressed?

## 2. Acceptance criteria

- What behaviors should improve?
- What behaviors must not regress?
- Which failure modes are being targeted?

## 3. Eval slices

Create cases for at least:

- short context tasks
- long context tasks
- retrieval-heavy tasks
- tool-selection tasks
- memory-sensitive tasks
- conflicting-evidence tasks

## 4. Comparisons

For each case, compare:

- old packet vs new packet
- raw history vs summarized history
- full tool catalog vs scoped tool subset
- raw retrieval vs summarized evidence

## 5. Diagnostics

Record:

- packet length by section
- omitted sections
- provenance completeness
- tool set exposed
- observed regressions

## 6. Rollout rule

Do not promote the new packet design broadly until it improves target slices without unacceptable regressions elsewhere.
