# Token Creation Reference

Use this reference in Phase 1.

## Core rule

Create variables before components.

## Recommended token layers

### 1. Primitive tokens

Use for raw values:
- base colors
- spacing scale values
- radii
- font sizes if your workflow stores them this way

Usually one mode.

### 2. Semantic tokens

Use for meaningful application names:
- `color/bg/primary`
- `color/text/secondary`
- `color/border/default`

Use aliases to primitives where possible.

### 3. Component tokens

Optional. Add only if the system is large enough to justify them and the user agrees.

## Mode guidance

Typical pattern:
- `Primitives` collection with one `Value` mode
- `Color` collection with `Light` and `Dark` modes
- other collections with one mode unless theming requires more

Do not multiply modes without a clear requirement.

## Scope guidance

Set scopes explicitly. Typical examples:
- background/fill tokens: frame or shape fill scopes
- text color tokens: text fill scope
- border tokens: stroke scope
- spacing tokens: gap or spacing-related scopes where applicable
- radius tokens: corner radius scope

Avoid broad default scopes unless reviewed.

## Code syntax guidance

Preserve code names where possible.

For web syntax, use:
- `var(--token-name)`

Do not store only `--token-name` when the workflow expects usable CSS syntax.

## Validation checklist

Before leaving Phase 1, confirm:
- all planned collections exist
- all planned modes exist
- agreed variables exist
- semantic aliases point to the correct primitives
- scopes are set
- code syntax is set consistently
- naming matches the approved convention

## Common mistakes

- duplicating raw values into semantic tokens instead of aliasing
- inventing Figma-only names without approval
- using primitive tokens directly in themeable component bindings
- leaving variables with overly broad scopes
- adding component-token layers too early
