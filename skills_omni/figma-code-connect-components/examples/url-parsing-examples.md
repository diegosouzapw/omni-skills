# URL Parsing Examples

## Example 1

Input:

```text
https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
```

Output:

```text
fileKey = kL9xQn2VwM8pYrTb4ZcHjF
nodeId  = 42:15
```

## Example 2

Input:

```text
https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Components?node-id=10-50
```

Output:

```text
fileKey = pR8mNv5KqXzGwY2JtCfL4D
nodeId  = 10:50
```

## Example 3: Missing node-id

Input:

```text
https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Components
```

Outcome:

```text
Invalid for Code Connect URL-based mapping because node-id is missing.
```

## Reminder

- URL query uses hyphens
- tool input uses colons
- do not guess missing values
