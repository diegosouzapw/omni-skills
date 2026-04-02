# Responses vs Chat Completions

Use this note when the user asks which OpenAI API surface to use.

## Operator rule

Start with the official guide:

- https://platform.openai.com/docs/guides/responses-vs-chat-completions

Treat that page as authoritative. This local note is only a routing helper.

## Recommended workflow

1. Search and fetch the official Responses vs Chat Completions guide.
2. Identify whether the user needs:
   - a new integration
   - stateful interactions
   - multimodal input/output
   - built-in tools
   - a legacy or narrower chat-style flow
3. Answer with:
   - preferred API
   - why it fits this use case
   - any reasonable exception or compatibility caveat
   - doc title + URL

## Output template

- **Recommended API:** <Responses API or Chat Completions>
- **Why:** <one to three concise reasons>
- **Caveats:** <migration constraint, compatibility note, or exception>
- **Source:** <official doc title + URL>

## Escalation note

If the question turns into SDK implementation, tool orchestration, or app architecture, hand off after grounding the answer in official docs.
