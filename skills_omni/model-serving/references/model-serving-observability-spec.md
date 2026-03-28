# Model Serving Observability Spec

Infrastructure-only dashboards are not enough for production inference.

## Required Log Fields

Capture structured events with at least:

- timestamp
- service
- environment
- request_id
- route
- tenant or caller class when relevant
- model_name
- model_version
- contract_version
- feature_version or preprocessing_version
- prompt/template version when applicable
- fallback_used
- outcome
- error_class
- total_latency_ms

## Recommended Latency Breakdown

If available, break latency into:

- request validation
- feature or retrieval fetch
- preprocessing
- model inference
- postprocessing
- fallback execution

## Required Metrics

- request volume
- success rate
- typed error rate
- timeout rate
- fallback activation rate
- p50/p95/p99 latency
- queue depth or saturation signal
- cold-start count or startup duration
- output validation or schema-parse success rate

## Quality Proxy Metrics

Choose metrics that reveal user-impact regressions, for example:

- acceptance rate
- click-through delta
- human-review pass rate
- parse-valid rate
- moderation or safety block rate
- retrieval hit quality proxy

## Trace Dimensions

When requests cross multiple services, include spans or equivalent trace correlation for:

- feature fetch
- retrieval
- prompt assembly or preprocessing
- model invocation
- fallback path
- downstream write or side effect

## Minimum Review Rule

A rollout should not be considered observable unless an operator can answer:

1. which model version handled the request
2. whether fallback fired
3. which dependency phase consumed time
4. whether output validity or quality proxies changed
