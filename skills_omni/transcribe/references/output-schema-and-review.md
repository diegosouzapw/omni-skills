# Output Schema and Review Guidance

Store each run under its own directory:

```text
output/transcribe/<job-id>/
```

## Recommended files

- `transcript.txt` for plain text output
- `transcript.json` for structured output
- diarized output file when speaker attribution is used
- `metadata.json` sidecar with provenance and run details
- optional notes or stderr log for troubleshooting

## Metadata sidecar

Suggested fields:

```json
{
  "source_file": "meeting.m4a",
  "model": "gpt-4o-mini-transcribe",
  "response_format": "text",
  "language_hint": null,
  "preprocessing": null,
  "known_speakers": [],
  "output_files": ["transcript.txt"]
}
```

## Review checklist

### Plain transcript

- Transcript is readable and not obviously truncated
- Important names, dates, and numbers were spot-checked
- Language matches expectation

### Structured transcript

- JSON parses correctly
- Expected fields are present
- Segment ordering is sensible

### Diarized transcript

- Speaker turns are plausible
- Repeated speakers stay reasonably consistent
- Overlap-heavy sections were spot-checked manually
- Any uncertainty is documented in reviewer notes

## Handoff rule

If the transcript is acceptable, pass downstream tasks such as summarization, extraction, or reporting to more specialized skills instead of extending this workflow unnecessarily.
