# Audio API Quick Reference

## Scope

This reference summarizes the operational decisions most likely to matter during speech generation.

## Use this file for

- model or voice selection questions
- output format decisions
- parameter compatibility checks
- troubleshooting unsupported request combinations

## Operating guidance

- Prefer the packaged default model unless the user requests another supported option.
- Built-in voices only are in scope for this skill.
- Not all models support the same controls or instruction behavior.
- Keep instruction blocks concise and validate compatibility before batch execution.
- Prefer one sample render before a long or expensive run.

## Output format guidance

- Use `mp3` for general distribution and lightweight delivery.
- Use `wav` when the downstream workflow needs uncompressed audio.
- Keep the chosen format consistent across a batch unless the user requests mixed outputs.

## Failure patterns

### Unsupported parameter combination

**Symptoms:** Validation or request errors.

**Action:** Remove optional controls, simplify the request, and retest one sample.

### Voice or model assumption mismatch

**Symptoms:** Output quality is poor or a control appears ignored.

**Action:** Re-check current official docs and retry with a simpler direction block.

## Official references

- Text-to-Speech guide: https://platform.openai.com/docs/guides/text-to-speech
- Audio API reference: https://platform.openai.com/docs/api-reference/audio
