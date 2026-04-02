# Example: Handoff to the Next Figma Workflow

## User Request

```text
Create a new design file called Settings Redesign, then continue working in it.
```

## Operator Behavior

1. Create the file once.
2. Preserve `file_key` and `file_url`.
3. Pass `file_key` into the next Figma editing or inspection workflow.

## Example Response Shape

```text
Created a new Figma Design file named "Settings Redesign".
file_key: <returned key>
file_url: <returned url>
Next step: continue with the Figma editing workflow using this file_key.
```
