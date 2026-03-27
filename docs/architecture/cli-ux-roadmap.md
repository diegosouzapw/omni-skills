# 🧭 CLI UX Roadmap

> **The product roadmap for evolving Omni Skills from a flag-first installer into a guided terminal experience for both expert and non-expert users.**
> Scope: npm package, CLI install experience, terminal UI, service launch flows, and visual onboarding.

---

## 1. Problem Statement

The current runtime foundation is strong, but the entry experience is still optimized for users who already understand:

- which client they want to target
- which installation selector they want to use
- how to translate goals into `--skill`, `--bundle`, or `find`
- when they need CLI-only install versus MCP, API, or A2A services

Today:

- `npx omni-skills` defaults to Antigravity
- this is technically valid and backwards-compatible
- but it is not ideal for first-time users or less technical operators

The CLI already has a basic interactive mode, but it is still closer to a developer utility than a guided product surface.

This roadmap defines the path to a stronger public UX without breaking the current flag-based interface.

---

## 1.1 Delivery Status

The roadmap is now largely implemented in the current repository state.

Completed:

- Phase 1: Guided Entrypoint Selection
- Phase 2: Guided Install Wizard
- Phase 3: Visual Terminal Shell
- Phase 4: Visual Service Hub
- Phase 5: Saved Profiles and Repeatability
- Phase 6: Hardening, Tests, and Documentation

---

## 2. Goals

- Preserve the current expert CLI workflows
- Make the no-argument entrypoint safe and understandable for first-time users
- Replace silent defaults in interactive contexts with guided selection
- Support known AI clients and arbitrary custom install paths
- Turn install, discovery, and service boot into a coherent user journey
- Provide a visual terminal UI that feels like a product, not just a script
- Keep the install engine, catalog, and service runtime reusable under the UI

---

## 3. Non-Goals

- Replacing the current flag-based CLI
- Removing Antigravity as a supported default target
- Shipping a web UI as the primary delivery mode
- Refactoring API, MCP, or A2A protocols themselves as part of this UX work
- Replacing `SKILL.md` authoring with a database-backed admin panel

---

## 4. Design Principles

### 4.1 Backward Compatibility First

These commands must continue to work exactly as they do today:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interactive terminal session with no arguments: open guided experience
- Non-interactive invocation with no arguments: preserve current install default behavior
- Explicit commands and flags always win over UI inference

### 4.3 Reuse One Engine Across Modes

The following should share the same internal logic:

- flag-first CLI
- guided text-mode CLI
- visual terminal UI

That means the UX layer must not own business logic. It should orchestrate reusable actions.

### 4.4 Preview Before Write

All guided flows that cause writes should display:

- resolved target
- resolved path
- selected skills or bundles
- equivalent CLI command
- confirmation prompt

### 4.5 Visual Does Not Mean Implicit

Even in the richer UI, the system should still make state and actions explicit:

- where the install is going
- what will be written
- which transport or port a service will use
- whether a flow is read-only or local-write-capable

---

## 5. User Personas

### 5.1 Expert CLI User

Needs:

- fast commands
- no forced prompts
- stable flags
- scriptability

### 5.2 Guided Product User

Needs:

- clear choices
- no assumption that Antigravity is desired
- support for custom path installs
- understandable install preview
- visible distinction between install and server runtime actions

### 5.3 Operator / Platform User

Needs:

- ability to launch MCP, API, and A2A visually
- sane defaults
- optional tuning of ports, transport, persistence, executor mode, auth, and local mode

---

## 6. Target UX Model

The product should expose three layers:

### 6.1 Expert Mode

Direct commands and flags.

