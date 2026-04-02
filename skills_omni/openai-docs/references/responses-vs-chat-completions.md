# Responses API vs Chat Completions Helper Notes

This file summarizes the decision pattern supported by current official OpenAI docs. It is helper context only.

## Official source

- `https://platform.openai.com/docs/guides/responses-vs-chat-completions`

## Working rule

For many new agentic or tool-using builds, the Responses API should be treated as the modern default when the official docs recommend it. For existing systems already using Chat Completions, provide migration-safe guidance instead of assuming an immediate rewrite.

## Answer pattern

### If the request is greenfield

- Check the official guide first.
- Prefer the current OpenAI-recommended path for new builds.
- Cite the specific official page.

### If the request is about an existing integration

- Separate "what OpenAI recommends for new work" from "what is safe for the current system today."
- Avoid presenting compatibility-oriented paths as the preferred greenfield default if the docs no longer do so.
- Explain migration only as far as the docs support.

## Useful response framing

- **For a new build:** recommend the current default from official docs.
- **For an existing integration:** explain whether the current setup can remain in place and what the docs suggest evaluating before migration.

## Avoid

- Do not say the APIs are interchangeable unless the docs explicitly support that claim.
- Do not force migration advice when the user's primary need is documentation or evaluation.
