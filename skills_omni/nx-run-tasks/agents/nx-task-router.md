# Nx Task Router

Use `nx-run-tasks` when the request is about **running existing targets** in an Nx workspace.

## Stay in this skill when the user wants to

- run `build`, `test`, `lint`, `serve`, `e2e`, or `typecheck`
- execute one target for one project
- execute the same target for many projects
- use `nx affected` in local or CI workflows
- troubleshoot target discovery, affected scope, cache behavior, or stale Nx state

## Hand off when the request becomes

- **generation**: creating apps, libs, code, or generators
- **workspace configuration**: editing `nx.json`, `project.json`, plugins, executors, caching setup, or target definitions
- **CI debugging outside Nx routing**: runner images, checkout strategy, permissions, or platform-specific pipeline issues
- **framework-specific debugging** after the correct Nx command is already known

## Fast decision rule

- If the question is “what Nx command should I run?” or “why did this Nx task execution behave this way?” stay here.
- If the question is “how do I create or reconfigure Nx behavior?” hand off.
