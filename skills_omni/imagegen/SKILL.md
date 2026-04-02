---
name: "imagegen"
description: "Image generation workflow skill. Use this skill when the user needs a bitmap image created or edited, such as a photo, illustration, texture, sprite, mockup, composite, or transparent-background cutout. Use it for brand-new raster assets, reference-guided variants, and targeted image edits. Do not use it when the task is better handled by editing existing SVG/vector assets, extending a logo or icon system, or implementing the visual directly in HTML/CSS/canvas."
version: "0.0.1"
category: "frontend"
tags:
  - "imagegen"
  - "image-generation"
  - "image-editing"
  - "raster"
  - "bitmap"
  - "mockups"
  - "transparent-background"
  - "prompting"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/imagegen"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Image Generation Skill

## Overview

This skill packages the upstream `skills/.curated/imagegen` workflow into a reusable operational guide for generating and editing raster images.

Use it when the requested deliverable should be a **bitmap asset** rather than code-native UI, SVG, or another vector-format artifact. Typical outputs include hero images, product shots, concept art, sprites, textures, composites, marketing visuals, mockups, and transparent-background cutouts.

The default path is to use the built-in image workflow. Use the explicit CLI/API fallback path only when the user asks for it or the environment requires it. Preserve provenance, validate outputs before handoff, and keep project-bound assets inside the workspace rather than leaving them only in generated-image default locations.

## When to Use This Skill

Use this skill when:

- You need to generate a brand-new raster image from a text prompt.
- You need to generate image variants guided by one or more reference images.
- You need to edit an existing image while preserving specific regions or visual invariants.
- You need a transparent-background image, cutout, background replacement, or composited bitmap.
- You need multiple bitmap variants for selection, review, or A/B comparison.
- The output will be used as a PNG, JPG, or similar raster asset in a project, document, game, or web experience.

Do **not** use this skill when:

- The task is to edit existing SVG, icon, logo, or illustration-system assets.
- The best output is HTML/CSS/canvas rather than a rendered bitmap.
- The user wants a production-ready vector system, not a raster concept.
- The task is really frontend implementation rather than visual asset creation.

For a fast routing check, see [asset-routing](references/asset-routing.md).

## Operating Table

| Situation | Use this path | Inputs required | Validate before handoff | Fallback trigger |
| --- | --- | --- | --- | --- |
| New image from text only | Built-in generation | Prompt, asset purpose, aspect/composition constraints | Subject fidelity, style, crop, text accuracy if present | User explicitly asks for CLI/API mode |
| New image from references | Built-in generation with image references | Prompt plus labeled reference-image roles | Reference influence is correct without copying unintended details | Local-file or explicit parameter needs require user-approved fallback |
| Edit an existing visible image | Built-in edit flow | Edit target, requested change, invariants | Protected regions remain unchanged, edit scope is narrow | User explicitly asks for CLI/API mode |
| Edit a local file not yet in context | First load/attach image, then built-in edit | Local image plus clear role labeling | Correct image is in context before editing | Built-in path cannot use the file directly and user approves fallback |
| Transparent background or cutout | Generate/edit, then validate alpha edges | Prompt or edit request, background expectations, final format | True transparency, no matte halo, clean crop edges | User needs explicit fallback parameters |
| Many variants | Repeated built-in calls by default | Variant count, what should vary vs stay fixed | Selection criteria, naming, final saved paths | User explicitly chooses CLI batch mode |
| Project-bound final asset | Generate/edit, then copy/move selected final into workspace | Destination path or target folder | Correct file path, non-destructive naming, consuming references updated | None; this is required finalization |
| Request drifts into vector or implementation work | Route to related skill | Target format and implementation intent | Confirm raster is no longer the right output | Immediate route away |

## Workflow

1. **Classify the request.** Decide whether this is `generate` or `edit`, and whether the output is preview-only or project-bound.
2. **Confirm raster is the right medium.** If the user actually needs SVG, HTML/CSS, canvas, or a production logo/icon system, route away instead of generating a bitmap substitute.
3. **Choose execution mode.** Use the built-in image workflow by default. Use the CLI/API fallback only if the user explicitly asks for that path or the environment requires it.
4. **Gather constraints.** Collect the requested subject, intended use, style, composition, mood, exact text, must-keep details, must-avoid details, and desired output format.
5. **Label each input image by role.** Mark every provided image as one of:
   - `reference image`
   - `edit target`
   - `supporting insert/style/compositing input`
