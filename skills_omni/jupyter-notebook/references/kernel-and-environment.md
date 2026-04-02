# Kernel and Environment Notes

Use this reference when a notebook fails because the expected interpreter or environment is unavailable.

## What to confirm

- The intended Python version
- The key libraries required by the notebook
- The kernel name shown in the notebook metadata or expected by the user
- Whether the notebook was actually executed in that environment

## Practical guidance

- If you can run the notebook, verify the selected kernel before validation.
- After changing kernels, restart the kernel and run all cells again.
- If you cannot execute locally, state that clearly in the handoff.
- Record the minimum environment assumptions near the top of the notebook or in notes.

## Typical handoff note

```text
Validation was not run in this environment. Expected runtime: Python 3.12 with the notebook's listed dependencies available through the selected Jupyter kernel.
```

## Common failure pattern

### Symptoms

- The notebook opens but cannot execute code
- Imports fail even though the package is installed elsewhere
- Jupyter shows the wrong interpreter or no suitable kernel

### Response

- Confirm the intended environment first
- Avoid ad hoc environment repair unless that is explicitly in scope
- Document the exact assumptions required for local validation
