---
name: "figma-create-new-file"
description: "Create a new blank Figma Design or FigJam file. Use this skill when the user needs a fresh Figma file, when a workflow must start from an empty canvas, or when you need a new file before a later use_figma step."
version: "0.0.1"
category: "design"
tags:
  - "figma-create-new-file"
  - "figma"
  - "design"
  - "figjam"
  - "file-creation"
  - "drafts"
  - "workspace-selection"
  - "use-figma"
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
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/figma-create-new-file"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# createnewfile — Create a New Figma File

## Overview

Use this skill to create a new blank Figma file for the user.

This workflow covers:

- creating a new **Design** file or **FigJam** file
- resolving the correct workspace or plan before creation
- validating inputs before calling the create operation
- preserving the returned `file_key` and `file_url` for the next Figma step

The expected result is a new blank file in the selected workspace context, typically in that workspace's Drafts area, plus the identifiers needed to continue with later Figma actions.

If the user wants to work in an existing file instead of creating a new one, do not use this skill. Route to the workflow that opens, edits, or inspects an existing Figma file.

## When to Use This Skill

Use this skill when:

- the user asks for a new blank **Figma Design** file
- the user asks for a new blank **FigJam** file
- you need a fresh file before a later `use_figma` or similar Figma operation
- the user wants a named starter file in a specific workspace or team
- the user has not yet created the file that the next design task depends on

## When Not to Use This Skill

Do not use this skill when:

- the user wants to **edit an existing Figma file**
- the user wants to **duplicate** an existing file or template
- the user wants to **import content** into an existing file
- the user wants to **move, reorganize, or share** files across projects or teams
- the user asks for work inside a file that already exists and only needs its `file_key`

## Skill Arguments

Invocation shape:

```text
/figma-create-new-file [editorType] [fileName]
```

Arguments:

- `editorType`: optional, defaults to `design`
  - allowed values: `design`, `figjam`
- `fileName`: optional, defaults to `Untitled` only when omitted entirely

Examples:

- `/figma-create-new-file`
- `/figma-create-new-file design Landing Page Exploration`
- `/figma-create-new-file figjam Sprint Retro Board`

## Operating Table

| Situation | Action | User interaction needed | Expected result |
| --- | --- | --- | --- |
| `planKey` already provided | Use it directly after basic sanity check | No, unless the workspace choice looks inconsistent with user intent | Creation can proceed immediately |
| No `planKey` provided | Resolve via `whoami` | No if only one plan is available; yes if multiple plans are returned | A valid target plan is selected |
| Multiple plans returned | Present plan names and ask user to choose | Yes | Avoids creating the file in the wrong workspace |
| `editorType` omitted | Default to `design` | No | Creates a Design file |
| Unsupported `editorType` supplied | Stop and ask for `design` or `figjam` | Yes | Prevents a failing create request |
| `fileName` omitted | Default to `Untitled` | No | File is still created safely |
| `fileName` is blank after trimming | Ask for a real name or confirm `Untitled` | Yes | Avoids accidental empty-name requests |
| Next step is editing or inspection | Preserve `file_key` and route to the next Figma skill | Sometimes | Smooth handoff to downstream work |

## Workflow

1. **Confirm the request is really for a new blank file.**  
   If the user actually wants to edit, inspect, duplicate, import, or share an existing file, stop and route to the correct workflow.

2. **Parse and normalize arguments.**  
   Resolve:
   - `editorType` → default to `design` if omitted
   - `fileName` → default to `Untitled` only if omitted

3. **Validate inputs before any create call.**  
   - `editorType` must be exactly `design` or `figjam`
   - if a provided `fileName` becomes empty after trimming, ask the user to confirm a real name or accept `Untitled`
   - do not guess unusual intent from malformed arguments

4. **Resolve the target plan or workspace.**  
   - If the user already provided a `planKey`, use it.
   - Otherwise call `whoami` to retrieve available plans.
   - If exactly one plan is available, use that plan automatically.
   - If multiple plans are available, ask the user which team or organization should own the new file.

5. **Call the create operation once the target is unambiguous.**  
   Use:
   - `planKey`
   - `fileName`
   - `editorType`

   Example payload:

   ```json
   {
     "planKey": "team:123456",
     "fileName": "My New Design",
     "editorType": "design"
   }
   ```

6. **Capture the result immediately.**  
   Preserve at minimum:
   - `file_key`
   - `file_url`