Examples:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`

### 6.2 Guided Install Mode

Triggered when:

- the user runs `npx omni-skills` in a TTY with no args
- the user runs `npx omni-skills install` with no concrete selectors
- the user explicitly opts into guided mode

The guided install flow should walk through:

1. target client or custom path
2. install type
3. skill or bundle selection
4. preview
5. confirmation
6. execution
7. next steps

### 6.3 Visual Operations Hub

Triggered by:

- `npx omni-skills ui`

This should become the “home screen” for non-expert users and operators.

Core actions:

- install skills
- discover skills
- start MCP
- start API
- start A2A
- run doctor
- run smoke checks

---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Outcome:

- `npx omni-skills` in TTY no longer silently assumes Antigravity
- users are prompted to choose a client or custom path

Requirements:

- preserve non-TTY default install behavior
- add target selector
- support custom path capture

### Phase 2: Guided Install Wizard

Outcome:

- installation becomes a full guided flow

Requirements:

- install mode selection:
  - full library
  - one skill
  - one bundle
  - search then install
- install preview
- equivalent command rendering
- confirmation and execution

### Phase 3: Visual Terminal Shell

Outcome:

- the current basic text UI becomes a branded terminal application

Requirements:

- richer layout
- project branding and logo
- better stepper and cards
- keyboard-driven navigation
- React terminal implementation via Ink

### Phase 4: Visual Service Hub

Outcome:

- MCP, API, and A2A are startable from the visual UI

Requirements:

- guided MCP flow
- guided API flow
- guided A2A flow
- visible mode and config previews

### Phase 5: Saved Profiles and Repeatability

Outcome:

- common install or service presets can be reused

Requirements:

- remember recent targets
- saved service presets
- recent commands
- favorite bundles or skills

### Phase 6: Hardening, Tests, and Documentation

Outcome:

- the UX becomes a maintained public interface, not an ad hoc convenience

Requirements:

- smoke coverage
- regression tests
- doc updates
- operator guidance
- package compatibility review

---

## 8. Proposed Command Model

### Stable Commands

- `omni-skills`
- `omni-skills install`
- `omni-skills find`
- `omni-skills ui`
- `omni-skills mcp`
- `omni-skills api`
- `omni-skills a2a`
- `omni-skills doctor`
- `omni-skills smoke`

### Recommended Behavior

| Invocation | Behavior |
|:-----------|:---------|
| `omni-skills` in TTY, no args | Guided install entry |
| `omni-skills` in non-TTY, no args | Current Antigravity default install |
| `omni-skills install` in TTY, no selectors | Guided install wizard |
| `omni-skills install --guided` | Force guided install flow |
| `omni-skills ui` | Open the visual operations hub |
| explicit flags | Execute directly without detouring into the guided flow |

---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Options:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravity
- OpenCode
- Custom path

Output:

- selected known target OR custom filesystem path

### Step 2: Choose Install Type

Options:

- full library
- one published skill
- one bundle
- search then install

Output:

- install scope

### Step 3: Resolve Selection

Depending on install type:

- full library: no additional selector
- skill: list or choose a skill
- bundle: list or choose a bundle
- search: prompt for query, show matching skills and bundles

### Step 4: Preview

Display:

- selected target
- resolved path
- selected skill or bundle
- equivalent CLI command
- whether the flow is selective or full install

### Step 5: Confirm

User confirms:

- yes → execute
- no → abort or go back

### Step 6: Result

Display:

- success/failure
- destination path
- next step suggestion

---

## 10. Information Architecture for the Visual Operations Hub

The operations hub should expose:

### 10.1 Install

- guided install flow
- skill or bundle search
- custom path

### 10.2 Discover

- catalog search
- filters
- preview metadata
- install handoff

### 10.3 MCP

Options:

- transport: stdio, stream, sse
- local mode on/off
- host
- port

### 10.4 API

Options:

- host
- port
- optional auth
- optional rate limit

### 10.5 A2A

Options:

- host
- port
- store type: memory, json, sqlite
- executor: inline, process
- lease options when sqlite queue is enabled

### 10.6 Diagnostics

- doctor
- smoke

---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

The current `tools/bin/cli.js` mixes:

- command parsing
- presentation
- interactive prompts
- action orchestration
- service boot

The new structure should move reusable logic into:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`

### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` should remain the write-capable backend.

The guided UI should call the existing installer backend rather than duplicating installation logic.

### 11.3 Keep Find/Search Reusable

The guided install wizard should reuse the same catalog-core and CLI search logic already powering:

- `find`
- install previews
- bundle resolution

### 11.4 Prepare for Ink Without Forcing It Early

The first delivery can stay in text-mode prompts.

But the architecture should keep a clear seam so the text flow can later be rendered via Ink.

---

## 12. Risks

### 12.1 Breaking Existing Automation

Mitigation:

- only open guided UI automatically in TTY
- preserve current default in non-TTY
- preserve explicit flag flows

### 12.2 Letting UI Own Business Logic

Mitigation:

- move orchestration to reusable action modules
- keep installer and service boot logic below the UI layer

### 12.3 Ink Migration Too Early

Mitigation:

- first ship the guided flow in current Node terminal stack
- then migrate to Ink once flow semantics are stable

### 12.4 Incomplete Service UX

Mitigation:

- ship install wizard first
- then layer guided service launch

---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` in TTY no longer installs immediately
- user can choose target client or custom path
- non-TTY no-arg invocation still works as before

### Phase 2

- guided install supports full library, skill, bundle, and search-then-install
- preview is always shown before write
- command equivalent is displayed

### Phase 3

- branded terminal UI exists
- the UI is more visually structured than plain readline menus
- navigation is keyboard-friendly

### Phase 4

- users can start MCP, API, and A2A from the visual hub
- major runtime options are configurable in guided form

### Phase 5

- recent or saved preferences are reusable
- repeat flows take fewer prompts

### Phase 6

- smoke coverage reflects the new UX entrypoints
- docs describe guided mode and service wizard behavior

---

## 14. Execution Order

This roadmap must be implemented in this order:

1. Guided entrypoint selection
2. Guided install wizard
3. Visual terminal shell
4. Visual service hub
5. Saved profiles and repeatability
6. Hardening, tests, and docs polish

The implementation work should read the relevant task file before starting each task so the CLI work stays aligned with the plan and does not drift.
