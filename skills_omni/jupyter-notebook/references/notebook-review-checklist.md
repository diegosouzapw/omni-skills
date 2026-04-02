# Notebook Review Checklist

Use this checklist before handoff, review, or merge.

## Structure

- The title reflects the actual notebook purpose
- Placeholder text and empty cells are removed
- The notebook reads clearly from top to bottom
- Markdown explains why each section exists

## Reproducibility

- Execution order is sensible
- Hidden state assumptions were removed where possible
- Validation status is stated explicitly
- If not executed, the notebook includes local validation assumptions

## Outputs

- Outputs are concise and useful
- No huge binary blobs or irrelevant noise remain
- No stale results are presented as current
- Sensitive data or secrets are not embedded in outputs

## Metadata and file health

- The notebook still parses correctly
- Metadata churn is minimal
- Kernel assumptions are not changed silently
- Broad raw JSON rewrites were avoided

## Final handoff

- The notebook path is clear
- Any execution limitations are documented
- The recipient can tell whether the notebook is ready to run, review, or extend
