# Notebook Trust and Security

Jupyter notebooks can contain active outputs and executable code. Treat notebooks from outside sources cautiously.

## Core rules

- Do not blindly trust or execute third-party notebooks.
- Review code cells before running anything.
- Rich outputs may be sanitized when a notebook is untrusted.
- Prefer regenerating outputs from a trusted local run instead of relying on inherited outputs.

## When trust issues appear

### Symptoms

- HTML output does not render as expected
- Widgets are missing or inactive
- Notebook content appears sanitized after opening

### Response

- Determine whether the notebook is untrusted
- Inspect the code before executing it
- Regenerate outputs from a trusted environment when appropriate
- Remove stale or misleading outputs before handoff

## Handoff guidance

If you did not execute the notebook yourself, do not imply that the outputs are fresh or trustworthy. State whether outputs are inherited, regenerated, or intentionally cleared.
