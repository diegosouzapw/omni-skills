---
name: "transcribe"
description: "Audio transcription workflow skill. Use this skill when a user needs speech transcribed from audio or video into text, optionally with structured output or speaker diarization, and the operator should follow a repeatable CLI workflow with preflight checks, safe key handling, validation steps, and review-ready output packaging."
version: "0.0.1"
category: "cli-automation"
tags:
  - "transcribe"
  - "audio"
  - "speech-to-text"
  - "diarization"
  - "ffmpeg"
  - "openai"
  - "cli"
  - "review"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
upstream_skill: "skills/transcribe"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Audio Transcribe

## Overview

Use this skill to transcribe speech from audio or video files into text with a deterministic, reviewable CLI workflow. It supports three main paths:

1. **Plain transcript** for fast text output
2. **Structured transcript** when JSON or timestamps are needed
3. **Diarized transcript** when speaker attribution is actually required

This skill preserves the intent of the upstream `transcribe` workflow while making execution safer and easier to review. It emphasizes preflight validation, correct `OPENAI_API_KEY` handling, predictable output directories, optional audio preprocessing, and explicit validation before handoff.

Prefer this skill when the task is specifically about transcription. If the transcript is already acceptable and the next step is summarization, extraction, or reporting, hand off to a more specialized downstream skill instead of expanding this one.

## When to Use This Skill

Use this skill when:

- a user asks to transcribe speech from an audio or video recording
- a meeting, interview, call, lecture, or voice memo needs text output
- the operator needs a **plain text transcript** quickly
- the operator needs **JSON or timestamped output** for downstream processing
- the operator needs **speaker labels** and is willing to validate diarization quality
- the workflow should remain reproducible, auditable, and easy to hand off

Do **not** use diarization by default. Only use it when the user explicitly needs speaker attribution.

## Operating Table

| Situation | Recommended path | Output | Notes |
| --- | --- | --- | --- |
| Fast single-file transcript | Run plain text transcription | `.txt` | Best default for most requests |
| Need machine-readable output | Run structured transcription | `.json` | Prefer when another tool will consume the result |
| Need speaker attribution | Run diarized transcription | `diarized_json` or equivalent structured output | Validate labels carefully; do not assume perfect speaker turns |
| File is a video or odd container | Preprocess with ffmpeg first | normalized audio file | Keep original unchanged |
| Many files or repeatable batch review | Use per-job output directories and batch example pattern | one folder per run | Escalate to Batch API workflows if the job becomes large |
| Reviewer handoff | Save transcript, raw structured output, and metadata sidecar | review packet | Include source path, model, format, and preprocessing notes |

## Workflow

### 1. Collect inputs

Gather:

- input file path(s)
- requested output style: `text`, structured JSON, or diarized output
- optional language hint if known
- whether the user truly needs speaker labels
- any known-speaker reference clips, if the workflow supports them and the source audio quality justifies using them

If the user only wants text, start with plain transcription.

### 2. Run preflight checks

Before making any API call:

- confirm the input file exists
- confirm `OPENAI_API_KEY` is set locally
- confirm the output directory is writable
- confirm Python is available
- confirm `openai` is installed
- confirm `ffmpeg` is available if preprocessing may be needed

Use the local preflight checklist:

- [Auth and environment preflight](references/auth-and-env-preflight.md)

Optional local helper:

```bash
python3 scripts/transcribe_preflight.py path/to/audio.wav --out-dir output/transcribe/job-001
```

### 3. Choose the execution mode

#### Mode A: Plain transcript

Use for most requests.

- fastest path
- easiest to review
- least operational complexity

#### Mode B: Structured transcript

Use when:

- timestamps are needed
- another tool will parse the transcript
- the user wants machine-readable output for downstream extraction

#### Mode C: Diarized transcript

Use only when:

- the user explicitly needs speaker attribution
- the audio has limited overlap and usable quality
- the operator can validate speaker labels before handoff

Known-speaker hints can help, but they are not a guarantee. Poor audio, overlapping speech, and short utterances can still produce unstable labels.

### 4. Prepare output locations

Use a dedicated per-run folder:

```bash
mkdir -p output/transcribe/job-001
```

Recommended contents:

