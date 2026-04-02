# API Key Safety

Use this note when the answer could include implementation guidance, code examples, or deployment advice that touches secrets.

## Official source

- https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety

## Operator rules

- Never include real secrets in examples.
- Do not suggest exposing API keys in browser or mobile client code.
- Prefer server-side secret handling.
- If secret handling matters to the answer, cite the official safety guidance.

## Safe reminder template

"Keep OpenAI API keys server-side and out of client code. See the official API key safety guidance: https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety"
