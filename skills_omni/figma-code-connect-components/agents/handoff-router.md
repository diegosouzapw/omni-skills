# Handoff Router

Use this note when the task no longer fits Code Connect mapping.

## Stay in this skill when

- the task is to discover unmapped published Figma components
- the task is to compare those components to code implementations
- the task is to propose or create Code Connect mappings after approval

## Hand off to `figma-use` when

- the user wants to edit the Figma canvas
- the task needs Plugin API actions or canvas writes
- the user wants components, frames, or properties changed in Figma

## Hand off to `figma-generate-design` when

- the user wants a new design or screen generated
- the task is about composing layouts rather than linking to existing code

## Hand off to `figma-implement-design` when

- the code component does not exist yet
- the user wants the Figma design implemented in code
- the main task is coding, not mapping

## Hand off to repo or framework skills when

- the hard part is framework-specific export analysis
- the repository structure is unusual enough that a framework specialist skill is needed
- the task becomes refactoring, testing, or architecture work

## Handoff rule

When handing off, keep the confirmed Figma URL, normalized node IDs, candidate file paths, and user approval state in the context so the next skill does not restart discovery from scratch.
