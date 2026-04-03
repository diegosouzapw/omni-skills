---
name: "docs-writer"
description: "Documentation writing and editing workflow skill. Use this skill when a user needs a README, guide, tutorial, concept page, troubleshooting page, migration note, or documentation review updated with consistent structure, plain language, and technical accuracy grounded in the current implementation. Do not use it for inline code comments, JSDoc, generated API reference pipelines, marketing copy, or legal text."
version: "0.0.1"
category: "documentation"
tags:
  - "docs-writer"
  - "documentation"
  - "readme"
  - "markdown"
  - "technical-writing"
  - "review"
  - "guides"
  - "docs-as-code"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
upstream_skill: "skills/docs-writer"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# docs-writer skill instructions

## Overview

This skill packages the upstream `docs-writer` workflow from `packages/skills-catalog/skills/(development)/docs-writer` in `https://github.com/tech-leads-club/agent-skills.git` while keeping the original intent and provenance visible.

Use it to write, review, and edit user-facing documentation with a docs-as-code workflow: identify the audience and document type, inspect the current source of truth, update the right files, verify links and markdown, and hand off with clear assumptions and open questions.

This skill is for documentation-first work such as READMEs, `/docs` pages, setup guides, how-to procedures, conceptual overviews, troubleshooting pages, migration notes, and markdown review. It is not for inline code comments, JSDoc, schema-driven API reference generation, or tasks where debugging, accessibility, security, or release management have become the dominant concern.

Preserve provenance when relevant, but do not let provenance replace execution quality. The support pack is meant to help the agent produce correct documentation, not just explain where the workflow came from.

## When to Use This Skill

Use this skill when:

- a user asks to write or improve documentation, a README, a guide, a tutorial, a troubleshooting page, or markdown content
- a docs page appears stale and you need to compare it against the implementation before updating it
- a change in code, config, CLI behavior, or setup flow likely affects multiple documentation files
- the task needs consistent terminology, structure, tone, prerequisites, and technically accurate examples
- you need a documentation review that checks factual accuracy, clarity, links, headings, and markdown rendering
- you need a handoff packet that summarizes what changed, what was verified, and what still needs subject-matter confirmation

Do **not** use this skill when:

- the main task is writing inline code comments, docstrings, or JSDoc
- the main task is generating API reference material from source schemas or code annotations
- the request is primarily marketing, policy, legal, or sales copy
- the task is mainly product debugging, architecture design, accessibility auditing, or security review rather than documentation work
- the implementation behavior is unclear and you cannot inspect any trustworthy source of truth; in that case, pause and ask clarifying questions

## Operating Table

| Request type | Primary goal | Source of truth to inspect first | Expected deliverable | Minimum verification |
| --- | --- | --- | --- | --- |
| New README | Explain what the project is, how to install it, and how to use it | Existing README, package manifest, setup commands, examples, tests | Updated or new `README.md` | Verify commands, file paths, headings, and key links |
| Edit stale doc | Bring docs back in sync with current behavior | Relevant code, config, CLI help, tests, recent changes, existing docs | Corrected markdown page(s) | Confirm every changed statement against implementation |
| New how-to guide | Help a user complete a task safely | Real workflow steps, prerequisites, required permissions, examples | Task-oriented guide | Verify prerequisites, steps, expected outcome, and recovery notes |
| Concept page | Explain a feature or mental model | Product spec, implementation boundaries, existing glossary, related docs | Conceptual overview page | Check terminology consistency and cross-links |
| Troubleshooting page | Turn repeated failure patterns into actionable guidance | Error messages, issue history, support notes, logs, existing docs | Problem-oriented troubleshooting doc | Verify symptoms, likely causes, and resolution steps |
| Migration guide | Explain changes between versions or behaviors | Changelog, upgrade notes, code diffs, breaking changes, tests | Migration document | Verify before/after states, impact, and validation steps |
| PR review only | Audit docs quality without rewriting everything | Changed docs, affected code/config, neighboring docs, nav files | Review notes or targeted edits | Verify factual accuracy, links, markdown, and scope |
| Insufficient source evidence | Avoid inventing unsupported behavior | Existing docs, code, tests, issue threads, owner notes | Clarifying questions or limited draft with explicit assumptions | Stop before asserting unverified behavior |

## Workflow

1. **Clarify the request and success criteria**
   - Determine whether the task is to create, review, rewrite, shorten, expand, or audit documentation.
   - Identify the target reader, their starting knowledge, and the user goal.
   - If the request is vague, ask what document should exist at the end and what problem it should solve.

2. **Classify the document type**
   - Choose the correct content model before drafting: README, tutorial, how-to, concept page, troubleshooting page, migration guide, or review-only pass.
   - Use the matching template from `references/` when it helps keep structure tight.

