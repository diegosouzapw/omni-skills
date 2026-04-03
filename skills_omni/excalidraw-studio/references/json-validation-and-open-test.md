# JSON Validation and Open-Test Checklist

Use this when a generated `.excalidraw` file fails to import, opens blank, or behaves inconsistently.

## Step 1: Validate strict JSON

Confirm the file is:

- plain JSON
- UTF-8 text
- free of comments
- free of trailing commas
- free of wrapper markdown fences

If available, run:

```bash
python3 scripts/validate_excalidraw_json.py path/to/file.excalidraw
```

## Step 2: Confirm top-level scene keys

Check for:

- `elements`
- `appState`
- `files`

If `files` is missing, add an empty object when no files are present:

```json
"files": {}
```

## Step 3: Check common structural mistakes

Look for:

- text incorrectly placed on shape elements instead of separate text elements
- missing `containerId` for bound text
- missing `boundElements` references
- arrows using unsupported shorthand instead of bindings
- text declared too early in the element array and rendered behind shapes/arrows

## Step 4: Manual open-test in Excalidraw

Use Excalidraw web when available:

1. Open `https://excalidraw.com/`
2. Use the app's open/import flow
3. Load the `.excalidraw` file
4. Confirm the canvas is not blank
5. Move one connected shape and verify attached arrows behave as expected
6. Confirm labels are visible at normal zoom

## Step 5: Compare against a known-good example

If the scene still fails:

- compare its top-level structure against files in `examples/minimal-valid-scenes/`
- reduce the scene to a minimal subset
- reintroduce complex elements gradually

## Step 6: If using code with Excalidraw utilities

When the runtime and package are available:

- restore/normalize elements before export or handoff
- restore relevant app state
- restore files before testing scenes with assets

## Typical failure modes

### Import rejected immediately

Likely causes:
- invalid JSON
- non-JSON file contents
- malformed top-level scene shape

### File opens blank

Likely causes:
- malformed `elements`
- missing or broken element relationships
- scene data that needs restoration/normalization

### Only some content appears

Likely causes:
- invalid text/container modeling
- missing bindings
- asset/file references not preserved

### Icons or images missing

Likely causes:
- missing `files`
- assets referenced by name but not bundled
