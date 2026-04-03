# Generator Discovery Guide

Use this guide before choosing a generator.

## Goal

Find the narrowest generator that satisfies the user's request while preferring workspace-local conventions.

## Discovery sequence

1. Confirm you are in the correct Nx workspace.
2. Identify the package-manager wrapper used by the repo.
3. List available plugins:
   ```bash
   pnpm nx list
   ```
4. Inspect relevant plugin generators:
   ```bash
   pnpm nx list @nx/react
   pnpm nx list @nx/js
   ```
5. Look for local workspace plugins before using generic external generators.
6. Inspect exact help for the shortlisted generator:
   ```bash
   pnpm nx g <plugin>:<generator> --help
   ```

## Prefer local generators when

Choose a local generator first if it:

- produces the requested artifact type
- encodes repo naming or path conventions
- applies required tags, boundaries, or defaults
- integrates with repo-specific build/test/lint choices

## Places to inspect for local generators

Common locations include:

- repo plugin packages
- `tools/`
- `plugins/`
- workspace libraries that expose generators

Names often look like:

- `my-plugin:feature`
- `workspace-plugin:library`
- `<repo-scope>/<plugin>:<generator>`

## Decision test

Before running a generator, answer all of these:

- Does it create the right kind of artifact?
- Does it place files in the right area?
- Does it match repo conventions better than alternatives?
- Are the side effects acceptable for this request?

If any answer is unclear, inspect help, schema, or source before proceeding.
