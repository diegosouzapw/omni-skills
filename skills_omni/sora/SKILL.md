---
name: "sora"
description: "Sora video generation workflow skill. Use this skill when the user needs to create, edit, extend, poll, list, download, or delete Sora videos, create reusable non-human character references, or run a local multi-video queue with the bundled CLI; requires OPENAI_API_KEY and Sora API access."
version: "0.0.1"
category: "cli-automation"
tags:
  - "sora"
  - "video-generation"
  - "video-editing"
  - "prompting"
  - "batch-planning"
  - "openai"
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
upstream_skill: "skills/sora"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Sora Video Generation Skill

## Overview

This skill packages the upstream `skills/.curated/sora` workflow from `https://github.com/openai/skills.git` into the Omni Skills format while preserving provenance and execution intent.

Use it when an operator needs a practical Sora workflow for generating or managing video jobs, including create, edit, extend, character-reference creation, polling, downloading outputs, or planning higher-volume execution.

The bundled support pack is meant to be operational, not decorative: it helps the agent choose the right path, run the local workflow safely, troubleshoot common failures, and hand off results with enough context for reviewers or downstream agents.

> Note: `@sora` is a skill tag in prompts. It is not a shell command.

## When to Use This Skill

### Use this skill when

- You need to generate a new Sora video from a prompt.
- You need to edit an existing generated video while preserving most of the shot.
- You need to extend a completed video forward in time.
- You need to create a reusable non-human character reference from a short source clip.
- You need to poll job status, list jobs, or download generated assets such as video, thumbnail, or spritesheet.
- You need to run a local concurrent queue now with the bundled CLI.
- You need to decide between the local queue flow and the official OpenAI Batch API.

### Do not use this skill when

- The task is general video post-production unrelated to Sora generation.
- The work is primarily app integration, backend architecture, or network debugging beyond the Sora workflow itself.
- The user lacks Sora API access and the request depends on immediate live execution.
- The request involves real people, copyrighted characters or music, or other disallowed inputs called out in the guardrails below.

## Operating Table

| Need this outcome | Open this file first | Why |
| --- | --- | --- |
| Run the CLI safely | `references/cli.md` | Fastest path to create, edit, extend, poll, download, and local queue commands |
| Check model, size, duration, and extension limits | `references/parameter-matrix.md` | Prevents invalid combinations before a live call |
| Decide create vs edit vs extend vs character vs batch | `examples/batch-vs-local-queue.md` | Clarifies routing and avoids promising unsupported behavior |
| Improve prompts without over-specifying | `references/prompting.md` | Gives structured prompting and iteration guidance |
| See copy-paste workflow patterns | `examples/create-edit-extend-recipes.md` | Provides ready-to-adapt command and prompt-file examples |
| Troubleshoot auth, validation, polling, or downloads | `references/error-matrix.md` | Maps common failures to likely causes and first fixes |
| Review provenance and import state | `scripts/omni_import_print_origin.py` | Confirms source repository, branch, commit, and imported path |
| Prepare a reviewer or downstream handoff | `examples/handoff-template.md` | Standardizes prompts, parameters, IDs, paths, and open risks |

## Workflow

1. **Route the request correctly.** Decide whether the user needs `create`, `edit`, `extend`, `create-character`, `status`/`poll`, `download`, local `create-batch`, or the official Batch API.
2. **Run preflight checks.** Confirm `OPENAI_API_KEY` is set locally, confirm the account has Sora access, and verify that the requested model, size, duration, and inputs are allowed.
3. **Collect execution inputs.** Gather the prompt, target model, output size, `seconds`, source video or image references if any, character IDs if any, and desired output location.
4. **Structure the prompt.** Prefer the packaged prompt structure and use `--prompt-file` for long or structured prompts to avoid shell quoting problems. If the prompt is already structured, use `--no-augment`.
5. **Submit the job with the bundled CLI.** Prefer `scripts/sora.py` for deterministic local execution. Do not modify the script unless the user explicitly asks for script changes.
6. **Handle async execution explicitly.** For non-immediate workflows, poll until the video reaches a terminal state before claiming success or attempting download.
7. **Download assets promptly.** Save the video, thumbnail, and spritesheet locally before URLs expire. Treat remote URLs as temporary, not durable storage.
8. **Record provenance and runtime details.** Capture the prompt used, key parameters, job or video IDs, output paths, and any deviations or failures for reproducibility.
9. **Iterate narrowly.** Prefer one targeted change per follow-up iteration. Use `edit` for localized changes and `extend` for continuation in time.
10. **Handoff cleanly if needed.** If the task shifts into another specialization, keep provenance, prompts, parameters, and video IDs in the handoff.

### Routing notes

- If the user has a short non-human reference clip they want to reuse across shots, use `create-character`.
- If the user has a completed video and wants a continuation, use `extend`.
- If the user has a completed video and wants a targeted revision while keeping the shot, use `edit`.
- If the user has a video ID and needs state or assets, use `status`, `poll`, or `download`.
- If the user needs several renders started immediately from the local environment, use `create-batch`.
- If the user needs offline or larger-scale asynchronous processing, use the official Batch API path described in `references/video-api.md`.

