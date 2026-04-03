# Example Motion Recommendation Output

## Context summary

The company sells a developer workflow product. Individual contributors can start alone, but larger accounts need admin controls, security review, and rollout support.

## Missing data and assumptions

- Assumption: enterprise buyers care about SSO and auditability.
- Assumption: product value can be demonstrated within the first session for small teams.

## Segments considered

- SMB self-serve
- Mid-market team adoption
- Enterprise governed rollout

## Recommended motion by segment

- **SMB:** self-serve PLG with trial or freemium depending marginal cost
- **Mid-market:** hybrid/PQL-led motion based on team adoption and admin-intent signals
- **Enterprise:** sales-assisted or sales-led path with demo, sandbox, and procurement support

## Value moment, activation, and TTFV

- **Value moment:** first successful workflow completed in the customer's environment
- **Activation event:** first workflow run with repeat usage from the same account
- **TTFV target:** under 15 minutes for SMB, under 1 day for enterprise pilot setup

## Proof-of-value recommendation

- Interactive demo for initial understanding
- Sandbox or guided pilot for enterprise proof on realistic data

## PQL design

- Trigger only when account-level usage and fit both exist
- Exclude hobbyist and test accounts
- Sales enters to help rollout, security, and packaging, not to interrupt early product exploration

## KPIs to monitor

- Signup-to-activation
- Median time to activation
- PQL-to-opportunity
- Expansion rate

## Top risks and tradeoffs

- Freemium may create support burden without enough monetization pressure
- Early sales outreach could reduce trust in product-led adoption

## Next experiments

1. Instrument activation around real workflow completion
2. Test one enterprise-ready PQL rule with strict exclusions
3. Compare demo-first versus sandbox-first for enterprise accounts
