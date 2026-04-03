# Example Threat Model Report

## Scope

Repository path: `services/api`

In scope:
- HTTP API service
- container build
- deployment manifests
- GitHub Actions release workflow

Out of scope:
- unrelated frontend packages
- local demo scripts

## System Summary

The service exposes authenticated and unauthenticated HTTP routes, persists data in PostgreSQL, builds a container image, and deploys through a GitHub Actions workflow.

## Repo Evidence

- `services/api/main.py` - application entrypoint
- `services/api/routes/` - API handlers
- `services/api/requirements.txt` - Python dependencies
- `Dockerfile` - container build
- `deploy/k8s/api-deployment.yaml` - Kubernetes deployment
- `.github/workflows/release.yml` - release automation

## Trust Boundaries

1. Internet client -> API service
2. API service -> PostgreSQL
3. GitHub Actions workflow -> container registry and deployment target

## Assets

- customer account data
- database credentials
- container images
- deployment credentials
- audit logs

## Entry Points

- HTTP routes under `services/api/routes/`
- CI workflow trigger in `.github/workflows/release.yml`
- container build context from `Dockerfile`

## Attacker Capabilities and Assumptions

Assumed attacker positions:
- unauthenticated internet user
- authenticated low-privilege user
- attacker able to influence CI through pull request inputs

Open assumption:
- registry publish permissions are not documented outside workflow YAML

## Threats and Abuse Paths

### Threat 1: Unvalidated upload path reaches privileged processing
- Attacker goal: execute malicious payload processing or corrupt integrity-critical state
- Preconditions: attacker can reach upload endpoint
- Entry point: upload route in `services/api/routes/uploads.py`
- Trust boundary crossed: internet -> API -> background processor
- Impacted asset: service integrity and stored data
- Existing controls with evidence: file size limit in `services/api/routes/uploads.py`; no schema validation evidence found
- Likelihood: Medium
- Impact: High
- Priority: High
- Mitigation: enforce strict content-type and schema validation at the upload boundary; isolate processing worker privileges

### Threat 2: CI workflow can publish artifacts with broad token scope
- Attacker goal: tamper with release artifacts
- Preconditions: attacker can influence workflow inputs or compromised maintainer token exists
- Entry point: `.github/workflows/release.yml`
- Trust boundary crossed: source repo automation -> artifact registry
- Impacted asset: build integrity and downstream consumers
- Existing controls with evidence: release job exists; least-privilege token scope not evident in YAML
- Likelihood: Medium
- Impact: High
- Priority: High
- Mitigation: minimize workflow permissions, pin third-party actions, require protected release conditions, and document provenance controls

## Mitigations and Priorities

1. Harden upload validation and processing isolation
2. Reduce CI workflow permissions and pin external actions
3. Document and verify artifact provenance controls

## Open Questions

- Is the upload feature internet-facing in production?
- Are release workflows limited to protected branches and trusted maintainers?
- Is the service single-tenant or multi-tenant?
