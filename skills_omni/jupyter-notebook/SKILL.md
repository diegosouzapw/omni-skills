---
name: "jupyter-notebook"
description: "Jupyter notebook workflow skill. Use this skill when you need to create, scaffold, edit, or safely refactor `.ipynb` notebooks for experiments, exploratory analysis, or tutorials using the bundled templates, helper script, validation guidance, and review checklist."
version: "0.0.1"
category: "cli-automation"
tags:
  - "jupyter-notebook"
  - "jupyter"
  - "notebook"
  - "ipynb"
  - "experiments"
  - "tutorials"
  - "reproducibility"
  - "notebook-authoring"
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
upstream_skill: "skills/jupyter-notebook"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Jupyter Notebook Skill

## Overview

Use this skill to create, scaffold, edit, or refactor Jupyter notebooks (`.ipynb`) for two primary modes:

- **Experiments**: exploratory analysis, comparisons, ablations, and hypothesis-driven work
- **Tutorials**: instructional, step-by-step notebooks for readers who need context and explanation

This skill preserves the upstream notebook workflow and its support pack while presenting it in a more operational form for agents. Prefer the bundled templates and the helper script instead of hand-authoring notebook JSON. When editing an existing notebook, make narrow, schema-safe changes and validate the result before handoff.

This skill is for **notebook authoring and notebook-focused refactoring**. It is not the primary skill for full environment provisioning, production deployment, large-scale pipelines, or hardened Jupyter server administration.

## When to Use This Skill

Use this skill when the task is primarily about the notebook itself.

### Good fits

- Create a new `.ipynb` notebook from scratch
- Scaffold an experiment notebook with a clean title and starter structure
- Scaffold a tutorial notebook for teaching or internal onboarding
- Convert rough notes or a script into a readable notebook narrative
- Refactor an existing notebook to improve reproducibility, readability, or execution order
- Clean up a notebook before review, sharing, or handoff
- Review notebook structure, outputs, metadata, and handoff quality

### Not the best fit

Use another skill or hand off when the real task becomes:

- deep Python environment repair or dependency management
- Jupyter server deployment, auth, tokens, or network exposure hardening
- large ETL/data engineering workflows
- packaging the work as an app, service, or production pipeline
- debugging a complex codebase unrelated to notebook structure

### Quick decision guide

| If the request is mostly about... | Use notebook kind | Primary reference |
| --- | --- | --- |
| exploration, comparisons, measurements, hypotheses | `experiment` | `references/experiment-patterns.md` |
| teaching, onboarding, walkthroughs, explanation | `tutorial` | `references/tutorial-patterns.md` |
| improving an existing notebook without changing its purpose much | refactor existing | `references/notebook-json-safety.md` |

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Create a new notebook | `scripts/new_notebook.py` | Generates a valid notebook from a bundled template instead of hand-editing JSON |
| Choose the right notebook style | `references/experiment-patterns.md` or `references/tutorial-patterns.md` | Keeps the notebook aligned to the user goal |
| Edit an existing `.ipynb` safely | `references/notebook-json-safety.md` | Reduces corruption risk and unnecessary diff churn |
| Confirm kernel and environment expectations | `references/kernel-and-environment.md` | Helps prevent "wrong interpreter" and missing-kernel failures |
| Validate notebook file structure | `scripts/validate_notebook.py` | Catches malformed JSON or schema issues before handoff |
| Final review before handoff | `references/notebook-review-checklist.md` | Ensures readability, reproducibility, and output hygiene |
| Rich outputs do not render or notebook is untrusted | `references/notebook-trust-and-security.md` | Explains trust behavior and safe handling of external notebooks |
| Verify source/provenance of this packaged skill | `scripts/omni_import_print_origin.py` | Confirms upstream lineage when review requires provenance |

## Workflow

1. **Lock the intent**  
   Determine whether the notebook is an `experiment`, a `tutorial`, or a refactor of an existing notebook. Record the objective, intended audience, and definition of done.

2. **Pick the safest starting point**  
   - For a new notebook, use the helper script and bundled template.
   - For an existing notebook, inspect the current structure and make targeted edits.
   - Avoid broad raw JSON rewrites unless there is no safer option.

