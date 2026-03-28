# Prompt Engineering Checklist

Use this checklist when improving or reviewing prompts for reliable model behavior.

## Prompt Shape

- State the task, constraints, and desired output format directly.
- Delimit inputs, examples, and rules so the model can separate them cleanly.
- Add refusal or fallback behavior when the task depends on missing or unsafe input.

## Examples and Evaluation

- Use examples only when they teach a pattern the model is likely to miss.
- Keep generation prompts and evaluation prompts separate when reliability matters.
- Test the prompt on diverse cases, not just the happy path.

## Official Sources Used

- Anthropic prompt engineering guide: https://docs.anthropic.com/en/docs/prompt-engineering
