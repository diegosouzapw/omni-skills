# Figma Best Practices 2026

## What the MCP does and does not do

- The Figma MCP server is a bridge that sends structured design context and starter code to the agent.
- It does not produce final production code on its own.
- Good output depends on context quality, prompt clarity, Code Connect coverage, token usage, and the agent's adaptation to the repo.

## File structure that improves output

Figma's official guidance is consistent on these signals:

1. Use components for anything repeated.
2. Link important components to real code with Code Connect.
3. Use variables for spacing, color, radius, and typography.
4. Use clear, semantic layer and component names.
5. Use Auto Layout so layout intent is machine-readable.
6. Add annotations when behavior or intent is not obvious from visuals.

These are not cosmetic niceties. They materially improve how well the MCP and the agent can infer implementation intent.

## Code Connect guidance

- Start with the core components used most often in the design system.
- Add component-specific instructions so the agent sees usage rules, accessibility constraints, and prop patterns.
- Keep mappings current when component APIs change.
- Iterate on mappings and instructions until the generated snippets match team conventions.

## Variables and modes

- Use variables as the canonical design-token layer.
- Prefer semantic variables over raw values where possible.
- Use modes for themes and contextual variants instead of duplicating styles.
- When implementation requires token names or values, request them explicitly with `get_variable_defs`.

## Prompting guidance

- Ask for the exact job to avoid the wrong tool or wrong modality.
- If the goal is variables, say variables.
- If the goal is metadata, say metadata.
- If the goal is mapping, say Code Connect.
- If the goal is repo code, state the framework, component paths, and reuse expectations.

## Context-size guidance

- Avoid selecting large, heavy frames when smaller sections will do.
- Split large screens into logical implementation units such as header, sidebar, card grid, or modal.
- If the response is slow or incomplete, reduce selection size first before changing anything else.

## Skill-design implications

A strong Figma skill in 2026 should:

- Route by task instead of assuming one universal tool.
- Preserve a strict code-implementation flow for repo changes.
- Push setup and troubleshooting into references instead of bloating the main skill body.
- Explain when to use variables, Code Connect, metadata, screenshots, and canvas-write tools.
- Remind the agent that Figma context is input to adapt, not output to ship unchanged.

## Source notes

- MCP vs agent responsibilities: `https://developers.figma.com/docs/figma-mcp-server/mcp-vs-agent/`
- Structure file for better code: `https://developers.figma.com/docs/figma-mcp-server/structure-figma-file/`
- Add custom rules: `https://developers.figma.com/docs/figma-mcp-server/add-custom-rules/`
- Avoid large frames: `https://developers.figma.com/docs/figma-mcp-server/avoid-large-frames/`
- Code Connect integration: `https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/`
- Variables overview: `https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma`