3. **Scaffold the notebook**  
   Use the helper script to generate a clean starting notebook.

   ```bash
   uv run --python 3.12 python "$JUPYTER_NOTEBOOK_CLI" \
     --kind experiment \
     --title "Compare prompt variants" \
     --out output/jupyter-notebook/compare-prompt-variants.ipynb
   ```

   ```bash
   uv run --python 3.12 python "$JUPYTER_NOTEBOOK_CLI" \
     --kind tutorial \
     --title "Intro to embeddings" \
     --out output/jupyter-notebook/intro-to-embeddings.ipynb
   ```

4. **Build the notebook as a top-to-bottom story**  
   Keep each code cell focused on one step. Add concise markdown cells that explain the purpose, assumptions, and expected result. Prefer small deterministic outputs over noisy or highly stateful cells.

5. **Apply the correct authoring pattern**  
   - For experiments, use `references/experiment-patterns.md`
   - For tutorials, use `references/tutorial-patterns.md`

6. **Check kernel and environment assumptions**  
   Verify that the notebook metadata and intended execution environment match. If you cannot execute locally, state the expected Python version, key dependencies, and validation command or workflow needed by the recipient.

7. **Edit safely**  
   When working outside Jupyter, preserve notebook structure and metadata. Prefer minimal diffs. Do not reorder cells, rewrite outputs, or replace metadata wholesale unless there is a concrete reason.

8. **Validate before handoff**  
   - If possible, restart the kernel and run all cells top to bottom
   - If execution is not possible, say so explicitly
   - Validate notebook structure with `scripts/validate_notebook.py` when available
   - Use `references/notebook-review-checklist.md` for the final pass

9. **Prepare the handoff**  
   Confirm that the notebook title is updated, placeholders are removed, the execution story is coherent, and any remaining local-only assumptions are documented.

### Decision rules

- If the request is exploratory, analytical, or hypothesis-driven, choose `experiment`.
- If the request is instructional, step-by-step, or audience-specific, choose `tutorial`.
- If editing an existing notebook, preserve intent and improve structure before changing scope.

## Examples

### Example 1: Create a new experiment notebook

```bash
uv run --python 3.12 python "$JUPYTER_NOTEBOOK_CLI" \
  --kind experiment \
  --title "Ablation: temperature vs. answer length" \
  --out output/jupyter-notebook/ablation-temperature-answer-length.ipynb
```

Expected result: a new experiment notebook with a valid `.ipynb` structure and the requested title.

### Example 2: Create a tutorial notebook

```bash
uv run --python 3.12 python "$JUPYTER_NOTEBOOK_CLI" \
  --kind tutorial \
  --title "Getting started with vector search" \
  --out output/jupyter-notebook/getting-started-vector-search.ipynb
```

Expected result: a tutorial-oriented notebook scaffold that is easier to extend into a reader-facing walkthrough.

### Example 3: Validate an edited notebook file

```bash
python3 skills/jupyter-notebook/scripts/validate_notebook.py \
  output/jupyter-notebook/getting-started-vector-search.ipynb
```

Expected result: confirmation that the notebook parses correctly, or a clear error message if the JSON/schema is malformed.

### Example 4: Ask for a notebook refactor with explicit constraints

```text
Use @jupyter-notebook to refactor this existing .ipynb into a clearer tutorial. Keep the core code intact, reduce output noise, preserve metadata, and state whether you were able to restart-and-run the notebook.
```

Expected result: a notebook-focused refactor with explicit validation status.

See also:

- `examples/experiment-sample.md`
- `examples/tutorial-sample.md`

## Best Practices

### Do

- Use the helper script and bundled templates for new notebooks
- Keep notebooks readable from top to bottom without relying on hidden state
- Keep code cells small and purpose-specific
- Add markdown that explains intent, assumptions, and expected outcomes
- Prefer concise, reproducible outputs over large noisy dumps
- Preserve notebook metadata and structure when making raw edits
- Validate by restarting the kernel and running all cells when the environment allows
- State execution limits clearly when you cannot validate locally
- Remove placeholder cells, stale outputs, or misleading results before handoff
- Review notebooks from external sources before executing them

### Don't

- Do not hand-author large notebook JSON files when the template script can scaffold them
- Do not claim reproducibility if you did not actually validate execution
- Do not blindly trust or execute third-party notebooks
- Do not break `nbformat`, `cells`, metadata, or cell IDs through broad rewrite operations
- Do not leave secrets, huge binary outputs, or irrelevant artifacts in the final notebook
- Do not change kernel assumptions silently

