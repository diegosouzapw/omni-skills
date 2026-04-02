# Validation Failure Examples

## Example 1: Name mismatch

Error shape:

```text
name does not match directory
```

Fix:

- rename the folder or update `name:` so they match exactly

## Example 2: Invalid YAML

Error shape:

```text
frontmatter parse error
```

Fix:

- correct quoting, indentation, or malformed lists
- keep required fields present

## Example 3: Missing description

Error shape:

```text
missing required field: description
```

Fix:

- add a description that states both what the skill does and when it should trigger
