# Design Token Usage

This skill is token-first by default.

## Goal

Use variables and shared styles instead of hardcoded values whenever the design system provides them.

## Priority order

Use this order when deciding what to apply:

1. existing bound variables and shared styles already used by comparable screens
2. published library variables and styles discoverable through design-system search
3. local file assets that are already part of the target file's system
4. local fallback values only when no approved token or style is available

## Variables

Prefer variables for:

- fills
- strokes
- spacing
- padding
- gaps
- radii
- sizing decisions when the system encodes them that way

### Important warning

`getLocalVariableCollectionsAsync()` only reports local file variables. It does not prove that a linked library has no variables.

If local variable discovery is empty:

- inspect existing screens for bound variables
- search the linked design system for published variables
- only then consider a local fallback

## Styles

Prefer shared styles for:

- typography
- elevation and shadows
- other reusable visual effects

Do not manually restyle text that should use a shared type ramp.

## Fallback rules

Fallbacks are allowed only when all of the following are true:

- comparable screens do not reveal an approved asset
- linked library search does not reveal an approved asset
- the user did not specify a system asset to use
- the fallback is clearly scoped and minimal

If you must use a fallback:

- keep it local and narrow
- avoid inventing a large local token system
- document that the asset was unavailable
- prefer values already visible in adjacent approved screens

## QA checks for token usage

Before signoff, confirm:

- color values are bound where tokens exist
- spacing and radii use variables where available
- text nodes use shared text styles where expected
- effect-bearing nodes use shared effect styles where expected
- no accidental local duplicates were created for existing system assets
