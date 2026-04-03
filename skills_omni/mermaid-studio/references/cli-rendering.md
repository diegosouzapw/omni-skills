# CLI Rendering Guide

Use this guide when the task requires Mermaid file rendering rather than source authoring alone.

## Core workflow

1. Validate the Mermaid source first.
2. Render to the narrowest required format.
3. Verify the result in the target environment.
4. Keep the `.mmd` source next to the rendered artifact.

## Common commands

Validate:

```bash
node $SKILL_DIR/scripts/validate.mjs <file.mmd>
```

Render SVG:

```bash
node $SKILL_DIR/scripts/render.mjs -i diagram.mmd -o diagram.svg
```

Render PNG:

```bash
node $SKILL_DIR/scripts/render.mjs -i diagram.mmd -o diagram.png --width 1200
```

Render ASCII:

```bash
node $SKILL_DIR/scripts/render-ascii.mjs -i diagram.mmd
```

Batch render:

```bash
node $SKILL_DIR/scripts/batch.mjs \
  --input-dir ./diagrams \
  --output-dir ./rendered \
  --format svg \
  --theme default \
  --workers 4
```

## Operational notes

- Mermaid CLI behavior depends on the underlying browser stack.
- Local success does not guarantee GitHub or GitLab preview success.
- Icon-heavy and newer syntax families are more version-sensitive than basic flowcharts or sequence diagrams.
- Render only after validation passes.

## Environment intake

Capture these facts before deep troubleshooting:

- operating system
- Node version
- Mermaid CLI or packaged renderer version
- exact error output
- local vs CI vs Docker/container execution
- requested output format

## When rendering fails

- Reduce to a known-good minimal example from `examples/minimal-repro-diagrams/`.
- Determine whether the failure is parser-related or browser-launch-related.
- If the target host is a Markdown platform, compare with `references/renderer-compatibility.md`.
- If the problem looks sandbox/browser-related, review `references/security-and-sandboxing.md`.