> Important: `create-batch` in `scripts/sora.py` is a local concurrent queue. It is not the official OpenAI Batch API.

## Authentication and Security Notes

- `OPENAI_API_KEY` must be configured locally before live API calls.
- Never ask the user to paste the full API key, bearer token, or raw authorization headers into chat.
- If the key is missing, tell the user to create or locate it in the OpenAI platform and set it as a local environment variable.
- Confirm readiness without exposing secrets.
- Downloaded outputs may contain sensitive project assets; store them only in approved project locations.
- For support or handoff, share prompts, parameters, job IDs, and output paths rather than secrets.

## Examples

### Example 1: Generate a new video with a prompt file

```bash
python3 skills/sora/scripts/sora.py create \
  --model sora-2 \
  --size 1280x720 \
  --seconds 4 \
  --prompt-file prompt.txt
```

**Expected outcome:** A new async Sora video job is created and returns a video or job ID that can be polled and later downloaded.

### Example 2: Edit an existing video while preserving shot structure

```bash
python3 skills/sora/scripts/sora.py edit \
  --video-id vid_123 \
  --prompt-file edit_prompt.txt \
  --no-augment
```

**Expected outcome:** A new edited result is created from the existing generated video, with the prompt focused on the requested change only.

### Example 3: Extend a completed video

```bash
python3 skills/sora/scripts/sora.py extend \
  --video-id vid_123 \
  --seconds 8 \
  --prompt-file extend_prompt.txt \
  --no-augment
```

**Expected outcome:** The original clip is continued forward in time, subject to extension limits.

### Example 4: Create a reusable non-human character reference

```bash
python3 skills/sora/scripts/sora.py create-character \
  --input character_reference.mp4
```

**Expected outcome:** A character asset is created for later reuse in compatible generation flows.

### Example 5: Poll, then download assets

```bash
python3 skills/sora/scripts/sora.py poll --video-id vid_123
python3 skills/sora/scripts/sora.py download --video-id vid_123 --output-dir outputs/
```

**Expected outcome:** The poll command waits for terminal state, and the download step saves available assets locally before temporary URLs expire.

### Example 6: Review provenance before handoff

```bash
python3 skills/sora/scripts/omni_import_print_origin.py
```

**Expected outcome:** Prints source repository, branch, commit, and import path so reviewers can audit lineage quickly.

## Best Practices

### Do

- Prefer the bundled CLI for local runs.
- Use `--prompt-file` for long prompts or structured prompt packets.
- Keep prompts scoped to one main action and one main camera move per shot.
- Set `size` and `seconds` explicitly with parameters instead of relying on prose.
- Record job IDs, output paths, and key parameters for every meaningful run.
- Download assets promptly because generated URLs are temporary.
- Use `edit` for targeted revisions and `extend` for time continuation.
- Reduce concurrency or retry with backoff when rate limits or transient failures occur.
- Use the official OpenAI Python SDK if operating below the CLI layer.

### Do not

- Do not ask users to paste secrets into chat.
- Do not promise Batch API semantics when only local `create-batch` is available.
- Do not modify `scripts/sora.py` unless the user asks for code changes.
- Do not use real people, copyrighted characters, or copyrighted music.
- Do not attempt character uploads for human subjects.
- Do not assume remote asset URLs will still work later; copy outputs into project storage.

### Defaults and constraints

- Default model: `sora-2`
- Higher-fidelity option: `sora-2-pro`
- Default size: `1280x720`
- Allowed durations: `4`, `8`, `12`, `16`, `20`
- `sora-2-pro` is required for `1920x1080` and `1080x1920`
- Use up to two characters per generation
- Input reference images should be `jpg`, `png`, or `webp` and should match the target size when possible
- Character uploads work best with short `2`-`4` second non-human MP4 clips
- Extensions can add up to `20` seconds each, up to six times per source video, for a maximum total length of `120` seconds
- Extensions do not support characters or image references
- Video creation is asynchronous; poll before download

### Prompt augmentation template

Use this structure when the request is underspecified but does not justify a blocking clarification:

```text
Use case: <where the clip will be used>
Primary request: <user's main prompt>
Scene/background: <location, time of day, atmosphere>
Subject: <main subject>
Action: <single clear action>
Camera: <shot type, angle, motion>
Lighting/mood: <lighting + mood>
Color palette: <3-5 color anchors>
Style/format: <film/animation/format cues>
Timing/beats: <counts or beats>
Audio: <ambient cue / music / voiceover if requested>
Text (verbatim): "<exact text>"
Dialogue:
<dialogue>
- Speaker: "Short line."
</dialogue>
Constraints: <must keep/must avoid>
Avoid: <negative constraints>
```

