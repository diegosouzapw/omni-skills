# Figma MCP Setup Matrix

Use this reference when the task starts with setup, auth, or connection verification instead of design retrieval.

## Core Principles

- Use a supported client configuration.
- Sign in to Figma before testing retrieval.
- Verify file access separately from MCP connectivity.
- Start with a minimal read request before asking for screenshots, assets, or implementation help.
- Do not store credentials, tokens, or secrets in prompts, checked-in files, or shell history.

## Setup Checklist

1. Confirm which client is being used.
2. Confirm that Figma MCP has been configured for that client.
3. Confirm the user is signed in to Figma in the relevant app or browser flow.
4. Confirm any trust or connection approval prompts were accepted.
5. Confirm the target Figma file opens normally for that user.
6. Run one simple verification request against a known file or node.
7. Only then proceed to structure, screenshot, and asset retrieval.

## Verification Prompt

```text
Verify that Figma MCP is working. Confirm connection readiness, authentication state, and whether this Figma file can be read: <figma-url>
```

## If Verification Fails

Check these in order:

1. Is the client one that supports MCP in the current environment?
2. Is the MCP configuration entry present and valid?
3. Is the user signed in to the correct Figma account?
4. Can the user open the file directly in Figma?
5. Has the client or Figma integration been restarted after setup changes?
6. Is the problem connection-related, auth-related, or file-permission-related?

## Safe Operator Notes

- Prefer reconnect, reauth, and restart steps over ad hoc workarounds.
- Avoid guessing hidden configuration details.
- Record the symptom and exact failing step before escalating.
- If the file is private, confirm access through the normal Figma sharing model instead of requesting copied secrets.
