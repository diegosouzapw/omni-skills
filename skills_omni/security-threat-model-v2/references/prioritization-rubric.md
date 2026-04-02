# Prioritization Rubric

Use a lightweight qualitative method.

## Inputs

- Likelihood: Low / Medium / High
- Impact: Low / Medium / High
- Existing controls: Strong / Partial / Weak / Unknown
- Confidence: Low / Medium / High

## Likelihood guidance

### High

- Low attacker preconditions
- Externally reachable or broadly accessible surface
- Clear abuse path from visible code
- Few or weak compensating controls

### Medium

- Some attacker preconditions or partial controls
- Reachability or exploit path depends on environment details
- Abuse is plausible but not strongly evidenced end-to-end

### Low

- Strong preconditions
- Requires unlikely access or hard-to-achieve chaining
- Strong visible controls reduce exploitability

## Impact guidance

### High

- Credential theft
n- Sensitive data exposure
- Cross-tenant access
- Integrity compromise of critical state
- Service-wide availability impact

### Medium

- Limited data exposure
- Targeted denial of service
- Integrity impact on non-critical workflows
- Abuse constrained to a subset of users or data

### Low

- Minor leakage
- Noisy or easily mitigated abuse
- Low-sensitivity operational disruption

## Priority suggestion

| Likelihood | Impact | Typical priority |
| --- | --- | --- |
| High | High | Critical / High |
| High | Medium | High |
| Medium | High | High |
| Medium | Medium | Medium |
| Low | High | Medium |
| Low | Medium | Low / Medium |
| Low | Low | Low |

## Adjustments

Raise or lower final priority based on:

- visible existing controls
- deployment assumptions still unresolved
- exploit chaining complexity
- confidence in the repository evidence

Always explain the adjustment briefly.
