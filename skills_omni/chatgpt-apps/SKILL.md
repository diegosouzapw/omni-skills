---
name: "chatgpt-apps"
description: "ChatGPT Apps workflow skill. Use this skill when the user needs to build, scaffold, refactor, validate, deploy, or troubleshoot ChatGPT Apps SDK applications that combine an MCP server and widget UI. Use it to plan tools before code, adapt the closest official example, wire MCP bridge and documented window.openai APIs, apply tool and component metadata, set CSP and domain settings, validate with Inspector and ChatGPT connection tests, and prepare hosted or submission-ready app changes with docs-backed guidance."
version: "0.0.1"
category: "development"
tags:
  - "chatgpt-apps"
  - "apps-sdk"
  - "mcp"
  - "widget-ui"
  - "chatgpt"
  - "tool-design"
  - "csp"
  - "troubleshooting"
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
upstream_skill: "skills/chatgpt-apps"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# ChatGPT Apps

## Overview

Use this skill to build, scaffold, refactor, and troubleshoot ChatGPT Apps SDK applications that combine an MCP server with a widget UI.

The preferred operating mode is **docs first, examples second, code third**:

1. fetch current OpenAI Apps SDK documentation
2. classify the app archetype
3. plan tool contracts before implementation
4. adapt the smallest official example that fits
5. wire the server, widget, metadata, and bridge behavior
6. validate with low-cost checks, MCP Inspector, and ChatGPT connection testing
7. branch into deployment or submission work only when the user asks for it

Preserve upstream intent from the curated source, but execute it as an operational app-building workflow rather than an import-review exercise.

## When to Use This Skill

Use this skill when the request involves any of the following:

- building a new ChatGPT App with an MCP server and custom widget
- refactoring an existing Apps SDK app to match current docs or examples
- designing tool contracts, schemas, and annotations before coding
- registering widget resources, output templates, or component metadata
- separating model-visible data from widget-only `_meta` payloads
- wiring the MCP Apps bridge or documented `window.openai` APIs
- fixing local connection, stale tool metadata, rendering, CSP, or bridge issues
- preparing a hosted endpoint for private testing or public submission

Do **not** use this skill as the primary driver when the task is mostly:

- generic frontend work unrelated to Apps SDK wiring
- backend API design without ChatGPT App integration
- infrastructure-only work after the app contract is already settled
- broad security review unrelated to Apps SDK, MCP, or widget behavior

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New app or major refactor | `references/tool-planning-checklist.md` | Forces tool and metadata planning before code generation |
| Widget metadata, output template, or CSP work | `references/component-metadata-and-csp.md` | Covers result partitioning, widget metadata, domain, and CSP decisions |
| UI bridge or `window.openai` work | `references/bridge-and-window-openai-cheatsheet.md` | Keeps integration tied to documented bridge and ChatGPT APIs |
| Validation or pre-handoff review | `references/repo-contract-and-validation.md` and `examples/validation-report-template.md` | Standardizes what was checked and what remains unverified |
| Production hosting or operational hardening | `references/deployment-readiness.md` | Separates local dev guidance from hosted environment expectations |
| Public listing or review readiness | `references/submission-readiness.md` | Keeps submission-only requirements out of private/internal app work |
| Fast diagnosis of common failures | `examples/troubleshooting-playbook.md` | Short decision path for connection, rendering, metadata, and CSP failures |

## Workflow

### 1. Fetch current docs before writing code

Use `$openai-docs` first when available. If it is unavailable, fetch the canonical OpenAI Apps SDK pages directly.

Recommended baseline pages:

- Apps SDK reference
- Build a server
- Build a custom UX
- Build examples
- Plan your tools
- Connect from ChatGPT
- Troubleshoot your app

Fetch deployment and submission docs only if the task includes hosted testing, launch, or public listing.

If docs and older examples disagree, prefer current docs and explicitly note compatibility aliases or migration changes.

### 2. Classify the app archetype

Choose one primary archetype before choosing code structure:

