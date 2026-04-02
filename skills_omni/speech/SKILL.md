---
name: "speech"
description: "Speech generation workflow skill. Use this skill when the user needs text-to-speech narration, voiceover, accessibility reads, IVR/audio prompts, or batch speech generation through the OpenAI Audio API using the bundled CLI and built-in voices. Prefer the packaged workflow and references, require OPENAI_API_KEY for live calls, and keep custom voice creation, speech-to-text, and real-time voice agent work out of scope."
version: "0.0.1"
category: "cli-automation"
tags:
  - "speech"
  - "text-to-speech"
  - "tts"
  - "narration"
  - "voiceover"
  - "accessibility"
  - "ivr"
  - "audio-api"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/speech"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Speech Generation Skill

## Overview

Use this skill to generate spoken audio from text with the OpenAI Audio API through the bundled CLI workflow and local support pack.

This skill is for deterministic text-to-speech work such as narration, product voiceover, accessibility reads, IVR prompts, and repeatable batch rendering. It preserves the intent of the upstream curated speech workflow while presenting it in a clearer operational form for agents and reviewers.

Prefer the bundled CLI and local references before writing new scripts. Keep the user text intact, use built-in voices only, and validate one representative sample before scaling up to a full batch.

## When to Use This Skill

Use this skill when you need to:

- Generate a single spoken clip from provided text.
- Produce narration or explainer audio for a demo, walkthrough, or presentation.
- Create product voiceover with controlled pacing and emphasis.
- Render accessibility reads where clarity, pronunciation, and pacing matter.
- Generate IVR or audio prompts with stable filenames and output formats.
- Run a batch workflow from structured input instead of issuing many ad hoc requests.
- Preserve upstream workflow conventions, provenance, and local references for handoff or review.

Do **not** use this skill for:

- Speech-to-text or transcription.
- Real-time conversational voice agents.
- Custom voice cloning, custom voice creation, or unsupported voice training workflows.
- Broad application integration work beyond generating audio artifacts.
- Non-OpenAI audio pipelines unless the user explicitly asks to replace the workflow.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First run or environment check | `references/cli.md` | Covers preflight, install, env vars, single clip, and batch usage |
| Model, voice, or format questions | `references/audio-api.md` | Quick compatibility notes and safer parameter selection |
| Direction writing or iteration | `references/prompting.md` | Keeps instructions concise and compatible with TTS workflows |
| Use-case-specific delivery | `references/voice-directions.md` | Provides copyable direction templates for narration, voiceover, IVR, and accessibility |
| Accessibility output review | `references/accessibility.md` | Adds QA criteria for clarity, pronunciation, pacing, and disclosure |
| Sandbox, auth, or network issues | `references/codex-network.md` | Helps recover from local environment and API access blockers |
| Direct agent invocation | `agents/openai.yaml` | Gives a compact activation contract for agent clients |

## Workflow

1. **Confirm scope.** Verify the request is text-to-speech generation, not transcription, real-time audio chat, or custom voice work.
2. **Collect inputs.** Get the exact text, target audience, delivery style, preferred voice, output format, and destination path.
3. **Preserve source text.** Keep the spoken text verbatim unless the user explicitly asks for rewriting.
4. **Preflight the environment.** Confirm Python is available, the `openai` package is installed, and `OPENAI_API_KEY` is set locally.
5. **Choose execution mode.** Use a single request for one clip; use a validated JSONL batch for multiple outputs.
6. **Select safe defaults.** Start with the packaged model and built-in voice defaults unless the user specifies otherwise.
7. **Write concise directions.** Convert delivery guidance into a short labeled instruction block without inventing new requirements.
8. **Prepare paths.** Use `tmp/speech/` for temporary inputs and `output/speech/` for final artifacts when working in this repository.
9. **Test one representative sample first.** Listen for clarity, pronunciation, pacing, and file-format correctness before running a large batch.
10. **Run the bundled CLI.** Prefer the packaged script instead of writing a one-off implementation.
11. **Review output quality.** Check intelligibility, acronyms, numerals, dates, proper nouns, pause placement, and truncation.
12. **Iterate narrowly.** Change one thing at a time: voice, pacing instructions, emphasis, or output format.
13. **Finalize and hand off.** Return the audio path, model/voice/format used, any instruction block used, and any known limitations.
14. **Clean up temporary artifacts.** Remove batch intermediates from `tmp/speech/` after successful completion unless the user asks to retain them.

