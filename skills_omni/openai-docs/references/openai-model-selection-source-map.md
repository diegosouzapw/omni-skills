# OpenAI Model Selection Source Map

Use this helper file for model-selection requests. Verify every recommendation against current official model and pricing docs before answering.

## Official sources

- Models overview: `https://platform.openai.com/docs/models`
- Pricing: `https://openai.com/api/pricing/`

## Required selection criteria

When recommending a model, state which of these factors matter for the user:

- output quality
- latency
- modality requirements
- tool use or agent behavior
- context needs
- cost sensitivity
- migration or compatibility constraints

## Suggested workflow

1. Clarify the task and constraints.
2. Check the current models page.
3. Check pricing if cost matters.
4. Recommend one primary option.
5. If useful, include one fallback optimized for a different tradeoff.
6. Cite the official pages used.

## Avoid

- Do not recommend a model from memory alone.
- Do not call a model "best" without naming the criteria.
- Do not rely solely on `references/latest-model.md` if live docs are available.

## Output pattern

Use a response shape like:

- **Recommended model:** `<name>`
- **Why:** quality / latency / modality / tool use / context / cost
- **Fallback:** `<name>` for a different tradeoff
- **Citations:** official models page, pricing page if used
