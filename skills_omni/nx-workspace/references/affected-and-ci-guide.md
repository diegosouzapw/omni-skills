# Affected and CI Guide

Use this guide when affected project selection must be correct and reproducible.

## Core rule

Affected analysis depends on the Git comparison range. If `base` and `head` are wrong, results will be wrong.

## Recommended local validation

```bash
nx show projects --affected --base=origin/main --head=HEAD
nx affected -t lint --base=origin/main --head=HEAD
```

Replace `origin/main` with the repository's actual base branch or comparison ref.

## CI checks

Before changing Nx configuration, verify:

- the CI job fetched enough Git history
- the `base` ref exists in the job
- the checkout is not too shallow
- detached HEAD behavior is understood
- the same comparison pair is used when reproducing locally

## GitHub Actions note

The common failure mode is shallow checkout. Ensure the workflow fetches enough history, often with:

```yaml
fetch-depth: 0
```

Then pass explicit refs when needed.

## Symptoms and likely causes

| Symptom | Likely cause |
| --- | --- |
| No affected projects when you expect some | Wrong base/head or missing branch ref |
| Too many affected projects | Wrong comparison range or broad changes in shared inputs |
| CI and local results differ | Shallow clone, missing refs, or different comparison pair |

## Safe workflow

1. Confirm refs.
2. Reproduce with explicit `base` and `head`.
3. Only then inspect Nx config if results are still surprising.
