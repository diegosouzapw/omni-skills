# Notebook JSON Safety

Use this reference when editing `.ipynb` files outside Jupyter or another notebook-aware editor.

## Preferred approach

- Prefer the bundled helper script for new notebooks.
- Prefer notebook-aware tools over manual JSON editing.
- If raw edits are unavoidable, make the smallest targeted change possible.

## Fields to preserve

Do not casually break or remove:

- `nbformat`
- `nbformat_minor`
- top-level `metadata`
- `cells`
- per-cell `cell_type`, `source`, `metadata`, and `outputs` where applicable
- cell `id` values when present

## Safe editing rules

- Avoid reserializing the whole file if only one cell needs to change.
- Avoid broad metadata replacement.
- Avoid reordering cells unless it improves the execution narrative.
- Avoid output churn unless outputs are intentionally regenerated or cleared.

## If the notebook breaks

1. Run `scripts/validate_notebook.py` against the file.
2. Compare against a known-good scaffold from `scripts/new_notebook.py`.
3. Revert the broad change and reapply only the narrow fix.