### Preflight

Install the dependency if needed:

```bash
uv pip install openai
```

If `uv` is unavailable:

```bash
python3 -m pip install openai
```

Check that the key is set without printing it:

```bash
python3 - <<'PY'
import os
print('OPENAI_API_KEY set:', bool(os.getenv('OPENAI_API_KEY')))
PY
```

### Script Path Note

The source material refers to both `scripts/texttospeech.py` and `scripts/text_to_speech.py`. Before running commands, verify which filename exists in the local skill bundle and use that exact path consistently.

## Examples

### Example 1: Single narration clip

```text
Input text: "Welcome to the demo. Today we'll show how the workflow works."
Instructions:
Voice Affect: Warm and composed.
Tone: Friendly and confident.
Pacing: Steady and moderate.
Emphasis: Stress "demo" and "workflow".
Output: output/speech/demo-intro.mp3
```

Use this pattern for one short clip where the text is already finalized.

### Example 2: Batch IVR prompts

```text
{"input":"Thank you for calling. Please hold.","voice":"cedar","response_format":"mp3","out":"output/speech/hold.mp3"}
{"input":"For sales, press 1. For support, press 2.","voice":"marin","instructions":"Tone: Clear and neutral. Pacing: Slow.","response_format":"wav","out":"output/speech/menu.wav"}
```

Use one JSON object per line, validate one line first, then run the full batch.

### Example 3: Long-script chunking

```text
Chunk 01 -> output/speech/chapter-01.mp3
Chunk 02 -> output/speech/chapter-02.mp3
Chunk 03 -> output/speech/chapter-03.mp3
```

For long narration, split into stable ordered chunks, review one chunk first, then render the remainder.

### Example 4: Representative CLI run

```bash
python3 scripts/text_to_speech.py \
  --input-file tmp/speech/request.txt \
  --voice cedar \
  --response-format mp3 \
  --out output/speech/request.mp3
```

Adjust the script path if the local bundle uses `scripts/texttospeech.py` instead.

## Best Practices

### Do

- Use `OPENAI_API_KEY` consistently for live API calls.
- Prefer the bundled CLI and official SDK-backed workflow over raw HTTP or ad hoc scripts.
- Keep user text separate from delivery instructions.
- Write short, non-conflicting instruction blocks.
- Test one representative output before a full batch.
- Use stable filenames and explicit output paths.
- Review pronunciation of proper nouns, acronyms, numbers, dates, and domain-specific terms.
- Disclose that the audio is AI-generated when the output is public-facing or user-visible.
- Keep built-in voices only unless official product support clearly changes.
- Record the final model, voice, format, and instruction block used for reproducibility.

### Do Not

- Do not ask the user to paste API keys into chat, issues, code comments, or PR descriptions.
- Do not commit secrets, temp files with sensitive content, or generated audio unless the user explicitly wants that outcome.
- Do not rewrite the spoken text unless the user asks for editorial changes.
- Do not assume every model supports the same controls or instruction behavior.
- Do not launch a large batch before validating one sample clip.
- Do not claim support for custom voices, cloning, or undocumented parameters.
- Do not modify the bundled speech script unless the user explicitly requests code changes.

### Operating Notes

- Start with the packaged defaults unless the user specifies otherwise.
- Built-in voices only are in scope.
- Instruction support can vary by model; verify compatibility before a long run.
- Long inputs should be chunked intentionally instead of forcing oversized single requests.
- Keep temporary files under `tmp/speech/` and final deliverables under `output/speech/` when working in this repository.

