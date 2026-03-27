# 🧩 CLI Guided Installer Specification

> **Behavioral contract for the guided installation experience in the Omni Skills CLI.**

---

## 1. Scope

This spec defines the guided install behavior that sits on top of the existing installer backend.

It does not replace:

- `tools/bin/install.js`
- current expert flag flows
- selective install manifests

It defines:

- how guided mode is entered
- how destinations are chosen
- how install scope is chosen
- what preview information must be displayed
- how confirmation and execution work

---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

The CLI should enter guided install mode when:

- the user runs `omni-skills` with no args in a TTY
- the user runs `omni-skills install` with no selectors in a TTY

### 2.2 Forced Guided Entry

The CLI should also support explicit guided mode through a dedicated option, such as:

- `omni-skills install --guided`

This mode should work even when input is piped and not attached to a TTY, as long as standard input is available.

### 2.3 Non-Interactive Safety Rule

When invoked without a TTY and without guided mode explicitly requested:

- preserve the current default behavior
- do not block waiting for prompts

---

## 3. Destination Model

Guided install must support two destination classes:

### 3.1 Known Client Target

Each known target resolves to:

- human-readable label
- internal tool id
- install flag
- resolved path

Required known targets:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravity
- OpenCode

### 3.2 Custom Path Target

Custom path mode must:

- prompt for a path
- resolve `~`
- normalize to absolute path
- show the resolved path in preview

---

## 4. Install Scope Model

Guided install must support:

### 4.1 Full Library

Equivalent to current install with no `--skill` or `--bundle`.

### 4.2 Single Skill

Lets the user select one published skill.

### 4.3 Single Bundle

Lets the user select one curated bundle and resolves published members.

### 4.4 Search Then Install

Lets the user:

- enter a search query
- inspect results
- choose a skill or bundle
- continue into install preview

---

## 5. Preview Contract

Before execution, guided install must display:

- destination label
- destination path
- install scope
- selected skill or bundle if applicable
- equivalent CLI command

Optional but recommended:

- selected skill metadata summary
- bundle availability summary

---

## 6. Execution Contract

After confirmation:

- guided install delegates to the existing installer backend
- it does not reimplement file writes itself

The command preview and the actual delegated installer args must match exactly.

---

## 7. Result Contract

After successful execution, the guided install result should show:

- success indicator
- final destination path
- command that was executed
- next recommended action

Example next actions:

- use the skill in the selected client
- run `doctor`
- run `mcp stream --local`

---

## 8. Compatibility Contract

The following remain valid and unchanged:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Guided mode adds behavior. It does not remove existing behavior.