- `tool-only`
- `vanilla-widget`
- `react-widget`
- `interactive-decoupled`
- `submission-ready`

State the chosen archetype in the response so the user can correct it early.

### 3. Plan tools before code

Define the tool surface from user intent.

Minimum planning pass:

- one job per tool
- clear action-oriented name
- description that begins with a practical "Use this when..."
- explicit JSON schema with required fields, bounds, and enums where possible
- annotation review for `readOnlyHint`, `destructiveHint`, `openWorldHint`, and `idempotentHint` when applicable
- decision on whether the tool is data-only, render-only, or both

When the app is connector-like, data-oriented, sync-oriented, or knowledge-oriented, consider standard `search` and `fetch` tool patterns before inventing custom read-only tools.

Use `references/tool-planning-checklist.md`.

### 4. Choose the starting point

Prefer the smallest close example over inventing a large scaffold.

Default order:

1. closest official OpenAI Apps SDK example
2. version-matched MCP or ext-apps example when lower-level wiring matters more
3. local fallback scaffold only when no close example fits and a minimal Node starter is explicitly useful

When adapting an example:

- copy only the relevant files
- reconcile names, schemas, metadata, CSP, and run instructions with current docs
- remove unrelated demo code
- state which example or pattern you chose and why

### 5. Scaffold the MCP server

Generate or refactor a server that:

- exposes a reachable `/mcp` endpoint
- registers tools with stable names, schemas, titles, and descriptions
- registers widget resources or templates with the correct UI MIME type or SDK constant
- returns `structuredContent` for model-visible structured data
- returns `content` for transcript-facing narration when useful
- uses `_meta` only for component-only payloads or large/sensitive UI state
- documents non-idempotent behavior explicitly

Keep model-visible outputs concise. Do not hide essential reasoning data in `_meta`.

### 6. Scaffold the widget UI

Use the MCP Apps bridge first for portability. Use documented `window.openai` APIs only when they materially improve UX.

Baseline expectations:

- render from `structuredContent`
- handle tool results via the documented bridge flow
- use component-initiated tool calls only through canonical mechanisms
- update model context only when UI state should affect future reasoning

If examples use wrapper helpers, map them back to the documented public surface before teaching or copying the pattern.

Use `references/bridge-and-window-openai-cheatsheet.md`.

### 7. Add component metadata and CSP deliberately

For widget resources and tool outputs, verify:

- output template URI is registered and matches the tool response
- widget description is present when it helps reduce redundant narration
- border preference is intentional
- CSP allowlists are exact, not broad
- domain metadata is set only when needed for hosted or submission-ready deployments

Use `references/component-metadata-and-csp.md`.

### 8. Validate in layers

Run the lowest-cost checks first, then move upward.

Suggested ladder:

1. static review against repo contract
2. syntax, typecheck, or build checks when feasible
3. local endpoint and route verification
4. MCP Inspector validation of tool descriptors and responses
5. ChatGPT Developer Mode connection through HTTPS tunnel or hosted endpoint
6. repeat-call and refresh testing for stale metadata and idempotency issues

Always state:

- what you validated
- what you could not validate
- what the user must test locally

Use `references/repo-contract-and-validation.md` and `examples/validation-report-template.md`.

### 9. Branch into deployment only when requested

For hosted apps:

- use a stable public HTTPS endpoint
- keep secrets out of the repo
- keep CSP narrow and environment-specific
- add logging, latency visibility, and error diagnostics
- re-test the hosted app from ChatGPT after deployment

Use `references/deployment-readiness.md`.

### 10. Branch into submission only for public apps

For public listing work only:

- verify org and role prerequisites
- use production URLs, not localhost or tunnels
- provide support and privacy metadata
- prepare screenshots, test prompts, and review-safe auth access if required
- treat submission readiness as a separate checklist, not a default requirement

Use `references/submission-readiness.md`.

## Examples

### Example 1: Scaffold a new app from current docs

