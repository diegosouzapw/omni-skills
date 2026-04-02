---
name: "security-threat-model-v2"
description: "Threat Model Source Code Repo workflow skill. Use this skill when the user explicitly asks for repository-grounded threat modeling of a codebase or path, including trust boundaries, assets, attacker capabilities, abuse paths, prioritization, and mitigations, and needs a concise evidence-anchored Markdown threat model rather than a generic architecture summary or code review."
version: "0.0.1"
category: "testing-security"
tags:
  - "security-threat-model-v2"
  - "security-threat-model"
  - "repository-grounded"
  - "threat-modeling"
  - "abuse-paths"
  - "trust-boundaries"
  - "appsec"
  - "repo-analysis"
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
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/security-threat-model-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Threat Model Source Code Repo

## Overview

Create a concise, repository-grounded threat model for a codebase or scoped path.

This skill is for AppSec threat modeling, not generic security commentary. It should produce a Markdown deliverable that is anchored to repository evidence such as file paths, manifests, routes, middleware, deployment files, queue consumers, storage adapters, and configuration loading paths.

Keep the workflow evidence-first:

- identify the in-scope runtime components
- map data flows and trust boundaries
- identify important assets and attacker goals
- enumerate realistic abuse paths
- validate assumptions when deployment context is unclear
- prioritize findings qualitatively
- recommend mitigations tied to likely code or config touchpoints

Preserve provenance where helpful, but do not let import or packaging details overshadow the security task.

## When to Use This Skill

Use this skill when the user explicitly asks to:

- threat model a repository, service, application, monorepo area, or subdirectory
- enumerate threats, abuse cases, or attacker paths for a codebase
- identify trust boundaries, assets, entry points, and mitigations from source code
- produce an AppSec-oriented design risk summary grounded in repo evidence
- review a system or feature from a threat-modeling perspective before implementation or release

Do **not** use this skill when the user primarily needs:

- a general architecture summary
- a standard code review or bug hunt
- dependency scanning or vulnerability enumeration
- exploit development or penetration testing
- incident response or forensics
- compliance questionnaire completion without repository analysis

If the task shifts from threat modeling into remediation planning, secure code review, cloud/IAM review, or incident work, hand off deliberately after preserving context.

## Operating Table

| Situation | Inspect first | Key questions | Deliverable focus |
| --- | --- | --- | --- |
| New service or API repo | `README*`, manifests, route definitions, server entrypoints, deployment files | Is this internet-facing? What auth model exists? What data crosses boundaries? | Components, entry points, boundaries, top abuse paths |
| CLI tool or desktop-style utility | CLI entrypoints, argument parsing, file I/O, subprocess use, config loading | Does it process untrusted files, paths, archives, or credentials? | Local trust boundaries, dangerous inputs, privilege assumptions |
| Library or SDK | Public exported interfaces, parsers, deserializers, examples, docs | Who calls this library and with what trust assumptions? | Consumer misuse risks, unsafe defaults, integration assumptions |
| Background worker or queue consumer | Job handlers, queue bindings, schedulers, storage access, outbound calls | Can jobs be forged, replayed, over-privileged, or data-amplifying? | Job-trigger abuse paths, integrity and authorization boundaries |
| Monorepo | Top-level workspace config, service directories, deployment manifests | Which service or path is actually in scope? Which shared components matter? | Explicitly scoped model with exclusions |
| Partial-directory request | Requested path, nearest manifests, local routes, config, imports | What upstream dependencies or external systems are not visible here? | Limited-scope threat model with explicit visibility constraints |
| Missing deployment context | Runtime config, env loading, infra manifests, auth middleware | Is exposure, tenancy, sensitivity, or trust model assumed or proven? | Assumptions section plus targeted clarification questions |
| Provenance or review audit needed | Local import/provenance files and support pack | Do reviewers need origin and workflow lineage called out? | Reviewable packet without diluting repo-specific findings |

## Workflow

1. **Confirm scope and output contract**
   - Identify the repo root or requested subpath.
   - State what is in scope and what is excluded.
   - Plan to produce a concise Markdown report using `references/threat-model-report-template.md`.
   - If only a subdirectory is visible, explicitly note that boundary coverage may be incomplete.

2. **Collect repository evidence**
   - Inspect files that reveal runtime behavior first: `README*`, manifests, lockfiles, entrypoints, route tables, queue consumers, middleware, config loaders, deployment files, Dockerfiles, Kubernetes manifests, Terraform, and storage adapters.
   - Distinguish runtime code from tests, examples, build tooling, CI, and local developer scripts.
   - Record evidence using file paths, not guesses. Use `references/repo-evidence-worksheet.md`.

