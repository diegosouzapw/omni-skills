# Vercel Monorepo and Root Directory Guide

Use this reference when the repository contains multiple apps or the deployment targets a subdirectory.

## Questions to answer before linking or redeploying

1. Is the target app at repository root or in a subdirectory?
2. Is the local directory linked to the intended Vercel project?
3. Does `.vercel/repo.json` map the expected directory to the expected project?
4. Is the Vercel project configured with the correct root directory?

## Common failure pattern

The repo is correct, but Vercel builds the wrong package because the linked project or root directory points somewhere else.

## Recovery approach

- Inspect `.vercel/project.json` or `.vercel/repo.json`.
- Confirm the selected team/project is correct.
- Confirm the intended app path before redeploying.
- If linkage is wrong, relink deliberately instead of guessing.

## Linking guidance

If a git remote exists and you want repo-aware matching:

```bash
vercel link --repo --scope <team-slug>
```

If the app has no git remote and you are linking from the current directory:

```bash
vercel link --scope <team-slug>
```
