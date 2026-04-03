# React Composition Router

Use this note to decide whether to stay in this skill or hand off.

## Stay in this skill when

- The main issue is component API clarity.
- The request centers on props vs children vs context vs render props.
- The user is refactoring boolean-heavy components.
- The component library needs a safer compound component design.
- The question is about controlled/uncontrolled state ownership in reusable components.

## Hand off when

- The main issue is rendering performance or optimization rather than API design.
- The main issue is accessibility semantics, keyboard interaction, or focus management depth.
- The task becomes mostly about test strategy rather than component composition.
- The hardest part is TypeScript type modeling rather than React composition.
- The request becomes framework-routing or app-architecture specific instead of component API specific.

## Safe handoff wording

- "The composition pattern is clear; the next pass should focus on accessibility behavior."
- "This is no longer mainly a composition problem; route to React best practices for performance-focused work."
- "The API shape is settled; move to the testing skill to validate controlled and uncontrolled flows."