```text
Use @chatgpt-apps with @openai-docs to build a private ChatGPT app for stock watchlists. Plan tools first, choose the closest official example, then scaffold a TypeScript MCP server and React widget. Include CSP domains, output template wiring, local validation steps, and ChatGPT Developer Mode connection instructions.
```

**Expected output:** app archetype, tool plan, chosen example, file tree, implementation, validation status, and local run instructions.

### Example 2: Refactor weak metadata and output partitioning

```text
Use @chatgpt-apps with @openai-docs to refactor this existing app. The model picks the wrong tool and the widget only works because all useful data is hidden in _meta. Improve tool descriptions, annotations, structuredContent, output template metadata, and CSP without changing the product scope.
```

**Expected output:** metadata diagnosis, corrected tool descriptors, revised response shape, and a short validation report.

### Example 3: Report validation status in a standard format

```text
Use @chatgpt-apps to review this repo against the local validation ladder. Fill out the validation report template and clearly separate checks you ran from checks I must run locally in ChatGPT.
```

**Expected output:** a completed report following `examples/validation-report-template.md`.

### Example 4: Quick troubleshooting triage

```text
Use @chatgpt-apps to debug a ChatGPT app that connects but shows stale tools and a blank widget after a metadata change. Walk the troubleshooting playbook and give the smallest corrective actions first.
```

**Expected output:** likely causes, inspection order, and minimal fixes for refresh, template URI, and metadata mismatch issues.

## Best Practices

### Do

- fetch current Apps SDK docs before generating or refactoring code
- plan tools before code and keep one job per tool
- prefer the smallest official example that fits the request
- keep `structuredContent` model-visible and `_meta` component-only
- keep tool descriptions concrete enough that the model can choose correctly
- use bridge-first integration, then add ChatGPT-specific APIs only when needed
- keep CSP allowlists exact by domain and environment
- separate local-dev tunnel guidance from production hosting guidance
- state validation coverage and gaps explicitly in every substantive handoff
- use submission requirements only when the user wants a public app

### Don't

- invent custom scaffolds when a close official example already exists
- teach wrapper helper names as if they were the normative public API
- put all useful result data in `_meta`
- use broad wildcard CSP entries when exact domains are known
- assume browser reachability means ChatGPT connection is configured correctly
- mix localhost, tunnel, staging, and production instructions without labeling them
- claim deployment or submission readiness without a concrete validation summary

## Troubleshooting

### Problem: ChatGPT cannot connect to the app

**Symptoms:** The app URL is rejected, ChatGPT cannot load tools, or the app never appears connected.

**Likely causes:** wrong path, non-HTTPS endpoint, broken tunnel, server not listening on `/mcp`, or stale local process.

**Solution:** Confirm the server is running, verify the exact public HTTPS URL including `/mcp`, test the endpoint independently, then reconnect from ChatGPT using the same URL. If using a tunnel, restart it and update ChatGPT with the new URL if it changed.

### Problem: Tools are missing or stale after changes

**Symptoms:** New tools do not appear, old descriptions persist, or ChatGPT keeps using previous metadata.

**Likely causes:** ChatGPT cached prior descriptors, app not refreshed, wrong endpoint version, or changes were made in code without rebuilding.

**Solution:** rebuild or restart the local app, confirm the active endpoint serves the updated descriptors, then refresh or reconnect the app in ChatGPT so descriptors reload. Re-run Inspector against the same endpoint to confirm what is actually being served.

### Problem: The widget renders blank or the output template is not found

**Symptoms:** Tool calls succeed but no widget appears, or the UI area stays blank.

**Likely causes:** mismatched output template URI, resource not registered, wrong MIME type, missing widget metadata, or frontend asset loading failure.

**Solution:** compare the tool response template reference with the registered resource URI exactly, verify the widget resource uses the correct Apps SDK UI type, inspect browser or widget logs if available, and reduce the widget to a minimal static render to isolate metadata versus frontend errors.

### Problem: The model chooses the wrong tool

