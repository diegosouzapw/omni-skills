# Example: Create a Default Design File

## User Request

```text
/figma-create-new-file
```

## Operator Behavior

1. Resolve `planKey` from prior context or `whoami`.
2. Default `editorType` to `design`.
3. Default `fileName` to `Untitled`.
4. Create the file.
5. Return the identifiers.

## Example Result Shape

```text
Created a new Figma Design file named "Untitled".
Workspace: <selected workspace>
file_key: <returned key>
file_url: <returned url>
```
