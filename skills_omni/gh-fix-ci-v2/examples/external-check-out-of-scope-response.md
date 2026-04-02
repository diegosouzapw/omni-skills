# Example: External Check Out-of-Scope Response

```text
I found a blocking PR check that is not a GitHub Actions run.

- Check: buildkite / integration-tests
- State: failing
- Details URL: https://example.invalid/buildkite/build/12345

This skill only diagnoses GitHub-hosted PR checks, especially GitHub Actions runs. I can continue summarizing any GitHub Actions failures on this PR, but this external check is out of scope here and should be inspected in its own provider.
```
