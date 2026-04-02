# Create, Edit, and Extend Recipes

These recipes are meant to be copied and adapted.

## Create a new video

```bash
python3 skills/sora/scripts/sora.py create \
  --model sora-2 \
  --size 1280x720 \
  --seconds 4 \
  --prompt-file prompt.txt
```

Suggested `prompt.txt`:

```text
Use case: product teaser
Primary request: a close-up of a matte black camera on a pedestal
Action: slow 30-degree orbit over 4 seconds
Camera: 85mm, shallow depth of field, gentle handheld drift
Lighting/mood: soft key light, subtle rim, premium studio feel
Constraints: no logos, no text
```

## Edit an existing shot

```bash
python3 skills/sora/scripts/sora.py edit \
  --video-id vid_123 \
  --prompt-file edit_prompt.txt \
  --no-augment
```

Suggested `edit_prompt.txt`:

```text
Primary request: same shot and framing, switch palette to teal, sand, and rust with warmer backlight
Constraints: keep the subject and camera move unchanged
```

## Extend a completed shot

```bash
python3 skills/sora/scripts/sora.py extend \
  --video-id vid_123 \
  --seconds 8 \
  --prompt-file extend_prompt.txt \
  --no-augment
```

Suggested `extend_prompt.txt`:

```text
Primary request: continue the shot as the subject exits frame left and the camera settles
Constraints: preserve subject identity, motion style, and scene lighting
```

## Create a character reference

```bash
python3 skills/sora/scripts/sora.py create-character \
  --input mossy_teapot_reference.mp4
```

Suggested later generation prompt:

```text
Primary request: Mossy, a moss-covered teapot mascot, hurries through a lantern-lit market at dusk
Camera: cinematic tracking shot, 35mm, shoulder height
Lighting/mood: warm dusk practicals, soft haze
Constraints: keep Mossy's silhouette and moss texture consistent across the shot
```

## Poll and download

```bash
python3 skills/sora/scripts/sora.py poll --video-id vid_123
python3 skills/sora/scripts/sora.py download --video-id vid_123 --output-dir outputs/
```

Use this pattern whenever the asset must be retained locally before temporary URLs expire.
