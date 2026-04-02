# gh api comment query examples

Replace placeholders such as `<owner>`, `<repo>`, and `<pr-number>` with the current repository values.

## 1. List top-level PR issue comments

```bash
gh api --paginate repos/<owner>/<repo>/issues/<pr-number>/comments
```

Useful when you need main conversation comments on the PR.

## 2. List pull request review comments

```bash
gh api --paginate repos/<owner>/<repo>/pulls/<pr-number>/comments
```

Useful when you need line-level diff comments.

## 3. Print compact review comment summaries

```bash
gh api --paginate repos/<owner>/<repo>/pulls/<pr-number>/comments \
  --jq '.[] | {id, reviewer: .user.login, path, line, body}'
```

## 4. Print compact issue comment summaries

```bash
gh api --paginate repos/<owner>/<repo>/issues/<pr-number>/comments \
  --jq '.[] | {id, author: .user.login, created_at, body}'
```

## 5. Query review thread state with GraphQL

```bash
gh api graphql -f query='query($owner:String!, $repo:String!, $number:Int!) {
  repository(owner:$owner, name:$repo) {
    pullRequest(number:$number) {
      reviewThreads(first:100) {
        nodes {
          isResolved
          path
          comments(first:20) {
            nodes {
              author { login }
              body
            }
          }
        }
      }
    }
  }
}' -F owner=<owner> -F repo=<repo> -F number=<pr-number>
```

Use this when unresolved thread state matters.

## Notes

- Use `--paginate` for REST calls when a PR may have many comments.
- GraphQL pagination may need to be added for very large PRs.
- Do not assume unresolved thread state is present in every REST response you inspect.
