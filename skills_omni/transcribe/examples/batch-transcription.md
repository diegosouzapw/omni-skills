# Batch Transcription Example

Use this pattern when several files need transcription and you want clean separation between runs.

## Single shell loop with per-file output folders

```bash
mkdir -p output/transcribe/batch-001

for f in inputs/*; do
  base="$(basename "$f")"
  stem="${base%.*}"
  mkdir -p "output/transcribe/batch-001/$stem"
  python3 "$TRANSCRIBE_CLI" \
    "$f" \
    --response-format text \
    --out "output/transcribe/batch-001/$stem/transcript.txt"
done
```

## Notes

- Keep one folder per source file
- Avoid writing all outputs into a single shared directory
- Capture metadata if reviewers need model or preprocessing provenance
- If the job becomes very large, consider a dedicated Batch API workflow rather than forcing synchronous CLI loops
