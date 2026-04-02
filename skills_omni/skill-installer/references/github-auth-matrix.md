# GitHub Authentication Matrix

Use least privilege and avoid exposing secrets.

| Scenario | Typical access method | Notes |
| --- | --- | --- |
| Public curated listing | unauthenticated API | may hit rate limits |
| Public install | unauthenticated download/API | auth may still help with limits |
| Private repo via API/download | token-based authenticated access | prefer read-only, least-privilege access |
| Private repo via git over HTTPS | existing git credentials | do not embed credentials in URLs |
| Private repo via SSH | existing SSH keys | verify repo access before retry loops |
| CLI-authenticated environment | existing `gh` or credential helper session | useful for remediation when already available |

## Safe handling rules

- Do not echo token values.
- Do not paste token-bearing URLs into chat transcripts.
- Do not store credentials in support files.
- Prefer fine-grained access that can read repository contents.
- If auth fails, separate permission issues from rate limiting.
