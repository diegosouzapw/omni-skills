# Lighthouse Interpretation Guide

Lighthouse is a lab measurement tool. Treat its output as controlled test evidence, not as a complete description of real-user experience.

## What to report

Always include:

- URL tested
- Lighthouse version if available
- mobile or desktop
- score by category when relevant
- key numeric metrics with units
- notable failed or regressed audits
- run count and consistency

## Score versus metrics

Do not report only the aggregate performance score.

A strong summary includes:

- performance score
- LCP
- CLS
- TBT
- FCP
- any notable opportunities or diagnostics

## Confidence language

Use stronger language when:

- the environment is controlled
- the same config was used across runs
- the result is stable across multiple runs

Use softer language when:

- the result comes from one run
- the environment changed between reports
- CI and local disagree

## Lab versus field

Lighthouse is lab data.

If the user asks whether users are truly affected, recommend pairing Lighthouse findings with field data, such as CrUX or application telemetry, before making broad claims.

## Suggested summary format

```text
URL: https://example.com/
Context: local production build, mobile, explicit config
Performance score: 88
Metrics: LCP 2.4s, CLS 0.03, TBT 180ms, FCP 1.5s
Notable failed/regressed audits: render-blocking resources, unused JavaScript
Consistency: 3 runs, median values used
Recommendation: safe to hand off to perf-web-optimization for implementation follow-up
```
