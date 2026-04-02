# Model Selection Review Example

Use this format when the user asks for the best current model for a use case.

## Example prompt

"Recommend the best current OpenAI model for a support assistant. Verify against current official model docs first, then provide tradeoffs and a fallback option."

## Example output shape

**Recommended model:** <model name from current official docs>

**Why it fits:**
- <reason 1>
- <reason 2>

**Tradeoffs:**
- <limitation, cost/performance caveat, or availability note>

**Fallback option:**
- <alternate model and when to use it>

**Source:**
- Models — https://platform.openai.com/docs/models
- Models overview — https://platform.openai.com/docs/models/overview

## Operator reminder

If the bundled `references/latest-model.md` disagrees with current official docs, say so explicitly and follow the live docs.
