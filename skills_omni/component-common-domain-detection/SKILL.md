---
name: "component-common-domain-detection"
description: "Common Domain Component Detection workflow skill. Use this skill when the user needs to find business-domain logic that appears in multiple components, verify whether it represents the same capability across bounded contexts, and recommend whether to consolidate it as a shared library, shared service, component merge, or intentional duplication. Use when asking \\"where is this logic duplicated?\\", \\"find common code between services\\", \\"what can be consolidated?\\", \\"detect shared domain logic\\", or when reviewing component overlap before refactoring. Do NOT use for line-level clone detection, generic linting, or dependency-only analysis."
version: "0.0.1"
category: "development"
tags:
  - "component-common-domain-detection"
  - "domain-analysis"
  - "bounded-context"
  - "consolidation"
  - "shared-library"
  - "shared-service"
  - "duplication"
  - "refactoring"
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
upstream_skill: "skills/component-common-domain-detection"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Common Domain Component Detection

## Overview

This skill detects business-domain functionality that appears in multiple components and helps the operator decide whether those components should remain separate or be consolidated.

It preserves the intent of the upstream workflow from `packages/skills-catalog/skills/(architecture)/component-common-domain-detection` in `https://github.com/tech-leads-club/agent-skills.git`, while tightening the activation boundary, adding bounded-context validation, and producing reviewer-friendly evidence.

Use this skill to answer questions such as:

- Where is domain logic duplicated across services or components?
- Are these `notification`, `audit`, or `validation` components actually the same capability?
- Should the result be a shared library, a shared service, a merged component, or no consolidation at all?

This skill is for **domain overlap analysis**, not for generic code clone detection. Similar names are only a starting signal. The operator should confirm business meaning, invariants, ownership, coupling impact, and security/operations implications before recommending extraction.

## When to Use This Skill

Use this skill when you need a structured answer about **shared business capability**, not just naming similarity.

- A refactor proposal claims that multiple services contain the same business logic.
- Several components share names such as `notification`, `audit`, `validation`, or `formatting`, and you need to know whether they belong to the same bounded context.
- A team wants to reduce duplicated domain behavior before component consolidation or service extraction.
- A reviewer asks whether a proposed shared library or shared service is justified.
- You need an evidence packet that explains why consolidation is recommended, rejected, or deferred.

Do **not** use this skill when:

- You need line-level or token-level duplicate code detection.
- You only need dependency graph analysis or coupling visualization.
- The task is primarily runtime architecture design for a new service boundary.
- The overlap is clearly infrastructure-only, such as logging, config loading, metrics, or auth middleware.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First pass on a codebase | `references/bounded-context-validation-checklist.md` | Prevents false positives from same-name components with different meanings |
| Choosing an outcome | `references/domain-overlap-decision-matrix.md` | Compares shared library, shared service, merge, and keep-separate options |
| Preparing a reviewer packet | `references/reviewer-evidence-checklist.md` | Ensures the recommendation is auditable and complete |
| Assessing risks | `references/consolidation-risk-register.md` | Captures ownership, coupling, security, and operational risks |
| Building a recommendation packet | `examples/common-domain-components-report.md` | Shows the expected report structure and level of evidence |
| Task drift or adjacent workflow | `agents/related-skill-router.md` | Routes to a better-fit skill or follow-on architecture task |

## Workflow

1. **Define the analysis scope**
   - Name the repositories, services, packages, or components in scope.
   - Record the commit, branch, or review context if available.
   - State what is being asked: find overlap, validate a proposed consolidation, or review an extraction plan.

2. **Collect candidate groups**
   - Scan component namespaces, directories, packages, or modules for common leaf names.
   - Look for repeated terms such as `notification`, `audit`, `validation`, `formatter`, or `reporting`.
   - Also look for shared domain classes, imports, or call sites used across multiple components.
   - Exclude obvious infrastructure-only patterns such as `util`, `helper`, `common`, `logger`, or `config` unless the user explicitly wants them reviewed.

3. **Perform semantic validation**
   - For each candidate group, compare business purpose, invariants, inputs/outputs, event triggers, data ownership, and team ownership.
   - Ask whether similarly named components mean the same thing in the same bounded context.
   - If the same name hides different business meanings, stop short of consolidation and document the mismatch.
   - Use `references/bounded-context-validation-checklist.md`.

