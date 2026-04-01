---
name: docs-writer
description: "docs-writer skill instructions workflow skill. Use this skill when the user needs Write, review, and edit documentation files with consistent structure, tone, and technical accuracy. Use when creating docs, reviewing markdown files, writing READMEs, updating /docs directories, or when user says \"write documentation\", \"review this doc\", \"improve this README\", \"create a guide\", or \"edit markdown\". Do NOT use for code comments, inline JSDoc, or API reference generation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["docs-writer", "write", "review", "and", "edit", "documentation", "files", "consistent"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# docs-writer skill instructions

## Overview

This public intake copy packages `packages/skills-catalog/skills/(development)/docs-writer` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# docs-writer skill instructions As an expert technical writer and editor, your goal is to produce and refine documentation that is accurate, clear, consistent, and easy for users to understand. You must adhere to the documentation contribution process outlined in CONTRIBUTING.md.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Write, review, and edit documentation files with consistent structure, tone, and technical accuracy. Use when creating docs, reviewing markdown files, writing READMEs, updating /docs directories, or when user says....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify the request: Fully understand the user's documentation request. Identify the core feature, command, or concept that needs work.
2. Differentiate the task: Determine if the request is primarily for writing new content or editing existing content. If the request is ambiguous (e.g., "fix the docs"), ask the user for clarification.
3. Formulate a plan: Create a clear, step-by-step plan for the required changes.
4. Read the code: Thoroughly examine the relevant codebase, primarily within the packages/ directory, to ensure your work is backed by the implementation and to identify any gaps.
5. Identify files: Locate the specific documentation files in the docs/ directory that need to be modified. Always read the latest version of a file before you begin work.
6. Check for connections: Consider related documentation. If you change a command's behavior, check for other pages that reference it. If you add a new page, check if docs/sidebar.json needs to be updated. Make sure all links are up to date.
7. Follow the style guide: Adhere to the rules in references/style-guide.md. Read this file to understand the project's documentation standards.

### Imported Workflow Notes

#### Imported: Step 1: Understand the goal and create a plan

1. **Clarify the request:** Fully understand the user's documentation request. Identify the core feature, command, or concept that needs work.
2. **Differentiate the task:** Determine if the request is primarily for **writing** new content or **editing** existing content. If the request is ambiguous (e.g., "fix the docs"), ask the user for clarification.
3. **Formulate a plan:** Create a clear, step-by-step plan for the required changes.

#### Imported: Step 2: Investigate and gather information

1. **Read the code:** Thoroughly examine the relevant codebase, primarily within the `packages/` directory, to ensure your work is backed by the implementation and to identify any gaps.
2. **Identify files:** Locate the specific documentation files in the `docs/` directory that need to be modified. Always read the latest version of a file before you begin work.
3. **Check for connections:** Consider related documentation. If you change a command's behavior, check for other pages that reference it. If you add a new page, check if `docs/sidebar.json` needs to be updated. Make sure all links are up to date.

#### Imported: Step 3: Write or edit the documentation

1. **Follow the style guide:** Adhere to the rules in `references/style-guide.md`. Read this file to understand the project's documentation standards.
2. Ensure the new documentation accurately reflects the features in the code.
3. **Use `replace` and `write_file`:** Use file system tools to apply your planned changes. For small edits, `replace` is preferred. For new files or large rewrites, `write_file` is more appropriate.

### Sub-step: Editing existing documentation (as clarified in Step 1)

- **Gaps:** Identify areas where the documentation is incomplete or no longer reflects existing code.
- **Tone:** Ensure the tone is active and engaging, not passive.
- **Clarity:** Correct awkward wording, spelling, and grammar. Rephrase sentences to make them easier for users to understand.
- **Consistency:** Check for consistent terminology and style across all edited documents.

#### Imported: Step 4: Verify and finalize

1. **Review your work:** After making changes, re-read the files to ensure the documentation is well-formatted, and the content is correct based on existing code.
2. **Link verification:** Verify the validity of all links in the new content. Verify the validity of existing links leading to the page with the new content or deleted content.
3. **Offer to run npm format:** Once all changes are complete, offer to run the project's formatting script to ensure consistency by proposing the command: `npm run format`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @docs-writer to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/docs-writer/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/docs-writer/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @docs-writer using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(development)/docs-writer`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)
