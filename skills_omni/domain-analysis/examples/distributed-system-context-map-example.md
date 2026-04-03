# Example: Distributed System Context Map

## Scenario

A repository set contains separate deployables named `orders`, `payments`, `customer-profile`, and `support-tools`.

## Important reminder

Existing deployables do not automatically prove correct bounded contexts. The analysis still checks language, invariants, and workflow seams.

## Findings

### Orders Context
- Ubiquitous language: cart, checkout, order, fulfillment, cancellation
- Likely subdomain classification: Core
- Confidence: High

### Payments Context
- Ubiquitous language: authorization, capture, settlement, refund
- Likely subdomain classification: Supporting
- Confidence: High

### Customer Profile Context
- Ubiquitous language: profile, preferences, contact details, consent
- Likely subdomain classification: Supporting
- Confidence: Medium

### Support Context
- Ubiquitous language: ticket, case, resolution, escalation
- Likely subdomain classification: Supporting
- Confidence: Medium

## Context Map

| From | To | Relationship | Integration | Rationale | Confidence |
| --- | --- | --- | --- | --- | --- |
| Orders | Payments | Customer/Supplier | payment API | Orders drives payment needs and depends on payment outcomes | High |
| Support | Orders | Anti-Corruption Layer | support-facing adapter | Support should view orders through support language, not internal fulfillment terms | Medium |
| Orders | Customer Profile | Published Language | customer reference events | Orders needs stable customer reference data without absorbing profile semantics | Medium |

## Service-Boundary Caveat

Because these are already separate deployables, the output does **not** conclude that the boundaries are correct. It only states that current service boundaries appear plausible, with one caution: Support should avoid directly embedding the Orders model and should likely use an anti-corruption layer.
