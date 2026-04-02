# Risk Rating Guidance

Use short qualitative ratings.

## Likelihood

- **Low**: requires unlikely preconditions, strong existing controls, or hard-to-reach entry points
- **Medium**: plausible with some effort or partial access
- **High**: realistic from the attacker starting position with limited friction

## Impact

- **Low**: minor information exposure or limited operational effect
- **Medium**: meaningful confidentiality, integrity, or availability harm to one component or user slice
- **High**: tenant break, sensitive data exposure, auth bypass, build compromise, or major service disruption

## Priority

Use likelihood and impact together, then adjust for strong evidenced controls or assumption sensitivity.

Examples:

- pre-auth remote code execution on an internet-facing service: often High or Critical
- token leakage in CI with package publish access: often High
- noisy low-sensitivity info leak with limited reach: often Low

## Rating Rule

Do not overfit precision. A short, defensible explanation is better than false numeric certainty.
