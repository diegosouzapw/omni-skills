# Editing Playbook

Use this guide when the user wants to modify an existing image rather than create a brand-new one.

## 1. Classify the edit

Common edit types:

- object removal
- background replacement
- transparent cutout
- localized text replacement
- lighting or atmosphere change
- compositing or insert
- style transfer

## 2. Label image roles

For each image, explicitly note whether it is:

- `edit target`
- `reference image`
- `supporting insert/style/compositing input`

Do not rely on filenames alone.

## 3. Define invariants

Before editing, write the invariants in plain language. Examples:

- change only the background
- keep the product shape and edges unchanged
- preserve the person's face, pose, and clothing
- replace only the English text, keep layout intact

## 4. Handle local files correctly

If using the built-in path, first bring the image into conversation context by viewing or attaching it.

Do not promise arbitrary path-based editing through the built-in tool.

If the user needs explicit file-path or CLI-only controls, explain the fallback path and continue only if they approve it.

## 5. Edit narrowly

Prefer one major change per pass:

- remove one object
- replace one background
- localize one text block
- alter one lighting dimension

This reduces drift and makes failures easier to diagnose.

## 6. Validate after each pass

Check:

- protected regions unchanged
- no unintended geometry drift
- no broken edges or seams
- no new text errors
- background and lighting still feel coherent

## 7. Save non-destructively

Unless the user explicitly asks to overwrite, create a sibling version such as:

- `product-bg-sunset.png`
- `hero-edited-v2.png`
- `label-localized-fr.png`

If the result is project-bound, move or copy the approved final into the workspace and report that path.

## Edit prompt pattern

```text
Use case: <edit slug>
Asset type: <target use>
Primary request: <what should change>
Input images: Image 1: edit target; Image 2: reference image
Text (verbatim): "<exact replacement text>"
Constraints: change only X; keep Y unchanged
Avoid: <unwanted side effects>
```
