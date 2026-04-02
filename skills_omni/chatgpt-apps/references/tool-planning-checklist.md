# Tool Planning Checklist

Use this checklist before writing or refactoring any ChatGPT App code.

## 1. Tool boundary

For each tool, confirm:

- it does one primary job
- it is meaningfully distinct from other tools
- the name is short, stable, and action-oriented
- the description begins with a practical trigger such as "Use this when..."

## 2. Input schema

Check that the schema:

- uses explicit field names
- marks required inputs clearly
- uses enums when the set is bounded
- sets numeric or string bounds when they are known
- avoids loosely typed catch-all blobs unless truly necessary

## 3. Behavior classification

Mark whether the tool is:

- read-only
- mutating
- open-world or externally dependent
- idempotent or retry-safe

Use annotations accurately when supported by the current docs.

## 4. Output design

Decide what belongs in:

- `structuredContent` for model-visible structured data
- `content` for user-facing narration in the transcript
- `_meta` for widget-only or sensitive UI payloads

Do not place all useful data in `_meta`.

## 5. Model selection quality

Before finalizing, ask:

- would the model know when to call this tool instead of another one?
- does the description explain the trigger, not just the implementation?
- are two tools competing for the same prompt shape?
- can the schema narrow the choice further?

## 6. Standard pattern check

When the app is connector-like, search-oriented, or knowledge-oriented, consider whether standard `search` and `fetch` patterns are better than inventing custom read-only tools.

## 7. Review output

In your handoff, include a compact table like this:

| Tool | Purpose | Key inputs | Mutates state | Output shape | Notes |
| --- | --- | --- | --- | --- | --- |
| `search` | Find matching records | `query`, filters | No | `structuredContent` list | Use standard pattern when applicable |
