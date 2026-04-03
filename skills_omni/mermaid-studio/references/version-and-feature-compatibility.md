# Version and Feature Compatibility

Use this guide before promising support for newer Mermaid syntax families.

## Why this matters

Some Mermaid syntax families are more version-sensitive than basic diagrams.

Common examples:

- C4 diagrams
- `architecture-beta`
- icon-pack-based architecture diagrams
- beta families such as `sankey-beta`, `block-beta`, and `packet-beta`

## Review steps

1. Identify the syntax family.
2. Determine the rendering path: local CLI, packaged renderer, GitHub, GitLab, or other host.
3. Prefer a minimal example first.
4. Validate locally.
5. If host support is uncertain, attach rendered artifacts instead of relying on platform preview.

## Fallback strategy

When support is unclear:

- prefer simpler syntax families where acceptable
- use plain labels instead of icon-dependent nodes
- provide SVG/PNG renders for documentation consumers
- explain that host renderers may not match local Mermaid tooling
