# OpenAI Errors and Rate Limits Helper Notes

Use this file when the user asks about API failures, retry behavior, throttling, or error interpretation.

## Official sources

- Error codes: `https://platform.openai.com/docs/guides/error-codes`
- Rate limits: `https://platform.openai.com/docs/guides/rate-limits`

## Working rule

Give doc-backed explanations, not guessed causes. If you cannot identify the exact failure from the information provided, say what additional details are needed.

## Recommended answer structure

- **Observed issue:** summarize the user's error or symptom
- **Likely documented category:** identify the matching official guide area if supported
- **What to check next:** auth, limits, request shape, retries, or client behavior as documented
- **Citations:** include the exact OpenAI page used

## Avoid

- Do not invent undocumented retry thresholds.
- Do not infer exact causes from generic failure text without evidence.
- Do not collapse rate-limit issues and authentication issues into the same explanation unless the docs support it.
