# Component Metadata and CSP

Use this reference when wiring widget resources, output templates, and security metadata.

## Tool result partitioning

### Put in `structuredContent`

Use for data the model should be able to reason over and the widget should render from.

Examples:

- normalized search results
- selected entity summaries
- table rows or chart-ready values
- statuses the assistant may refer to later

### Put in `content`

Use for concise transcript narration when the assistant should explain what happened.

Examples:

- "Loaded 8 matching orders."
- "Rendered the portfolio view for the selected watchlist."

### Put in `_meta`

Use for component-only payloads or data that should not drive model reasoning directly.

Examples:

- large pre-indexed maps for the widget
- UI-only pagination state
- layout hints
- opaque IDs or client-only caches when appropriate

## Resource metadata checklist

Verify these items intentionally rather than by habit:

- output template URI is stable and matches the registered widget resource
- widget description is present when it helps the model avoid repeating the UI verbatim
- border preference is set only if it improves presentation
- domain metadata is supplied only when the deployment needs it
- CSP includes exact `connectDomains` and `resourceDomains`

## CSP guidance

Prefer exact allowlists.

### `connectDomains`

Add only domains the widget must contact for APIs, streaming, or data fetches.

### `resourceDomains`

Add only domains used for scripts, images, fonts, styles, or other loaded assets.

## Common failure patterns

### Blank widget

Usually caused by one of:

- output template URI mismatch
- resource not registered
- wrong MIME type
- frontend asset blocked by CSP

### Model cannot reason about the result

Usually caused by:

- all meaningful data placed in `_meta`
- `structuredContent` missing or too thin
- narration in `content` without structured fields

## Safe review questions

Before handoff, answer:

- what data must the model see?
- what data is widget-only?
- which exact domains are required in this environment?
- does the template URI in the tool result exactly match the registered resource?
