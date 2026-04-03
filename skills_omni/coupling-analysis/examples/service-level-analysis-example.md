# Service-Level Coupling Analysis Example

## Scenario

The `orders` service depends on `customer-profile` and `pricing`. The organization wants to know whether these service integrations are healthy.

## Scope

- abstraction level: service/system
- target: orders-related service dependencies

## Evidence collected

- OpenAPI definitions for all three services
- deployment and release ownership
- recent git and release history
- incident notes showing coordinated deploys

## Sample finding

### Finding: Orders consumes internal customer-profile model fields

- **Elements involved:** `orders -> customer-profile`
- **Coupling type:** Model coupling
- **Strength:** Medium
- **Distance:** High
- **Volatility:** High
- **Effective risk:** High
- **Confidence:** High

**Evidence**
- Contract: API response exposes many internal profile fields not needed by orders
- Organizational: different teams own the services
- Deployment: services release independently
- History: customer field changes have forced multiple downstream updates

**Why it matters**
A remote, cross-team dependency on internal model details increases coordination cost and downstream break risk.

**Recommended action**
Replace the shared internal model with a consumer-oriented versioned contract exposing only the fields orders needs.

## Positive pattern

`orders -> pricing` uses a versioned quote API with a narrow request and response schema. Even though the services are distant, the contract quality lowers strength and improves maintainability.
