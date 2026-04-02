# Frontend Handoff Router

Use this note after Figma context has already been captured with `@figma-v2`.

## Hand off to frontend or framework skills when

- the exact Figma node is already confirmed
- the screenshot and design context have already been gathered
- the remaining work is mostly framework-specific coding
- the task now depends on app architecture, routing, state management, or testing strategy

## Include this handoff packet

- exact Figma link or file key and node ID
- screenshot reference
- summary of design context
- assets used or still needed
- variable-to-token mapping notes
- known accessibility or responsive concerns

## Hand off to design-system skills when

- token mapping is unclear
- the design introduces a new primitive or pattern
- a local component should be extended instead of duplicated

## Hand off to accessibility skills when

- the visual design conflicts with semantic structure
- keyboard or focus behavior is unclear
- contrast, state cues, or screen-reader behavior needs dedicated review

## Rule

Do not force `@figma-v2` to own all downstream implementation. Its main job is to capture reliable Figma context and deliver a clean handoff when specialization becomes the limiting factor.