6. **Handle local edit targets safely.** If you are staying on the built-in path and the image exists only on the local filesystem, first bring it into conversation context, for example by viewing or attaching it. Do not promise arbitrary direct filesystem editing through the built-in tool.
7. **Normalize the prompt.** Preserve detailed user instructions when they are already specific. Only add minimal augmentation when the prompt is too sparse to succeed.
8. **Generate or edit.** Use one focused request at a time. For batches or variants, keep the shared constraints constant and vary only the requested dimensions.
9. **Review the result.** Validate subject fidelity, protected invariants, text accuracy, crop, aspect ratio, transparency behavior, and any brand-sensitive constraints.
10. **Iterate narrowly.** If something is wrong, change one major variable at a time so you can diagnose whether composition, text, or edit scope caused the issue.
11. **Finalize the file.** If the output belongs in the project, move or copy the selected final into the workspace. Do not leave a project-referenced asset only in a default generated-images location.
12. **Report what was delivered.** State the final prompt used, whether the built-in or fallback path was used, the saved file path, and any remaining caveats.

For edit-specific guidance, see [editing-playbook](references/editing-playbook.md). For output review, see [image-review-checklist](references/image-review-checklist.md).

## Prompt Checklist

Use this compact prompt structure when the request needs more precision:

```text
Use case: <taxonomy slug>
Asset type: <where the image will be used>
Primary request: <main request>
Input images: <Image 1: role; Image 2: role> (optional)
Scene/backdrop: <setting>
Subject: <main subject>
Style/medium: <photo, illustration, 3D, sprite, etc.>
Composition/framing: <wide, close, top-down, placement>
Lighting/mood: <lighting and mood>
Color palette: <palette notes>
Materials/textures: <surface details>
Text (verbatim): "<exact text>"
Constraints: <must keep / must avoid>
Avoid: <negative constraints>
```

### Prompting rules

- Preserve user specificity when it is already strong.
- Add detail only when it materially improves output quality.
- Quote exact text **verbatim** and verify it after generation.
- For tricky text, simplify styling before adding decorative constraints.
- For edits, restate invariants every time: `change only X; keep Y unchanged`.
- For multi-image work, refer to each image by role, not just by filename.
- Do not overload the first prompt with multiple unrelated changes.

For reusable examples, see [hero-image-prompts](examples/hero-image-prompts.md) and [edit-invariants](examples/edit-invariants.md).

## Examples

### Example 1: Generate a landing-page hero image

```text
Use case: product-mockup
Asset type: landing page hero
Primary request: a minimal hero image of a ceramic coffee mug
Style/medium: clean product photography
Composition/framing: wide composition with negative space for page copy
Lighting/mood: soft studio lighting
Constraints: no logos, no text, no watermark
```

Expected outcome: a wide raster hero image suitable for placement in a web page design or marketing mockup.

### Example 2: Replace only the background of a product image

```text
Use case: precise-object-edit
Asset type: product photo background replacement
Primary request: replace only the background with a warm sunset gradient
Constraints: change only the background; keep the product and its edges unchanged; no text; no watermark
```

Expected outcome: the product remains visually intact while the background changes cleanly.

### Example 3: Review a generated image before handoff

```text
Review the selected image using references/image-review-checklist.md, then report pass/fail items for subject fidelity, text accuracy, transparency edges, crop, and final save location.
```

### Example 4: Provide a consistent handoff note

```text
Use examples/handoff-report-template.md to summarize the delivered asset, final prompt, tool path, saved location, and any known caveats.
```

## Best Practices

### Do

- Use the built-in image workflow by default.
- Ask clarifying questions when a missing detail blocks success.
- Preserve detailed user intent instead of “improving” it with unnecessary additions.
- Use single-change iterations when fixing composition drift, text errors, or edit leakage.
- Save project-bound assets into the workspace with stable, descriptive filenames.
- Preserve existing assets non-destructively unless the user explicitly requests replacement.
- Validate transparency, edge quality, and crop boundaries before handoff.
- Explain plainly when policy or moderation constraints block a generation or edit.
- Pause and confirm ambiguous or sensitive image-manipulation requests before proceeding.

### Don't

- Do not automatically switch to CLI/API fallback.
- Do not promise perfect text rendering on the first attempt.
- Do not treat a local file as editable through the built-in path unless it has been brought into context.
- Do not leave production assets only under a default generated-images directory.
- Do not overwrite an existing project asset without explicit approval.
- Do not improvise unsafe workarounds for restricted or deceptive image requests.
- Do not route vector/logo/system-extension tasks through bitmap generation unless the user explicitly wants a raster concept.

