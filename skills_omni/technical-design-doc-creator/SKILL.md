---
name: "technical-design-doc-creator"
description: "Technical Design Doc Creator workflow skill. Use this skill when a user needs a technical design document, RFC, architecture proposal, or implementation-ready technical spec created through structured discovery, risk-based section selection, and review-oriented outputs before implementation begins. Do not use it for README files, API reference docs, or general-purpose documentation."
version: "0.0.1"
category: "documentation"
tags:
  - "technical-design-doc-creator"
  - "tdd"
  - "design-doc"
  - "technical-spec"
  - "rfc"
  - "architecture"
  - "adr"
  - "design-review"
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
upstream_skill: "skills/technical-design-doc-creator"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Technical Design Doc Creator

## Overview

This skill helps an operator create a complete, reviewable Technical Design Document (TDD) through interactive discovery instead of guessing missing details.

It preserves the intent of the upstream workflow from `packages/skills-catalog/skills/(creation)/create-technical-design-doc` in `https://github.com/tech-leads-club/agent-skills.git`, while packaging it into a more operational Omni Skills workflow with stronger validation, troubleshooting, and handoff guidance.

Use it to produce design docs that explain:

- the problem and why it matters now
- scope and non-goals
- the proposed technical approach
- key architectural decisions and alternatives
- risks, testing, security, observability, and rollout expectations
- approval and handoff readiness

This skill is for design documentation before implementation. It is not for README authoring, API reference generation, or generic prose documentation.

## When to Use This Skill

Use this skill when:

- a user asks to "write a design doc", "create a TDD", "write an RFC", "create a technical spec", or "document the architecture"
- a team needs alignment before building a feature, migration, integration, or platform change
- a change has meaningful technical risk, cross-team impact, or production implications
- a project needs documented decisions, alternatives, assumptions, and rollout expectations
- a stakeholder review requires a structured proposal before implementation starts

Do not use this skill when:

