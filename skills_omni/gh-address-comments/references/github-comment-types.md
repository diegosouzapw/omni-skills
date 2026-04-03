# GitHub Comment Types for PR Handling

GitHub PR feedback usually appears in two different shapes that agents should not mix up.

## 1. PR conversation comments

These are top-level comments on the pull request conversation tab. Operationally, they are issue comments on the PR.

Use cases:

- answering general reviewer questions
- acknowledging follow-up tasks
- updating the PR conversation

Typical tool path:

- `gh pr comment`
- issue comment REST endpoints

## 2. Review comments and review threads

These are comments attached to code diffs. They may be part of a thread and can have resolved or unresolved state.

Use cases:

- addressing file-specific code review feedback
- replying in context to a diff line
- deciding whether a thread should be resolved

Typical tool path:

- `gh api`
- review comment REST endpoints
- GraphQL review thread objects

## Why the distinction matters

If you only use top-level PR comments, you can miss code review feedback completely. If you treat review threads like issue comments, reply and resolution behavior may be wrong.

## Recommended handling order

1. unresolved review threads
2. non-outdated review comments
3. top-level PR conversation comments needing action
4. outdated comments that still need an explanatory reply
