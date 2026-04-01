---
name: nx-generate
description: "Run Nx Generator workflow skill. Use this skill when the user needs Generate code using Nx generators \u2014 scaffold projects, libraries, features, or run workspace-specific generators with proper discovery, validation, and verification. Use when user says \"create a new library\", \"scaffold a component\", \"generate code with Nx\", \"run a generator\", \"nx generate\", or any code scaffolding task in a monorepo. Prefers local workspace-plugin generators over external plugins. Do NOT use for running build/test/lint tasks (use nx-run-tasks) or workspace configuration (use nx-workspace) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["nx-generate", "generate", "using", "generators", "scaffold", "projects", "libraries", "features"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Run Nx Generator

## Overview

This public intake copy packages `packages/skills-catalog/skills/(tooling)/nx-generate` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Run Nx Generator Nx generators are powerful tools that scaffold projects, make automated code migrations or automate repetitive tasks in a monorepo. They ensure consistency across the codebase and reduce boilerplate work. This skill applies when the user wants to: - Create new projects like libraries or applications - Scaffold features or boilerplate code - Run workspace-specific or custom generators - Do anything else that an nx generator exists for

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Generator Discovery Flow, Pre-Execution Checklist, Execution, Post-Generation, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Generate code using Nx generators — scaffold projects, libraries, features, or run workspace-specific generators with proper discovery, validation, and verification. Use when user says "create a new library", "scaffold....
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Generator Discovery Flow

### Step 1: List Available Generators

Use the Nx CLI to discover available generators:

- List all generators for a plugin: `npx nx list @nx/react`
- View available plugins: `npx nx list`

This includes:

