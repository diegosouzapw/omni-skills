# Router Guidance

Use `vercel-deploy` when the task is primarily about deploying to Vercel or diagnosing deployment-path failures on Vercel.

Route elsewhere when:

- the user needs DNS or custom-domain setup and verification
- the user needs CI/CD pipeline design rather than direct deployment execution
- the primary problem is framework or application debugging unrelated to deployment mechanics
- the primary problem is secret management, credential lifecycle, or broader security operations

If routing away after partial deployment work, preserve these facts for handoff:

- preview or production intent
- project/team context
- app/root directory used
- whether the directory was linked
- whether `vercel pull` or `vercel build` was used
- deployment URL or failure point
