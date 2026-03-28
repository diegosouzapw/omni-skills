# Trivy Model-Serving Scan Example

Use scanning as a release check, not as a one-time exercise.

## Example Commands

Scan the repository filesystem:

```bash
trivy fs .
```

Scan an already-built image:

```bash
trivy image my-model-serving-image:latest
```

Scan infrastructure-as-code in the repo:

```bash
trivy config .
```

## How To Interpret Findings

- **Critical/High in runtime image:** usually block release until triaged.
- **Build-stage-only packages:** verify whether they are absent from the runtime image.
- **IaC findings:** review exposed services, weak defaults, missing limits, and unsafe secret patterns.
- **False positives:** suppress only through a documented process with owner and review date.

## Serving-Specific Review Questions

- Is the runtime image minimal?
- Are credentials absent from the image and repository?
- Are model artifacts and config versions traceable?
- Is the prior stable image still available for rollback?
