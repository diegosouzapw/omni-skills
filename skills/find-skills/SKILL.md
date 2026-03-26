---
name: find-skills
description: "Discover the right Omni Skills package, verify fit, and produce install commands when a user asks for a capability, workflow, or domain-specific helper."
version: "1.0.0"
category: cli-automation
tags: [discovery, catalog, install, cli, mcp, api]
complexity: intermediate
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---

# Find Skills

## Overview

Use this skill when the user is not asking for direct execution yet, but is trying to discover whether Omni Skills already has a reusable skill, bundle, or install path for the job.

This skill is the router for catalog discovery. It should help the agent:

- identify the real domain and task the user needs
- search the Omni Skills catalog first
- verify whether the match is actually published and installable
- recommend the best install command for the user's tool
- be honest when the catalog does not contain the requested capability yet

## When to Use

Use this skill when the user:

- asks "is there a skill for X?"
- asks "find a skill for X"
- wants to extend the agent with a new capability
- wants a recommended bundle or install path
- is unsure whether to use a skill, the API, MCP, or A2A surface

## Discovery Workflow

### 1. Understand the need

Extract:

- domain: design, testing, docs, deployment, workflow, security, etc.
- specific task: implement a Figma node, review a PR, generate a changelog, detect MCP clients
- environment: Claude Code, Cursor, Codex CLI, Gemini CLI, OpenCode, or a custom path

### 2. Search the Omni Skills catalog first

Prefer the local catalog and repo-native tooling before claiming a skill exists.

Useful entrypoints:

- `npx omni-skills find <query>`
- `npx omni-skills find <query> --tool <tool-id>`
- `GET /v1/search?q=<query>`
- MCP `search_skills`
- MCP `recommend_skills`
- `docs/CATALOG.md`
- `dist/catalog.json`

### 3. Verify that the match is really usable

Do not recommend a roadmap entry as if it were already installable.

Check:

- published skill id
- description and tags
- supported tools
- risk level
- whether a bundle member is actually available or still missing

## Recommendation Rules

- Prefer a published direct skill match over a bundle when the user already knows the task.
- Use bundles when the user wants a broader starting point.
- If the user named a specific client, produce the install command for that client.
- If no published skill matches, say so clearly and do not imply that metadata-only bundle members are available yet.

## Install Guidance

Examples:

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
```

## If Nothing Matches

When no relevant published skill exists:

1. say that no published Omni Skills match was found
2. offer to help directly without a skill
3. suggest creating a new skill from `docs/contributors/skill-template.md` if the workflow is recurring

## Current Catalog Caveat

The runtime surface is ahead of the catalog breadth. The repo currently ships a small published catalog, so discovery must distinguish between:

- published skills that can be installed now
- bundles that contain partial availability
- roadmap metadata for future catalog expansion