**Symptoms:** ChatGPT calls an unrelated tool, overuses a broad tool, or ignores a tool that should be obvious.

**Likely causes:** vague tool names, weak descriptions, overlapping responsibilities, missing annotations, or ambiguous schemas.

**Solution:** tighten tool boundaries, rewrite descriptions with explicit “Use this when...” guidance, reduce overlap, add accurate annotations, and constrain schemas with enums or required fields where possible. Re-test tool selection with targeted prompts.

### Problem: The widget cannot call tools from the UI

**Symptoms:** The initial render works, but button clicks or UI actions fail to invoke tools.

**Likely causes:** non-canonical wrapper API use, incorrect bridge wiring, malformed event payload, or reliance on undocumented helper behavior.

**Solution:** map the implementation back to the documented MCP bridge or `window.openai` API surface, inspect the outbound call shape, verify tool names and inputs match the server schema, and replace wrapper-only helpers with canonical calls where needed.

### Problem: CSP blocks API or asset loading

**Symptoms:** The widget frame loads partially, network requests fail, or external assets never appear.

**Likely causes:** missing `connectDomains`, missing `resourceDomains`, wrong hosted asset domain, or environment mismatch between local and production.

**Solution:** inspect every external request the widget makes, add only those exact domains to the relevant CSP lists, avoid broad wildcards, and keep local tunnel domains separate from production domains.

### Problem: Submission is blocked or rejected

**Symptoms:** Review feedback cites incomplete metadata, non-production URLs, broken auth review flow, or missing policy links.

**Likely causes:** public submission attempted with dev infrastructure, missing support/privacy details, no review-safe credentials, or incomplete app assets.

**Solution:** switch to the submission checklist, replace test endpoints with production ones, supply required support and privacy metadata, prepare review-safe login access if auth is required, and resubmit only after end-to-end review checks pass.

## Related Skills

- `@openai-docs` - Use first to fetch current Apps SDK, deployment, troubleshooting, and submission guidance before coding.
- `@frontend` - Use when the work becomes primarily React, widget rendering, component architecture, or browser-side debugging.
- `@backend` - Use when the task shifts toward API contracts, service integrations, auth backends, or server runtime concerns outside the Apps SDK layer.
- `@devops` - Use when the main work becomes hosting, HTTPS, secrets, observability, rollout, or production operations.
- `@security-review` - Use when the task expands into privacy, auth hardening, CSP review, least privilege, or submission-facing security concerns.

## Additional Resources

### Core local references

- [Tool planning checklist](references/tool-planning-checklist.md)
- [Component metadata and CSP](references/component-metadata-and-csp.md)
- [Bridge and window.openai cheatsheet](references/bridge-and-window-openai-cheatsheet.md)
- [Deployment readiness](references/deployment-readiness.md)
- [Submission readiness](references/submission-readiness.md)
- [Validation ladder and repo contract](references/repo-contract-and-validation.md)
- [Apps SDK docs workflow](references/apps-sdk-docs-workflow.md)
- [App archetypes](references/app-archetypes.md)
- [Example selection workflow](references/upstream-example-workflow.md)
- [Search/fetch standard](references/search-fetch-standard.md)
- [Interactive state sync patterns](references/interactive-state-sync-patterns.md)
- [Window.openai patterns](references/window-openai-patterns.md)

### Local examples and helpers

- [Validation report template](examples/validation-report-template.md)
- [Troubleshooting playbook](examples/troubleshooting-playbook.md)
- `scripts/scaffold_node_ext_apps.mjs` for a minimal fallback scaffold when an official example is not a better fit

### Output expectations for agent responses

For scaffold or refactor requests, prefer this order unless the user asks otherwise:

1. chosen app archetype and why
2. tool plan and architecture choice
3. chosen example or fallback starting point
4. doc pages used
5. file tree to create or modify
6. implementation
7. validation performed and skipped
8. local run and ChatGPT connection steps
9. deployment guidance if requested
10. submission checklist if requested
11. risks, gaps, and next steps