- the user wants a README, onboarding doc, changelog, or product copy
- the task is only API reference documentation
- the user primarily wants implementation code rather than a design artifact
- the request is actually a threat model, production incident response plan, or publishing workflow owned by another specialization

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/design-doc-workflow.md` | Gives the end-to-end lifecycle from intake through handoff |
| Need tighter requirement wording | `references/requirement-language-style-guide.md` | Keeps mandatory vs optional content precise without sounding legalistic |
| Need architecture/diagram help | `references/diagram-guidance-c4-arc42.md` | Helps choose diagrams that stay architectural rather than code-level |
| Need observability depth | `references/observability-design-checklist.md` | Adds metrics, traces, logs, alerts, redaction, and ownership prompts |
| Need security prompts | `references/security-design-prompts.md` | Adds threat-model, secrets, data handling, and abuse-case prompts |
| Need rollout/rollback rigor | `references/release-rollback-checklist.md` | Forces measurable release gates and reversible-change thinking |
| Need a reusable decision record | `templates/adr-template.md` | Captures major decisions, alternatives, and consequences |
| Need a risk/open-questions packet | `templates/risk-register-template.md`, `templates/open-questions-log.md` | Improves review readiness and follow-up tracking |
| Need an example draft shape | `examples/tdd-small-project-example.md` | Shows a minimal but complete low-risk document |
| Need high-risk production depth | `examples/tdd-high-risk-production-example.md` | Shows security, observability, migration, and rollback expectations |

## Workflow

Follow this workflow in order. Do not jump straight to drafting unless the user already provided enough detail.

### 1. Qualify the request

Determine whether the user actually needs a technical design document.

Capture:

- project or feature name
- change type: feature, integration, migration, refactor, platform, auth, payment, data, infrastructure
- expected size: small, medium, large
- target audience: engineers, tech leads, product, security, operations, reviewers
- desired output: lightweight TDD, full design doc, RFC, ADR-linked proposal

If the user really wants implementation code, route after creating only the minimum design context needed.

### 2. Gather mandatory inputs

Do not draft the document until the following are known or explicitly marked unknown:

- owner or tech lead
- participating team or teams
- problem statement: what, why now, impact if not solved
- in-scope items
- out-of-scope items
- high-level solution approach
- at least 3 concrete risks or an explicit statement that the project is low-risk, with justification
- implementation or delivery phases at a high level

If information is missing, ask concise clarifying questions in the user's language.

### 3. Classify risk and scale the document

Use risk and scope to decide document depth.

- **Small / low-risk**: keep the doc short, but still require problem, scope, approach, risks, testing, and owner.
- **Medium**: include dependencies, alternatives, open questions, and clearer rollout notes.
- **Large / high-risk / production-critical**: require decisions, assumptions, constraints, security, observability, release/rollback, and approval fields.

Treat these as mandatory triggers:

- **payment, auth, public API, or PII** → Security Considerations are mandatory
- **production-impacting systems** → Monitoring & Observability and Release/Rollback are mandatory
- **external integrations** → Dependencies, failure modes, and contract expectations are mandatory
- **schema/data migrations** → migration sequencing, reversibility, and data validation are mandatory

### 4. Recover the real problem before designing the solution

If the user starts with a solution-shaped statement such as "we need to integrate X," recover the problem first.

Ask:

- What user or business problem does this solve?
- Why is this important now?
- What happens if we do nothing?
- What constraints already exist?
- What would success look like?

Do not let the TDD become a disguised implementation ticket.

### 5. Draft the document structure

Build the TDD with required and risk-triggered sections.

**Core sections every meaningful TDD SHOULD include:**

1. Header & Metadata
2. Context
3. Problem Statement & Motivation
4. Scope / Non-Goals
5. Technical Solution
6. Risks
7. Implementation Plan
8. Testing Strategy

**Risk-based sections that MUST be included when applicable:**

- Security Considerations
- Monitoring & Observability
- Release, Rollout, and Rollback
- Dependencies
- Migration Plan
- Performance / Reliability Requirements
- Alternatives Considered
- Open Questions
- Approval & Sign-off

For important tradeoffs, include a **Decisions and Alternatives** subsection or link one or more ADRs.

### 6. Make architecture communication clear

Prefer architectural structure over implementation detail.

The Technical Solution section should usually cover:

- system context
- key components or containers
- major interactions or runtime flows
- integration boundaries
- data flow and storage implications
- deployment or operational boundaries when relevant
- assumptions and constraints

Prefer context, container, component, sequence, and deployment views where appropriate. Avoid framework-specific code dumps, exact shell commands, or class-level details unless the user explicitly needs them for the design audience.

### 7. Add operational readiness

A good TDD is not complete unless it explains how the change will be tested, observed, released, and reversed.

Require the draft to answer:

- How will we know the design works before release?
- What will we measure in production?
- What alerts matter?
- Who owns the operational response?
- How will rollout be staged?
- What triggers rollback?
- Are migrations reversible?
- What communications happen if rollback occurs?

### 8. Validate completeness before finalizing

Before presenting the TDD, validate that:

- mandatory sections are present
- risk-triggered sections are present when applicable
- non-functional requirements are measurable when claimed
- alternatives and decisions are documented for meaningful tradeoffs
- risks have mitigation and ownership, not just labels
- rollout and rollback are testable, not aspirational
- logs and telemetry avoid secrets and unnecessary sensitive data

Use the local references and templates to fill gaps rather than improvising new formats.

### 9. Present the result and next actions

When delivering the draft, provide:

- the TDD in Markdown
- a short completeness summary
- any missing critical inputs
- recommended next review steps
- optional publication or downstream handoff suggestions if the task drifts

A useful closing summary is:

```text
TDD draft complete.

Included:
- Core sections: complete
- Risk-triggered sections: <list>
- Open questions: <count>
- Review blockers: <if any>