- `transcript.txt` or `transcript.json`
- diarized output if used
- `metadata.json`
- optional preprocessing notes
- optional stderr/log capture for troubleshooting

See:

- [Output schema and review guidance](references/output-schema-and-review.md)

### 5. Run transcription

Set the installed skill path once if needed:

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export TRANSCRIBE_CLI="$CODEX_HOME/skills/transcribe/scripts/transcribe_diarize.py"
```

User-scoped skills typically install under `$CODEX_HOME/skills`.

#### Plain text transcript

```bash
python3 "$TRANSCRIBE_CLI" \
  path/to/audio.wav \
  --response-format text \
  --out output/transcribe/job-001/transcript.txt
```

#### Structured transcript

```bash
python3 "$TRANSCRIBE_CLI" \
  interview.mp3 \
  --response-format json \
  --out output/transcribe/job-002/transcript.json
```

#### Diarized transcript with known-speaker hints

```bash
python3 "$TRANSCRIBE_CLI" \
  meeting.m4a \
  --model gpt-4o-transcribe-diarize \
  --known-speaker "Alice=refs/alice.wav" \
  --known-speaker "Bob=refs/bob.wav" \
  --response-format diarized_json \
  --out-dir output/transcribe/job-003
```

### 6. Preprocess only when needed

If the file is unsupported, corrupted, very quiet, noisy, or embedded in video, normalize it first instead of repeatedly retrying the same failing input.

Use ffmpeg recipes from:

- [Audio preprocessing reference](references/audio-preprocessing.md)
- [FFmpeg examples](examples/ffmpeg-recipes.md)

Common cases:

- extract audio from video
- convert odd or rejected containers to a stable audio format
- resample or normalize problematic recordings

Keep the original input unchanged.

### 7. Validate the result

Check the output before handoff.

For plain transcripts:

- spot-check names, dates, numbers, and domain-specific terms
- confirm the language is correct
- verify the transcript is not truncated

For structured output:

- confirm the file is valid JSON
- confirm expected fields exist
- confirm timestamps or segment boundaries make sense

For diarization:

- verify speaker turns are plausible
- check repeated speaker identity consistency
- spot-check several speaker transitions against the audio
- do not trust labels blindly in noisy or overlapping sections

### 8. Save provenance and handoff notes

For each run, capture:

- source file path
- output file path(s)
- model used
- response format
- language hint if used
- whether preprocessing was applied
- any known-speaker hints used
- notable limitations or validation concerns

Reviewers should be able to understand what was run and whether the result is safe to use.

## Examples

### Example 1: Fast single-file transcript

```bash
python3 "$TRANSCRIBE_CLI" \
  call.wav \
  --response-format text \
  --out output/transcribe/call-001/transcript.txt
```

Use this as the default path when the user just wants readable text.

### Example 2: Structured output for downstream parsing

```bash
python3 "$TRANSCRIBE_CLI" \
  interview.mp3 \
  --response-format json \
  --out output/transcribe/interview-001/transcript.json
```

Use this when another workflow will consume the transcript programmatically.

### Example 3: Diarization only when needed

```bash
python3 "$TRANSCRIBE_CLI" \
  panel-discussion.m4a \
  --model gpt-4o-transcribe-diarize \
  --response-format diarized_json \
  --out-dir output/transcribe/panel-001
