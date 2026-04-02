# ICP Scorecard Example

This is a worked example for an AI support automation product.

## Target account example

- Company: Mid-market fintech
- Employees: 350
- Region: North America
- Support volume: high
- Current stack: Zendesk + internal billing tools
- Trigger: rapid ticket growth after product expansion

## Fit score example

| Component | Weight | Score | Weighted score | Notes |
| --- | --- | --- | --- | --- |
| Industry fit | 0.25 | 90 | 22.5 | fintech is a strong pattern in retained accounts |
| Company size fit | 0.25 | 80 | 20.0 | mid-market is ideal for onboarding model |
| Workflow readiness | 0.25 | 85 | 21.25 | has structured ticket operations |
| Tooling fit | 0.25 | 75 | 18.75 | existing systems integrate well |

**Total fit score:** 82.5

## Intent score example

| Component | Weight | Score | Weighted score | Notes |
| --- | --- | --- | --- | --- |
| First-party activity | 0.40 | 70 | 28.0 | repeat visits to demo and pricing pages |
| Trigger events | 0.30 | 85 | 25.5 | hiring support ops lead and ticket surge |
| Third-party signals | 0.30 | 60 | 18.0 | some category research, moderate confidence |

**Total intent score:** 71.5

## Interpretation

- Fit is strong.
- Intent is active but not maximal.
- Recommended state: high-priority activation with proof tailored to billing-dispute use case.

## Anti-ICP contrast example

Not ideal:
- very small startup support teams
- low ticket complexity
- no structured workflow owner
- wants a generic chatbot rather than workflow automation
