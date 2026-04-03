---
name: "security-threat-model"
description: "Threat Model Source Code Repo workflow skill. Use this skill when the user needs repository-grounded threat modeling that identifies trust boundaries, assets, attacker capabilities, abuse paths, and mitigations, then produces a concise Markdown threat model backed by repo evidence. Use when the user asks to threat model a codebase or subpath, enumerate threats or abuse paths, or perform AppSec threat modeling. Do NOT use for generic architecture summaries, code review, exploit validation, or broad security best-practices review."
version: "0.0.1"
category: "testing-security"
tags:
  - "security-threat-model"
  - "repository-grounded"
  - "threat-modeling"
  - "stride"
  - "trust-boundaries"
  - "assets"
  - "abuse-paths"
  - "appsec"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/security-threat-model"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Threat Model Source Code Repo

## Overview

This skill produces a repository-grounded threat model for a repo or scoped path. It is for architectural security analysis, not exploit development and not generic advice.

Keep the original upstream identity visible: this skill packages `packages/skills-catalog/skills/(security)/security-threat-model` from `https://github.com/tech-leads-club/agent-skills.git` into the Omni Skills format while preserving provenance and intent.

The goal is to deliver a concise Markdown report that:

- defines scope clearly
- identifies components, assets, entry points, and trust boundaries
- describes realistic attacker capabilities
- enumerates a small number of high-value abuse paths
- distinguishes evidenced controls from assumptions
- recommends concrete mitigations tied to repo locations

Anchor every architectural claim to evidence in the repository when possible. If evidence is missing, mark the statement as an assumption or open question.

## When to Use This Skill

Use this skill when the user asks for any of the following:

- a threat model for a repository, service, package, application, or subdirectory
- abuse-path analysis for code, infrastructure, CI/CD, or deployment assets
- trust-boundary and asset analysis based on source, config, manifests, or workflows
- AppSec design review that must produce a concise threat-model document
- a security-focused repo walkthrough that maps architecture to threats and mitigations

Do **not** use this skill for:

- general architecture summaries without security analysis
- line-by-line secure code review
- vulnerability exploitation or proof-of-concept validation
- generic best-practices review without a scoped system model
- incident response or forensic triage

If the task drifts, hand off deliberately:

- use a code review skill for implementation-level defects
- use a security best-practices skill for broad hardening guidance
- use a secrets or dependency review workflow for narrow supply-chain validation
- use incident-response workflows for active compromise analysis

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First pass on an unfamiliar repo | `references/threat-model-workflow.md` | Gives the end-to-end workflow and evidence rules |
| Need to gather repo facts before modeling | `references/repo-evidence-checklist.md` | Prevents inventing architecture or missing hidden attack surfaces |
| Need a structured worksheet | `references/threat-enumeration-worksheet.md` | Standardizes assets, boundaries, entry points, and abuse paths |
| Missing deployment or exposure details | `references/assumptions-and-open-questions.md` | Captures unknowns and prompts targeted user questions |
| Need consistent prioritization | `references/risk-rating-guidance.md` | Keeps likelihood, impact, and priority reasoning concise |
| Need report shape fast | `examples/example-threat-model-report.md` | Shows the expected output contract |
| CI/CD-heavy or package-publishing repo | `examples/example-ci-cd-threat-surface.md` | Reminds you to model workflows, tokens, provenance, and release automation |
| Handoff to adjacent security work | `agents/security-skill-router.md` | Helps route from modeling to validation or remediation |

## Workflow

1. **Set scope before reading deeply**
   - Confirm the repo root or in-scope subpath.
   - State what is in scope and explicitly list what is excluded.
   - If the repo is a monorepo, narrow to the target service, package, or deployment slice first.

2. **Collect evidence from the repository**
   - Review code, manifests, lockfiles, API specs, container files, IaC, deployment descriptors, auth config, and CI workflows.
   - Separate runtime components from test fixtures, local tooling, and docs-only content.
   - Build an evidence map of component → file path(s).

3. **Decompose the system**
   - Identify components, data stores, external services, operators, and automation.
   - Note how the system runs: API server, worker, CLI, batch job, library, browser app, controller, etc.
   - Record the major data flows visible from repo evidence.

