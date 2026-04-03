---
name: "create-adr"
description: "ADR Creator workflow skill. Use this skill when a user needs an Architecture Decision Record (ADR) that captures a significant technical decision, its context, rationale, alternatives, and consequences for future maintainers. Use it when the decision has already been made or is being finalized and the team needs a durable record. Do not use it for unresolved proposals needing review or approval; use create-rfc instead. Do not use it for implementation planning; use technical-design-doc-creator instead."
version: "0.0.1"
category: "development"
tags:
  - "create-adr"
  - "architecture"
  - "decision-record"
  - "adr"
  - "madr"
  - "nygard"
  - "documentation"
  - "rationale"
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
upstream_skill: "skills/create-adr"
upstream_author: "Tech Leads Club - github.com/tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# ADR Creator

## Overview

Use this skill to create a high-quality Architecture Decision Record (ADR) for a significant technical choice that should be preserved as part of the repository's long-term engineering history.

An ADR is a **decision record**, not an open proposal. It should explain:

- what was decided
- why it was decided
- which alternatives were considered
- what consequences and trade-offs follow from the choice

This skill is best when the decision is already made or close enough to final that the team wants a durable historical record.

By default, prefer a **MADR-style** structure because it makes rationale, alternatives, and consequences easier to review. For simpler decisions, a Nygard-style or compact Y-Statement format may be more appropriate.

Use the bundled references and examples to keep ADRs repository-aware, cross-linked, and easy to review.

## When to Use This Skill

Use this skill when:

- the user asks to "write an ADR", "document this decision", or "record why we chose X"
- a meaningful architecture or engineering decision has already been made
- the team wants a permanent explanation for future engineers
- the decision affects system behavior, maintenance, reliability, security, scalability, data flow, or operational burden
- an existing ADR needs to be **superseded** by a new decision record

Do **not** use this skill when:

- the team is still deciding between options and wants feedback or approval
- the user is proposing a change rather than recording a final or near-final decision
- the task is mainly implementation design, rollout planning, or task breakdown
- the request is just general documentation with no architectural decision to record

If the decision is still unresolved, route to **`create-rfc`**.
If the work is implementation planning, route to **`technical-design-doc-creator`**.

## Operating Table

| Situation | Use | Outcome |
| --- | --- | --- |
| Need to decide whether ADR is the right artifact | `references/adr-vs-rfc-routing.md` | Routes to ADR, RFC, or technical design doc correctly |
| Need to choose a document format | `references/adr-format-selection.md` | Selects MADR, Nygard, or Y-Statement based on decision complexity |
| Need repository naming and numbering guidance | `references/adr-naming-and-placement.md` | Produces a file path, number, and placement convention that matches the repo |
| Need a final review before handoff | `references/adr-quality-checklist.md` | Checks rationale, alternatives, consequences, links, and supersession |
| Need a concrete model ADR | `examples/example-001-use-postgresql-for-primary-storage.md` | Shows a standard ADR with trade-offs and alternatives |
| Need a supersession example | `examples/example-002-supersede-session-storage-decision.md` | Shows how to replace an older decision without rewriting history |
| Need direct agent invocation guidance | `agents/openai.yaml` | Gives a compact invocation contract for agent clients |

## Workflow

1. **Confirm the artifact type first**
   - Ask: has a decision already been made, or is the team still evaluating options?
   - If approval or comparison is still pending, stop and recommend `create-rfc`.
   - If implementation detail is the main concern, recommend `technical-design-doc-creator`.

2. **Scan the repository for existing ADR conventions**
   - Look for common ADR directories such as `docs/adr/`, `docs/decisions/`, `adr/`, or `.adr/`.
   - Check whether the repo already has numbering, zero-padding, filename style, or a local ADR template.
   - Reuse the existing convention instead of inventing a new one.

3. **Check for an existing decision on the same topic**
   - Search for ADRs covering the same system, capability, or constraint.
   - If the team is changing a past decision, create a new ADR that **supersedes** the old one.
   - Do not rewrite history by silently editing a past ADR's decision content.

4. **Collect the minimum required inputs**
   - Decision title as a noun phrase, not a question
   - Date
   - Status
   - Context / forces / constraints
   - Decision statement
   - Consequences

