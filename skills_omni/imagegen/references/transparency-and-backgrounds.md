# Transparency and Backgrounds

Use this guide for cutouts, transparent PNG-style outputs, and background replacement tasks.

## Common use cases

- remove the background from a product image
- create a transparent-background character or object
- replace a plain background with a new scene or gradient
- isolate a subject for UI, ecommerce, or game usage

## Prompting tips

- State clearly whether you want a transparent background or a replacement background.
- If replacing the background, describe the new setting and its lighting.
- If extracting the subject, specify clean edges and no halo or matte.
- If preserving the subject is critical, say so explicitly: `keep the subject shape and edge detail unchanged`.

## Validation checklist

Check the result against both light and dark backgrounds if possible.

Look for:

- white halo or dark matte around edges
- clipped hair, handles, thin outlines, or semi-transparent details
- leftover original background fragments
- mismatched shadow direction after background replacement
- crop that is too tight for downstream use

## Format guidance

- Use a transparency-preserving format when alpha is required.
- Do not hand off a flattened format if the user asked for transparency.
- If the image is only for review, still mention whether the underlying file preserves transparency.

## Recovery patterns

### Problem: halo around subject

**Symptoms:** The subject looks acceptable on one background but shows a visible outline on another.

**Solution:** Re-run with clearer cutout instructions, emphasize clean alpha edges, and re-check on contrasting backgrounds.

### Problem: subject edges became damaged

**Symptoms:** Hair, handles, transparent materials, or thin outlines are clipped or muddy.

**Solution:** Restate that edge detail must be preserved and narrow the task to extraction or background replacement only.

### Problem: replacement background feels fake

**Symptoms:** Perspective, shadow direction, or lighting no longer matches the subject.

**Solution:** Specify the new environment's lighting, depth, and mood more clearly, and keep the change scoped to the background rather than the whole scene.