3. **Inspect the source of truth**
   - Read the implementation, config, tests, command help output, examples, and current docs before making claims.
   - Prefer the current repository state over older prose when they conflict.
   - If implementation truth is missing or contradictory, stop and surface the conflict instead of guessing.

4. **Scan for impacted files and navigation**
   - Read the target file's latest contents before editing.
   - Check for related files such as docs indexes, sidebars, nav files, migration notes, changelogs, examples, and inbound links.
   - Use `references/docs-change-impact-map.md` as a quick scan list.

5. **Capture constraints before drafting**
   - Note prerequisites, environment assumptions, permissions, version boundaries, and risky steps.
   - Record terminology choices and accepted names for the same concept.
   - Use `references/docs-intake-template.md` if the task needs a structured intake pass.

6. **Draft or edit the documentation**
   - Lead with the user goal and the shortest useful context.
   - Use plain, direct English and active voice.
   - For procedural docs, include prerequisites, inputs, steps, expected result, and recovery guidance where relevant.
   - For conceptual docs, explain the mental model, constraints, and related tasks.
   - For troubleshooting docs, organize by symptoms, causes, diagnosis, and resolution.
   - Keep examples minimal, realistic, and consistent with the implementation.

7. **Apply changes carefully**
   - For small edits, make narrow targeted changes.
   - For large restructures or new files, write the full page deliberately so heading hierarchy and flow stay coherent.
   - Avoid broad style-only rewrites unless the user asked for them or they materially improve usability.

8. **Verify technical accuracy and markdown quality**
   - Re-read every changed statement against source material.
   - Verify links, relative paths, heading hierarchy, code fences, tables, lists, and callouts.
   - Prefer conservative GitHub Flavored Markdown/CommonMark-compatible formatting when the renderer is unknown.
   - If commands are environment-sensitive or potentially destructive, label assumptions and avoid implying they are universally safe.

9. **Review for reader success**
   - Check whether the intended reader can complete the task or understand the concept without hidden assumptions.
   - Remove duplicate wording, unexplained jargon, and inconsistent terms.
   - Use `references/docs-review-checklist.md` for final quality control.

10. **Prepare handoff notes**
   - Summarize what changed, what was verified, what assumptions remain, and what should be reviewed by a subject-matter owner.
   - If provenance matters for the workflow, keep it visible in the answer, PR note, or review summary.

## Imported Workflow Notes

The upstream workflow remains the baseline intent of this skill:

1. Clarify the request and decide whether the task is writing new documentation or editing existing documentation.
2. Inspect relevant code and documentation files before drafting.
3. Follow the project style guide and ensure documentation matches real implementation behavior.
4. Re-read the result, verify links, and finalize carefully.

These notes are preserved so the packaged skill stays aligned with its origin while the enhanced workflow adds stronger audience, verification, and handoff discipline.

## Examples

### Example 1: Write a new how-to guide

```text
Use @docs-writer to create a setup guide for the local CLI. First identify the target reader, inspect the current install script, package manifest, and --help output, then draft a how-to page with prerequisites, steps, expected result, and troubleshooting notes.
```

**Expected outcome:** A task-oriented guide grounded in real install and usage behavior rather than a generic tutorial.

### Example 2: Review a stale README against implementation

```text
Use @docs-writer to audit README.md for drift. Compare installation, commands, config keys, and example output against the repository, list factual mismatches, then propose or apply narrow fixes.
```

**Expected outcome:** A README review or patch set that names verified fixes and flags anything still unclear.

### Example 3: Check packaged provenance before review

```bash
python3 skills/docs-writer/scripts/omni_import_print_origin.py
```

**Expected outcome:** Printed origin details for the imported workflow so reviewers can confirm repository, branch, commit, and source path.

### Example 4: Create a troubleshooting page from recurring issues

```text
Use @docs-writer to turn repeated login failures into a troubleshooting page. Inspect issue reports, error messages, auth configuration, and existing docs, then write sections for symptoms, likely causes, diagnosis, resolution, and prevention.
```

**Expected outcome:** A troubleshooting document that helps users self-diagnose common problems.

### Example 5: Build a documentation handoff summary

```text
Use @docs-writer to update docs/upgrade.md, then include a handoff summary listing changed files, source material checked, links verified, assumptions, and open questions for maintainers.
```

**Expected outcome:** A clean doc update plus a concise reviewer packet.

## Best Practices

### Do

- Define the audience and user goal before drafting.
- Choose the correct document type instead of forcing every request into a generic guide.
- Ground claims in code, tests, config, CLI help, examples, or trusted product specifications.
- Keep terminology consistent across the changed files.
- State prerequisites, permissions, version assumptions, and expected outcomes explicitly.
- Keep examples short, realistic, and aligned with the actual implementation.
- Check neighboring docs, navigation, and links when changing behavior or adding pages.
- Preserve provenance where it matters for reviewability or imported workflow traceability.
- Leave explicit open questions when facts are uncertain.

