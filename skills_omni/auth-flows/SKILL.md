---
name: "auth-flows"
description: "Authentication and authorization workflow skill. Use this skill when a user needs login, session, token, role, or permission design reviewed across frontend, backend, and supporting services."
version: "0.0.1"
category: "full-stack"
tags:
  - "auth"
  - "authorization"
  - "sessions"
  - "tokens"
  - "permissions"
  - "identity"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "antigravity"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-28"
upstream_skill: "skills/auth-flows"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Auth Flows

## Overview

Use this skill when a team needs authentication and authorization design treated as an end-to-end workflow instead of a set of isolated API checks. It is for login paths, sessions, tokens, roles, privileges, recovery flows, and the handoff between UI, API, and supporting services.

Good output should make identity flows understandable and enforceable across the full stack. The goal is to reduce ambiguity around who can do what, when, and with which guarantees.

## When to Use This Skill

- Use when designing sign-in, sign-up, password reset, MFA, impersonation, or delegated access flows.
- Use when frontend and backend auth assumptions drift from each other.
- Use when a feature introduces new roles, scopes, or privileged actions.
- Use when session handling, token refresh, or account recovery feels risky or inconsistent.
- Use when auth changes need to be reviewed before shipping across UI and API boundaries.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| New auth feature | flow integrity | UI, API, and identity states line up across every transition |
| Role redesign | permission model | Capabilities, scopes, and server-side enforcement are explicit |
| Session issues | token lifecycle | Creation, refresh, expiry, and revocation rules are clear |
| Recovery flows | account safety | Reset and recovery protect users without weakening the core auth path |
| Admin capability | privileged access | Escalated actions have strong checks, auditability, and rollback paths |

## Core Concepts

### Auth Is a Cross-Boundary Contract

Identity decisions made in the UI are not real until the server enforces them. Review the whole flow, not just the API or just the frontend.

### Recovery and Admin Paths Are Part of the Main Threat Surface

Teams often model the happy-path login but neglect reset, invitation, impersonation, or session revocation. Those paths need the same level of clarity and enforcement.

## Workflow

1. Define the actors, identity states, roles, and high-value actions across the product surface.
2. Map the auth flow across frontend, backend, identity provider, and storage boundaries, including failure and recovery paths.
3. Review session or token lifecycle rules for issuance, refresh, expiration, revocation, and re-authentication triggers.
4. Validate authorization at the server boundary, especially for privileged and cross-tenant operations.
5. Close with an auth packet that captures invariants, risky edges, open questions, and release blockers.

## Examples

### Example 1: Auth flow review

```text
Use @auth-flows to review this login plus account-recovery design and tell me where the frontend, backend, and role model are still inconsistent.
```

**Explanation:** Use this when auth behavior spans multiple product surfaces and the enforcement contract is unclear.

### Example 2: Auth packet renderer

```bash
python3 skills/auth-flows/scripts/render_auth_packet.py \
  "workspace-admin" \
  "sign-in,mfa,token refresh,impersonation" \
  "roles,session lifecycle,recovery"
```

**Explanation:** Use this when you want a structured auth review packet before implementation or release.

### Example 3: Permission boundary review

```text
Use @auth-flows to tell me which actions should be enforced by role, which need resource-level checks, and where we still trust the frontend too much.
```

**Explanation:** Use this when auth trouble is really a full-stack authorization problem.

## Best Practices

- Define identity states and role capabilities explicitly before writing middleware or UI guards.
- Treat authorization as a server responsibility even when the UI hides forbidden actions.
- Review token and session lifecycle rules alongside login and recovery flows.
- Make privileged actions auditable and require stronger checks than normal user activity.
- Keep tenant and resource boundaries explicit when designing roles and scopes.
- Document auth invariants so regressions are easy to detect during future changes.

## Troubleshooting

### Problem: The UI looks correct, but backend permission bugs keep appearing

**Symptoms:** Frontend guards hide certain actions, but server endpoints still allow unexpected access patterns.
**Solution:** Move the review to the server boundary, define resource-level authorization rules, and treat UI checks as convenience rather than enforcement.

### Problem: Session behavior is inconsistent across devices or tabs

**Symptoms:** Users see stale sessions, unexpected logouts, or refresh loops because token lifecycle rules are unclear.
**Solution:** Define issuance, refresh, expiration, and revocation semantics explicitly, then map them to the product flows that rely on them.

### Problem: Recovery or admin paths feel riskier than the main login

**Symptoms:** Password reset, invitation, impersonation, or emergency admin access has fewer checks and weaker auditability than normal sign-in.
**Solution:** Treat those paths as first-class auth flows and require explicit policy, logging, and stronger controls where privilege changes.

## Related Skills

- `@api-design` — Use when the token, session, or permission contract still needs API-level redesign.
- `@frontend-design` — Use when auth UI states and recovery UX need deliberate product design.
- `@threat-modeling` — Use when auth misuse, privilege escalation, or trust boundaries need formal attacker-path review.

## Additional Resources

- [Auth flow checklist](references/checklist.md)
- [Session lifecycle worksheet](references/session-lifecycle-worksheet.md)
- [Permission matrix template](references/permission-matrix-template.md)
- [Render an auth packet](scripts/render_auth_packet.py)
- [Auth flow packet example](examples/auth-flow-packet.md)
