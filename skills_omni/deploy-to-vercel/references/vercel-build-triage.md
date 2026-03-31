# Vercel Build Triage

Use this reference when a deployment URL exists but the build or runtime state is unclear.

## Triage matrix

| Symptom | Likely cause | Next step |
| --- | --- | --- |
| Deploy command returns URL but build fails | Build config, missing dependency, env mismatch | `vercel inspect <deployment-url>` then `vercel pull --yes` and `vercel build` |
| Build passes locally but fails remotely | Wrong Vercel env or project settings | `vercel pull --yes` before rebuilding |
| Build succeeds but app errors at runtime | Missing or wrong-scoped env vars | `vercel logs <deployment-url>` and review env scope |
| Wrong app deployed | Monorepo/root-directory or linkage error | Review `.vercel/` files and root-directory configuration |

## Recommended debugging flow

```bash
vercel inspect <deployment-url>
vercel pull --yes
vercel build
```

If the issue appears after a successful build:

```bash
vercel logs <deployment-url>
```

## Guidance

- Avoid repeated redeploys before reproducing the problem locally.
- Pull project settings before local parity debugging.
- Separate build failure from runtime failure; they often need different commands.
