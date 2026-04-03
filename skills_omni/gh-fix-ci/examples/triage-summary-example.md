# Triage Summary Example

```text
I inspected PR #123 and found one failing GitHub Actions check.

- Check: test / linux-node-20
- Run: https://github.com/example/repo/actions/runs/987654321
- Job: test
- Attempt: latest visible attempt
- Event: pull_request
- Head SHA: abcdef123456

Evidence:
The first actionable error is:
"ModuleNotFoundError: No module named 'pkg.resources'"

Current assessment:
This looks like a real dependency regression in the test environment, not an external CI issue.

Proposed plan:
1. Inspect dependency declaration and recent lockfile changes.
2. Apply the smallest fix to restore the missing package.
3. Run the narrow local validation for the affected test target.
4. If you approve, I will implement the fix and then re-check PR status.

Please confirm if you want me to proceed with implementation.
```

Use this structure to keep diagnosis concise, evidence-based, and approval-gated.