## Troubleshooting

### Problem: The notebook no longer opens after editing

**Symptoms:** Jupyter refuses to open the file, or reports invalid notebook JSON.

**Solution:** Validate the file with `scripts/validate_notebook.py`. If needed, review `references/notebook-json-safety.md` and compare the edited notebook against a known-good template. Undo broad JSON changes and re-apply only the minimal targeted edits.

### Problem: The notebook opens, but the expected kernel is missing

**Symptoms:** The notebook cannot run, the selected interpreter is wrong, or Jupyter shows no suitable kernel for the intended environment.

**Solution:** Review `references/kernel-and-environment.md`. Confirm the intended Python environment and kernel name. If execution is out of scope in the current environment, document the exact Python version and dependency assumptions needed for local validation.

### Problem: Outputs, HTML, or widgets do not render as expected

**Symptoms:** Rich outputs appear sanitized, inactive, or missing after opening a notebook.

**Solution:** Review `references/notebook-trust-and-security.md`. Determine whether the notebook is untrusted. Do not blindly trust external notebooks; inspect code cells first, then regenerate outputs from a trusted local run when appropriate.

### Problem: The notebook works only when cells are run in a certain hidden order

**Symptoms:** Running cells individually seems fine, but restart-and-run-all fails or produces different results.

**Solution:** Refactor the notebook into a clean top-to-bottom execution flow. Move setup earlier, remove hidden state assumptions, and rerun the notebook from a fresh kernel.

### Problem: Review diffs are huge and hard to inspect

**Symptoms:** Small content changes produced large notebook diffs, noisy outputs, or metadata churn.

**Solution:** Make narrower edits, avoid unnecessary output regeneration, and preserve existing metadata unless there is a reason to change it. Use `references/notebook-review-checklist.md` to trim output noise before handoff.

## Related Skills

- `@doc` - Use when the work shifts from notebook authoring to documentation-only polishing or long-form instructional writing.
- `@chatgpt-apps` - Use when the notebook prototype is becoming an application or product surface.
- `@aspnet-core` - Use when the real task becomes backend or service implementation beyond notebook exploration.
- `@develop-web-game` - Use only if the task has clearly shifted into interactive application work rather than notebook authoring.

## Additional Resources

### Core operational files

- [Experiment patterns](references/experiment-patterns.md)
- [Tutorial patterns](references/tutorial-patterns.md)
- [Notebook structure reference](references/notebook-structure.md)
- [Notebook JSON safety](references/notebook-json-safety.md)
- [Kernel and environment notes](references/kernel-and-environment.md)
- [Notebook trust and security](references/notebook-trust-and-security.md)
- [Notebook review checklist](references/notebook-review-checklist.md)
- [Quality checklist](references/quality-checklist.md)
- [Example experiment request/response](examples/experiment-sample.md)
- [Example tutorial request/response](examples/tutorial-sample.md)
- [Notebook validator](scripts/validate_notebook.py)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Reference map from the imported skill

- `references/experiment-patterns.md`: experiment structure and heuristics
- `references/tutorial-patterns.md`: tutorial structure and teaching flow
- `references/notebook-structure.md`: notebook JSON shape and safe editing rules
- `references/quality-checklist.md`: final validation checklist

### Skill path (set once)

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export JUPYTER_NOTEBOOK_CLI="$CODEX_HOME/skills/jupyter-notebook/scripts/new_notebook.py"
```

User-scoped skills install under `$CODEX_HOME/skills` by default.

### Templates and helper script

- Templates live in `assets/experiment-template.ipynb` and `assets/tutorial-template.ipynb`
- The helper script loads a template, updates the title cell, and writes a notebook
- Installed helper path: `$JUPYTER_NOTEBOOK_CLI`

### Temp and output conventions

- Use `tmp/jupyter-notebook/` for intermediate files and remove them when done
- Write final artifacts under `output/jupyter-notebook/` when working in this repo
- Prefer stable descriptive filenames such as `ablation-temperature.ipynb`

### Provenance and import-support files

These files remain useful when a reviewer needs import lineage or packaging context:

- `references/omni-import-checklist.md`
- `references/omni-import-rubric.md`
- `references/omni-import-playbook.md`
- `references/omni-import-source-summary.md`
- `examples/omni-import-operator-packet.md`
- `examples/omni-import-prompt-template.md`
- `agents/omni-import-router.md`
