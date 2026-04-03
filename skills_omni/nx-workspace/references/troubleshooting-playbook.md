# Troubleshooting Playbook

Use this playbook for common Nx workspace-management failures.

## 1. Missing or surprising targets

**Check:**

```bash
nx show project <name> --json
```

If the resolved target exists, the issue may be inferred configuration rather than a missing target.

## 2. Affected mismatch

**Check:**

```bash
nx show projects --affected --base=<base> --head=<head>
```

Verify refs and CI checkout depth before changing Nx settings.

## 3. Cache misses

**Check:**

- target cacheability
- inputs
- outputs
- shared defaults
- CI/local environment differences

## 4. Stale graph or stale workspace state

**Check:**

```bash
nx reset
nx show projects
```

Use `nx reset` before manual cache deletion.

## 5. Boundary drift

**Check:**

- project tags
- dependency directions
- enforcement rules

If architecture is expressed only through folders, enforcement is probably too weak.

## Escalation rule

If the issue is no longer primarily about Nx workspace structure, affected analysis, boundaries, or caching, route to the more specific adjacent skill.
