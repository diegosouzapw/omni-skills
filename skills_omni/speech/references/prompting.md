# TTS Prompting and Iteration Notes

## Goal

Keep speech instructions short, non-conflicting, and separate from the spoken text.

## Rules

- Preserve the exact user text unless rewrite is explicitly requested.
- Convert delivery guidance into a labeled direction block.
- Add only implied detail; do not invent new requirements.
- Prefer 4 to 8 short lines.
- Avoid contradictory tone or pacing instructions.
- Repeat invariants during iteration to reduce drift.
- Change one variable at a time when improving output.

## Direction template

```text
Voice Affect: <overall voice character>
Tone: <attitude or warmth>
Pacing: <slow, steady, brisk>
Emotion: <optional emotional intent>
Pronunciation: <names, acronyms, tricky terms>
Pauses: <optional pause placement>
Emphasis: <key words to stress>
Delivery: <optional cadence notes>
```

## Good pattern

```text
Voice Affect: Warm and composed.
Tone: Friendly and confident.
Pacing: Steady and moderate.
Pronunciation: Enunciate A-I as separate letters.
Emphasis: Stress "workflow" and "results".
```

## Avoid

- long prose instructions
- multiple conflicting style goals
- adding accents, personas, or emotions the user did not request
- rewriting the original script when only delivery changes are needed
