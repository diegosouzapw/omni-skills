# LLM-Safe Querying

Use this guide when summarizing ownership outputs for prompts, review packets, or chat-based follow-up.

## Default rule

Prefer bounded, machine-readable slices over raw history dumps.

## Recommended inputs for LLMs

Good prompt inputs:

- `summary.json`
- targeted `query_ownership.py` results
- small JSON slices for one person, one file, one community, or one summary section
- short provenance notes describing branch, time window, and attribution mode

Avoid loading by default:

- full `commits.jsonl`
- large graph payloads
- raw sensitive file contents
- broad CSV dumps when only one section is needed

## Prompt pattern

Include:

- what question the model should answer
- what bounded data slice it should use
- what assumptions apply
- what uncertainty must be preserved

Example:

```text
Using only the attached orphaned_sensitive_code summary for branch main over the last 12 months, identify the top three ownership risks. Do not infer missing history. Note that attribution uses author identity and merges are excluded.
```

## Review packet guidance

For reviewer-facing packets, include:

- provenance
- parameter choices
- one or two key bounded query outputs
- links to raw artifacts for audit, not full raw dumps in the prompt body

## Do not do

- Do not paste raw secrets or file contents into prompts.
- Do not ask the model to infer ownership certainty beyond the available history.
- Do not hide whether the clone was shallow or identities were unresolved.