Recommended next steps:
1. Confirm unresolved assumptions
2. Review security / rollout sections with relevant owners
3. Convert major decisions into ADRs if needed
4. Publish or hand off after review
```

## Discovery Questions

Use these prompts when information is missing. Ask only what is needed next.

### Minimal intake

```text
To draft the design doc well, I need:
1. What problem are we solving, and why now?
2. What is explicitly in scope and out of scope?
3. What is the proposed high-level approach?
4. Who owns this work, and which teams are involved?
5. What are the biggest risks or unknowns?
```

### For vague problem framing

```text
You described a solution direction, but not the underlying problem yet.
What user, business, reliability, or operational pain does this change address?
What happens if we do nothing for the next quarter?
How will we know the change succeeded?
```

### For production systems

```text
Because this affects production, I also need:
1. What metrics and alerts matter most?
2. How will rollout be staged?
3. What triggers rollback?
4. Are there schema or data changes, and are they reversible?
5. Who is responsible during rollout if something goes wrong?
```

### For security-sensitive systems

```text
Because this touches auth, payments, public APIs, or sensitive data, I need:
1. What assets or data need protection?
2. What trust boundaries or external actors are involved?
3. What secrets are required, and how will they be managed?
4. What sensitive data must never be logged?
5. Are there compliance or audit requirements to satisfy?
```

## TDD Structure Guidance

Use this section as the drafting scaffold.

### Header & Metadata

Include:

- project / feature name
- status
- owner / tech lead
- supporting team(s)
- product / business owner if relevant
- linked ticket / epic / tracker
- last updated date
- reviewers / approvers for medium and large projects

### Context

Describe:

- current system state
- business or domain background
- relevant prior decisions or constraints
- stakeholders affected

### Problem Statement & Motivation

State:

- the specific problem
- why it matters now
- impact of not solving it
- success criteria if known

Prefer quantified impact when available.

### Scope / Non-Goals

Define:

- what will be delivered now
- what will not be delivered now
- future considerations only if they help avoid confusion

### Technical Solution

Describe the design at the level of architecture and contracts, not implementation code.

Include, as applicable:

- context diagram or system boundary
- component/container view
- runtime or sequence flow
- key APIs, events, data contracts, or schemas
- storage changes
- integration points
- constraints and assumptions
- decisions and alternatives

### Risks

Each important risk should have:

- description
- impact
- probability or likelihood
- mitigation
- owner
- contingency or fallback for medium/high risk changes

### Implementation Plan

Use phases or milestones, not low-level coding tasks.

Include:

- major workstreams
- dependencies
- ownership
- sequencing
- rough estimates if the audience expects them

### Testing Strategy

Favor a balanced test strategy:

- more unit and integration coverage for logic and integrations
- focused end-to-end tests only for critical journeys
- contract testing for external integrations where helpful
- failure-path and rollback validation for risky changes

The TDD should name critical scenarios and release-readiness criteria, not just list test types.

### Monitoring & Observability

For production-impacting changes, define:

- key metrics and thresholds
- important traces / spans or propagation boundaries
- structured logs and safe fields
- alert conditions and owners
- dashboards or views needed for rollout and ongoing operation

Use vendor-neutral wording where possible.

### Security Considerations

For high-risk systems, cover:

- assets, actors, trust boundaries, and abuse cases
- authentication and authorization expectations
- secrets management approach
- encryption and data handling
- sensitive logging restrictions
- compliance-relevant controls when applicable

### Release, Rollout, and Rollback

For production changes, specify:

- release strategy
- canary or staged rollout plan
- release gates and abort criteria
- rollback triggers
- reversibility of schema and data changes
- communication steps after rollback or incident

### Approval & Sign-off

For medium or large projects, record:

- driver
- approver
- contributors
- informed stakeholders
- status
- unresolved blockers

A lightweight DACI-style ownership table is often enough.

## High-Level vs Implementation Detail

**Include architectural decisions and stable contracts. Avoid transient implementation details.**

### Include

- system boundaries
- components and responsibilities
- API/event/data contracts
- quality attributes and operational constraints
- migration strategy
- rollback strategy
- meaningful design tradeoffs

### Avoid

- framework decorators
- full code implementations
- brittle shell commands as the design itself
- internal file paths unless essential for the audience
- tooling syntax that will quickly age out

Use this check:

- If the implementation framework changed, would this detail still matter?
  - **Yes** → include it.
  - **No** → keep it out of the TDD.

## Examples

### Example 1: Minimal request

```text
Create a TDD for adding webhook-based CRM sync to our SaaS platform. Start by clarifying problem, scope, owner, risks, and rollout assumptions before drafting.
```

### Example 2: Production-sensitive request

```text
Write a technical design doc for migrating authentication from session-based auth to OAuth 2.1. Include security, observability, staged rollout, rollback, and open questions.
```

### Example 3: Small-project example reference

See [`examples/tdd-small-project-example.md`](examples/tdd-small-project-example.md).

### Example 4: High-risk production example reference

See [`examples/tdd-high-risk-production-example.md`](examples/tdd-high-risk-production-example.md).

### Example 5: ADR-linked design reference

See [`examples/adr-linked-design-example.md`](examples/adr-linked-design-example.md).

## Best Practices

### Do

- Use the user's language for the generated TDD content.
- Ask clarifying questions instead of inventing missing facts.
- Scale the document to the project size and risk.
- Separate problem framing from solution selection.
- Document assumptions, constraints, and alternatives.
- Use precise requirement language: **MUST**, **SHOULD**, **MAY** when it improves review clarity.
- Keep diagrams architectural and audience-appropriate.
- Define measurable non-functional requirements where relevant.
- Specify test strategy, observability, and rollback for production-impacting changes.
- Prefer secret managers, least privilege, rotation, and auditability for secrets handling.
- Keep logs structured, useful, and free of secrets or unnecessary sensitive data.
- Make migration reversibility explicit when data or schema changes are involved.

### Don’t

- Don’t turn the TDD into an implementation dump.
- Don’t accept a solution-shaped request without recovering the actual problem.
- Don’t mark security/compliance as "considered" without naming technical controls.
- Don’t rely only on end-to-end tests for confidence.
- Don’t write a rollback plan that depends on undefined tools, missing feature flags, or irreversible migrations.
- Don’t over-document trivial work with heavyweight ceremony.
- Don’t publish sensitive data, secrets, or private identifiers in examples, diagrams, or logs.

### Final validation checklist

Before finalizing, confirm:

- [ ] Problem statement explains what, why now, and impact of doing nothing
- [ ] Scope and non-goals are explicit
- [ ] Technical solution is architectural, not code-level
- [ ] Key assumptions and constraints are listed
- [ ] Risks include mitigation and owner
- [ ] Testing strategy defines critical scenarios and readiness criteria
- [ ] Security section exists for auth/payment/public API/PII work
- [ ] Observability section exists for production-impacting work
- [ ] Release/rollback section includes triggers, stages, and owners for production changes
- [ ] Migration reversibility is documented when schema/data changes exist
- [ ] Open questions and approvals are captured for medium/large work

## Troubleshooting

### Problem: The problem statement is solution-shaped, not problem-shaped

**Symptoms:** The draft starts with tools or vendors, but user impact, business motivation, and failure-to-act consequences are missing.
**Solution:** Pause drafting. Ask what pain exists today, why the change matters now, and what happens if no action is taken. Rewrite the opening around the problem before keeping the proposed solution.

### Problem: The architecture section is too implementation-specific

**Symptoms:** The TDD contains framework code, exact commands, class-level details, or repository internals that distract from design intent.
**Solution:** Replace code-heavy detail with context, component, sequence, deployment, and contract views. Use `references/diagram-guidance-c4-arc42.md` to reset the architecture section.

### Problem: Non-functional requirements are vague or unmeasurable

**Symptoms:** The draft says things like "fast", "scalable", or "reliable" without thresholds, workloads, or ownership.
**Solution:** Ask for measurable targets such as latency, throughput, availability, durability, recovery time, and alert thresholds. If exact values are unknown, record them as open questions instead of pretending they are defined.

### Problem: Security or compliance is named but not operationalized

**Symptoms:** The document mentions GDPR, PCI, auth, or PII, but no concrete controls, trust boundaries, secrets handling, or logging restrictions are described.
**Solution:** Use `references/security-design-prompts.md`. Add assets, actors, trust boundaries, abuse cases, secrets handling, data classification, and concrete technical controls.

### Problem: Testing strategy lists test types but not critical scenarios

**Symptoms:** The draft says "unit, integration, E2E" but does not define what must pass, what risky paths matter, or what blocks release.
**Solution:** Name the critical user journeys, integration failure paths, authorization cases, migration checks, and release-readiness thresholds. Reduce broad E2E dependence when unit/integration tests can cover more safely.

### Problem: Observability is too tool-specific or too shallow

**Symptoms:** The TDD names dashboards or vendors but omits signals, thresholds, field design, trace propagation, or alert ownership.
**Solution:** Use `references/observability-design-checklist.md`. Add metrics, traces, logs, thresholds, redaction rules, and owners in vendor-neutral terms.

### Problem: Rollback plan is not credible

**Symptoms:** The rollback section says "revert if needed" but lacks triggers, canary stages, migration reversibility, or operator ownership.
**Solution:** Use `references/release-rollback-checklist.md`. Define rollout stages, release gates, rollback triggers, migration safety notes, and communications after aborting rollout.

### Problem: The document is too heavy for the change size

**Symptoms:** A low-risk change gets a bloated design packet full of empty sections and generic text.
**Solution:** Scale back to the core sections. Keep only the sections justified by size, risk, and production impact.

## Related Skills

- `@docs-writer` - Use when the task is documentation authoring rather than technical design discovery
- `@threat-modeling` - Use when the task becomes a dedicated security analysis instead of a broader design doc
- `@architecture-review` - Use when the draft needs deeper architecture critique or review facilitation
- `@release-orchestration` - Use when the task shifts from design to execution of rollout planning
- `@incident-response` - Use when the work is primarily rollback, outage response, or post-incident follow-up
- `@confluence-publisher` - Use when the user mainly wants publication to Confluence after the TDD is complete

## Additional Resources

### Local support pack

- [Design doc workflow](references/design-doc-workflow.md)
- [Requirement language style guide](references/requirement-language-style-guide.md)
- [Diagram guidance](references/diagram-guidance-c4-arc42.md)
- [Observability design checklist](references/observability-design-checklist.md)
- [Security design prompts](references/security-design-prompts.md)
- [Release and rollback checklist](references/release-rollback-checklist.md)
- [ADR template](templates/adr-template.md)
- [Risk register template](templates/risk-register-template.md)
- [Open questions log](templates/open-questions-log.md)
- [Small-project TDD example](examples/tdd-small-project-example.md)
- [High-risk production TDD example](examples/tdd-high-risk-production-example.md)
- [ADR-linked design example](examples/adr-linked-design-example.md)

### Upstream provenance

This skill preserves the intent of the upstream community workflow from `tech-leads-club/agent-skills` while strengthening execution guidance, validation depth, and operational review readiness in English.
