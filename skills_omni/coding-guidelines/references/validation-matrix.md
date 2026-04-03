# Validation Matrix

Use the narrowest relevant validation the repository already supports.

| Change type | Expected validation |
| --- | --- |
| Bug fix | Reproduction test or failing case first, then targeted regression checks |
| Small feature | Focused tests for new behavior, plus narrow lint/typecheck as relevant |
| Refactor | Before/after behavior checks, targeted tests, lint/typecheck if used locally |
| Dependency update | Targeted regression checks, lockfile consistency, dependency scanning when available |
| Config change | Narrow config validation, affected tests, and environment-specific sanity checks |
| Container change | Build validation if available, affected tests, and image/config scanning when available |
| IaC change | Format/validate/plan-equivalent checks if supported, plus config/security scanning when available |
| Test-only change | Run the affected tests and confirm the tests assert meaningful behavior |

## Notes

- Start small. Expand validation only when risk or repository policy requires it.
- Do not claim a full green build if you only ran targeted checks.
- If baseline validation is already failing, say so explicitly.
