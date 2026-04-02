# OpenAI Prompt Upgrade Notes

Use this helper file for prompt rewrite or prompt-upgrade requests. Current official prompt guidance remains authoritative.

## Official source

- Prompt engineering guide: `https://platform.openai.com/docs/guides/prompt-engineering`

## When to use this file

- The user asks to adapt prompts for newer OpenAI model behavior.
- The user asks for a prompt rewrite tied to a GPT-5.4 upgrade request.
- The operator needs a reminder to verify prompt advice against current official docs.

## Workflow

1. Check whether the request is general prompt improvement or tied to a model migration.
2. Review the official prompt guidance.
3. If the request explicitly mentions GPT-5.4, use imported helper notes only as secondary context.
4. Explain what changed in the prompt and why.
5. Avoid claiming model-specific behavior beyond what official docs support.

## Output pattern

- **Original prompt issue:** ambiguity, weak constraints, missing format, weak tool instructions, or poor task framing
- **Revised prompt:** concise improved version
- **Why it is better:** mapped to official prompting guidance where possible
- **Citations:** official prompt guide, plus any current upgrade doc if applicable
