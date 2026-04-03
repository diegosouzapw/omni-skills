# Security Skill Router

Use this note when the task moves beyond threat modeling.

## Stay in `security-threat-model` when

- the task is primarily about assets, boundaries, attacker goals, abuse paths, and mitigation priorities
- the output should be a concise Markdown threat model
- the repo evidence is sufficient to reason about architecture and attack surface

## Hand off when

### Secure code review becomes primary
Use a code-review-oriented security skill when the user needs implementation defect validation, taint tracing, or file-by-file bug finding.

### Broad hardening guidance becomes primary
Use `security-best-practices` when the user wants a general hardening plan rather than a scoped threat model.

### Supply-chain validation becomes primary
Use a dependency or CI/CD security workflow when the main question is package risk, provenance, or automation hardening.

### Secrets handling becomes primary
Use a secrets-focused workflow when the user needs secret discovery, rotation planning, or credential hygiene remediation.

### Incident analysis becomes primary
Use an incident-response workflow when there are signs of active compromise, suspicious behavior, or forensic needs.

## Handoff rule

When handing off, pass forward:

- scoped paths
- evidence map
- trust boundaries already identified
- assumptions and open questions
- top threats that need verification or remediation
