# Example CI/CD Threat Surface

Use this pattern when the repo includes GitHub Actions or similar automation.

## Evidence to inspect

- `.github/workflows/*.yml`
- release scripts
- package publishing config
- signing or provenance steps
- container build and push steps

## Common attack surfaces

1. Over-broad workflow token permissions
2. Unpinned third-party actions
3. Secrets available to unsafe workflow triggers
4. Artifact publication without strong branch or environment protection
5. Build steps that trust unvalidated inputs

## Example threat statement

**Threat:** An attacker influences a workflow input or a maintainer account, causing the release workflow to publish a tampered artifact.

- Entry point: workflow trigger and release job
- Boundary crossed: source control automation -> artifact registry
- Impacted asset: build integrity
- Mitigation: least-privilege permissions, pinned actions, protected environments, and provenance verification
