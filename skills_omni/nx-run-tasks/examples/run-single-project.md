# Example: Run a Single Project Task

## Goal

Discover a project's targets and run one of them safely.

## Step 1: Inspect available targets

```bash
nx show project myapp --json
```

Look for a `targets` section such as:

```json
{
  "name": "myapp",
  "targets": {
    "build": {},
    "test": {},
    "lint": {},
    "serve": {}
  }
}
```

## Step 2: Run the target you confirmed

```bash
nx run myapp:test
```

## Step 3: Add configuration or forwarded args only if needed

```bash
nx run myapp:build --configuration=production
nx run myapp:test -- --watch
```

## If it fails

- re-check the exact target name with `nx show project myapp --json`
- add `--verbose`
- if cache behavior is suspicious, do one comparison run with `--skipNxCache`
