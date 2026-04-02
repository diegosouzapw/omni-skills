# Security Design Prompts

Use these prompts for auth, payments, public APIs, sensitive data, or high-risk integrations.

## Lightweight threat-model prompts

Document:

- key assets to protect
- internal and external actors
- trust boundaries
- entry points
- abuse cases or misuse paths
- main mitigations

## Authentication and authorization

Ask:

- How is identity established?
- What authorization model applies?
- Are service-to-service calls authenticated?
- Are privileged actions auditable?

## Data classification

Ask:

- What sensitive data is collected, processed, stored, or transmitted?
- What data must be redacted, minimized, or deleted?
- What data must never appear in logs?

## Secrets handling

Prefer:

- secret managers
- least-privilege access
- rotation procedures
- auditability
- separation between environments

Do not rely on plain environment variables as the full strategy when higher assurance is required.

## Compliance prompts

If compliance is mentioned, document the technical controls and operational owner, not just the regulation name.
