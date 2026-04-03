# Module Boundaries and Tags

Use this guide when workspace architecture needs enforceable dependency rules.

## Principle

Folders suggest organization. Tags and boundary rules enforce policy.

## Useful tag dimensions

### Scope

Examples:

- `scope:shared`
- `scope:billing`
- `scope:auth`

### Type

Examples:

- `type:feature`
- `type:ui`
- `type:data-access`
- `type:util`

### Platform

Examples:

- `platform:web`
- `platform:server`
- `platform:mobile`

## Policy examples

- `type:feature` may depend on `type:ui`, `type:data-access`, and `type:util`
- `type:ui` should not depend on `type:feature`
- `scope:billing` should not depend on `scope:auth` unless explicitly allowed
- `platform:web` should not import server-only libraries

## Review checklist

- Does every important project have tags?
- Are tags consistent across the workspace?
- Do tag names describe policy, not just ownership trivia?
- Are constraints enforced through module-boundary rules?
- Can a reviewer tell whether an import is valid from tags alone?

## Safe operator note

Do not propose a large taxonomy rewrite unless the current one clearly blocks governance. Start by tightening the minimum useful dimensions.
