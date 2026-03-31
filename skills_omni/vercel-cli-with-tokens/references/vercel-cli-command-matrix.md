# Vercel CLI Command Matrix

## Purpose

Use this matrix to choose commands that match the current context without accidentally prompting, linking, or exposing secrets.

| Command | Safe in any directory? | Requires token? | Requires project context? | May prompt or mutate state? | Typical use |
| --- | --- | --- | --- | --- | --- |
| `vercel whoami` | Yes | Yes | No | No | Verify token-backed auth |
| `vercel --version` | Yes | No | No | No | Check installed CLI |
| `npx vercel@latest --version` | Yes | No | No | No | Reproducible one-off CLI check |
| `vercel deploy -y --no-wait` | No | Yes | Yes | Yes, if context is missing | Start preview deploy |
| `vercel deploy --prod -y --no-wait` | No | Yes | Yes | Yes, if context is missing | Direct production deploy |
| `vercel inspect <deployment-url>` | Usually yes | Usually yes | Deployment URL | No | Inspect deployment status |
| `vercel logs <deployment-url>` | Usually yes | Usually yes | Deployment URL | No | View build/runtime logs |
| `vercel env ls` | No | Yes | Yes | Can fail or prompt if targeting is unclear | List env vars |
| `vercel env add ...` | No | Yes | Yes | Yes | Add env vars |
| `vercel env pull` | No | Yes | Yes | Yes | Sync envs to local development |
| `vercel env rm ... -y` | No | Yes | Yes | Yes | Remove env vars |
| `vercel link` | No | Yes | No | Yes | Associate local directory with a project |
| `vercel link --repo` | No | Yes | Git remote | Yes | Link repo-backed project |
| `vercel promote <deployment-url>` | No | Yes | Deployment URL | Yes | Promote validated preview |

## Targeting Modes

| Mode | Best for | Requirements | Notes |
| --- | --- | --- | --- |
| `VERCEL_ORG_ID` + `VERCEL_PROJECT_ID` | CI and non-interactive automation | Both IDs and token | Preferred mode; avoids relying on `.vercel/` |
| Existing `.vercel/` link state | Local/manual workflows | Linked repository and token | Acceptable locally; do not hand-edit |
| `--scope <team-slug>` only | Team selection, not full project selection | Team slug and token | May still need project context |
| `vercel link` fallback | Local setup when IDs are unavailable | Token, optional git remote | Can prompt or mutate local state |

## Practical Guidance

- Start with `vercel whoami`.
- Prefer env-based targeting in automation.
- Treat linking as a conscious local-state change, not a harmless probe.
- Promote validated previews when possible instead of rebuilding directly to production.
