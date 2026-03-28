# Client Compatibility Template

Fill this out before release.

| Client | Version/Channel | Transport | Tools | Resources | Prompts | Approval UX | Auth model | Status | Caveats |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Example IDE client | current | stdio | full | partial | none | client-managed | local launch | supported | prompts not surfaced |
| Example remote app | current | Streamable HTTP | full | full | partial | app-managed | bearer token | supported with caveats | approval flow differs |

## Status values

- `supported`
- `supported with caveats`
- `partial`
- `unsupported`
- `not tested`

## Minimum notes to capture

- exact transport used
- feature gaps by surface type
- approval or consent differences
- auth assumptions
- known initialization or config pitfalls
- whether the limitation is protocol-level or client-specific
