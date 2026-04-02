---
name: speech
description: "Speech Generation Skill workflow skill. Use this skill when the user needs the user asks for text-to-speech narration or voiceover, accessibility reads, audio prompts, or batch speech generation via the OpenAI Audio API; run the bundled CLI (scripts/texttospeech.py) with built-in voices and require OPENAIAPIKEY for live calls. Custom voice creation is out of scope and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["speech", "the", "user", "asks", "for", "text-to-speech", "narration", "voiceover"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "openai"
date_added: "2026-04-02"
date_updated: "2026-04-02"
---

# Speech Generation Skill

## Overview

This public intake copy packages `skills/.curated/speech` from `https://github.com/openai/skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Speech Generation Skill Generate spoken audio for the current project (narration, product demo voiceover, IVR prompts, accessibility reads). Defaults to gpt-4o-mini-tts-2025-12-15 and built-in voices, and prefers the bundled CLI for deterministic, reproducible runs.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Decision tree (single vs batch), Temp and output conventions, Environment, Instruction augmentation, Instructioning best practices (short list), Guidance by use case.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Generate a single spoken clip from text
- Generate a batch of prompts (many lines, many files)
- Use when the request clearly matches the imported source intent: the user asks for text-to-speech narration or voiceover, accessibility reads, audio prompts, or batch speech generation via the OpenAI Audio API; run the bundled CLI (scripts/texttospeech.py) with built-in voices and....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Decide intent: single vs batch (see decision tree above).
2. Collect inputs up front: exact text (verbatim), desired voice, delivery style, format, and any constraints.
3. If batch: write a temporary JSONL under tmp/ (one job per line), run once, then delete the JSONL.
4. Augment instructions into a short labeled spec without rewriting the input text.
5. Run the bundled CLI (scripts/texttospeech.py) with sensible defaults (see references/cli.md).
6. For important clips, validate: intelligibility, pacing, pronunciation, and adherence to constraints.
7. Iterate with a single targeted change (voice, speed, or instructions), then re-check.

### Imported Workflow Notes

#### Imported: Workflow

1. Decide intent: single vs batch (see decision tree above).
2. Collect inputs up front: exact text (verbatim), desired voice, delivery style, format, and any constraints.
3. If batch: write a temporary JSONL under tmp/ (one job per line), run once, then delete the JSONL.
4. Augment instructions into a short labeled spec without rewriting the input text.
5. Run the bundled CLI (`scripts/text_to_speech.py`) with sensible defaults (see references/cli.md).
6. For important clips, validate: intelligibility, pacing, pronunciation, and adherence to constraints.
7. Iterate with a single targeted change (voice, speed, or instructions), then re-check.
8. Save/return final outputs and note the final text + instructions + flags used.

#### Imported: Dependencies (install if missing)

Prefer `uv` for dependency management.

Python packages:
```
uv pip install openai
```
If `uv` is unavailable:
```
python3 -m pip install openai
```

#### Imported: Decision tree (single vs batch)

- If the user provides multiple lines/prompts or wants many outputs -> **batch**
- Else -> **single**

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @speech to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/speech/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/speech/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @speech using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Single example (narration)
```
Input text: "Welcome to the demo. Today we'll show how it works."
Instructions:
Voice Affect: Warm and composed.
Tone: Friendly and confident.
Pacing: Steady and moderate.
Emphasis: Stress "demo" and "show".
```

### Batch example (IVR prompts)
```
{"input":"Thank you for calling. Please hold.","voice":"cedar","response_format":"mp3","out":"hold.mp3"}
{"input":"For sales, press 1. For support, press 2.","voice":"marin","instructions":"Tone: Clear and neutral. Pacing: Slow.","response_format":"wav"}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use gpt-4o-mini-tts-2025-12-15 unless the user requests another model.
- Default voice: cedar. If the user wants a brighter tone, prefer marin.
- Built-in voices only. Custom voices are out of scope for this skill.
- instructions are supported for GPT-4o mini TTS models, but not for tts-1 or tts-1-hd.
- Input length must be <= 4096 characters per request. Split longer text into chunks.
- Enforce 50 requests/minute. The CLI caps --rpm at 50.
- Require OPENAIAPIKEY before any live API call.

### Imported Operating Notes

#### Imported: Defaults & rules

