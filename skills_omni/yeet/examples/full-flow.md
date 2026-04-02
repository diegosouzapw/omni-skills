# Example: Full Yeet Flow

This example assumes the user explicitly asked for the full stage → commit → push → PR workflow.

```bash
CURRENT_BRANCH="$(git branch --show-current)"
BASE_BRANCH="$(bash scripts/detect_default_branch.sh)"

if [ "$CURRENT_BRANCH" = "$BASE_BRANCH" ]; then
  git switch -c "codex/update-api-error-copy"
  CURRENT_BRANCH="$(git branch --show-current)"
fi

git status -sb
git add -A
git status -sb
git commit -m "update API error copy"
git push -u origin "$CURRENT_BRANCH"

cat > pr-body.md <<'EOF'
## Summary
Update API error copy for clearer user-facing messaging.

## User impact
Users see clearer error text when API requests fail.

## Root cause
Previous wording was ambiguous and did not explain likely next steps.

## Fix
Refine error copy and align text with current failure behavior.

## Validation
- Reviewed changed files
- Ran relevant local checks
EOF

GH_PROMPT_DISABLED=1 GIT_TERMINAL_PROMPT=0 gh pr create \
  --draft \
  --base "$BASE_BRANCH" \
  --head "$CURRENT_BRANCH" \
  --title "[codex] update API error copy" \
  --body-file pr-body.md
```

Expected outcome:

- a feature branch exists if you started on the default branch
- changes are committed and pushed
- a draft PR is created and its URL is returned
