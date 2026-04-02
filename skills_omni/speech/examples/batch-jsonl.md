# Batch JSONL Example

Use one JSON object per line.

```text
{"input":"Thank you for calling. Please hold.","voice":"cedar","response_format":"mp3","out":"output/speech/hold.mp3"}
{"input":"For sales, press 1. For support, press 2.","voice":"marin","instructions":"Tone: Clear and neutral. Pacing: Slow.","response_format":"wav","out":"output/speech/menu.wav"}
```

## Pre-batch checklist

1. Validate one representative line.
2. Confirm output directories exist.
3. Confirm the chosen voice and format.
4. Run the full batch only after the sample sounds correct.
