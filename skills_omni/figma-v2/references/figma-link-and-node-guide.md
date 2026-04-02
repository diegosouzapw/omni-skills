# Figma Link and Node Guide

Use this guide when the user gives you a Figma link and you need to confirm whether it is specific enough for MCP-based work.

## What you want

Prefer a URL that targets the exact frame, layer, or component instance to be implemented or reviewed.

That usually means the link should clearly identify:
- the file
- the node
- the intended frame or variant

## Why this matters

A broad file link can be technically valid but operationally unsafe:
- you may inspect the wrong frame
- you may implement the wrong variant
- you may retrieve too much context
- you may hit truncation or rate limits unnecessarily

## Ask for a better link when

- the link appears to open the whole file without a target frame
- the user says "this screen" but the link does not isolate it
- the selected node is a component set but the intended variant is unclear
- the screenshot or returned node does not match the request

## Recommended clarification prompt

```text
Please share the exact Figma frame or layer link for the UI you want implemented or reviewed, not just the file link. I need the precise node so I can fetch the right design context, screenshot, and assets.
```

## Minimal operator checks

- file key identified
- node ID identified
- frame or layer intent clear
- variant or state clear if relevant
- user has access to the linked file

## If the node is still ambiguous

Ask one focused question before proceeding:
- Which frame should I implement?
- Which variant should I use?
- Which state should I match: default, hover, active, disabled, mobile, or desktop?

Do not guess if the design target is unclear.
