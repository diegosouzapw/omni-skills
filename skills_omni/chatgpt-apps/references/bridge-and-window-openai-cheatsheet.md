# Bridge and window.openai Cheatsheet

Use this reference to keep widget integrations aligned with documented public surfaces.

## Preferred rule

Start with MCP bridge patterns for portability.
Add documented `window.openai` APIs only when they improve the user experience materially.

## Canonical guidance

### Use bridge-first patterns for

- receiving tool results
- rendering from structured payloads
- component-initiated tool calls
- model context updates that are intentionally driven by UI state

### Use `window.openai` for

- ChatGPT-specific follow-up messaging
- display mode requests
- opening external links through documented helpers
- host signals and compatibility features that are explicitly documented

## Wrapper caution

Some examples expose helper wrappers such as an `app` object. Treat those wrappers as convenience layers, not the normative API to teach by default.

When a wrapper appears, map it back to one of:

- a bridge event or request
- a documented `window.openai` method
- a host-provided state property

## Review checklist

- can this interaction be explained without relying on wrapper-specific names?
- does the widget call tools through the documented mechanism?
- are follow-up messages or display mode requests truly needed?
- is host state read from documented properties rather than guessed globals?

## Common recovery move

If UI actions fail after copying an example, remove the wrapper abstraction temporarily and verify the underlying bridge or `window.openai` call shape directly.
