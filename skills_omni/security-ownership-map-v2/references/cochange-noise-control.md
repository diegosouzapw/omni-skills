# Co-change Noise Control

Use this guide when file communities or co-change neighbors are dominated by noise.

## Common noise sources

- lockfiles
- vendored or generated code
- `.github/` workflows
- editor or formatter config
- mass-formatting commits
- large dependency updates
- bot-driven sweeps
- repository glue files in monorepos

## Symptoms

- almost every file appears connected
- communities are too large to interpret
- infra folders dominate application-code clusters
- sensitive files have irrelevant neighbors

## Controls to review

- `--cochange-exclude`
- `--no-default-cochange-excludes`
- `--cochange-max-files`
- bot or author exclusion patterns

## Practical tuning strategy

1. Start with default excludes.
2. Add repo-specific glue files or generated paths.
3. Lower the influence of mega-commits by tightening `--cochange-max-files`.
4. Exclude known bot patterns if automated updates dominate.
5. Re-run and compare whether sensitive clusters become more interpretable.

## Reporting guidance

Document any important exclusions, for example:

- lockfiles excluded
- vendored code excluded
- bot commits excluded
- mega-commits above a threshold ignored

## Do not do

- Do not present community findings without noting major exclusions when they affect interpretation.
- Do not assume co-change equals team ownership; it is a clustering hint, not proof.
