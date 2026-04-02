# Threat Model Report Template

Use this template for the final repository-grounded deliverable.

## Title

`<repo-or-dir-name> Threat Model`

## Scope

- In scope:
- Out of scope:
- Repository root or path analyzed:
- Date:

## Evidence Summary

List the main files or directories used to derive the system model.

- `path/to/file` - why it matters
- `path/to/file` - why it matters

## System Overview

Briefly describe the visible runtime architecture.

## Components

- Component:
  - Evidence:
  - Responsibility:
- Component:
  - Evidence:
  - Responsibility:

## Trust Boundaries

| Boundary | Evidence | Why it matters |
| --- | --- | --- |
| Internet -> API | `src/routes/*.ts` | User-controlled input enters the system |

## Key Assets

| Asset | Why it matters | Evidence |
| --- | --- | --- |
| Access tokens | Compromise may grant account access | `src/auth/token.ts` |

## Entry Points

- HTTP routes:
- Webhooks:
- File upload or parsing surfaces:
- Queue or worker triggers:
- CLI flags or config loaders:

## Attacker Capabilities Assumed

- Example: Unauthenticated internet user can reach public API routes.
- Example: Authenticated tenant user can submit crafted payloads.

## Assumptions and Unknowns

- Example: Internet exposure inferred from deployment manifests but not confirmed.
- Example: Multi-tenancy not proven from visible code.

## Abuse Paths

### 1. <Short title>

- Preconditions:
- Attack path:
- Impacted asset:
- Boundary crossed:
- Effect:
- Existing controls observed:
- Evidence:
- Likelihood:
- Impact:
- Priority:
- Confidence:
- Recommended mitigations:
- Likely implementation touchpoints:
- Optional references: CAPEC / ATT&CK / ASVS / OWASP category

## Existing Controls Observed

- Control:
  - Evidence:
  - Coverage notes:

## Recommended Mitigations

| Recommendation | Control family | Likely implementation location | Priority |
| --- | --- | --- | --- |
| Enforce schema validation at route boundary | Input validation | `src/api/...` | High |

## Prioritization Notes

Explain what most influenced ranking decisions.

## Confidence and Limitations

- Confidence level:
- Main limitations:
- Additional context needed:

## Summary

Provide a short closing summary of the highest-priority concerns and next actions.
