---
name: pm-research
description: "PM / UXR Research Toolkit workflow skill. Use this skill when the user needs > and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["pm-research", "development", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "cookiy-ai"
date_added: "2026-03-30"
date_updated: "2026-03-30"
---

# PM / UXR Research Toolkit

## Overview

This public intake copy packages `skills/pm-research` from `https://github.com/cookiy-ai/cookiy-skill.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# PM / UXR Research Toolkit This skill is additive and not the Cookiy MCP runtime. It does not call cookiy_* tools or require Cookiy authentication. Use it when the user wants agent help with research craft inside this repo's open library.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks for interview guides, usability scripts, JTBD studies, surveys
- User wants synthesis: coding, affinity mapping, opportunity mapping
- User needs recruitment copy or screening flows
- User wants data-informed stakeholder narratives or findings decks
- Use when the request clearly matches the imported source intent: >.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. User intent - Start here - Pair with
2. Switch / JTBD discovery - prompts/interview-guides/jtbd-switch-interview.md - references/methods/jtbd-framework.md
3. Stronger probes - prompts/interview-guides/probing-techniques.md - references/templates/discussion-guide-template.md
4. Usability test - prompts/interview-guides/usability-test-script.md - references/templates/discussion-guide-template.md
5. Qualitative coding - prompts/synthesis/qualitative-coding.md - examples/synthesis/coded-transcript-excerpt.md
6. Affinity mapping - prompts/synthesis/affinity-mapping.md - prompts/synthesis/evidence-first-synthesis.md
7. Opportunity mapping - prompts/synthesis/opportunity-solution-tree.md - references/methods/continuous-discovery-loop.md

### Imported Workflow Notes

#### Imported: Workflow router

| User intent | Start here | Pair with |
|---|---|---|
| Switch / JTBD discovery | `prompts/interview-guides/jtbd-switch-interview.md` | `references/methods/jtbd-framework.md` |
| Stronger probes | `prompts/interview-guides/probing-techniques.md` | `references/templates/discussion-guide-template.md` |
| Usability test | `prompts/interview-guides/usability-test-script.md` | `references/templates/discussion-guide-template.md` |
| Qualitative coding | `prompts/synthesis/qualitative-coding.md` | `examples/synthesis/coded-transcript-excerpt.md` |
| Affinity mapping | `prompts/synthesis/affinity-mapping.md` | `prompts/synthesis/evidence-first-synthesis.md` |
| Opportunity mapping | `prompts/synthesis/opportunity-solution-tree.md` | `references/methods/continuous-discovery-loop.md` |
| Survey design | `prompts/study-briefs/survey-design.md` | `references/methods/survey-statistics-basics.md` |
| Data storytelling | `prompts/stakeholder-readouts/data-story-narrative.md` | `references/templates/findings-deck-template.md` |
| Recruitment | `prompts/recruitment/outreach-script.md` | `references/templates/recruit-screener-template.md` |
| Screening call | `prompts/recruitment/screening-call.md` | `examples/recruitment/cold-outreach-email.md` |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @pm-research to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/pm-research/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/pm-research/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @pm-research using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Pick a workflow from "Workflow router" below.
- Load the smallest set of files needed—usually one prompt plus one reference.
- Stay evidence-first: ask for inputs the prompt expects ({{placeholders}}).
- Respect content policy: synthesize and transform; do not reproduce copyrighted text.
- Optional scripts: offer scripts/transcripttocodes.py and scripts/survey_sampler.py when they save time.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Operating principles

1. **Pick a workflow** from "Workflow router" below.
2. **Load the smallest set of files** needed—usually one prompt plus one reference.
3. **Stay evidence-first**: ask for inputs the prompt expects (`{{placeholders}}`).
4. **Respect content policy**: synthesize and transform; do not reproduce copyrighted text.
5. **Optional scripts**: offer `scripts/transcript_to_codes.py` and `scripts/survey_sampler.py` when they save time.

#### Imported: Conflict rule

If the user also wants live Cookiy operations (hosted studies, MCP tools),
switch to `skills/cookiy/SKILL.md` and follow Cookiy MCP preflight there.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `skills/pm-research`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@cookiy` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@qualitative-research-planner` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@synthesize-research-report` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@debugging` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/method-index.md` |
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

### Imported Reference Notes

#### Imported: Full index

See `skills/pm-research/references/method-index.md` for a complete file listing.
