# Batch vs Local Queue

Use this decision note to avoid mixing two different execution models.

## Use local `create-batch` when

- You need several jobs started now from the current machine or agent session.
- You want immediate local fan-out using the bundled CLI.
- You understand that this is just local concurrent orchestration.

## Use the official Batch API when

- The user explicitly wants offline or larger-scale asynchronous processing.
- The workflow should align with the OpenAI Batch API semantics.
- The request fits the API limitations documented in `references/video-api.md`.

## Important distinction

`create-batch` in `scripts/sora.py` is not the OpenAI Batch API.

Do not tell the user they are getting Batch API guarantees, storage behavior, or request semantics when you are only running a local concurrent queue.

## Operator checklist

1. Ask whether the user needs immediate local execution or offline batch processing.
2. If immediate, use the bundled local queue.
3. If offline batch semantics matter, switch to the official Batch API guidance.
4. Record which path you chose in the handoff packet.
