# Module-Level Coupling Analysis Example

## Scenario

A monolith contains `billing`, `pricing`, and `discounts` packages. The team reports that pricing-rule changes often require edits in all three packages.

## Scope

- abstraction level: module/package
- target: billing-related packages only

## Evidence collected

- import relationships between packages
- git history for the last 6 months
- duplicated rule inspection in pricing logic
- owner/team data from CODEOWNERS

## Sample finding

### Finding: Duplicated premium-customer rule across pricing and discounts

- **Elements involved:** `pricing` and `discounts`
- **Coupling type:** Functional (symmetric)
- **Strength:** High
- **Distance:** Moderate
- **Volatility:** High
- **Effective risk:** High
- **Confidence:** Medium

**Evidence**
- Structural: no direct import between the two packages
- History: rule-related files frequently co-change
- Organizational: same team owns both packages
- Semantic: both packages implement nearly identical premium-threshold logic

**Why it matters**
Changes to pricing policy require synchronized edits in multiple places, increasing regression risk.

**Recommended action**
Extract the shared pricing policy into a dedicated module or explicitly document why duplication is acceptable.

## Positive pattern

`billing` consumes a narrow `PriceQuote` DTO instead of the full internal pricing model. This is evidence of lower-strength contract coupling.