## Troubleshooting

### Problem: `openai` package is missing

**Symptoms:** Import errors, module-not-found errors, or the script exits before making a request.

**Solution:** Install the dependency with `uv pip install openai` or `python3 -m pip install openai`, then rerun the preflight check.

### Problem: `OPENAI_API_KEY` is missing or invalid

**Symptoms:** Authentication failures, 401 responses, or the CLI reports missing credentials.

**Solution:** Set `OPENAI_API_KEY` in the local environment and retry. Never ask for the full key in chat. If needed, direct the user to create or manage keys in the OpenAI platform UI and confirm locally once configured.

### Problem: Permission, policy, or access failure

**Symptoms:** 403 responses or requests that fail despite a present API key.

**Solution:** Confirm the key belongs to the correct account or project, verify local environment selection, and check whether the requested model or endpoint is available to that account.

### Problem: Rate limiting or transient API failure

**Symptoms:** 429 responses, intermittent 5xx errors, or batch requests that fail partway through.

**Solution:** Slow the run, retry later, and validate with a smaller sample before resuming. For repeated failures, inspect the HTTP status family and environment constraints before scaling back up.

### Problem: Output file was not written

**Symptoms:** The command appears to run, but the expected file is missing.

**Solution:** Verify that the output directory exists, the path is writable, and the `--out` or `--out-dir` value is correct. Prefer explicit paths such as `output/speech/<name>.mp3`.

### Problem: Model, voice, or parameter mismatch

**Symptoms:** Request validation errors, unsupported-parameter errors, or low-quality output that ignores instructions.

**Solution:** Re-check model and parameter compatibility in `references/audio-api.md`. Remove unsupported controls, keep directions concise, and test a single sample clip before resuming batch execution.

### Problem: Long input or malformed batch input

**Symptoms:** Requests fail on long text, the batch stops early, or one malformed JSONL line breaks processing.

**Solution:** Chunk long scripts into ordered segments and validate the JSONL file before running the batch. Test one representative line first, then run the full set.

### Problem: Accessibility output sounds correct but is hard to follow

**Symptoms:** Speech is intelligible but acronyms, numerals, proper nouns, or pause placement reduce comprehension.

**Solution:** Add pronunciation hints, simplify conflicting direction lines, and review against `references/accessibility.md` before final delivery.

## Related Skills

- `@doc` — use when the user first needs script cleanup, editorial revision, or documentation-ready narration text before synthesis.
- `@chatgpt-apps` — use when the task shifts from generating audio files to integrating playback or controls inside an application.
- `@aspnet-core` — use when generated audio must be wired into a backend service, API, or delivery pipeline implemented in ASP.NET Core.

## Additional Resources

Start with the local support pack before searching elsewhere.

- [CLI runbook](references/cli.md)
- [Audio API quick reference](references/audio-api.md)
- [TTS prompting and iteration notes](references/prompting.md)
- [Voice direction templates](references/voice-directions.md)
- [Accessibility defaults and QA checklist](references/accessibility.md)
- [Sandbox, auth, and network troubleshooting](references/codex-network.md)
- [Single clip example](examples/single-clip.md)
- [Batch JSONL example](examples/batch-jsonl.md)
- [Long-script chunking example](examples/long-script-chunking.md)
- [Agent invocation metadata](agents/openai.yaml)

### Provenance and Official References

Use these as the primary external references when you need current platform behavior:

- OpenAI Text-to-Speech guide: `https://platform.openai.com/docs/guides/text-to-speech`
- OpenAI Audio API reference: `https://platform.openai.com/docs/api-reference/audio`
- OpenAI authentication reference: `https://platform.openai.com/docs/api-reference/authentication`
- OpenAI quickstart: `https://platform.openai.com/docs/quickstart`
- MDN HTTP status reference: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status`