```

Use this when the user explicitly asks for speaker attribution.

### Example 4: Extract audio from video before transcription

```bash
ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 output/transcribe/meeting-raw/audio.wav
```

Then transcribe the extracted audio instead of the original video container.

### Example 5: Multi-file pattern with separate output folders

See:

- [Batch transcription example](examples/batch-transcription.md)

## Best Practices

### Do

- use `OPENAI_API_KEY`, not nonstandard environment variable names
- start with plain transcription unless speaker attribution is required
- keep outputs under `output/transcribe/<job-id>/`
- preserve the original media file unchanged
- preprocess only when quality or format issues justify it
- validate transcripts before handing them to downstream skills or reviewers
- capture model, format, and preprocessing details in a metadata sidecar
- use known-speaker hints only when the reference clips are clean and representative
- re-run with one targeted change at a time when debugging quality issues

### Do not

- ask users to paste API keys into chat
- assume diarization output is production-ready without review
- overwrite outputs from multiple runs into one shared filename
- repeatedly retry rejected or poor-quality media without preprocessing it first
- force diarization when a plain transcript satisfies the request
- claim exact speaker identity confidence that the workflow cannot guarantee

### Decision rules

- Default to `gpt-4o-mini-transcribe` with `--response-format text` for fast transcription.
- If speaker labels are required, use `gpt-4o-transcribe-diarize` with `--response-format diarized_json`.
- If audio is longer or operationally awkward, keep chunking behavior conservative and avoid unnecessary manual splitting unless the source workflow requires it.
- Do not rely on prompting behavior for diarization modes that do not support it.

## Troubleshooting

### Problem: Authentication fails with 401 or 403

**Symptoms:** The request is rejected immediately, the CLI reports authorization failure, or the API key appears missing.

**Solution:** Verify `OPENAI_API_KEY` is set in the local shell, not pasted into chat. Confirm the shell session actually exported it. Re-run the preflight helper. If the key exists but still fails, verify the account or project context and replace expired or incorrect credentials locally.

### Problem: The file is rejected or appears unsupported

**Symptoms:** The CLI reports file errors, unsupported format, unreadable container, or immediate request failure.

**Solution:** Confirm the path is correct and the file opens locally. If the media container is unusual or damaged, transcode it with ffmpeg to a stable audio format and retry using the converted copy. Keep the original file unchanged.

### Problem: Transcript quality is poor

**Symptoms:** Missing words, wrong language, bad punctuation, poor recognition of names, or obvious truncation.

**Solution:** Check source quality first. If needed, normalize audio, reduce background noise externally, or extract a cleaner audio track from video. If the spoken language is known, provide that hint when supported by the workflow. Prefer plain transcription over diarization for noisy or low-quality recordings.

### Problem: Speaker labels are unstable or incorrect

**Symptoms:** The same speaker receives different labels, speaker turns shift oddly, or overlapping speech is mislabeled.

**Solution:** Treat diarization as a best-effort mode. Validate against the audio. Use cleaner known-speaker references if available. If overlap or noise is heavy, fall back to a plain transcript or provide a reviewer note that speaker attribution is uncertain.

### Problem: Outputs were overwritten or mixed across runs

**Symptoms:** Transcript files no longer match the source file, multiple attempts wrote into the same directory, or review artifacts are ambiguous.

**Solution:** Use a unique `output/transcribe/<job-id>/` directory per run. Keep each run's transcript, structured output, and metadata together. Avoid reusing a single generic filename across different inputs.

### Problem: Rate limits or transient API failures interrupt batch work

**Symptoms:** Requests intermittently fail, slow down, or return temporary server or throttling errors.

**Solution:** Retry with backoff rather than spamming immediate retries. For many-file jobs, use a disciplined batch pattern and consider escalating to a dedicated Batch API workflow when synchronous per-file CLI use becomes inefficient.

## Related Skills

- `@summarize` - Use after transcript quality is accepted and the next task is summarization.
- `@extract-structured-data` - Use when the next step is schema-based extraction from the transcript.
- `@doc` - Use when the transcript needs to become a report, memo, or polished documentation artifact.

## Additional Resources

### Local support pack

- [Auth and environment preflight](references/auth-and-env-preflight.md)
- [Audio preprocessing reference](references/audio-preprocessing.md)
- [Output schema and review guidance](references/output-schema-and-review.md)
- [Batch transcription example](examples/batch-transcription.md)
- [FFmpeg examples](examples/ffmpeg-recipes.md)
- [Preflight helper script](scripts/transcribe_preflight.py)

### External references

- OpenAI speech-to-text guide: `https://platform.openai.com/docs/guides/speech-to-text`
- OpenAI audio API reference: `https://platform.openai.com/docs/api-reference/audio`
- OpenAI authentication reference: `https://platform.openai.com/docs/api-reference/authentication`
- OpenAI error codes guide: `https://platform.openai.com/docs/guides/error-codes`
- OpenAI rate limits guide: `https://platform.openai.com/docs/guides/rate-limits`
- FFmpeg documentation: `https://ffmpeg.org/ffmpeg.html`
