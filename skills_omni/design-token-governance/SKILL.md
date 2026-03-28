---
name: "design-token-governance"
description: "Design token governance workflow skill. Use this skill when a team needs to introduce, rename, deprecate, or review design tokens without breaking downstream apps, docs, or component libraries."
version: "0.0.1"
category: "design"
tags:
  - "design-tokens"
  - "governance"
  - "design-system"
  - "theming"
  - "migration"
  - "frontend"
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
upstream_skill: "skills/design-token-governance"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Design Token Governance

## Overview

Use this skill when token changes need the same rigor as an API change. It is for token naming, semantic layering, alias strategy, rollout, deprecation policy, and the contract between design tokens, component APIs, documentation, and product teams.

Good output should make token changes survivable. The goal is to avoid silent regressions when color, spacing, typography, elevation, or motion primitives evolve across apps and packages.

## When to Use This Skill

- Use when a team wants to rename or consolidate token families.
- Use when token usage has drifted between Figma, CSS variables, theme files, and component props.
- Use when semantic and raw tokens are mixed together and no one knows what is safe to expose publicly.
- Use when a design-system change needs migration sequencing before rollout.
- Use when downstream apps need a compatibility review for token removals or aliases.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Token rename | compatibility | Alias, fallback, migration, and removal timing are explicit |
| New semantic layer | contract design | Public token intent and mapping to primitives are clear |
| Multi-theme support | token hierarchy | Base, semantic, and theme overrides are separated cleanly |
| Deprecation | rollout control | Consumers know when to move, how to move, and when removal happens |
| Drift review | source of truth | Design, docs, and code agree on authoritative token definitions |

## Core Concepts

### Tokens Need Public And Private Layers

Not every token should be public. Teams need a clear boundary between primitive implementation values and stable semantic tokens that downstream consumers can depend on.

### Token Changes Have Blast Radius

A small token change can alter dozens of screens. Treat token updates as dependency changes with explicit migration notes, verification scope, and rollback thinking.

### Governance Is Mostly About Naming And Timing

Most token pain comes from unclear ownership, leaky naming, and removals without transition. Good governance sets lifecycle rules before drift accumulates.

## Workflow

1. Map the token surface: primitives, semantic aliases, theme overrides, and the consuming component or app surfaces.
2. Decide which tokens are implementation detail and which are long-lived public contract.
3. Review naming, hierarchy, fallback behavior, and theming semantics before changing any values.
4. Write the migration packet: aliases, removals, verification scope, release timing, and owner.
5. Close with a rollout and governance recommendation: ship, stage, deprecate, or block.

## Examples

### Example 1: Token rename review

```text
Use @design-token-governance to review our token rename from color.brand.primary to surface.accent.default and tell me what compatibility layer we need.
```

**Explanation:** Use this when the risk is mostly naming, migration, and downstream usage.

### Example 2: Governance packet renderer

```bash
python3 skills/design-token-governance/scripts/render_token_governance_packet.py \
  "brand refresh" \
  "color,spacing,typography" \
  "aliases,migration notes,theme parity"
```

**Explanation:** Use this when you want a starter packet before reviewing a token release.

### Example 3: Semantic token boundary review

```text
Use @design-token-governance to separate which of our tokens should stay internal and which should become stable public semantic tokens.
```

**Explanation:** Use this when the token library has grown organically without lifecycle rules.

## Best Practices

- Keep primitive tokens separate from public semantic tokens.
- Prefer additive aliases before destructive removal.
- Make theme override strategy explicit instead of encoding it implicitly in names.
- Tie token changes to concrete downstream verification scope.
- Document who owns token introduction, deprecation, and removal decisions.
- Keep Figma, code, and docs aligned, or say clearly which one is authoritative.

## Troubleshooting

### Problem: Teams bypass semantic tokens and consume raw values directly

**Symptoms:** App code imports primitive values, hardcodes CSS variables, or maps tokens inconsistently between products.
**Solution:** Clarify which tokens are public contract, add semantic aliases, and publish a migration note that treats raw tokens as implementation detail.

### Problem: Token deprecations never finish

**Symptoms:** Deprecated names linger for months because teams do not know who is responsible for migration.
**Solution:** Add explicit removal timing, consumer ownership, and a compatibility window with measurable adoption checkpoints.

### Problem: Theme behavior changes unexpectedly after a token release

**Symptoms:** Dark mode, brand themes, or product-specific overrides diverge after “safe” token updates.
**Solution:** Review base tokens, semantic mapping, and theme overrides as a single contract before shipping the change.

## Related Skills

- `@design-systems-ops` — Use when the broader system release, component drift, or rollout governance is the main concern.
- `@frontend-design` — Use when the work is still at the screen or interaction layer.
- `@accessibility-audit` — Use when the token risk is mostly contrast, focus, or readable hierarchy.

## Additional Resources

- [Token governance checklist](references/checklist.md)
- [Deprecation policy worksheet](references/deprecation-policy-worksheet.md)
- [Render a token governance packet](scripts/render_token_governance_packet.py)
- [Token release example](examples/token-release-example.md)
