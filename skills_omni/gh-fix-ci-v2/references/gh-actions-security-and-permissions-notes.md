# GitHub Actions Security and Permissions Notes

Use these notes when PR-check failures appear to involve permissions, secrets, forks, or workflow security boundaries.

## Least-privilege defaults

- prefer the minimum permissions needed for the workflow step that failed
- avoid suggesting broad write permissions as a generic fix
- explain why any permission increase is necessary before proposing it

## Common permission-related failure patterns

### `Resource not accessible by integration`
Usually means the token or event context cannot perform the attempted action.

Check:

- event type
- whether the PR is from a fork
- whether the step expects write access
- whether package, contents, pull-request, or checks permissions may be too narrow

### Secret-dependent steps on fork PRs
Fork-based PRs often cannot access the same secrets or trusted resources as internal branches.

Safe response:

- report the limitation clearly
- avoid bypass suggestions
- do not recommend exposing secrets to untrusted contexts without explicit review

### Third-party actions or untrusted input
If the workflow invokes third-party actions or processes untrusted PR input, keep recommendations conservative.

## Things to avoid

- asking users to paste tokens into chat
- recommending broad token scopes without evidence
- suggesting unsafe secret exposure for convenience
- disabling safeguards just to make a check pass

## Good approval-gated language

> The failure looks consistent with a workflow permission boundary rather than an application bug. I can propose the smallest permission adjustment or event-specific workflow change, but I recommend reviewing that change explicitly before implementation.
