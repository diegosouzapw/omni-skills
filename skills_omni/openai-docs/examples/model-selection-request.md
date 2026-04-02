# Worked Example: Model Selection Request

## Prompt

```text
Use @openai-docs to answer: What OpenAI model should I use for a cost-sensitive multimodal customer-support assistant? Verify current model and pricing docs first.
```

## Good answer shape

- Start by stating that the recommendation is based on the current official models page and pricing page.
- Name the primary recommendation.
- State the tradeoffs explicitly: quality, latency, modality, tool use, context, cost.
- Name one fallback optimized for a different tradeoff.
- Cite the exact official pages used.

## Bad answer shape

- "Use the latest model." 
- no criteria
- no pricing verification
- no official citations