3. **Decompose the system**
   - Identify major components such as API services, workers, admin paths, CLIs, storage layers, caches, message brokers, and third-party integrations.
   - Note how requests, jobs, files, tokens, or records move between them.
   - Mark visible and inferred boundaries separately.

4. **Identify trust boundaries, assets, and entry points**
   - Trust boundaries may include internet-to-app, user-to-admin, app-to-database, service-to-service, queue producer-to-consumer, tenant-to-tenant, and repo-to-external platform edges.
   - Assets may include credentials, tokens, secrets, PII, regulated data, integrity-critical state, models, files, audit logs, billing events, and deployment configuration.
   - Entry points may include HTTP routes, webhooks, uploads, parsers, deserializers, background jobs, CLI flags, config/env loading, and log sinks.

5. **Model attacker capabilities carefully**
   - Describe realistic attackers based on evidence: anonymous internet user, authenticated user, tenant user, internal operator, compromised dependency, forged job sender, or malicious file provider.
   - Also note what attackers likely cannot do based on current evidence.
   - Do not assume internet exposure, privileged access, or multi-tenancy without evidence or explicit user confirmation.

6. **Enumerate abuse paths**
   - Write threats as realistic abuse paths, not generic checklist bullets.
   - For each path, capture: preconditions, attack path, impacted asset, boundary crossed, effect, existing controls, and proposed mitigations.
   - Use `references/abuse-path-patterns.md` for prompts. CAPEC or ATT&CK labels are optional and should stay secondary to repo evidence.

7. **Validate assumptions before final ranking**
   - If deployment model, data sensitivity, tenancy, exposure, or auth context is unclear, pause and ask targeted questions.
   - Use `references/assumptions-and-questions-checklist.md`.
   - If the user cannot answer, keep the assumptions explicit and lower confidence accordingly.

8. **Prioritize findings**
   - Use qualitative likelihood and impact with short evidence-based reasoning.
   - Adjust priority based on visible controls and confidence level.
   - Use `references/prioritization-rubric.md` to keep rankings consistent.

9. **Recommend concrete mitigations**
   - Distinguish observed controls from recommended controls.
   - Tie mitigations to likely implementation locations such as middleware, validators, route handlers, queue consumers, IAM policy, storage policy, secret loading paths, and logging configuration.
   - Use `references/mitigation-map.md` to map common threats to OWASP/ASVS-aligned control families.

10. **Write the final Markdown report**
   - Anchor architectural claims and findings to concrete file paths.
   - Keep the output concise and repo-specific.
   - Name the file `<repo-or-dir-name>-threat-model.md` when writing to disk.
   - Before finalizing, confirm that all major entry points and trust boundaries in scope are represented.

## Report Requirements

The final threat model should include:

- scope and exclusions
- repo evidence summary with file references
- components and trust boundaries
- key assets and attacker capabilities
- assumptions and unresolved questions
- prioritized abuse paths
- existing controls observed in the repo
- recommended mitigations with likely implementation touchpoints
- confidence and limitations

Use the template in `references/threat-model-report-template.md`.

## Examples

### Example 1: Threat model a service repo

```text
Threat model this repository from an AppSec perspective. Identify trust boundaries, assets, attacker capabilities, abuse paths, and recommended mitigations. Keep it grounded in the code and cite file paths.
```

**Expected outcome:** A concise Markdown threat model with evidence-backed boundaries, a short assumptions section, and prioritized abuse paths.

### Example 2: Threat model only a subdirectory

```text
Threat model the `services/billing-api` directory only. Do not infer unrelated monorepo services unless they are directly referenced. Call out any visibility limits.
```

**Expected outcome:** A scoped report that models only the visible billing service, explicitly listing unknown upstream or downstream dependencies.

### Example 3: Ask clarification questions before ranking

```text
Threat model this worker service, but pause before final prioritization if internet exposure, auth context, or tenancy is unclear.
```

**Expected outcome:** An interim assumptions block with 1-3 targeted questions, followed by a final report only after clarification or explicit acknowledgment of unknowns.

### Example 4: Write the report to disk

```bash
# Example filename after analysis
printf '%s
' "<final markdown content>" > payments-threath-model.md
```

**Expected outcome:** A local Markdown file for handoff or review.

> If writing the file manually, prefer the template structure from `references/threat-model-report-template.md` and use the repository or scoped directory basename in the filename.

## Best Practices

### Do

