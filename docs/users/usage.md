# 📖 Usage Guide

How to invoke and use Omni Skills across different AI coding assistants.

---

## Invocation by Tool

| Tool            | How to invoke a skill                              | Skills path                                          |
| :-------------- | :------------------------------------------------- | :--------------------------------------------------- |
| **Claude Code** | `>> /skill-name help me...`                        | `~/.claude/skills/`                                  |
| **Gemini CLI**  | `Use @skill-name to...`                            | `~/.gemini/skills/`                                  |
| **Codex CLI**   | `Use @skill-name to...`                            | `~/.codex/skills/`                                   |
| **Kiro**        | Skills auto-load on demand                         | `~/.kiro/skills/` or `.kiro/skills/`                 |
| **Antigravity** | `Use @skill-name to...` (Agent Mode)               | `~/.gemini/antigravity/skills/` or `.agent/skills/`  |
| **Cursor**      | `@skill-name` in Chat                              | `~/.cursor/skills/`                                  |
| **OpenCode**    | `opencode run @skill-name`                         | `.agents/skills/`                                    |
| **Copilot**     | Paste skill content manually                       | N/A                                                  |

---

## Prompt Patterns

### Basic invocation

```
Use @brainstorming to plan a SaaS MVP.
```

### Combining skills

```
Use @architecture to design the system, then @api-design to define the API.
```

### Skill with context

```
Use @security-auditor to review this API endpoint for auth vulnerabilities.
Here's the code: [paste code]
```

---

## Installation Modes

```bash
# Full library
npx omni-skills --cursor

# One skill
npx omni-skills --cursor --skill omni-figma

# One curated bundle
npx omni-skills --cursor --bundle full-stack
```

Use `--skill` and `--bundle` to keep the installed footprint focused when you do not want the full catalog.

---

## Tips for Best Results

1. **Be specific** — tell the agent exactly what outcome you want
2. **Reference the skill by name** — use `@skill-name` format
3. **Provide context** — paste code, URLs, or describe your project
4. **Chain skills** — use one skill's output as input for the next
5. **Start with bundles** — see [bundles.md](bundles.md) for curated starting points
