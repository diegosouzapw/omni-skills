# Monorepo Tuning

Use this note when co-change graphs or ownership outputs become noisy, slow, or hard to interpret.

## Common monorepo problems

- lockfiles connect unrelated subsystems
- `.github/` and CI files create fake coupling
- generated files inflate touch counts
- large dependency updates create supernode commits
- repo-wide formatting changes distort maintainer inference

## Safe tuning sequence

1. Narrow the time window first.
2. Keep the path scope conceptually narrow if the task allows it.
3. Exclude known glue files from co-change analysis.
4. Suppress large commits with `--cochange-max-files`.
5. Disable communities if they are not needed.

## Useful exclusions

Examples:

- `**/.github/**`
- `**/package-lock.json`
- `**/Cargo.lock`
- `**/pnpm-lock.yaml`
- `**/Kbuild`
- generated code paths specific to the repository

## Example

```bash
python skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo /path/to/monorepo \
  --out ownership-map-out \
  --since "9 months ago" \
  --cochange-exclude "**/.github/**" \
  --cochange-exclude "**/package-lock.json" \
  --cochange-exclude "**/Cargo.lock" \
  --cochange-exclude "**/Kbuild"
```

## Interpreting communities carefully

If communities still look noisy, do not force a graph story. State that co-change structure is not meaningful under the current repository patterns and rely on direct file and person summaries instead.