5. **Collect recommended quality inputs**
   - Decision drivers
   - Alternatives considered
   - Why the chosen option beat the alternatives
   - At least one downside or operational cost
   - Related links: RFCs, issues, tickets, PRs, docs, related ADRs
   - Supersedes / superseded-by links where relevant

6. **Choose the ADR format deliberately**
   - Default to **MADR** for most repository ADRs.
   - Use **Nygard** for straightforward decisions where a minimal historical record is enough.
   - Use **Y-Statement** only when the team explicitly wants a compact inline format.

7. **Assign the next ADR number safely**
   - Detect the highest existing ADR number in the target directory.
   - Follow the repository's established zero-padding if present.
   - If no ADR directory exists, suggest a conventional location such as `docs/adr/`.
   - Avoid claiming a number is final if you cannot inspect the repository state.

8. **Draft the ADR**
   - Write in the user's language if the user requested a non-English ADR.
   - Keep the structure clear and concise.
   - Prefer explicit trade-offs over promotional wording.
   - State the chosen option directly.

9. **Cross-link and normalize metadata**
   - Add related ADRs, RFCs, tickets, PRs, or docs.
   - If superseding, link both directions where the repository process allows.
   - Ensure title, status, date, and file path are internally consistent.

10. **Review before saving or handing off**
    - Run the ADR against `references/adr-quality-checklist.md`.
    - Confirm it records not just the choice, but also the rationale and consequences.
    - If repository write access is unavailable, provide the exact suggested path and file contents.

## Question Set for Missing Context

If the request is underspecified, ask only for the missing fields. A compact question set is usually enough:

```text
1. What decision was made?
2. Is this Accepted, Proposed, Deprecated, or Superseded?
3. What context or constraints forced this decision?
4. Which alternatives were considered?
5. Why was the chosen option selected over the others?
6. What are the main consequences or trade-offs?
7. Does this supersede an earlier ADR or link to an RFC, issue, or PR?
```

## Template Guidance

### Default: MADR-style template

Use for most non-trivial decisions.

```markdown
# ADR-{{NNN}}: {{Title}}

- Date: YYYY-MM-DD
- Status: Accepted | Proposed | Deprecated | Superseded
- Deciders: {{names-or-roles}}
- Tags: {{optional-tags}}

## Context
{{What forces, constraints, and background made this necessary?}}

## Decision Drivers
- {{driver 1}}
- {{driver 2}}

## Considered Options
- {{option A}}
- {{option B}}
- {{status quo / do nothing if relevant}}

## Decision Outcome
Chosen option: **{{option}}**, because {{why it best satisfies the drivers}}.

## Consequences
### Positive
- {{benefit}}

### Negative
- {{trade-off}}

## Links
- Related RFC: {{link}}
- Related issue: {{link}}
- Supersedes: {{ADR link if applicable}}
- Superseded by: {{ADR link if applicable}}
```

### Minimal: Nygard-style template

Use for straightforward decisions that still need a durable record.

```markdown
# ADR-{{NNN}}: {{Title}}

## Status
{{Accepted | Proposed | Deprecated | Superseded}}

## Context
{{Situation, forces, and constraints}}

## Decision
{{What was decided and why}}

## Consequences
{{Benefits, drawbacks, and new constraints}}
```

### Compact: Y-Statement

Use only when the team already prefers a highly compressed ADR style.

```markdown
# ADR-{{NNN}}: {{Title}}

**Date**: YYYY-MM-DD | **Status**: Accepted

In the context of **{{situation}}**,
facing **{{constraint}}**,
we decided **{{choice}}**,
to achieve **{{goal}}**,
accepting **{{trade-off}}**.
```

## Examples

### Example 1: Standard ADR request

```text
Create an ADR for our decision to use PostgreSQL as the primary application database. The decision is accepted. We considered MySQL and DynamoDB. Our main drivers were transactional integrity, team familiarity, and managed hosting support.
```

Expected outcome:
- a MADR-style ADR
- explicit alternatives and rationale
- at least one downside recorded
- a suggested path such as `docs/adr/001-use-postgresql-for-primary-storage.md`

See: `examples/example-001-use-postgresql-for-primary-storage.md`

### Example 2: Superseding an old decision