4. **Define trust boundaries, assets, and entry points**
   - Trust boundaries are concrete edges where privileges, identities, or trust levels change.
   - Assets include secrets, sensitive data, integrity-critical state, build artifacts, deployment credentials, audit logs, and availability-critical services.
   - Entry points include endpoints, queues, file uploads, parsers, webhooks, admin tools, CLIs, CI triggers, release jobs, package publishing, and deployment automation.

5. **Calibrate attacker capabilities**
   - Describe realistic attacker starting positions such as unauthenticated internet user, normal tenant user, compromised dependency author, contributor with repo access, or attacker controlling a CI input.
   - Also note important non-capabilities so severity does not inflate.
   - If internet exposure, tenancy, or auth model is unknown, record that as an assumption.

6. **Enumerate threats as abuse paths**
   - Prefer a small number of repo-specific threats over exhaustive generic lists.
   - Use STRIDE as a coverage check if helpful, but keep threats asset- and boundary-driven.
   - For each threat, record:
     - title
     - attacker goal
     - preconditions
     - entry point
     - trust boundary crossed
     - impacted asset
     - existing controls with evidence
     - likelihood
     - impact
     - priority
     - mitigation

7. **Include supply-chain and CI/CD surfaces when present**
   - Check dependency manifests and lockfiles.
   - Inspect GitHub Actions or other CI workflows, token permissions, release jobs, runners, signing, provenance, container builds, and artifact publication steps.
   - Treat secrets exposure, build tampering, unsafe automation, and deployment manifests as first-class threat surfaces when evidence supports it.

8. **Validate assumptions with the user when they change the ranking**
   - Ask 1-3 targeted questions only when needed.
   - Good questions resolve internet exposure, auth model, data sensitivity, deployment environment, multi-tenancy, and release ownership.
   - If the user cannot answer, keep working but mark priority as assumption-sensitive.

9. **Recommend mitigations in secure-by-design order**
   - Prefer eliminating the risky path entirely.
   - Then reduce attack surface or privilege.
   - Then harden validation, isolation, authz, and secrets handling.
   - Then add monitoring or detective controls.
   - Tie recommendations to concrete code, config, workflow, or deployment locations.

10. **Quality check and write the report**
    - Confirm every major entry point and trust boundary is represented.
    - Confirm runtime and CI/dev tooling were considered separately.
    - Confirm inferred controls are labeled as inferred, not verified.
    - Confirm open questions and assumptions are explicit.
    - Write the final file as `<repo-or-dir-name>-threat-model.md`.

## Output Contract

Produce a concise Markdown report with these sections:

1. Scope
2. System Summary
3. Repo Evidence
4. Trust Boundaries
5. Assets
6. Entry Points
7. Attacker Capabilities and Assumptions
8. Threats and Abuse Paths
9. Mitigations and Priorities
10. Open Questions

Keep the report short enough to review quickly, but detailed enough that each threat can be traced back to repo evidence.

## Examples

### Example 1: Threat model a service directory

```text
Use @security-threat-model on services/billing. Build a repo-grounded threat model, call out trust boundaries and abuse paths, and write billing-threat-model.md.
```

**Expected result:** A concise Markdown threat model for `services/billing` with evidence-backed threats and mitigation priorities.

### Example 2: Collect evidence before writing

```text
Use @security-threat-model on this repo. Start by building an evidence map from manifests, Dockerfiles, deployment YAML, and GitHub Actions before you rank threats.
```

**Expected result:** The model reflects runtime, deployment, and CI/CD surfaces instead of only application source files.

### Example 3: Scope a monorepo carefully

```text
Threat model only packages/api-gateway and its deployment path. Exclude unrelated packages unless they are direct dependencies or trust-boundary peers.
```

**Expected result:** A narrow model that avoids over-claiming the architecture of the rest of the monorepo.

### Example 4: Ask clarifying questions before final ranking

```text
Threat model this repo, but pause if internet exposure, tenancy, or auth assumptions would materially change the priority.
```

