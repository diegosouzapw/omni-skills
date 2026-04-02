# Related Skill Router

Use this note when the request touches Figma but may not be only a `usefigma` execution task.

## Stay in this skill when

- you are about to call `usefigma`
- the task is a targeted inspect or mutate workflow
- the main risk is Plugin API execution correctness
- you need IDs and validation between small mutation steps

## Also load a related Figma composition skill when

- the user wants a full screen, page, or multi-section layout built from code
- the work depends on discovering, importing, and assembling design-system components
- the task is broader than a narrow Plugin API mutation sequence

## Route away when

- the task is purely conceptual and does not need file-context execution
- the task is screenshot-only or metadata-only without Plugin API scripting
- the task becomes primarily review, documentation, or another domain workflow

## Handoff rule

If you route to another skill, keep these facts visible:

- this prerequisite skill was loaded
- any returned page, node, collection, or variable IDs
- what has already been validated
- what still needs visual or structural verification
