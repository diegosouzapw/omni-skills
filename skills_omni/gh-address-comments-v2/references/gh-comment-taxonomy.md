# GitHub PR Comment Taxonomy

Correct classification matters because GitHub stores PR discussion in more than one place.

## 1. Issue comments

These are top-level comments in the main PR conversation.

Typical use:

- asking broad questions about rollout, docs, or design
- clarifying acceptance criteria
- requesting updates to the PR description

Retrieval shape:

- REST issue comments endpoint via `gh api`

## 2. Review comments

These are comments attached to specific lines or changed files in the PR diff.

Typical use:

- requesting a code change on a specific line
- asking for tests near a changed file
- pointing out implementation issues in the diff

Retrieval shape:

- REST pull request review comments endpoint via `gh api`

## 3. Review threads

A review thread groups related review comments and can carry thread-level state such as whether the thread is resolved.

Typical use:

- identifying the comments most likely to still require action
- avoiding replies that ignore unresolved state
- distinguishing a closed discussion from an open reviewer request

Retrieval shape:

- GraphQL-backed query via `gh api graphql` when unresolved state is needed

## Practical rule

If you need a full triage pass, do not assume one endpoint covers everything. Pull the relevant data for:

- top-level PR discussion
- line-level review feedback
- unresolved thread state when available

Then combine them into one numbered summary for the user.
