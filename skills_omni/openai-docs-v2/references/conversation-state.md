# Conversation State

Use this note when the request involves multi-turn interactions, preserving context, sessions, or ongoing agent behavior.

## Official source

- https://platform.openai.com/docs/guides/conversation-state

## Operator workflow

1. Fetch the official conversation-state guide.
2. Confirm whether the user needs state at all.
3. Distinguish between:
   - simple stateless calls
   - multi-turn application state
   - tool-using or agentic stateful flows
4. Answer with:
   - whether conversation state is needed
   - the relevant official doc entrypoint
   - any linked API-choice implication

## Answer shape

- **Need for state:** yes / no / depends
- **Why:** concise explanation tied to the user’s workflow
- **Source:** official doc title + URL

## Common pitfall

Do not assume every chat-like interaction requires durable state. Verify against the user’s actual requirements.
