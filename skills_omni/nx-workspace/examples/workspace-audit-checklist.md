# Workspace Audit Checklist

Use this checklist before making structural or CI changes in an Nx workspace.

## Project discovery

- Run `nx show projects`
- List apps and libs separately if needed
- Confirm the projects under discussion actually exist as Nx projects

## Resolved configuration

- Run `nx show project <name> --json` for the key projects
- Record `root`, `sourceRoot`, `tags`, and `targets`
- Confirm whether configuration is explicit or inferred

## Graph and boundaries

- Review `nx graph`
- Identify unexpected dependencies
- Check whether tags exist and whether they support policy enforcement

## Affected behavior

- Reproduce with explicit `base` and `head`
- Confirm CI uses the same comparison logic
- Check for shallow clone problems

## Caching

- Identify cacheable targets
- Review inputs and outputs
- Review whether `targetDefaults` should centralize repeated settings

## Recovery and handoff

- Use `nx reset` if state appears stale
- Route to task-running or generation skills when workspace analysis is complete