4. **Measure architectural impact**
   - Record current consumers, projected consumers after consolidation, fan-in, dependency direction changes, ownership spread, release coordination needs, and likely blast radius.
   - Afferent coupling is useful, but do not use it as the only signal.
   - Note whether consolidation would create a hotspot, bottleneck, or team dependency trap.

5. **Choose the recommendation class**
   - Compare these outcomes:
     - **Shared library**
     - **Shared service**
     - **Component merge**
     - **Keep separate / intentional duplication**
   - Use `references/domain-overlap-decision-matrix.md`.
   - Pick the lightest option that solves the problem without creating unnecessary operational or organizational coupling.

6. **Check security and operational boundary changes**
   - If recommending a shared service, assess authn/authz, secrets handling, network exposure, SLOs, observability, failure modes, and data exposure.
   - If recommending a shared library, assess ownership, versioning, release process, provenance, and supply-chain concerns.
   - Use `references/consolidation-risk-register.md`.

7. **Produce the findings packet**
   - Summarize candidate groups, evidence, semantic findings, impact snapshot, recommendation, rejected alternatives, risks, and confidence.
   - Use the report shape shown in `examples/common-domain-components-report.md`.
   - Keep provenance visible: repository path, commit, sampled files, and confidence notes.

8. **Route follow-on work deliberately**
   - If the answer requires dependency analysis, deeper service-boundary design, or security design, hand off explicitly instead of overextending this skill.
   - Use `agents/related-skill-router.md`.

## Output Format

Use this structure for the final answer or review packet:

```markdown
# Common Domain Components Report

## Scope
- Repository or service set:
- Commit / branch / PR:
- Components reviewed:
- Confidence:

## Candidate Groups
| Group | Components | Why grouped | Initial confidence |
| --- | --- | --- | --- |

## Semantic Validation
| Group | Same business capability? | Bounded-context alignment | Notes |
| --- | --- | --- | --- |

## Impact Snapshot
| Group | Current consumers | Projected consumers | Ownership spread | Release coordination | Risk |
| --- | --- | --- | --- | --- | --- |

## Recommendation
| Group | Outcome | Why | Rejected alternatives |
| --- | --- | --- | --- |

## Risks and Follow-ups
- Security / operations risks:
- Ownership / governance risks:
- Evidence gaps:
- Next owner:

## Provenance
- Repository paths sampled:
- Files reviewed:
- Commit / PR link:
- Notes:
```

## Examples

### Example 1: Detect whether similarly named components are truly the same domain capability

```text
Use @component-common-domain-detection to review billing, ticketing, and survey notification components. Group same-name candidates, validate bounded-context alignment, and recommend shared library, shared service, merge, or keep-separate with evidence.
```

Expected result:
- Candidate groups are listed.
- Each group is checked for semantic alignment.
- The answer explicitly says whether `notification` means the same business capability across components.
- Rejected alternatives are documented.

### Example 2: Produce a reviewer-ready packet from a refactor proposal

```text
Review this proposal to create a shared audit service. Use the common-domain detection workflow, include semantic validation, ownership spread, coupling impact, security implications, and a recommendation with confidence.
```

Expected result:
- The answer does not jump straight to extraction.
- It explains whether a service is justified over a library or intentional duplication.
- It includes risk notes about auth, data exposure, and operational ownership.

### Example 3: Correctly reject a false positive

```text
Analyze whether customer validation and fraud validation should be consolidated. Same suffix, but different product areas may be involved.
```

Expected result:
- The answer checks business meaning before consolidation.
- If invariants, ownership, or bounded context differ, the result is `keep separate`.
- The report explains why same naming was not enough.

See also:
- `examples/common-domain-components-report.md`
- `examples/false-positive-same-name-different-context.md`
- `examples/library-vs-service-comparison.md`

## Best Practices

### Do

- Start with naming overlap, but treat it only as a discovery heuristic.
- Validate bounded-context alignment before proposing consolidation.
- Distinguish domain behavior from infrastructure utilities.
- Compare at least four outcomes: library, service, merge, keep separate.
- Record impact signals beyond raw afferent coupling.
- Prefer the smallest viable consolidation that preserves autonomy.
- Keep provenance visible so reviewers can audit the recommendation.
- State confidence and evidence gaps explicitly.

