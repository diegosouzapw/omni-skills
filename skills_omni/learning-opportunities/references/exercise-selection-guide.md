# Exercise Selection Guide

Use this guide to choose the smallest useful learning move for the current development task.

## Selection matrix

| Development situation | Best exercise type | Good prompt shape | Timebox | Guardrails |
| --- | --- | --- | --- | --- |
| New module or component | Predict then observe | `What do you think this module is responsible for before we open it?` | 1-3 min | Tie to one file or responsibility |
| Refactor | Generate then compare | `How would you separate this concern before I show the refactor?` | 2-4 min | Compare one boundary, not the whole architecture |
| Existing code explanation | Teach it back | `Explain this function as if onboarding a teammate.` | 2-4 min | Prefer one symbol or path |
| Schema or migration change | Error analysis | `What breaks if this migration runs without backfilling old rows?` | 2-4 min | Keep it tied to one migration step |
| New framework or API feature | Predict then observe | `What do you expect this hook or middleware step to do?` | 1-3 min | Avoid framework-wide quizzes |
| Post-feature reflection | Transfer prompt | `Where else would this same pattern help in the codebase?` | 1-3 min | Ask for one plausible reuse point |

## Selection rules

1. Choose the narrowest exercise that still teaches the concept.
2. Use exactly one question at a time.
3. Tie the exercise to one concrete code artifact.
4. Prefer prediction or self-explanation over passive explanation dumps.
5. Stop offering exercises if the user declines repeatedly or signals urgency.

## Quick chooser

- Need a mental model of behavior -> **Predict then observe**
- Need to compare design choices -> **Generate then compare**
- Need the user to articulate understanding -> **Teach it back**
- Need generalization -> **Transfer prompt**
- Need failure awareness -> **Error analysis**

## Bad selection signs

Your exercise choice is probably wrong if:

- it needs more than one question to be understandable
- it spans multiple files or concepts at once
- it is not tied to current code
- it would delay urgent delivery
- it feels like a test instead of collaborative exploration
