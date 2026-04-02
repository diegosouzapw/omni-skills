# Repository Fidelity Checks

Use this checklist before interpreting ownership, bus factor, or orphaned-code findings.

## Why this matters

Git-history analysis is only as trustworthy as the repository copy being analyzed. Shallow clones, partial clones, wrong branches, or unexpected mirrors can remove commits or blobs and produce false ownership conclusions.

## Preflight checklist

### 1. Confirm repository identity

```bash
git rev-parse --show-toplevel
git remote -v
git rev-parse HEAD
```

Record:

- repository path
- current commit
- remote URL when relevant

### 2. Confirm the intended branch or revision

```bash
git branch --show-current
git status --short --branch
```

If the task is branch-specific, write it down in the findings packet.

### 3. Detect shallow history

```bash
git rev-parse --is-shallow-repository
```

If the result is `true`, do not trust historical ownership findings until the repository is unshallowed or the limitation is explicitly accepted.

### 4. Detect partial clone filters

```bash
git config --get remote.origin.partialclonefilter || true
git config --get extensions.partialclone || true
```

If partial clone is in use, confirm whether missing objects or filtered blobs affect the workflow.

### 5. Check whether submodules are in scope

```bash
git submodule status --recursive 2>/dev/null || true
```

Decide whether submodule content is:

- intentionally excluded
- analyzed separately
- included through another workflow

### 6. Choose and record the time window

Examples:

- `--since "12 months ago"`
- `--since 2025-01-01 --until 2025-12-31`

Use a bounded window first unless the question specifically requires full history.

## Common failure modes

### Shallow clone

**Effect:** old maintainers disappear, files look stale, bus factor drops artificially.

### Wrong branch

**Effect:** CODEOWNERS comparison and maintainer inference target the wrong code state.

### Partial clone or filtered mirror

**Effect:** traversal may succeed but the underlying history may not represent the full intended repository.

### Incomplete monorepo checkout assumptions

**Effect:** operators mistake a narrow path or sparse workflow context for complete repository evidence.

## Minimum handoff note

Include this in your findings packet:

- analyzed branch or revision
- whether clone was shallow
- whether partial clone indicators were present
- whether submodules were in scope
- analysis window used
