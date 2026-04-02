# FFmpeg Recipes

These examples support common transcription preparation tasks.

## Extract mono WAV from video

```bash
ffmpeg -i recording.mp4 -vn -ac 1 -ar 16000 output/transcribe/job-001/audio.wav
```

## Convert M4A to WAV

```bash
ffmpeg -i interview.m4a -ac 1 -ar 16000 output/transcribe/job-001/interview.wav
```

## Convert video audio to MP3

```bash
ffmpeg -i lecture.mov -vn -codec:a libmp3lame -ar 16000 output/transcribe/job-001/lecture.mp3
```

## Apply conservative loudness normalization

```bash
ffmpeg -i quiet.wav -af loudnorm output/transcribe/job-001/quiet-normalized.wav
```

## Reminder

Use preprocessing as a fallback for unsupported or poor-quality media. Keep the original source file unchanged.