### Don't

- Invent commands, flags, config keys, defaults, or behaviors that were not verified.
- Mix conceptual explanation, step-by-step procedure, and troubleshooting into one unfocused page unless the file truly serves all three.
- Rewrite large sections only to make them sound nicer while risking technical drift.
- Introduce multiple names for the same feature without a reason.
- Assume markdown renders the same way on every platform.
- Hide unresolved contradictions between code and docs by silently choosing one side.

## Troubleshooting

### Problem: The documentation disagrees with the implementation

**Symptoms:** Commands in the doc fail, config keys do not exist, screenshots or examples no longer match behavior, or the code and prose describe different defaults.

**Solution:** Re-check the source of truth in code, tests, CLI help output, config files, and recent changes. Prefer current implementation evidence. If the repository itself is inconsistent, document the conflict and ask for clarification instead of harmonizing it silently.

### Problem: The draft is technically correct but wrong for the audience

**Symptoms:** The content is accurate but too advanced, too abstract, missing prerequisites, or structured in a way that does not help the intended reader finish the task.

**Solution:** Restate the target reader, their starting point, and the user goal. Reclassify the document type if necessary: a concept page may need to become a how-to, or a long README section may need to become a dedicated troubleshooting page.

### Problem: Links or navigation broke after the update

**Symptoms:** Relative links 404, newly added pages are not discoverable, sidebar or index entries are missing, or cross-references point to renamed headings.

**Solution:** Inspect nav files, sidebars, index pages, inbound links, and heading anchors. Recompute relative paths after file moves and verify any manually written links. Use `references/docs-change-impact-map.md` to check common adjacent files.

### Problem: Markdown renders incorrectly

**Symptoms:** Nested lists break numbered steps, tables render poorly, code fences swallow text, or callouts/admonitions do not render on the target platform.

**Solution:** Simplify formatting and prefer conservative GFM/CommonMark-compatible syntax. Use fenced code blocks with explicit languages, keep list indentation simple, and avoid platform-specific markdown features unless the repository clearly supports them.

### Problem: The request does not contain enough trustworthy source material

**Symptoms:** The user asks for documentation, but there is no code, spec, config, or existing behavior to validate against.

**Solution:** Do not invent implementation details. Ask targeted clarifying questions, limit the output to an explicitly marked draft template, or provide a structure-only document with assumptions called out.

## Related Skills

- `@accessibility` - Use when the task needs deeper accessibility review, semantic structure analysis, or alt-text and inclusive UX guidance beyond normal docs editing.
- `@security-review` - Use when the document contains sensitive operational steps, credential handling, production procedures, or security-critical guidance that needs specialist review.
- `@release-notes` - Use when the primary deliverable is a changelog, release announcement, or versioned release summary rather than general documentation.
- `@api-reference` - Use when the task is schema-driven or code-driven API reference generation rather than human-authored guides.
- `@architecture-docs` - Use when the work is primarily system design, ADRs, or architecture explanation rather than user-facing product documentation.
- Subject-matter owner - Use when implementation truth is unclear and no skill can safely infer the missing facts.

## Additional Resources

Use the local support pack to keep execution consistent and reviewable.

| Resource | Purpose |
| --- | --- |
| `references/docs-intake-template.md` | Capture audience, goal, source of truth, constraints, and acceptance criteria before drafting |
| `references/docs-review-checklist.md` | Run a final quality and accuracy review before handoff |
| `references/docs-style-quick-reference.md` | Apply concise writing, formatting, terminology, and example rules |
| `references/docs-change-impact-map.md` | Check nearby files and surfaces affected by doc changes |
| `references/readme-template.md` | Start or normalize a README |
| `references/how-to-template.md` | Structure a task-oriented procedure |
| `references/concept-page-template.md` | Structure conceptual documentation |
| `references/troubleshooting-template.md` | Structure a troubleshooting page |
| `references/migration-guide-template.md` | Structure an upgrade or migration guide |
| `agents/docs-routing-guide.md` | Decide whether to continue with this skill or hand off |
| `scripts/omni_import_print_origin.py` | Inspect imported workflow provenance |
| `scripts/omni_import_list_support_pack.py` | List packaged support-pack assets |

- [Docs intake template](references/docs-intake-template.md)
- [Docs review checklist](references/docs-review-checklist.md)
- [Docs style quick reference](references/docs-style-quick-reference.md)
- [Docs change impact map](references/docs-change-impact-map.md)
- [README template](references/readme-template.md)
- [How-to template](references/how-to-template.md)
- [Concept page template](references/concept-page-template.md)
- [Troubleshooting template](references/troubleshooting-template.md)
- [Migration guide template](references/migration-guide-template.md)
- [Routing guide](agents/docs-routing-guide.md)
- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)
