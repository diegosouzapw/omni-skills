# Example: Monorepo Deploy

## Scenario

The repository contains multiple apps and the Vercel target is `apps/web`.

## Operator flow

1. Confirm that `apps/web` is the intended deploy root.
2. Change into that directory before running Vercel commands.
3. Link if necessary:

```bash
cd apps/web
vercel link
```

4. Pull settings if needed:

```bash
vercel pull --environment=preview
```

5. Deploy preview:

```bash
vercel deploy -y
```

## Key point

Do not assume the repository root is the correct deployment root in a monorepo.
