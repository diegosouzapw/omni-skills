# Workspace Inspection Guide

Use this guide when you need a reliable picture of an Nx workspace before changing configuration.

## Preferred inspection sequence

1. List projects.
2. Inspect the specific project's resolved configuration.
3. Review the graph.
4. Only then read raw config files for edits.

## Core commands

```bash
nx show projects
nx show projects --type app
nx show projects --type lib
nx show projects --withTarget build
nx show project <name> --json
nx graph
```

## Why resolved configuration matters

In modern Nx workspaces, effective behavior may come from multiple places:

- `project.json`
- `package.json`
- `nx.json`
- plugin inference
- workspace-wide defaults

For diagnosis, start with:

```bash
nx show project <name> --json
```

Then inspect fields such as:

- `root`
- `sourceRoot`
- `projectType`
- `tags`
- `targets`
- `implicitDependencies`

## Safe operator notes

- Do not assume every project under `libs/` is interchangeable.
- Do not infer dependency direction from folders alone.
- Do not edit config until you have confirmed the resolved current state.
