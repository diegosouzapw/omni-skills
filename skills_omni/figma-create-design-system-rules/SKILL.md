---
name: "figma-create-design-system-rules"
description: "Create Design System Rules workflow skill. Use this skill when a user needs durable, project-specific rules that guide AI agents implementing Figma designs in an existing codebase. Generate agent-ready conventions for component placement, token usage, accessibility, asset handling, and Figma-to-code workflow using the Figma MCP server and a codebase audit before saving to AGENTS.md, CLAUDE.md, or Cursor rules."
version: "0.0.1"
category: "design"
tags:
  - "figma-create-design-system-rules"
  - "figma"
  - "design-system"
  - "design-tokens"
  - "accessibility"
  - "cursor"
  - "claude-code"
  - "codex-cli"
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
upstream_skill: "skills/figma-create-design-system-rules"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Create Design System Rules

## Overview

Use this skill to generate persistent, project-specific design system rules that AI coding agents should follow for future Figma-to-code work.

This skill is for **rule generation and maintenance**, not one-off component implementation. It combines:

- the upstream Figma MCP workflow
- a codebase audit of existing conventions
- token and theme mapping
- accessibility requirements
- agent-specific rule file formatting
- a pilot validation pass to confirm the rules actually steer the agent correctly

The goal is to produce a concise instruction file that helps future implementations stay consistent with the user's codebase instead of relying on repeated prompting.

## When to Use This Skill

Use this skill when the user wants **reusable project conventions** for future Figma implementation tasks.

### Good triggers

- "Create design system rules for my project"
- "Generate Figma-to-code rules for this repo"
- "Set up design rules for Cursor / Codex / Claude Code"
- "We keep getting inconsistent UI code from Figma"
- "Map our Figma variables to our token system"
- "Standardize how agents should implement components from Figma"
- onboarding a new AI coding agent to an existing frontend codebase
- establishing project-specific conventions for component placement, styling, tokens, accessibility, and asset handling
- updating stale rules after a design system or token refactor

### Do not use this skill when

- the user only wants one component or screen implemented from Figma
- the task is only visual QA or screenshot comparison
- the task is primarily frontend architecture with no Figma/MCP involvement
- the request is mainly about debugging the Figma MCP connection rather than writing rules
- the codebase has no agreed conventions yet and the user actually needs broader design-system design or token architecture work

In those cases, hand off to the adjacent implementation, accessibility, MCP-debugging, or design-token migration workflow.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First run on a repo | `references/codebase-discovery-worksheet.md` | Captures the minimum codebase facts needed before writing durable rules |
| Figma variables do not clearly match code tokens | `references/figma-to-code-token-mapping.md` | Prevents guessing and creates an explicit mapping table |
| Need agent-specific output format | `examples/sample-AGENTS.md`, `examples/sample-CLAUDE.md`, `examples/sample-cursor-rule.mdc` | Shows safe save targets and scoping patterns |
| Need to validate whether the rules actually work | `references/pilot-validation-checklist.md` | Forces a small implementation test before handoff |
| Workflow failure or inconsistent outputs | `references/troubleshooting-matrix.md` | Provides recovery steps for MCP, tokens, stale rules, and rule conflicts |
| Need handoff guidance | `agents/handoff-categories.md` | Routes to adjacent workflows when this skill is no longer the best fit |

## Workflow

Follow the phases in order. Do not skip discovery and validation.

### Phase 1: Confirm Preconditions

Before generating rules, confirm all of the following:

1. The Figma MCP server is connected and available.
2. You can inspect the target repository or the user can provide its structure.
3. You know which agent will consume the rules: Codex CLI, Claude Code, Cursor, or another compatible tool.
4. You know where the rule file should be saved.
5. You understand whether the repo already has design tokens, theme files, component libraries, or agent instruction files.

If any of these are unknown, ask focused questions before continuing.

### Phase 2: Gather Inputs

Collect the minimum project inputs:

- `clientLanguages` — comma-separated languages, such as `typescript,javascript`
- `clientFrameworks` — framework such as `react`, `vue`, `svelte`, `angular`, or `unknown`
- component directories
- styling approach
- token source location
- routing and state conventions when relevant
- testing expectations
- accessibility expectations if already documented
- target agent and desired save path

Use `references/codebase-discovery-worksheet.md` to keep the intake structured.

### Phase 3: Run the Upstream Figma MCP Rule Generator

Call the Figma MCP server tool:

- `create_design_system_rules`

Use at least these parameters:

- `clientLanguages`
- `clientFrameworks`

Treat the tool output as a **starting template**, not as final project rules. The template must be adapted to the real codebase.

### Phase 4: Audit the Codebase Before Writing Rules

