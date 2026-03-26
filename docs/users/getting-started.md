# 🚀 Getting Started with Omni Skills

Welcome! This guide gets you from zero to using skills in under 2 minutes.

---

## Step 1: Install

```bash
npx omni-skills
```

This installs the full library to your default AI tool's directory. For a smaller install, you can target a specific skill or bundle:

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
```

For a specific tool:

```bash
npx omni-skills --claude       # Claude Code
npx omni-skills --cursor       # Cursor
npx omni-skills --gemini       # Gemini CLI
npx omni-skills --antigravity  # Antigravity (default)
```

## Step 2: Verify

```bash
# For Antigravity (default)
test -d ~/.gemini/antigravity/skills && echo "Skills installed ✓"

# For Claude Code
test -d ~/.claude/skills && echo "Skills installed ✓"
```

## Step 3: Use Your First Skill

Open your AI assistant and try:

```
Use @omni-figma to implement this Figma design.
```

Or discover more skills by browsing [the catalog](../CATALOG.md) or [bundles](bundles.md).

---

## What Are Skills?

Skills are structured markdown playbooks (`SKILL.md`) that teach AI coding assistants how to perform specific workflows. They provide:

- **Context** — domain knowledge the AI needs
- **Process** — step-by-step instructions to follow
- **Guardrails** — rules to prevent common mistakes
- **Examples** — patterns to replicate

## How Skills Work

1. You install skills to your AI tool's skills directory
2. The AI agent reads the `SKILL.md` when you reference a skill
3. The skill instructions guide the agent through the workflow
4. You get better, more consistent results

## Next Steps

- **[Usage Guide](usage.md)** — how to invoke skills in each tool
- **[Bundles](bundles.md)** — curated skill packs by role
- **[Full Catalog](../CATALOG.md)** — browse all available skills