- Plugin generators (e.g., `@nx/react:library`, `@nx/js:library`)
- Local workspace generators (defined in the repo's own plugins)

### Step 2: Match Generator to User Request

Based on the user's request, identify which generator(s) could fulfill their needs. Consider:

- What artifact type they want to create (library, application, etc.)
- Which framework or technology stack is relevant
- Whether they mentioned specific generator names

**IMPORTANT**: When both a local workspace generator and an external plugin generator could satisfy the request, **always prefer the local workspace generator**. Local generators are customized for the specific repo's patterns and conventions.

It's possible that the user request is something that no Nx generator exists for whatsoever. In this case, you can stop using this skill and try to help the user another way. HOWEVER, the burden of proof for this is high. Before aborting, carefully consider each and every generator that's available. Look into details for any that could be related in any way before making this decision.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @nx-generate to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/nx-generate/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/nx-generate/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @nx-generate using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Local generators first - Always prefer workspace/local generators over external plugin generators when both could work
- Understand before running - Read both the schema AND the source code to fully understand what will happen
- No prompts - Always use --no-interactive to prevent hanging
- Generators are starting points - Modify the output as needed to fully satisfy the user's requirements
- Verify changes work - Don't just generate; ensure the code builds, lints, and tests pass
- Be proactive about fixes - Don't just report errors; attempt to resolve them automatically when possible
- Match repo patterns - Study existing similar code in the repo and match its conventions

### Imported Operating Notes

#### Imported: Key Principles

1. **Local generators first** - Always prefer workspace/local generators over external plugin generators when both could work

2. **Understand before running** - Read both the schema AND the source code to fully understand what will happen

3. **No prompts** - Always use `--no-interactive` to prevent hanging

4. **Generators are starting points** - Modify the output as needed to fully satisfy the user's requirements

5. **Verify changes work** - Don't just generate; ensure the code builds, lints, and tests pass

6. **Be proactive about fixes** - Don't just report errors; attempt to resolve them automatically when possible

7. **Match repo patterns** - Study existing similar code in the repo and match its conventions

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(tooling)/nx-generate`, fails to mention provenance, or does not use the support pack at all.
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

### Imported Reference Notes

#### Imported: Pre-Execution Checklist

Before running any generator, complete these steps:

### 1. Fetch Generator Schema

Use the `--help` flag to understand all available options:

```bash
npx nx g @nx/react:library --help
```

Pay attention to:

- Required options that must be provided
- Optional options that may be relevant to the user's request
- Default values that might need to be overridden

### 2. Read Generator Source Code

Understanding what the generator actually does helps you:

- Know what files will be created/modified
- Understand any side effects (updating configs, installing deps, etc.)
- Identify options that might not be obvious from the schema

To find generator source code:

- For plugin generators: Use `node -e "console.log(require.resolve('@nx/<plugin>/generators.json'));"` to find the generators.json, then locate the source from there
- If that fails, read directly from `node_modules/<plugin>/generators.json`
- For local generators: They are typically in `tools/generators/` or a local plugin directory. You can search the repo for the generator name to find it.

### 2.5 Reevaluate if the generator is right

Once you have built up an understanding of what the selected generator does, reconsider: Is this the right generator to service the user request?
If not, it's okay to go back to the Generator Discovery Flow and select a different generator before proceeding. If you do, make sure to go through the entire pre-execution checklist once more.

### 3. Understand Repo Context

Before generating, examine the target area of the codebase:

- Look at similar existing artifacts (other libraries, applications, etc.)
- Identify patterns and conventions used in the repo
- Note naming conventions, file structures, and configuration patterns
- Try to match these patterns when configuring the generator

For example, if similar libraries are using a specific test runner, build tool or linter, try to match that if possible.
If projects or other artifacts are organized with a specific naming convention, try to match it.

### 4. Validate Required Options

Ensure all required options have values:

- Map the user's request to generator options
- Infer values from context where possible
- Ask the user for any critical missing information

#### Imported: Execution

Keep in mind that you might have to prefix things with npx/pnpx/yarn if the user doesn't have nx installed globally.
Many generators will behave differently based on where they are executed. For example, first-party nx library generators use the cwd to determine the directory that the library should be placed in. This is highly important.

### Consider Dry-Run (Optional)

Running with `--dry-run` first is strongly encouraged but not mandatory. Use your judgment:

- For complex generators or unfamiliar territory: do a dry-run first
- For simple, well-understood generators: may proceed directly
- Dry-run shows file names and created/deleted/modified markers, but not content
- There are cases where a generator does not support dry-run (for example if it had to install an npm package) - in that case --dry-run might fail. Don't be discouraged but simply move on to running the generator for real and iterating from there.

### Running the Generator

Execute the generator with:

```bash
nx generate <generator-name> <options> --no-interactive
```

**CRITICAL**: Always include `--no-interactive` to prevent prompts that would hang the execution.

Example:

```bash
nx generate @nx/react:library --name=my-utils --no-interactive
```

### Handling Generator Failures

If the generator fails:

1. **Diagnose the error** - Read the error message carefully
2. **Identify the cause** - Missing options, invalid values, conflicts, etc.
3. **Attempt automatic fix** - Adjust options or resolve conflicts
4. **Retry** - Run the generator again with corrected options

Common failure reasons:

- Missing required options
- Invalid option values
- Conflicting with existing files
- Missing dependencies
- Generator doesn't support certain flag combinations

#### Imported: Post-Generation

### 1. Modify Generated Code (If Needed)

Generators provide a starting point, but the output may need adjustment to match the user's specific requirements:

- Add or modify functionality as requested
- Adjust imports, exports, or configurations
- Integrate with existing code patterns in the repo

### 2. Format Code

Run formatting on all generated/modified files:

```bash
nx format --fix
```

Languages other than javascript/typescript might need other formatting invocations too.

### 3. Run Verification

Verify that the generated code works correctly. What this looks like will vary depending on the type of generator and the targets available.
If the generator created a new project, run its targets directly
Use your best judgement to determine what needs to be verified.

Example:

```bash
nx lint <new-project>
nx test <new-project>
nx build <new-project>
```

### 4. Handle Verification Failures

When verification fails:

**If scope is manageable** (a few lint errors, minor type issues):

- Fix the issues
- Re-run verification to confirm

**If issues are extensive** (many errors, complex problems):

- Attempt simple, obvious fixes first
- If still failing, escalate to the user with:
  - Description of what was generated
  - What verification is failing
  - What you've attempted to fix
  - Remaining issues that need user input

#### Imported: Error Handling

### Generator Failures

- Check the error message for specific causes
- Verify all required options are provided
- Check for conflicts with existing files
- Ensure the generator name and options are correct

### Missing Options

- Consult the generator schema for required fields
- Infer values from context when reasonable
- Ask the user for values that cannot be inferred
