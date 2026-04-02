# Sora Parameter Matrix

Use this file as a quick preflight reference before making a live call.

## Core defaults

- Default model: `sora-2`
- Higher-fidelity option: `sora-2-pro`
- Default size: `1280x720`
- Default duration: `4`

## Allowed durations

Current supported `seconds` values:

- `4`
- `8`
- `12`
- `16`
- `20`

Always pass duration through the explicit `seconds` parameter.

## Model and size notes

- `sora-2` is the default general model.
- `sora-2-pro` is required for `1920x1080` and `1080x1920`.
- Check `references/video-api.md` for the broader API-level details if the request is unusual.

## Character limits

- Use up to two characters per generation.
- Character uploads are for non-human subjects only.
- Character uploads work best with short `2`-`4` second non-human MP4 source clips.
- Preferred source framing is `16:9` or `9:16`.
- Preferred source resolution range is roughly `720p`-`1080p`.

## Reference image notes

- Supported reference image formats: `jpg`, `png`, `webp`
- Reference images should match the target size when possible.
- Input images with human faces are rejected in this workflow.

## Edit and extend notes

### Edit

Use `edit` when you want to preserve the shot and change something targeted.

### Extend

Use `extend` when you want the clip to continue in time.

Extension constraints:

- Up to `20` seconds per extension
- Up to six extensions per source video
- Maximum total video length: `120` seconds
- Extensions do not support characters or image references

## Batch and queue notes

- `create-batch` in `scripts/sora.py` is a local concurrent queue.
- It is not the official OpenAI Batch API.
- The official Batch API path currently applies to `POST /v1/videos` with JSON request bodies rather than multipart upload workflows.

## Asset retention notes

- Download URLs are temporary and may expire after roughly one hour.
- Batch-generated videos remain downloadable for up to 24 hours after batch completion.
- Copy final assets into project storage immediately after completion.