Inspect the repository and document existing conventions.

#### Audit component organization

Check:

- where reusable UI components live
- whether a dedicated design-system package or directory exists
- whether components are organized by feature, domain, or primitive type
- export patterns and file naming conventions

#### Audit styling and token delivery

Check:

- styling system: Tailwind, CSS Modules, styled-components, vanilla-extract, etc.
- where design tokens live: CSS variables, TS/JS files, theme objects, config files
- whether tokens are raw, semantic, or aliased
- whether themes or modes exist, such as light/dark or brand variants

#### Audit implementation conventions

Check:

- prop patterns
- composition expectations
- path aliases and import ordering
- test location and testing framework
- documentation or story requirements
- accessibility patterns already used in the codebase

If the repo does not yet have a mature design system, distinguish clearly between:

- **current-state conventions** already present in the repo
- **recommended future-state conventions** that still need team approval

Do not present aspirational conventions as if they are already implemented.

### Phase 5: Build a Token Mapping Instead of Guessing

Before writing final rules, map Figma variables to code tokens.

Use `references/figma-to-code-token-mapping.md`.

Required behaviors:

- prefer semantic tokens over raw values when available
- preserve alias relationships when the token system uses aliases
- record theme or mode differences explicitly
- never replace an available project token with a hardcoded literal
- if no clean match exists, mark the token as unresolved instead of guessing

If Figma has multiple variable modes but the codebase only implements one theme, call that gap out directly in the rules and handoff notes.

### Phase 6: Generate Project-Specific Rules

Create concise rules that future agents can actually follow. Organize them into categories.

#### 1. Component location and reuse

Include rules such as:

```markdown
- IMPORTANT: Reuse existing primitives from `src/components/ui/` before creating new ones.
- Place new feature components in `src/components/features/`.
- Use PascalCase component names and default the public export to the file's main component.
```

#### 2. Styling and token usage

Include rules such as:

```markdown
- Use CSS Modules for component styling; avoid inline style objects except for dynamic values already established in the repo.
- Colors and spacing must come from `src/styles/tokens.css` via CSS custom properties.
- IMPORTANT: Never hardcode color, spacing, radius, or typography values when a project token exists.
- Prefer semantic tokens such as `--color-text-primary` over raw palette tokens such as `--blue-600` when both exist.
```

#### 3. Figma-to-code workflow

Include the required implementation order:

```markdown
- Run `get_design_context` for the exact node before implementation.
- If the payload is too large, use `get_metadata` to identify target nodes, then re-fetch only the required nodes.
- Run `get_screenshot` for the relevant variant before finalizing UI details.
- Treat Figma MCP output as design intent, then translate it into project conventions.
- Reuse project components and tokens instead of copying generated markup verbatim.
```

#### 4. Asset handling

Include rules such as:

```markdown
- If the Figma MCP server provides a localhost asset source, use that source directly.
- Store downloaded static assets in the project's existing asset directory.
- IMPORTANT: Do not install a new icon package if the required asset is already provided by Figma or the repo.
- Do not create placeholders when the asset exists in the Figma payload.
```

#### 5. Accessibility requirements

Accessibility is required, not optional. Include behavior-focused rules, not only visual rules.

Example:

```markdown
- Interactive controls must expose an accessible name.
- Button-like UI must use native `button` behavior or equivalent keyboard and state semantics.
- Tabs must preserve proper tab semantics, selected state, and keyboard navigation behavior.
- Focus indicators must remain visible and meet project accessibility conventions.
- Color usage must maintain at least the project's required WCAG conformance target; default to WCAG 2.2 AA when no stricter standard is documented.
```

#### 6. Testing and validation expectations

Example:

```markdown
- Add or update component tests when introducing new interactive behavior.
- Prefer role-based queries in UI tests.
- Validate both visual parity and interaction behavior for Figma-derived components.
```

### Phase 7: Save to the Correct Agent File

Save the final rules in the file format expected by the target agent.

| Agent | Recommended file | Operational notes |
| --- | --- | --- |
| Codex CLI | `AGENTS.md` | Keep concise. Prefer project-scoped instructions. Avoid oversized always-on rule blocks. |
| Claude Code | `CLAUDE.md` | Use project instructions for durable repo guidance. Keep sections compact and actionable. |
| Cursor | `.cursor/rules/figma-design-system.mdc` | Use correct frontmatter and scope by `globs` whenever possible. Avoid broad `alwaysApply` unless justified. |

If an existing instruction file already exists:

- append or merge carefully
- remove contradictions
- avoid duplicate rules phrased multiple ways
- preserve unrelated instructions outside the Figma/design-system scope

#### Cursor example frontmatter

