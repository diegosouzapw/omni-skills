# Serving Review Example

## Deployment

- Endpoint: `recommendation-api`
- Model version: `ranker-v12`
- Rollout: shadow for 24h, canary at 10%, then full rollout

## Key Risks

- feature freshness drift from upstream events
- cold-start latency after autoscaling
- ranking quality proxy degradation without hard infra failures

## Recommended Gates

- fail rollout if latency exceeds target for sustained interval
- fail rollout if fallback rate spikes unexpectedly
- fail rollout if quality proxy drops below agreed threshold