### Built-in vs fallback mode

This skill has two top-level modes:

- **Default built-in mode:** preferred for normal generation and editing. Does not require `OPENAI_API_KEY`.
- **Explicit fallback CLI mode:** use `scripts/image_gen.py` only when the user explicitly asks for the CLI path. Requires `OPENAI_API_KEY`.

Fallback-only resources:

- `references/cli.md`
- `references/image-api.md`
- `references/codex-network.md`
- `scripts/image_gen.py`

Do not create one-off replacement runners if the bundled fallback path is insufficient. Ask the user before changing execution strategy.

## Troubleshooting

### Problem: Generated text is misspelled or stylized incorrectly

**Symptoms:** Letters are wrong, decorative styling harms legibility, or exact words do not match the request.

**Solution:** Quote the text verbatim, reduce decorative constraints, specify placement and typography more simply, and iterate on the text requirement only before changing other variables.

### Problem: The edit changed parts of the image that should have remained untouched

**Symptoms:** Background replacement changes the product, object removal alters neighboring details, or a localized edit leaks into protected regions.

**Solution:** Re-run with tighter invariants such as `change only X; keep Y unchanged`, explicitly name the protected subject, and reduce the number of simultaneous changes requested in one pass.

### Problem: Built-in edit cannot use the local file directly

**Symptoms:** The target image is on disk but not visible to the built-in workflow, or the tool cannot act on the file as referenced.

**Solution:** First load or attach the image so it is available in conversation context. If the user needs explicit file-path or CLI-only controls, explain the fallback path and proceed only with user approval.

### Problem: Transparent background is not truly transparent

**Symptoms:** The image has a white or dark matte, visible halos, or edge contamination when placed on another background.

**Solution:** Re-run with clearer cutout or background-removal instructions, verify alpha behavior at edges, and save in a format that preserves transparency. Use the transparency checklist before handoff.

### Problem: The result drifts away from the reference or requested composition

**Symptoms:** Subject identity, framing, palette, or scene intent moves away from what the user asked for.

**Solution:** Strengthen the prompt with role-labeled reference images, restate the key invariants, and change only one compositional variable per iteration.

### Problem: The final asset was not saved into the project workspace

**Symptoms:** The image exists only in a default generated-images path, or downstream files refer to an asset that was never copied into the repo.

**Solution:** Move or copy the selected final into the intended workspace location, use a non-destructive filename, and report that final path in the handoff.

### Problem: The request may be deceptive, harmful, or policy-restricted

**Symptoms:** The user asks for ambiguous identity-sensitive manipulation, harmful deception, or another restricted transformation.

**Solution:** Pause, clarify intent if appropriate, and refuse or limit the request according to policy rather than inventing a workaround.

## Related Skills

- `@doc` - Use when the task becomes documentation, review notes, or content packaging around the image asset.
- `@develop-web-game` - Use when a generated bitmap concept needs implementation inside a game or interactive web experience.
- Frontend or web-implementation skills - Use when the next step is HTML/CSS/canvas implementation rather than raster generation.
- Vector or logo-system skills - Use when the user needs production SVG, iconography, or brand-system extension instead of bitmap output.

## Additional Resources

### Local support pack

- [Image review checklist](references/image-review-checklist.md)
- [Editing playbook](references/editing-playbook.md)
- [Transparency and backgrounds](references/transparency-and-backgrounds.md)
- [Asset routing guide](references/asset-routing.md)
- [Hero image prompt examples](examples/hero-image-prompts.md)
- [Edit invariants examples](examples/edit-invariants.md)
- [Handoff report template](examples/handoff-report-template.md)
- [Routing agent note](agents/imagegen-router.md)

### Upstream and fallback references preserved from the imported skill

- `references/prompting.md` - shared prompting principles
- `references/sample-prompts.md` - shared prompt recipes
- `references/cli.md` - explicit CLI fallback usage
- `references/image-api.md` - fallback API/CLI parameter notes
- `references/codex-network.md` - network or sandbox notes for CLI mode
- `scripts/image_gen.py` - bundled fallback CLI implementation

### Provenance note

This enhanced copy preserves the intent of the upstream curated `imagegen` skill while reorganizing it around execution: activation boundaries, generate-vs-edit decisions, prompt construction, output review, troubleshooting, and final asset handoff.