**Expected result:** The workflow asks targeted questions before finalizing severity-sensitive threats.

## Best Practices

### Do

- Anchor component and control claims to file paths, manifests, configs, workflows, or docs in the repo.
- Keep scope narrow, especially for monorepos and platform repos.
- Model CI/CD, dependencies, package publishing, and deployment assets when they are part of the repo.
- Distinguish verified controls from inferred controls and recommended controls.
- Prefer a few high-quality abuse paths over a long generic checklist.
- Tie mitigations to specific boundaries, components, or files.
- Record assumptions that materially affect likelihood, impact, or priority.

### Don't

- Do not invent deployment behavior or security controls from naming conventions alone.
- Do not treat static analysis, secret scanning, or dependency tooling as a substitute for threat modeling.
- Do not mix test fixtures or local dev tooling into runtime architecture unless they are genuine attack surfaces.
- Do not present speculative threats as facts without evidence or stated assumptions.
- Do not recommend destructive verification, exploit attempts, or production-impacting tests in this workflow.

## Troubleshooting

### Problem: The repo lacks architecture documentation

**Symptoms:** It is hard to tell which directories are runtime code, what the main components are, or which services communicate.

**Solution:** Use `references/repo-evidence-checklist.md` and derive the system from executable evidence: entrypoints, manifests, framework conventions, container files, deployment descriptors, and CI workflows. Mark uncertain relationships as assumptions instead of guessing.

### Problem: The monorepo scope is too large

**Symptoms:** The draft threat model becomes generic, includes too many unrelated components, or mixes trust zones that likely belong to different systems.

**Solution:** Narrow scope to one service, package, application boundary, or deployment slice. Explicitly list excluded paths. Only pull in neighboring components when there is clear evidence of a direct trust relationship.

### Problem: Deployment context is missing

**Symptoms:** Threat ranking depends on whether the service is internet-facing, single-tenant, internal-only, or handling sensitive data, but the repo does not say.

**Solution:** Use `references/assumptions-and-open-questions.md` to ask targeted questions. If the user cannot answer, keep the threat in the report but mark the priority as conditional on those assumptions.

### Problem: CI/CD or release automation introduces hidden attack paths

**Symptoms:** The application code looks straightforward, but workflows, publishing jobs, or deployment automation have broad permissions, third-party actions, or secret access.

**Solution:** Review `.github/workflows/`, release scripts, package publishing config, signing or provenance steps, and token permissions. Add CI/CD trust boundaries and build-artifact assets to the model when evidence supports them.

### Problem: Evidence conflicts across code, config, and docs

**Symptoms:** README files describe one architecture, but manifests, IaC, or deployment files suggest another.

**Solution:** Prefer executable and deployment evidence over narrative docs. Call out the conflict explicitly in the report and treat the uncertain areas as open questions.

## Related Skills

Use adjacent security workflows when the task moves beyond threat modeling:

- `@security-best-practices` for broad hardening guidance after threat discovery
- a secure code review skill for implementation-level defect validation
- a dependency or supply-chain review skill for deep package and provenance analysis
- a secrets-handling or secrets-scanning skill for exposed credentials or token hygiene
- a Kubernetes or infrastructure security skill when deployment hardening becomes the primary task
- an incident-response skill when the user is investigating active compromise rather than design risk

## Additional Resources

- [Threat modeling workflow](references/threat-model-workflow.md)
- [Repo evidence checklist](references/repo-evidence-checklist.md)
- [Threat enumeration worksheet](references/threat-enumeration-worksheet.md)
- [Assumptions and open questions template](references/assumptions-and-open-questions.md)
- [Risk rating guidance](references/risk-rating-guidance.md)
- [Example threat model report](examples/example-threat-model-report.md)
- [Example repo evidence map](examples/example-repo-evidence-map.md)
- [Example CI/CD threat surface](examples/example-ci-cd-threat-surface.md)
- [Security skill router](agents/security-skill-router.md)

## Provenance

This skill preserves the identity and intent of the upstream `security-threat-model` workflow while rewriting the execution guidance into clear English and packaging it as a more operational Omni Skills workflow kit.
