# Example: Performance Investigation Report

Use this format for handoff after a DevTools trace review.

## Performance Investigation Summary

- **Page or flow:**
- **Primary symptom:**
- **Trace type:** Reload trace / interaction trace
- **Environment notes:** viewport, throttling, signed-in state, feature flags

## Findings

- **User-visible impact:**
- **Likely metric affected:** LCP / CLS / INP / long tasks / other
- **Main evidence from trace:**
- **Likely bottleneck area:**
- **Confidence level:** Low / Medium / High

## Suggested next inspection area

- render-blocking resources
- image optimization
- JavaScript execution cost
- layout recalculation
- third-party scripts
- API latency affecting render

## Evidence packet

- screenshot attached: yes / no
- console anomalies: yes / no
- failing or slow requests: yes / no
- trace insight summary: yes / no

## Redactions applied

List any removed secrets, tokens, personal data, or internal-only details.