7. **Report the outcome clearly.**  
   Confirm:
   - the final file name
   - the editor type created
   - the target workspace or plan context
   - that the file should appear in the selected workspace's Drafts area or equivalent draft location
   - the returned `file_key`
   - the returned `file_url`

8. **Route to the next Figma step if needed.**  
   If the user wants to continue immediately, pass the returned `file_key` into the next Figma editing or inspection workflow.

## Best Practices

### Do

- ask the user to choose when multiple plans or workspaces are available
- validate `editorType` before making the create request
- preserve `file_key` and `file_url` in the response or working context
- use the smallest number of tool calls necessary
- confirm the workspace when the request names a team, org, or project indirectly
- treat `design` as the default only when `editorType` is missing, not when it is invalid

### Don't

- do not guess the workspace when more than one plan is available
- do not retry repeated create calls blindly if the first one may have succeeded
- do not invent editor types beyond `design` and `figjam`
- do not discard the returned identifiers before the next Figma step
- do not assume collaborators can see a newly created Draft automatically

## Troubleshooting

### Problem: Multiple plans are available and the wrong workspace might be used

**Symptoms:** `whoami` returns more than one plan, or the user mentions several teams or organizations.

**Solution:** Stop before creation. Present the available plan names and ask the user which workspace should own the new file. Only continue once they choose explicitly.

### Problem: The create request fails because of `editorType`

**Symptoms:** The request uses something other than `design` or `figjam`, or the user asks for a file type the workflow does not support.

**Solution:** Explain that this workflow supports only `design` and `figjam`. Ask the user which one they want, then retry with a valid value.

### Problem: The file was created but the user cannot find it

**Symptoms:** The create step succeeded, but the user says the file is missing.

**Solution:** Remind the user that the new file should appear in the selected workspace's Drafts area or equivalent draft location. Provide or reuse the returned `file_url` directly, and confirm which plan or workspace was selected during creation.

### Problem: Collaborators cannot see the new file

**Symptoms:** The creator can open the file, but teammates cannot access it.

**Solution:** Explain that a newly created draft may not be visible to collaborators until it is shared or moved according to workspace permissions. Use the returned `file_url` and then follow the appropriate sharing or organization workflow.

### Problem: A later Figma step fails because the new file identifier was lost

**Symptoms:** A follow-on `use_figma` or file operation asks again for the file, or fails because no `file_key` is available.

**Solution:** Preserve `file_key` and `file_url` immediately after creation. If they were already returned, reuse them instead of creating another file.

## Examples

### Example 1: Create a default Design file

```text
/figma-create-new-file
```

Expected behavior:

- resolve the plan via `whoami` if needed
- default `editorType` to `design`
- default `fileName` to `Untitled`
- create the file and return `file_key` and `file_url`

See: [examples/create-design-file.md](examples/create-design-file.md)

### Example 2: Create a FigJam file with an explicit name

```text
/figma-create-new-file figjam Sprint Retro Board
```

Expected behavior:

- validate `figjam` as a supported editor type
- use `Sprint Retro Board` as the file name
- create the FigJam file in the selected workspace
- return `file_key` and `file_url`

See: [examples/create-figjam-file.md](examples/create-figjam-file.md)

### Example 3: Ask for workspace clarification before creating

```text
I need a new design file called Mobile Checkout Audit.
```

If multiple plans are available, ask the user to choose the correct workspace before creating anything.

See: [examples/multi-plan-clarification.md](examples/multi-plan-clarification.md)

### Example 4: Handoff to the next Figma workflow

```text
Create the file, then continue editing it with the returned file_key.
```

Expected behavior:

- create the file once
- preserve `file_key`
- route into the next Figma editing or inspection workflow without losing context

See: [examples/handoff-to-use-figma.md](examples/handoff-to-use-figma.md)

## Related Skills

- `figma-use` — use after this skill when the next step is to inspect or edit the newly created file
- sharing or organization workflows — use when the next step is access control, moving, or organizing the new file
- duplication or import workflows — use when the user does not actually want a blank file

## Additional Resources

- [Create-file quick reference](references/figma-create-file-quick-reference.md)
- [Workflow playbook](references/figma-create-file-workflow-playbook.md)
- [Troubleshooting matrix](references/figma-create-file-troubleshooting-matrix.md)
- [Routing notes](agents/figma-routing-notes.md)

## Provenance Note

This enhanced version preserves the original skill intent: create a new blank Figma file, resolve plan selection safely, support `design` and `figjam`, and prepare for follow-on use with the returned identifiers.
