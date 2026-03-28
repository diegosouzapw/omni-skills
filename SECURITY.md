# Security Policy

## Reporting a Vulnerability

If you discover a security issue in Omni Skills, do not open a public issue first.

Please report it through one of these private channels:

1. GitHub private security advisory
2. Direct contact with the maintainers

Include:

- affected component or path
- reproduction steps
- impact assessment
- any proof-of-concept material needed to verify the issue

We aim to acknowledge reports within 48 hours and prioritize fixes according to impact.

## Scope

This policy covers the repository runtime and content surfaces, including:

- the published CLI and installer under `tools/bin/`
- shared libraries under `tools/lib/`
- build and validation scripts under `tools/scripts/`
- generated catalog artifacts under `dist/`
- the API, MCP, and A2A packages under `packages/`
- skill content under `skills/`, especially when it contains shell commands, network access, credential flows, or security-sensitive guidance

## Current Security Model

The current repository already relies on these controls:

- skill metadata includes a `risk` field
- validation computes maturity, best-practices, quality, and security scores
- the static scanner inspects `SKILL.md`, packaged files, and helper scripts
- optional ClamAV and VirusTotal hash lookup can be enabled during validation and release workflows
- install flows use path safety checks
- local MCP sidecar writes are constrained by an allowlist
- write-oriented local tools default to dry-run behavior unless explicitly disabled
- generated archives ship with checksum manifests
- release tags require detached signature verification in CI before publication
- API and MCP HTTP transports support bearer/API-key auth, admin runtime auth, rate limiting, CORS/IP allowlists, audit logging, maintenance mode, and request IDs
- smoke checks exercise the shipped runtime surfaces before release

## What Is Still Open

The main security work that remains is no longer baseline hardening. The open items are:

- enterprise-grade hosted governance above the current in-process controls, such as external identity, gateway policy, and WAF integration
- broader MCP client writers only when public config contracts are stable enough to keep the write path safe
- continued refinement of the static scanner and skill scoring so exceptional skills stay clearly separated from merely well-structured ones

## Risk Levels in Skills

Each skill declares one of these `risk` levels:

- `safe`: no destructive operations expected
- `caution`: may modify files or interact with external systems
- `offensive`: security-testing or adversarial workflows that require explicit authorization
- `critical`: high-impact or system-level operations

## Disclosure Notes

Because Omni Skills ships executable helpers, filesystem-aware local tooling, and client-specific config writers, vulnerability reports that affect:

- path traversal
- symlink safety
- command execution
- archive verification
- auth or rate-limiting bypass
- local sidecar allowlist bypass
- scanner evasion or false-negative classes

should be treated as high priority even if they appear “local only”.