- Use `gpt-4o-mini-tts-2025-12-15` unless the user requests another model.
- Default voice: `cedar`. If the user wants a brighter tone, prefer `marin`.
- Built-in voices only. Custom voices are out of scope for this skill.
- `instructions` are supported for GPT-4o mini TTS models, but not for `tts-1` or `tts-1-hd`.
- Input length must be <= 4096 characters per request. Split longer text into chunks.
- Enforce 50 requests/minute. The CLI caps `--rpm` at 50.
- Require `OPENAI_API_KEY` before any live API call.
- Provide a clear disclosure to end users that the voice is AI-generated.
- Use the OpenAI Python SDK (`openai` package) for all API calls; do not use raw HTTP.
- Prefer the bundled CLI (`scripts/text_to_speech.py`) over writing new one-off scripts.
- Never modify `scripts/text_to_speech.py`. If something is missing, ask the user before doing anything else.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `skills/.curated/speech`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@aspnet-core` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@chatgpt-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@develop-web-game` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@doc` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/accessibility.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Reference map

- **`references/cli.md`**: how to run speech generation/batches via `scripts/text_to_speech.py` (commands, flags, recipes).
- **`references/audio-api.md`**: API parameters, limits, voice list.
- **`references/voice-directions.md`**: instruction patterns and examples.
- **`references/prompting.md`**: instruction best practices (structure, constraints, iteration patterns).
- **`references/sample-prompts.md`**: copy/paste instruction recipes (examples only; no extra theory).
- **`references/narration.md`**: templates + defaults for narration and explainers.
- **`references/voiceover.md`**: templates + defaults for product demo voiceovers.
- **`references/ivr.md`**: templates + defaults for IVR/phone prompts.
- **`references/accessibility.md`**: templates + defaults for accessibility reads.
- **`references/codex-network.md`**: environment/sandbox/network-approval troubleshooting.

#### Imported: Temp and output conventions

- Use `tmp/speech/` for intermediate files (for example JSONL batches); delete when done.
- Write final artifacts under `output/speech/` when working in this repo.
- Use `--out` or `--out-dir` to control output paths; keep filenames stable and descriptive.

#### Imported: Environment

- `OPENAI_API_KEY` must be set for live API calls.

If the key is missing, give the user these steps:
1. Create an API key in the OpenAI platform UI: https://platform.openai.com/api-keys
2. Set `OPENAI_API_KEY` as an environment variable in their system.
3. Offer to guide them through setting the environment variable for their OS/shell if needed.
- Never ask the user to paste the full key in chat. Ask them to set it locally and confirm when ready.

If installation isn't possible in this environment, tell the user which dependency is missing and how to install it locally.

#### Imported: Instruction augmentation

Reformat user direction into a short, labeled spec. Only make implicit details explicit; do not invent new requirements.

Quick clarification (augmentation vs invention):
- If the user says "narration for a demo", you may add implied delivery constraints (clear, steady pacing, friendly tone).
- Do not introduce a new persona, accent, or emotional style the user did not request.

Template (include only relevant lines):
```
Voice Affect: <overall character and texture of the voice>
Tone: <attitude, formality, warmth>
Pacing: <slow, steady, brisk>
Emotion: <key emotions to convey>
Pronunciation: <words to enunciate or emphasize>
Pauses: <where to add intentional pauses>
Emphasis: <key words or phrases to stress>
Delivery: <cadence or rhythm notes>
```

Augmentation rules:
- Keep it short; add only details the user already implied or provided elsewhere.
- Do not rewrite the input text.
- If any critical detail is missing and blocks success, ask a question; otherwise proceed.

#### Imported: Instructioning best practices (short list)

- Structure directions as: affect -> tone -> pacing -> emotion -> pronunciation/pauses -> emphasis.
- Keep 4 to 8 short lines; avoid conflicting guidance.
- For names/acronyms, add pronunciation hints (e.g., "enunciate A-I") or supply a phonetic spelling in the text.
- For edits/iterations, repeat invariants (e.g., "keep pacing steady") to reduce drift.
- Iterate with single-change follow-ups.

More principles: `references/prompting.md`. Copy/paste specs: `references/sample-prompts.md`.

#### Imported: Guidance by use case

Use these modules when the request is for a specific delivery style. They provide targeted defaults and templates.
- Narration / explainer: `references/narration.md`
- Product demo / voiceover: `references/voiceover.md`
- IVR / phone prompts: `references/ivr.md`
- Accessibility reads: `references/accessibility.md`

#### Imported: CLI + environment notes

- CLI commands + examples: `references/cli.md`
- API parameter quick reference: `references/audio-api.md`
- Instruction patterns + examples: `references/voice-directions.md`
- If network approvals / sandbox settings are getting in the way: `references/codex-network.md`
