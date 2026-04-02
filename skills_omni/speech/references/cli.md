# Speech CLI Runbook

## Purpose

Use this runbook to execute the packaged speech workflow safely and reproducibly.

## Preflight

1. Confirm Python is available.
2. Install the `openai` package if missing.
3. Confirm `OPENAI_API_KEY` is set locally.
4. Verify which bundled script exists:
   - `scripts/text_to_speech.py`
   - `scripts/texttospeech.py`

## Install

```bash
uv pip install openai
```

Fallback:

```bash
python3 -m pip install openai
```

## Check environment

```bash
python3 - <<'PY'
import os
print('OPENAI_API_KEY set:', bool(os.getenv('OPENAI_API_KEY')))
PY
```

## Single clip pattern

```bash
mkdir -p tmp/speech output/speech
printf '%s\n' 'Welcome to the demo.' > tmp/speech/request.txt
python3 scripts/text_to_speech.py \
  --input-file tmp/speech/request.txt \
  --voice cedar \
  --response-format mp3 \
  --out output/speech/request.mp3
```

If the local bundle uses the alternate filename, replace `scripts/text_to_speech.py` with `scripts/texttospeech.py`.

## Batch pattern

Use one JSON object per line in a temporary JSONL file.

```text
{"input":"Thank you for calling. Please hold.","voice":"cedar","response_format":"mp3","out":"output/speech/hold.mp3"}
{"input":"For sales, press 1. For support, press 2.","voice":"marin","response_format":"wav","out":"output/speech/menu.wav"}
```

Before running the full file:

1. Validate one representative line.
2. Confirm output paths exist.
3. Confirm the selected voice and format are correct.
4. Then run the full batch with the bundled script's batch mode.

## Output conventions

- Temporary inputs: `tmp/speech/`
- Final outputs: `output/speech/`
- Use stable descriptive filenames.
- Remove temporary batch files after success unless the user wants them retained.

## Review checklist

After generation, listen for:

- intelligibility
- pacing
- pronunciation
- proper noun handling
- acronym handling
- date and numeral handling
- clipping or truncation
- correct output format
