# Example: Create a FigJam File

## User Request

```text
/figma-create-new-file figjam Sprint Retro Board
```

## Operator Behavior

1. Validate that `figjam` is supported.
2. Resolve the correct workspace.
3. Create the file with the requested name.
4. Return `file_key` and `file_url`.

## Example Result Shape

```text
Created a new FigJam file named "Sprint Retro Board".
Workspace: <selected workspace>
file_key: <returned key>
file_url: <returned url>
```
