# Realtime API

Use this note when the request involves low-latency, streaming, voice, or multimodal realtime interactions.

## Official source

- https://platform.openai.com/docs/guides/realtime

## Operator workflow

1. Fetch the official Realtime guide.
2. Confirm the user’s need is actually realtime or low-latency.
3. Answer with:
   - whether Realtime is the correct surface
   - why it matches
   - any handoff recommendation for implementation work

## Output template

- **Recommended surface:** Realtime API / another API
- **Why:** concise feature match
- **Source:** official doc title + URL

## Common pitfall

Do not recommend Realtime solely because the request mentions chat or multimodality. Verify the low-latency requirement first.
