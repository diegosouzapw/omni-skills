# Confluence Identifier Quick Reference

## Common identifier types

### Site URL
Example:

```text
https://example.atlassian.net/
```

Use for selecting the Confluence site context.

### Cloud ID
Example:

```text
12345678-1234-1234-1234-1234567890ab
```

Use when the MCP or integration expects a cloud identifier rather than a URL.

### Page ID
Example:

```text
123456789
```

Use for direct retrieval or updates of a known page.

### Space key
Example:

```text
TECH
```

Use for finding or filtering a space. A space key is not the same thing as a space ID.

### Space ID
Example:

```text
987654321
```

Use for operations that require the internal numeric space identifier.

### ARI
Example:

```text
ari:cloud:confluence:example-site-id:page/123456789
```

Use for direct fetch workflows when the tool supports ARI input.

## Rules

- Never guess the identifier type.
- Echo back the identifier you used in write operations.
- If the user gives a page URL, derive or confirm the site and page target before proceeding.
- If multiple spaces or pages match, ask for confirmation.
