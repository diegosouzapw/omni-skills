# Figma Node Linking and Scoping

Use this reference when the user provides a broad Figma link or when the wrong node keeps being targeted.

## Goal

Always prefer the smallest correct scope.

## Scoping Rules

- Best: exact layer or frame link
- Good: exact component or variant link
- Acceptable: file link plus a clear instruction about which frame to inspect
- Avoid: whole-file translation with no target guidance

## Narrowing Sequence

1. Start with the exact node if available.
2. If only a file is available, ask which frame, flow, page, or component is intended.
3. If the frame still contains multiple variants, ask which state or breakpoint matters.
4. Fetch structure first to confirm you are on the right target.
5. Use a screenshot to validate the chosen node before moving on.

## Signs the Scope Is Too Broad

- the response is truncated
- the returned structure is generic
- multiple unrelated screens are included
- asset retrieval is noisy or irrelevant
- the implementation brief contains guesswork

## Practical Prompt Pattern

```text
Use this exact Figma link: <figma-url>. If it does not point to a single implementation target, first identify the smallest relevant node or frame and confirm that target before retrieving more detail.
```
