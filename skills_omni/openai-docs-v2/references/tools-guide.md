# Tools Guide Routing Note

Use this note when the request involves tool use, agentic flows, external actions, or model-assisted workflows that call tools.

## Official source

- https://platform.openai.com/docs/guides/tools

## Operator workflow

1. Fetch the official built-in tools guide.
2. Determine whether the user is asking for:
   - a docs explanation
   - API selection guidance
   - deeper implementation work
3. If it is mainly a docs question, answer with citations.
4. If it becomes implementation-heavy, hand off after citing the official guidance.

## Output template

- **Relevant doc area:** built-in tools
- **Why it applies:** concise feature match
- **Next step:** docs answer only / hand off to implementation skill
- **Source:** official doc title + URL

## Boundary

Do not invent tool behavior or unsupported integration details. Stay within what the current official docs state.
