# Figma Create File Workflow Playbook

## Execution Sequence

1. Confirm the task is to create a new blank file.
2. Parse invocation arguments.
3. Normalize defaults:
   - `editorType` -> `design` if omitted
   - `fileName` -> `Untitled` if omitted
4. Validate:
   - `editorType` is `design` or `figjam`
   - provided `fileName` is not blank after trimming
5. Resolve workspace:
   - use provided `planKey`, or
   - call `whoami`
6. If multiple plans are returned, ask the user to choose.
7. Create the file exactly once once inputs are unambiguous.
8. Capture `file_key` and `file_url`.
9. Report the result clearly.
10. Handoff to the next Figma workflow if requested.

## Safe Response Shape

When creation succeeds, include:

- created file name
- editor type
- workspace or plan context
- `file_key`
- `file_url`
- note that the file should appear in Drafts or equivalent draft location

## Avoid

- guessing the workspace
- retrying repeated create requests without checking whether one already succeeded
- dropping the returned identifiers before the next step