Augmentation rules:

- Make implicit details explicit, but do not invent new creative requirements.
- For edits, state invariants directly, such as "same shot, change only X".
- Mention character names verbatim when using character references.
- If a missing detail blocks success, ask a focused question; otherwise proceed.
- If a structured prompt file is already prepared, pass `--no-augment`.

### Guardrails

- Only produce content suitable for audiences under 18.
- No copyrighted characters or copyrighted music.
- No real people, including public figures.
- Input images with human faces are rejected.
- Character uploads in this workflow are for non-human subjects only.

## Troubleshooting

### Problem: Authentication fails with 401 or 403

**Symptoms:** The command fails immediately with an authentication or permission error, or the account can call the API generally but not Sora models.

**Solution:** Verify that `OPENAI_API_KEY` is set locally, confirm the key is valid, and confirm the account or organization has Sora model access. Do not ask the user to paste the full key into chat.

### Problem: The request fails with a 400 validation error

**Symptoms:** The API rejects the request before generation starts, often after passing a malformed parameter set.

**Solution:** Check the requested model, size, and `seconds` combination against `references/parameter-matrix.md`. Also verify input formats, whether the request is using a supported edit or extension flow, and whether the prompt references unsupported assumptions.

### Problem: Polling never reaches a successful final asset

**Symptoms:** The job remains queued, processing, or repeatedly nonterminal longer than expected.

**Solution:** Keep polling until a terminal state, but also check for account access issues, transient service issues, or excessive local concurrency. Reduce queue pressure, retry with backoff for transient failures, and distinguish local queue behavior from official Batch API expectations.

### Problem: Download fails or URLs have expired

**Symptoms:** The video completed earlier, but download links no longer work or return authorization or not-found style failures.

**Solution:** Poll to completion first, then download immediately to local storage. Treat download URLs as temporary. If the workflow supports renewed retrieval, use that path; otherwise re-run the retrieval flow as documented in the packaged references.

### Problem: Local `uv` or environment setup fails

**Symptoms:** The script does not run locally due to cache permissions or environment issues.

**Solution:** If `uv` cache permissions are the issue, set `UV_CACHE_DIR=/tmp/uv-cache` and retry. Also confirm the Python environment and local dependencies expected by the packaged workflow.

### Problem: Output quality is inconsistent across iterations

**Symptoms:** Revisions drift too much between shots, edits change too many things, or follow-ups lose continuity.

**Solution:** Narrow each iteration to a single change, state invariants explicitly, create character references before multi-shot continuity work, and use prompt files so the exact prompt can be reused and audited.

### Problem: The operator answered too generically and lost the workflow context

**Symptoms:** The response ignores the packaged workflow, provenance, or support files and reads like generic Sora advice.

**Solution:** Re-open the local support pack, use the operating table to choose the right references, and restate provenance before continuing. Preserve the imported workflow intent rather than replacing it with generic advice.

## Related Skills

- `@doc` - Hand off when the work becomes documentation packaging, review notes, or formal handoff writing.
- `@chatgpt-apps` - Hand off when the task becomes application integration or productized user-facing workflow work.
- `@aspnet-core` - Hand off when the task turns into backend implementation or service integration in an ASP.NET Core codebase.
- `@develop-web-game` - Only use if the request evolves into a browser-based interactive experience rather than Sora workflow execution.

When handing off, preserve provenance, prompts, parameters, job IDs, and output paths so the next skill does not start blind.

## Additional Resources

### Core execution references

- [CLI reference](references/cli.md) - Commands for create, edit, extend, create-character, poll, download, and local queue flows.
- [Video API reference](references/video-api.md) - Models, sizes, durations, extensions, and official Batch API notes.
- [Prompting guide](references/prompting.md) - Structured prompting, edit invariants, continuity, and iteration guidance.
- [Troubleshooting guide](references/troubleshooting.md) - Recovery notes for common API and local runtime failures.
- [Network and sandbox notes](references/codex-network.md) - Useful when local approvals or network boundaries affect execution.

### Prompt and template references

- [Sample prompts](references/sample-prompts.md) - Short ready-to-adapt prompt patterns.
- [Cinematic shots](references/cinematic-shots.md) - Filmic shot templates and starting points.
- [Social ads](references/social-ads.md) - Prompt patterns for short ad-style clips.
- [Create, edit, and extend recipes](examples/create-edit-extend-recipes.md) - Copy-paste command patterns with prompt-file usage.

### Decision and troubleshooting aids

- [Parameter matrix](references/parameter-matrix.md) - Quick operator reference for valid combinations and key limits.
- [Error matrix](references/error-matrix.md) - Common error classes, likely causes, and first-response fixes.
- [Batch vs local queue](examples/batch-vs-local-queue.md) - Decision guide for immediate local fan-out versus official Batch API.
- [Handoff template](examples/handoff-template.md) - Reviewer and downstream-agent packet for reproducibility.

### Provenance and import-support files

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)
