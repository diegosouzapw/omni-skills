# Figma Task Router

Use this router when the request is adjacent to design implementation but not actually the same task.

## Route to `figma-implement-design-v2`

Use when the deliverable is repository code that should match an existing Figma design.

Typical requests:

- implement this component from Figma
- build this screen from the design
- convert this frame into production code

## Route to `figma-use`

Use when the task is to edit Figma itself.

Typical requests:

- move layers
- rename frames
- update text in the file
- create or delete components in Figma

## Route to `figma-generate-design`

Use when the task is to create or revise a design in Figma from prompts, requirements, or code.

## Route to `figma-code-connect-components`

Use when the task is specifically to create or update Code Connect mappings rather than implement UI code.

## Route to `figma-create-design-system-rules`

Use when the task is to author reusable instruction files, rules, or system guidance for future design and implementation work.

## Handoff rule

When routing away, say explicitly why this skill is not the best fit and name the destination skill. Do not force implementation work to cover Figma editing or design-generation tasks.
