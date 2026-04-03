# Worked Example: Large Monorepo Analysis

## Scenario

You need a security ownership map from a noisy monorepo where CI files, lockfiles, and generated changes create misleading co-change clusters.

## Command set

```bash
bash scripts/validate_repo_fidelity.sh /path/to/monorepo

python skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo /path/to/monorepo \
  --out ownership-map-out \
  --since "9 months ago" \
  --cochange-exclude "**/.github/**" \
  --cochange-exclude "**/package-lock.json" \
  --cochange-exclude "**/Cargo.lock" \
  --cochange-exclude "**/Kbuild"

python skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out summary \
  --section bus_factor_hotspots
```

## Review pattern

Do not inspect all graph artifacts first. Start with:

- `summary --section bus_factor_hotspots`
- `summary --section orphaned_sensitive_code`
- `people --sort sensitive_touches --limit 10`
- one `community --id ...` drill-down only if the cluster appears meaningful

## Expected outcome

A smaller, more interpretable security ownership packet with reduced false coupling from infrastructure glue.
