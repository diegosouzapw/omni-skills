# Example: Shared Library vs Shared Service

Capability under review: auditing behavior used by billing, ticketing, and survey components.

## Shared library was favored when

- Audit record formatting was stable.
- Consumers ran in the same trusted environment.
- Teams wanted no additional network hop.
- Centralized runtime policy was not required.

## Shared service would be favored when

- Audit policy must be enforced centrally.
- Access control and retention rules must be managed in one place.
- Independent scaling or isolation is needed.
- Central observability and compliance controls justify the operational overhead.

## Decision

In this example, choose a shared service only if policy centralization is a requirement. Otherwise, a shared library is the lower-cost option.