```mdc
---
description: Figma-to-code rules for this repository's design system and component conventions
globs:
  - src/components/**
  - src/features/**
alwaysApply: false
---
```

Use narrow globs when possible. Broad always-on rules can create context bloat and false positives.

### Phase 8: Validate with a Pilot Component

Do not stop after writing the rule file.

Pick one small component or variant and confirm the rules actually steer the agent correctly.

Good pilot targets:

- button variant
- input field
- card component
- tab list
- badge or chip

Validation must check:

- component placement
- token usage
- existing component reuse
- accessibility behavior
- test expectations
- visual parity against Figma

Use `references/pilot-validation-checklist.md`.

### Phase 9: Record Drift and Next Actions

If the pilot reveals gaps, update the rules and leave a short maintenance note covering:

- what changed
- why it changed
- unresolved token or theme gaps
- whether the issue belongs to this skill or should be handed off

## Examples

### Example 1: React project using Tailwind and CSS variables

User request:

```text
Create design system rules for my React app so Codex follows our component and token conventions.
```

Recommended flow:

1. Confirm Codex CLI is the target and `AGENTS.md` is the save target.
2. Run `create_design_system_rules(clientLanguages="typescript,javascript", clientFrameworks="react")`.
3. Audit directories such as `src/components/ui/`, `src/components/features/`, and `src/styles/tokens.css`.
4. Map Figma variables to CSS variable tokens instead of copying raw colors.
5. Save concise project rules to `AGENTS.md`.
6. Validate with a simple button implementation.

Expected output shape:

```markdown
## Figma Design System Rules

- IMPORTANT: Reuse components from `src/components/ui/` before creating new primitives.
- Use Tailwind for layout utilities and CSS variables from `src/styles/tokens.css` for color, spacing, radius, and typography.
- Never hardcode visual values when a token exists.
- Run `get_design_context` first and `get_screenshot` before final visual validation.
- Preserve accessible names, keyboard behavior, focus visibility, and selected/pressed states for interactive components.
```

### Example 2: Vue project with CSS Modules and token mismatch

User request:

```text
Set up Figma rules for my Vue app. Our Figma file uses variable names that do not match the repo.
```

Recommended flow:

1. Run `create_design_system_rules(clientLanguages="typescript,javascript", clientFrameworks="vue")`.
2. Audit `src/components/`, `src/composables/`, and token files.
3. Create a mapping table using `references/figma-to-code-token-mapping.md`.
4. Mark unresolved variables instead of inventing equivalents.
5. Save the rules to the user's target agent file.
6. Validate with a card or form-field component.

Expected rule snippet:

```markdown
- Use Vue SFC patterns already present in `src/components/`.
- Use CSS Modules where the repo already uses `.module.css` files.
- IMPORTANT: Map Figma variables to approved repo tokens before implementation; do not substitute raw hex values.
- If a Figma variable has no approved code token, document it as unresolved and escalate rather than guessing.
```

### Example 3: Design system package in a monorepo

User request:

```text
Generate shared Figma implementation rules for our design system library and Cursor.
```

Recommended flow:

1. Audit `packages/design-system/`, `packages/tokens/`, and existing Cursor rule files.
2. Scope the Cursor rule to the package directories that actually receive Figma-derived work.
3. Include component, token, story, test, and accessibility expectations.
4. Validate with a small primitive such as `Badge` or `Button`.

Expected Cursor rule characteristics:

- frontmatter present
- narrow globs
- no contradictory duplicate rules
- token and theme references point to the design-system package
- accessibility and validation requirements included

See `examples/sample-cursor-rule.mdc` for a worked pattern.

## Best Practices

### Do

- audit the repo before writing rules
- keep rules concise, specific, and tied to real paths
- treat design tokens as the source of truth
- prefer semantic tokens over raw palette values when the project supports them
- encode accessibility requirements directly in the rules
- scope agent rules to relevant directories when the tool supports scoping
- validate with one pilot implementation before handoff
- record unresolved token or theme gaps explicitly

### Do not

- use this skill for a one-off implementation task
- assume Figma variable names match code tokens
- hardcode values when a token exists
- claim future-state conventions are already implemented
- create overly broad always-on rules when scoped rules are possible
- rely on screenshots alone to validate behavior and accessibility
- leave contradictory agent rules in multiple files

## Troubleshooting

### Problem: Figma MCP server is unavailable or tool calls fail

**Symptoms:** `create_design_system_rules` cannot run, tool responses fail, or Figma context cannot be retrieved.

**Likely causes:** MCP server not connected, auth/session issue, wrong workspace context, temporary server failure.

**Solution:**

