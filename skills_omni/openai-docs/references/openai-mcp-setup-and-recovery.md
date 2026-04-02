# OpenAI Docs MCP Setup and Recovery

Use this checklist when the OpenAI docs MCP workflow is missing or failing.

## Preferred behavior

Try to recover the MCP path yourself before asking the user to intervene.

## Recovery checklist

1. Confirm the OpenAI docs MCP tools are actually unavailable or failing.
2. If the MCP server appears missing, run:

```bash
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
```

3. If the command fails because of sandbox or permission boundaries, retry the same command with escalation and a one-sentence justification.
4. If the install or retry still fails, ask the user to run the same command.
5. Ask the user to restart Codex if required by the client.
6. Retry the docs search and fetch flow.
7. Only if MCP still does not provide meaningful results, fall back to official OpenAI docs domains only.

## Search recovery tips

If MCP is installed but results are poor:

- use more specific product names
- include API or guide names in the query
- search for the endpoint, feature, or exact concept rather than a broad paraphrase
- fetch a known page directly after search if the result set is noisy

## Boundaries

- Do not browse unofficial domains as fallback for OpenAI documentation questions.
- Do not ask the user to install the MCP server before you have attempted the constrained recovery path yourself.
