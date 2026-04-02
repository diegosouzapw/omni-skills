# Example: Run Many Projects and Affected Scope

## Run the same target for selected projects

```bash
nx run-many -t lint --projects=web,ui
```

## Run several tasks across the workspace

```bash
nx run-many -t build,test,lint --parallel=3
```

## Exclude specific projects

```bash
nx run-many -t test --projects=app1,app2,app3 --exclude=app2
```

## Run tasks only for changed scope

```bash
nx affected -t test --base=origin/main --head=HEAD
```

## File-driven affected fallback

```bash
nx affected -t lint --files=apps/web/src/main.ts,libs/ui/src/button.tsx
```

## Notes

- `run-many` is for broad repeated execution
- `affected` is for change-based execution
- in CI, explicit diff inputs are usually safer than defaults