1. Confirm the Figma MCP server is connected.
2. Retry the smallest necessary tool call.
3. If the server is still unavailable, pause rule generation rather than inventing upstream output.
4. Continue only with codebase discovery if that still helps, and clearly note that the MCP-generated template could not be retrieved.
5. Hand off to the MCP debugging workflow if connectivity remains broken.

### Problem: Figma variables do not map cleanly to code tokens

**Symptoms:** Similar-but-not-identical names, missing semantic tokens, multiple Figma modes but one code theme, or temptation to hardcode values.

**Likely causes:** token drift, incomplete migration, Figma file ahead of codebase, inconsistent naming taxonomy.

**Solution:**

1. Build a mapping table with `references/figma-to-code-token-mapping.md`.
2. Match semantic intent first, not string similarity alone.
3. Record unresolved tokens explicitly.
4. If the codebase lacks a corresponding token, recommend escalation or token creation rather than guessing.
5. Note theme/mode gaps in the final rules and handoff notes.

### Problem: Agent ignores or inconsistently applies the saved rules

**Symptoms:** The agent continues generating code that violates component paths, tokens, or accessibility expectations.

**Likely causes:** wrong file path, invalid Cursor frontmatter, stale IDE state, conflicting higher-priority instructions, overly vague rule wording.

**Solution:**

1. Confirm the rule file path is correct for the target agent.
2. Check file format and frontmatter.
3. Reload the IDE or agent session if necessary.
4. Remove conflicting duplicates from other instruction files.
5. Rewrite vague rules into direct, testable instructions.
6. Re-run a pilot implementation to verify the fix.

### Problem: Rules conflict with each other or create too much context overhead

**Symptoms:** Slow responses, contradictory behavior, repeated instructions, or different rules saying similar things with different wording.

**Likely causes:** oversized instruction files, merged rules from multiple migrations, always-on scoping that is too broad.

**Solution:**

1. Keep only the rules that materially change Figma-derived implementation behavior.
2. Merge duplicates into one canonical statement.
3. Scope rules to the directories that actually need them.
4. Separate general repo instructions from Figma-specific rules when the agent supports modular organization.
5. Revalidate with a pilot component after slimming the file.

### Problem: The rules are accurate for visuals but still produce inaccessible UI

**Symptoms:** Components match screenshots but miss labels, keyboard behavior, focus states, or state semantics.

**Likely causes:** screenshot-only validation, missing accessibility section, reliance on visual parity instead of behavior checks.

**Solution:**

1. Add explicit accessibility rules for names, roles, keyboard support, focus visibility, and state attributes.
2. Validate against relevant ARIA and WCAG expectations, not only screenshots.
3. Update the pilot validation checklist results before handoff.

## Related Skills

Use adjacent workflows when the job changes shape.

- **Figma implementation workflow** — use when the user wants a specific component, screen, or flow implemented from Figma right now.
- **Figma MCP debugging workflow** — use when connectivity, tooling, or node retrieval is the main problem.
- **Accessibility review workflow** — use when the design-system rules exist but the team needs deeper accessibility validation or remediation.
- **Design token migration / refactor workflow** — use when the repo needs new token architecture rather than a rule file over the current system.
- **Frontend architecture workflow** — use when the main question is component boundaries, state management, routing, or repo structure outside the Figma-rule context.

See `agents/handoff-categories.md` for routing cues.

## Additional Resources

### Local support pack

- [Codebase discovery worksheet](references/codebase-discovery-worksheet.md)
- [Figma-to-code token mapping worksheet](references/figma-to-code-token-mapping.md)
- [Pilot validation checklist](references/pilot-validation-checklist.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)
- [Sample AGENTS.md section](examples/sample-AGENTS.md)
- [Sample CLAUDE.md section](examples/sample-CLAUDE.md)
- [Sample Cursor rule](examples/sample-cursor-rule.mdc)
- [Worked token mapping example](examples/token-mapping-example.md)
- [Handoff categories](agents/handoff-categories.md)

### External references

- Figma MCP server documentation: `https://developers.figma.com/docs/mcp`
- Figma variables guide: `https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma`
- Design Tokens Community Group format draft: `https://www.designtokens.org/TR/drafts/format/`
- WCAG 2.2: `https://www.w3.org/TR/WCAG22/`
- MDN button role: `https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role`
- MDN tab role: `https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role`
- MDN CSS custom properties: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties`

## Output Expectations

A successful run of this skill should produce:

1. a short summary of discovered repo conventions
2. a documented Figma-to-code token mapping, including unresolved gaps
3. a final agent instruction file in the right format and path
4. a pilot validation result showing whether the rules actually steer implementation correctly
5. a clear handoff note if the task should move to implementation, accessibility review, MCP debugging, or token refactoring
