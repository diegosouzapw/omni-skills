# Consumer Impact Matrix

Use this worksheet to classify blast radius before rollout.

| Consumer | Uses tokens directly? | Uses shared component? | Risk level | Migration effort | Owner | Rollout order |
| :------- | :-------------------- | :--------------------- | :--------- | :--------------- | :---- | :------------ |
| App or package name | yes/no | yes/no | low/medium/high | low/medium/high | team or person | early/normal/late |

## How to use it

1. List all known apps, packages, and docs surfaces affected by the change.
2. Mark whether each consumer depends on tokens directly, shared components indirectly, or both.
3. Assign a practical risk level based on visibility, coupling, and migration complexity.
4. Use rollout order to stage high-risk consumers later unless they are validation partners.

## Watch for

- consumers with local forks or overrides
- consumers locked to older component APIs
- internal tools that use raw tokens directly
- accessibility-sensitive products or regulated surfaces

## Output

Summarize:

- highest-risk consumer
- consumers requiring explicit migration support
- consumers that can validate rollout early
- any blockers to broad release
