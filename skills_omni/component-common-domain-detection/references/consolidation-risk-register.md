# Consolidation Risk Register

Record applicable risks for each recommendation.

## Semantic risks

- Different meanings hidden behind the same name
- Invariants diverge across contexts
- Shared abstraction would require many context-specific branches

## Architecture risks

- New hotspot or bottleneck component
- Fan-in grows faster than ownership capacity
- Dependency direction becomes less clean
- Release coordination increases across teams

## Shared library risks

- Unclear owner or maintainer
- No versioning or deprecation policy
- Supply-chain or provenance expectations not defined
- Consumers would upgrade on conflicting timelines

## Shared service risks

- New network trust boundary
- Authn/authz requirements unclear
- Secrets handling not designed
- New availability or latency dependency
- Failure isolation and observability not planned

## Review fields

- Risk severity:
- Mitigation:
- Owner:
- Evidence source:
- Open questions:
