# Severity and priority rubric

Use this rubric to keep prioritization consistent.

## Severity levels

| Severity | Meaning | Typical examples | Suggested action |
| --- | --- | --- | --- |
| Critical | Major failure affecting trust, access, conversion, or indexability | Broken keyboard path on core flow, important page blocked from indexing, severe mixed-content or HTTPS failure | Fix immediately |
| High | Significant user or business impact | Failing CWV on key templates, inaccessible form errors, unstable checkout layout, canonical errors on important pages | Fix before launch or in next urgent cycle |
| Medium | Material quality issue with narrower scope or less severe impact | Metadata duplication, moderate console errors, inefficient LCP resource loading on secondary templates | Fix in planned sprint |
| Low | Improvement opportunity or hygiene issue | Minor audits, small markup issues, low-impact optimizations | Fix when practical |

## Priority modifiers

Increase priority when:

- issue affects a critical user journey
- issue appears template-wide
- issue harms accessibility or indexability
- issue is confirmed by multiple evidence sources
- issue has low implementation effort and high payoff

Decrease priority when:

- issue is isolated to a low-value page
- evidence is weak or inconsistent
- remediation risk is high and benefit is marginal
- issue is primarily cosmetic
