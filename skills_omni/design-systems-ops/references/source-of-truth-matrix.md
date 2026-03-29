# Source of Truth Matrix

Use this matrix before approving design-system changes. Do not assume one tool is authoritative for every layer.

| Layer | Typical artifact | Questions to answer | Common authority choices |
| :---- | :--------------- | :------------------ | :----------------------- |
| Design intent | Figma library, design spec | What should exist? Which variants and states are intended? | Design source owned by design system team |
| Base tokens | token JSON, variables, code constants | What raw values exist? How are they typed and transformed? | token package or controlled variable source |
| Semantic tokens | token JSON, variables, theme mapping | What meaning does each token represent? Which aliases exist? | token package or shared token registry |
| Modes or themes | variable modes, theme files, runtime theme maps | Which supported modes exist? Are fallbacks defined? | token package plus implementation mapping |
| Component API | package source, type definitions, props docs | Which inputs are supported? Which defaults are contractually stable? | shipping component package |
| Executable examples | Storybook stories, test stories, demos | Which states are demonstrated and verified? | story set aligned to shipping package |
| Consumer docs | docs site, migration guides | What should consumers do? What is stable, new, or deprecated? | docs owned by system maintainers |
| Release truth | changelog, release brief, package notes | What actually changed, and what action is required? | release artifact tied to shipped version |

## Rules

1. Record authority by layer in every major review packet.
2. If two artifacts disagree, do not merge them conceptually. Name the disagreement explicitly.
3. Shipping truth usually belongs to versioned code or token packages, not screenshots alone.
4. Design intent may still be authoritative for intended future state even when code has not caught up.
5. Consumer guidance is not authoritative for implementation details if package API and stories disagree.

## Minimum decision output

For each disputed layer, write:

- authoritative artifact
- current mismatch
- owner
- required update order
- whether release is blocked, staged, or safe to proceed
