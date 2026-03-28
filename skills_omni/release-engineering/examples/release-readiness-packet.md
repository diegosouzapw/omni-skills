# Release Readiness Packet Example

## Release

- name: `payments-cutover`
- owner: platform-oncall
- environments: staging -> canary -> production

## High-risk edges

- schema migration for payment event deduplication
- queue consumer concurrency increase
- payment callback retry policy change

## Promotion gates

1. staging smoke checks pass and dashboards show no queue growth
2. canary handles real traffic for 15 minutes without error-budget burn
3. payment success rate remains within expected band after 25 percent rollout
4. rollback remains possible until the migration cleanup step

## Rollback triggers

- payment success rate drops below baseline band
- queue latency doubles for more than 5 minutes
- callback retries create duplicate charge risk

## Follow-up checks

- finance reconciliation review after 1 hour
- queue depth review after 24 hours
- release retro in the next platform sync
