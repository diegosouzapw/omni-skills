# Node ID Normalization

When the user provides a Figma URL, extract two values:

- `fileKey`
- `nodeId`

## URL shape

Typical format:

```text
https://figma.com/design/:fileKey/:fileName?node-id=1-2
```

## Extraction rules

- `fileKey` is the segment immediately after `/design/`
- `node-id` comes from the query string

## Important conversion

Figma URLs use hyphens in the query parameter:

```text
node-id=1-2
```

Code Connect tool calls expect colons:

```text
nodeId="1:2"
```

## Example

Input URL:

```text
https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
```

Extracted values:

- `fileKey = "kL9xQn2VwM8pYrTb4ZcHjF"`
- URL node id = `42-15`
- tool node id = `42:15`

## Common mistakes

- Passing `42-15` directly to the tool instead of `42:15`
- Using a Figma URL that has no `node-id`
- Guessing the `fileKey` instead of parsing it from the URL
- Mixing the parent selection node with child component node IDs returned by suggestions

## Practical note

The top-level `nodeId` used for `get_code_connect_suggestions` defines the search scope. The per-component `nodeId` values returned in suggestions are the ones to use inside `mappings[]` when writing component mappings.
