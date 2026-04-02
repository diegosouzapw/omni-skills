# Metric Capture Guide

Use this guide to collect before-and-after evidence for React or Next.js performance work.

## Minimum acceptable evidence

Capture at least one of the following before and after the change:

- bundle analysis output for the affected route or app section
- Web Vitals readings captured through `useReportWebVitals`
- Vercel Speed Insights or equivalent real-user metrics
- platform observability evidence for slow server responses
- a reproducible local symptom with route, device context, and what improved

## Recommended workflow

1. Name the affected route, page, or component path.
2. Record the symptom in one sentence.
3. Capture the baseline evidence.
4. Apply the smallest change that matches the identified root cause.
5. Capture the same evidence again.
6. Compare only like-for-like conditions.
7. Write a short conclusion: improved, unchanged, or inconclusive.

## Example evidence prompts

- What route got faster, and by which measurement?
- Did the initial client bundle shrink after reducing the `use client` boundary?
- Did streaming improve perceived loading, or only move where the delay appears?
- Did hydration warnings disappear without introducing flicker?
- Did the deployed result match the local expectation?

## Notes

- Local dev measurements are useful for triage but weaker than production-facing telemetry.
- Avoid claiming a performance win if the evidence only shows code style changes.
- If metrics are unavailable, state that clearly and keep claims narrow.
