# Nx CI Monitor Command Matrix

Use non-destructive inspection commands first.

## Repository state

```bash
git branch --show-current
git rev-parse --short HEAD
git status --short
```

## Nx Cloud connection

```bash
[ -f nx.json ] && grep -E 'nxCloudId|nxCloudAccessToken' nx.json
```

## Package manager detection

```bash
if [ -f pnpm-lock.yaml ]; then echo pnpm; \
elif [ -f yarn.lock ]; then echo yarn; \
elif [ -f package-lock.json ]; then echo npm; \
else echo unknown; fi
```

## Narrow task verification

```bash
pnpm nx run <project>:<target>
yarn nx run <project>:<target>
npx nx run <project>:<target>
```

## Affected verification when base/head is known

```bash
pnpm nx affected -t test --base=<base> --head=<head>
```

## Apply self-healing patch locally

```bash
nx apply-locally <shortLink>
git status --short
```

## Commit after bounded remediation

```bash
git add -A
git commit -m "fix(<projects>): <brief description>

Failed tasks: <taskId1>, <taskId2>
Local verification: passed|enhanced|failed-pushing-to-ci"
```

## Caution

Commands that mutate the branch should only be used after preflight, evidence capture, and user-allowed push behavior are clear.