### Don't

- Do not recommend consolidation from name similarity alone.
- Do not merge different business meanings into one shared abstraction.
- Do not default to a shared service when a library or intentional duplication is safer.
- Do not ignore team ownership, release cadence, or compliance boundaries.
- Do not hide uncertainty when evidence is thin.
- Do not treat infrastructure overlap as domain consolidation without explicit user intent.

### Decision guidance

- **Prefer a shared library** when logic is stable, local, and safe to consume as a compile-time dependency.
- **Prefer a shared service** when the capability needs independent scaling, runtime policy enforcement, or centralized operations, and the trust-boundary change is acceptable.
- **Prefer a merge** when the components are already part of the same deployment and ownership model.
- **Prefer intentional duplication** when autonomy, latency, compliance, or bounded-context differences outweigh DRY pressure.

## Troubleshooting

### Problem: Same leaf name, different business meaning

**Symptoms:** Multiple components share names such as `notification` or `validation`, but the triggers, data model, invariants, or owners differ.
**Solution:** Mark the group as a bounded-context mismatch. Do not recommend consolidation. Document the semantic differences and, if needed, route to architecture review.

### Problem: The analysis is driven only by naming similarity

**Symptoms:** The draft recommendation lists same-suffix components but does not compare behavior, data, or ownership.
**Solution:** Re-run the workflow from semantic validation onward. Sample representative files, call sites, and owners before recommending any consolidation.

### Problem: A shared component would become a team bottleneck

**Symptoms:** Many teams would depend on one extracted package or service, release coordination would rise, or change velocity would slow.
**Solution:** Prefer bounded adapters, a narrower extraction, or intentional duplication. Record ownership spread and governance concerns in the findings packet.

### Problem: Library versus service is unclear

**Symptoms:** The capability is clearly shared, but the proposal does not justify runtime extraction over a package, or vice versa.
**Solution:** Use `references/domain-overlap-decision-matrix.md`. Compare latency sensitivity, deployment independence, trust boundary, versioning burden, and operational ownership before choosing.

### Problem: Too little repository evidence

**Symptoms:** The answer is speculative, based on filenames or package names alone.
**Solution:** Sample actual implementations, imports, handlers, and dependent components. Lower confidence if evidence remains partial.

### Problem: Consolidation changes a trust boundary

**Symptoms:** The recommendation introduces a new networked service or centralizes sensitive business logic.
**Solution:** Add a mandatory security review covering authn/authz, secrets, failure isolation, observability, and data exposure before finalizing the recommendation.

## Related Skills

- `@coupling-analysis` - Use when the task becomes dependency-graph or coupling-centric rather than domain-centric.
- `@architecture-review` - Use when bounded-context conflicts or extraction trade-offs require formal architectural review.
- `@service-boundary-design` - Use when a shared service is the leading option and the runtime boundary needs detailed design.
- `@code-duplication-detection` - Use when the user actually needs code clone or lint-style duplication analysis instead of domain overlap analysis.

## Additional Resources

- [Bounded context validation checklist](references/bounded-context-validation-checklist.md)
- [Domain overlap decision matrix](references/domain-overlap-decision-matrix.md)
- [Consolidation risk register](references/consolidation-risk-register.md)
- [Reviewer evidence checklist](references/reviewer-evidence-checklist.md)
- [Worked report example](examples/common-domain-components-report.md)
- [False positive example: same name, different context](examples/false-positive-same-name-different-context.md)
- [Worked comparison: library vs service](examples/library-vs-service-comparison.md)
- [Related skill router](agents/related-skill-router.md)

## Upstream Intent Preserved

The upstream skill emphasized these still-valid core ideas, which remain part of this enhanced workflow:

- detect common namespace patterns and shared classes
- distinguish domain functionality from infrastructure functionality
- analyze consolidation feasibility before acting
- compare coupling before and after consolidation
- choose between shared service, shared library, or component consolidation

This enhanced version keeps that intent, but adds a stronger guardrail: **business-domain overlap must be semantically validated before consolidation is recommended.**
