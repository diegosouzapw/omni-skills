# Editor and Manifest Boundaries

Use this note when a generic Figma plugin example does not behave as expected.

## Core idea

Not every Plugin API example maps cleanly to every runtime or editor context.

This skill is for `usefigma` execution guidance, not for claiming that every standalone plugin pattern works unchanged here.

## Practical boundaries

- design files and FigJam have different node families and capabilities
- some examples from generic plugin docs are editor-specific
- some runtime wrapper behaviors differ from standalone plugin tutorials

## Operational guidance

Before changing approach, confirm:

1. which editor context the task is in
2. whether the node type is valid there
3. whether the API is available in this runtime
4. whether the task should be routed to a related skill instead

## Symptoms of a boundary mismatch

- method appears valid in docs but fails here
- node type is unavailable
- a FigJam-only or design-only example is being reused in the wrong context
- an API pattern assumes plugin UI or manifest settings that are irrelevant to this wrapper workflow

## Recovery

- narrow the task to supported node types and APIs
- use inspect-first scripts to confirm what exists in the file
- avoid inventing unsupported workarounds
- route to a related skill when the task is actually higher-level composition or review work
