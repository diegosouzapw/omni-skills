# Structured Fetch Examples

Prefer structured JSON over scraping terminal output.

## PR metadata

```bash
gh pr view --json number,title,url,headRefName,baseRefName,isDraft,reviewDecision
```

## Use the bundled helper

```bash
python3 scripts/fetch_pr_feedback.py > /tmp/pr_feedback.json
```

## Inspect the result

```bash
python3 -m json.tool /tmp/pr_feedback.json | sed -n '1,160p'
```

## Suggested usage pattern

- save the fetched JSON to a temp file
- summarize actionable items from that file
- keep numbering stable during the session
- refresh only when repository state changes materially
