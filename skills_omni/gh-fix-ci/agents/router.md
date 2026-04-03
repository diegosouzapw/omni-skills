# Router Guidance

Use this skill for GitHub Actions-backed PR check triage and plan-first remediation.

## Route Away When

- The task is mainly about PR review comments rather than CI failures -> use `gh-address-comments`.
- The failing check is external to GitHub Actions -> hand off to the provider-specific workflow or team.
- The task becomes a broad workflow redesign, release pipeline overhaul, or repository-wide CI architecture change -> use a workflow authoring or broader CI skill.
- The root problem is clearly a normal code/test defect after triage -> continue with a test-debugging or implementation skill, but preserve the CI evidence packet.
- The likely fix involves security-sensitive permission or secret changes -> involve a security or permissions review skill.

## Preserve in Handoff

Always carry forward:
- PR number and URL
- head SHA
- failing or missing check name
- run URL if available
- failing job and attempt if known
- first actionable non-secret evidence snippet
- your confidence level and why
- whether user approval has already been granted for changes