- Ground every important architectural claim in visible repository evidence.
- Prefer a small number of high-quality abuse paths over a long generic list.
- Separate what is observed from what is assumed.
- Ask targeted clarification questions when deployment context changes severity materially.
- Treat trust boundaries as concrete edges between actors, components, and systems.
- Tie mitigation advice to likely code or config touchpoints.
- Distinguish runtime attack surface from build, CI, test, and demo code unless supply-chain risk is in scope.
- Keep external frameworks as validation aids, not as the structure of the report.

### Don't

- Do not infer internet exposure, multi-tenancy, sensitive data classes, or production controls without evidence.
- Do not dump STRIDE, CWE, CAPEC, or ATT&CK taxonomies without repo-specific reasoning.
- Do not classify every theoretical weakness as a finding.
- Do not overstate severity when attacker preconditions are unclear.
- Do not recommend broad environment-changing actions unless the user explicitly asks for remediation planning.
- Do not let provenance or import mechanics dominate the final deliverable.

## Troubleshooting

### Problem: The threat model is generic and could apply to any app

**Symptoms:** Findings read like a checklist, lack file references, and do not mention concrete routes, handlers, workers, parsers, or storage boundaries.

**Solution:** Re-run the evidence collection step. Populate `references/repo-evidence-worksheet.md` with actual file paths, then rewrite each finding as an abuse path tied to a visible component and asset.

### Problem: Scope is too broad in a monorepo

**Symptoms:** The draft tries to cover unrelated services, shared libraries, CI, and infra all at once, and the result becomes shallow.

**Solution:** Narrow scope to the requested service or path, identify only runtime-relevant shared dependencies, and explicitly list exclusions. If needed, produce multiple smaller threat models rather than one weak global model.

### Problem: The report assumes deployment facts that are not proven

**Symptoms:** The draft claims the service is internet-facing, multi-tenant, or processing regulated data without clear evidence in the repo or user input.

**Solution:** Move those statements into an assumptions section, ask 1-3 targeted clarification questions using `references/assumptions-and-questions-checklist.md`, and lower confidence until confirmed.

### Problem: Findings are taxonomy-heavy but operationally weak

**Symptoms:** The report contains many labels like CWE, CAPEC, ATT&CK, or OWASP categories, but little explanation of attacker path or impacted asset.

**Solution:** Keep labels optional. Rewrite findings in plain language: precondition, path, asset, boundary crossed, effect, existing controls, and mitigation.

### Problem: Mitigations are vague

**Symptoms:** Recommendations say things like "improve validation" or "harden security" without naming where changes likely belong.

**Solution:** Map each mitigation to a concrete control family and probable implementation point using `references/mitigation-map.md`, such as authz middleware, schema validation at the route boundary, queue message signing, storage policy, or secret manager integration.

### Problem: Partial repo visibility limits confidence

**Symptoms:** The user provided only a directory, snippet set, or extracted service folder, and major dependencies or deployment details are missing.

**Solution:** State the limitation explicitly, avoid claims about unseen systems, and produce a bounded threat model for visible evidence only.

## Related Skills

Use adjacent skills or workflows when the task becomes:

- **secure code review**: verifying whether a suspected abuse path is actually exploitable in code
- **cloud or IAM review**: evaluating deployment permissions, network policy, identity boundaries, or secret distribution outside the repo
- **dependency or supply-chain review**: focusing on package risk, CI/CD trust, image provenance, or lockfile posture
- **documentation**: turning the threat model into a broader architecture or decision record
- **remediation planning**: converting findings into implementation tasks, rollout phases, and validation tests

## Additional Resources

### Local workflow kit

- [Threat model report template](references/threat-model-report-template.md)
- [Repo evidence worksheet](references/repo-evidence-worksheet.md)
- [Assumptions and questions checklist](references/assumptions-and-questions-checklist.md)
- [Abuse path patterns](references/abuse-path-patterns.md)
- [Prioritization rubric](references/prioritization-rubric.md)
- [Mitigation map](references/mitigation-map.md)
- [Sample repo threat model](examples/sample-repo-threat-model.md)
- [Sample assumption validation exchange](examples/sample-assumption-validation.md)

### Imported and provenance support

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### External references

Use these to sharpen rigor, not to replace repository evidence.

- OWASP Threat Modeling Cheat Sheet
- OWASP Threat Modeling Process
- OWASP ASVS
- OWASP Top 10
- NIST SSDF
- MITRE CAPEC
- MITRE ATT&CK

## Notes

- Keep the final report concise, evidence-anchored, and reviewable.
- If the repository is large, prioritize runtime-relevant surfaces before expanding scope.
- If the task is really a code review or exploitability check, hand off after preserving the scoped system model and assumptions.
