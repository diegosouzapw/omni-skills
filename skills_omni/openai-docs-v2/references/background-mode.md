# Background Mode

Use this note when the request involves long-running tasks, asynchronous work, or operations that should continue outside a foreground request.

## Official source

- https://platform.openai.com/docs/guides/background

## Operator workflow

1. Fetch the official background-mode guide.
2. Confirm the request is actually long-running or asynchronous.
3. Answer with:
   - whether background mode is relevant
   - why it fits or does not fit
   - the official doc entrypoint

## Output template

- **Use background mode:** yes / no / depends
- **Why:** concise explanation
- **Source:** official doc title + URL

## Handoff note

If the user now needs job orchestration, queueing design, or application architecture, hand off after grounding the answer in docs.
