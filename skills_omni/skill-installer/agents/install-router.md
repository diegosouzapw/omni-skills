# Install Router

Use this router when the task drifts beyond installation.

## Stay in this skill when

- the user needs listing or installation
- the main question is curated vs experimental vs repo/path source choice
- the task is blocked on destination collision or post-install verification

## Hand off when

- the main blocker is Git or GitHub authentication setup
- the install succeeded but the skill behavior itself is broken
- the work turns into writing or redesigning a skill
- the main issue is system configuration rather than installation workflow

## Preserve this context in handoff

- requested skill name
- source repo/path/ref
- destination path
- whether the destination already existed
- method attempted
- auth or rate-limit issues observed
