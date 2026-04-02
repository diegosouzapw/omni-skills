# Figma Node Selection and URL Guide

Use this guide to avoid implementing the wrong frame, component, or variant.

## Why this matters

A broad file link is often not enough for design-to-code work. Figma retrieval is most reliable when you target the exact node you intend to inspect or implement.

## Prefer this order of input quality

1. Exact frame or layer URL
2. Exact node ID plus file key
3. File URL with a clearly described target frame
4. File URL alone

If you only have option 4, ask follow-up questions before implementation.

## What to confirm

- file key
- node ID
- frame, component, or variant name
- state, theme, or mode if multiple exist
- responsive breakpoint if relevant

## When to stop and ask for clarification

Stop and ask for a better target when:

- the file contains multiple similar screens
- the selected node could refer to multiple variants or states
- the user asks for "the card" or "the modal" without a direct link
- the screenshot and returned node structure do not match
- the result appears to be a sibling frame or parent container instead of the intended component

## Good clarification prompts

- "Please share the exact frame or layer link, not just the file link."
- "Which variant should be implemented: default, hover, active, disabled, or another state?"
- "Which breakpoint or platform should I target from this Figma file?"
- "Is this meant to reuse an existing component in the repo, or should I build a new one mapped to the same design tokens?"

## Variant targeting checklist

Before implementation, confirm:

- interaction state
- theme or color mode
- locale or content variant if applicable
- mobile, tablet, or desktop breakpoint
- whether the selected node is a reusable component or a composed screen instance

## Recovery when the wrong node was used

1. Compare the fetched structure against the intended screenshot.
2. Re-check the shared URL.
3. Extract the node ID again.
4. Ask for the exact layer link if ambiguity remains.
5. Re-run retrieval against only the corrected node.

For workflow sequencing after the correct node is identified, see [figma-mcp-workflow.md](figma-mcp-workflow.md).
