# Vercel CLI Router

Use this skill when the task is specifically about non-interactive Vercel CLI operations with token auth.

Route away from this skill when:

- the main task is app/framework debugging rather than CLI operation
- the user needs architecture or platform design guidance
- the better automation primitive is a deploy hook
- the user wants a manual dashboard workflow instead of CLI execution

Stay with this skill when the next best action is one of:

- verify `VERCEL_TOKEN` safely
- verify auth with `vercel whoami`
- target a project using `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`
- deploy preview
- inspect or log a deployment
- promote a validated deployment
- manage env vars with `vercel env`
