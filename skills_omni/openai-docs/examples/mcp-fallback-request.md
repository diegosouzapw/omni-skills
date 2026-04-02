# Worked Example: MCP Fallback Request

## Prompt

```text
Use @openai-docs to answer an OpenAI docs question, but the MCP tools are unavailable.
```

## Good behavior

1. Confirm MCP is unavailable.
2. Attempt the documented MCP recovery flow.
3. Retry search or fetch.
4. If still unsuccessful, browse only official OpenAI docs domains.
5. Cite the exact official pages used.
6. Note that fallback was required because MCP recovery did not succeed.

## Bad behavior

- asking the user to install MCP before trying recovery
- using unofficial blogs or summaries
- answering from memory without citations
