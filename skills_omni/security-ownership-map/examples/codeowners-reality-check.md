# Worked Example: CODEOWNERS Reality Check

## Scenario

A team wants to know whether declared owners for authentication code still reflect actual maintenance over the last 12 months.

## Procedure

1. Run the ownership map for the target branch.
2. Query auth-tagged files with low bus factor.
3. Compare each file against the effective `CODEOWNERS` rule.
4. Label the mismatch type.

## Example commands

```bash
python skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo . \
  --out ownership-map-out \
  --since "12 months ago"

python skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out files \
  --tag auth \
  --bus-factor-max 1
```

## Example finding shape

- `auth/session/token_service.py`
  - observed maintainers: `alice@corp`, `bob@corp`
  - bus factor: `1`
  - CODEOWNERS: `@platform-reviewers`
  - classification: `over-broad ownership` and `coverage gap`

## Recommended report sentence

`Observed maintenance for auth/session/token_service.py is concentrated in alice@corp, while CODEOWNERS assigns a broad review group. This suggests review-ownership drift and limited bench depth for a sensitive path.`
