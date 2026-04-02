# Auth and Environment Preflight

Use this checklist before any transcription run.

## Required checks

- Input file exists and is readable
- Output directory exists or can be created
- `OPENAI_API_KEY` is set locally
- Python 3 is available
- `openai` package is installed

## Optional but recommended

- `ffmpeg` is installed for audio extraction or normalization
- A per-run output directory is prepared, such as `output/transcribe/job-001/`
- You know whether the user needs plain text, structured JSON, or diarization

## Safe key handling

- Prefer local shell export or a secret manager
- Do not ask the user to paste the full API key into chat
- Do not echo secrets into terminal history intentionally

## Minimal checks

```bash
test -f path/to/audio.wav
printf '%s\n' "${OPENAI_API_KEY:+set}"
python3 --version
python3 -c "import openai; print('openai ok')"
ffmpeg -version
```

If `ffmpeg` is unavailable, only skip it when you are confident preprocessing will not be needed.
