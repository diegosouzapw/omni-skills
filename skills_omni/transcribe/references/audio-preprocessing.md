# Audio Preprocessing Reference

Use preprocessing only when the source media is rejected, embedded in video, unusually noisy, very quiet, or produces poor transcription quality.

Keep the original file unchanged.

## Common goals

- Extract audio from video
- Convert an unusual or unsupported container into stable audio
- Normalize sample rate or channels for repeatable behavior
- Create a cleaner working copy for transcription

## Extract audio from video

```bash
ffmpeg -i input.mp4 -vn -ac 1 -ar 16000 output/transcribe/job-001/audio.wav
```

## Convert to WAV

```bash
ffmpeg -i input.m4a -ac 1 -ar 16000 output/transcribe/job-001/normalized.wav
```

## Convert to MP3

```bash
ffmpeg -i input.mov -vn -codec:a libmp3lame -ar 16000 output/transcribe/job-001/audio.mp3
```

## Normalize a quiet recording conservatively

```bash
ffmpeg -i input.wav -af loudnorm output/transcribe/job-001/normalized.wav
```

## When to preprocess

Preprocess when:

- the API rejects the file format or container
- the source is a video and you only need audio
- the recording is too quiet or inconsistent
- repeated runs on the raw file keep failing or producing poor recognition

Do not preprocess repeatedly without a reason. Make one targeted change, then re-test.