```text
Write a new ADR to replace our previous session storage decision. We used database-backed sessions before, but now we are moving to Redis for TTL support and lower read latency. Link the older ADR and mark this one as superseding it.
```

Expected outcome:
- a new ADR, not an edit of the old ADR
- cross-links between the old and new records
- clear trade-offs introduced by Redis

See: `examples/example-002-supersede-session-storage-decision.md`

### Example 3: Repository-aware placement

```text
Create the ADR and match the repository's existing numbering and file naming convention. If no ADR directory exists, suggest one instead of assuming write access.
```

Expected outcome:
- reuse of current repository convention when visible
- conservative numbering guidance
- explicit suggested path rather than unsafe assumptions

## Best Practices

### Do

- Treat ADRs as historical records of decisions.
- Prefer a new ADR with supersession links over changing past decision content.
- Use a title that records the choice, not the question.
- Explain why the chosen option beat realistic alternatives.
- Include honest downsides, not just benefits.
- Reuse repository conventions for directory, numbering, and filenames.
- Keep ADRs concise and link to longer RFCs or design docs for deep implementation details.
- Add cross-links to RFCs, issues, PRs, and related ADRs.

### Don't

- Do not use an ADR as a substitute for an unresolved proposal.
- Do not write a decision announcement with no rationale.
- Do not omit alternatives for medium- or high-impact decisions unless the decision was truly forced.
- Do not silently edit old ADRs to rewrite architectural history.
- Do not invent repository conventions you cannot verify.
- Do not pad the ADR with implementation detail better suited to a technical design document.

## Troubleshooting

### Problem: It is unclear whether this should be an ADR or an RFC

**Symptoms:** The draft contains open questions, approval-seeking language, or unresolved option comparison.
**Solution:** Stop ADR drafting and route to `create-rfc`. Resume ADR creation only after the decision is made or being finalized as a record.

### Problem: The ADR reads like an announcement, not a decision record

**Symptoms:** The document says what was chosen but does not explain forces, rejected options, or trade-offs.
**Solution:** Add context, decision drivers, at least one realistic alternative, and at least one downside. Reframe the document around "why this option" rather than "we picked this".

### Problem: The team wants to change an old ADR

**Symptoms:** Someone asks to edit a previous ADR so it reflects the new decision.
**Solution:** Create a new ADR and link it using `Supersedes` / `Superseded by`. Limit edits to the older ADR to minor metadata or pointer updates if the repository process permits.

### Problem: ADR numbering conflicts with the repository

**Symptoms:** The proposed ADR number is already in use, gaps appear unexpectedly, or the repository uses a different padding style.
**Solution:** Re-scan the ADR directory, follow the repository's existing numbering convention, and present the path as a suggestion if write access or repository visibility is incomplete.

### Problem: The request lacks enough context to write a credible ADR

**Symptoms:** The user gives only a title or a decision statement with no rationale or consequences.
**Solution:** Ask for the missing minimum inputs: context, status, alternatives, rationale, and consequences. Do not fabricate trade-offs.

### Problem: The ADR is too long and turning into a design document

**Symptoms:** The draft contains implementation plans, rollout steps, detailed API design, or task breakdowns.
**Solution:** Keep the ADR focused on context, decision, and consequences. Move implementation detail into a technical design document and link it from the ADR.

## Related Skills

- `create-rfc` — use when the decision is still open and stakeholder input or approval is needed
- `technical-design-doc-creator` — use when implementation detail, rollout, interfaces, or execution planning are the main artifact

## Additional Resources

- [ADR vs RFC routing guide](references/adr-vs-rfc-routing.md)
- [ADR format selection guide](references/adr-format-selection.md)
- [ADR naming and placement guide](references/adr-naming-and-placement.md)
- [ADR quality checklist](references/adr-quality-checklist.md)
- [Example: PostgreSQL as primary storage](examples/example-001-use-postgresql-for-primary-storage.md)
- [Example: superseding a session storage decision](examples/example-002-supersede-session-storage-decision.md)
- [Example ADR directory README](examples/adr-directory-readme-example.md)

## Provenance

This skill preserves the intent of the upstream community ADR-creation workflow from Tech Leads Club while curating it into a repository-oriented English skill with stronger routing, supersession handling, naming guidance, and review support.
