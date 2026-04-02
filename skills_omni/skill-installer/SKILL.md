---
name: "skill-installer"
description: "Skill Installer workflow skill. Use this skill when a user needs to list installable Codex skills, install a curated skill into $CODEX_HOME/skills, or install a skill from a GitHub repo/path, including private repositories, with safe validation, provenance capture, and post-install verification."
version: "0.0.1"
category: "cli-automation"
tags:
  - "skill-installer"
  - "install"
  - "codex"
  - "skills"
  - "github"
  - "curated"
  - "private-repo"
  - "verification"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/skill-installer"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Skill Installer

## Overview

Use this skill to list and install Codex skills into `$CODEX_HOME/skills`.

The default source is the curated OpenAI skills repository at `openai/skills`, especially `skills/.curated`, but this workflow also covers:

- listing curated or experimental installable skills
- installing a curated skill by name
- installing from `owner/repo` plus one or more skill paths
- installing from a full GitHub tree URL
- installing from private GitHub repositories when the environment already has valid credentials
- checking whether a skill is already installed before writing files
- recording enough provenance for a review, handoff, or follow-up repair

This skill preserves the upstream intent of `skills/.system/skill-installer`, but presents it as an operational installer workflow rather than an editorial import packet.

## When to Use This Skill

Use this skill when the user's request is primarily about **discovering or installing skills**, not authoring or debugging them.

### Use this skill when

- The user asks which skills are available to install.
- The user asks to list curated skills from `openai/skills`.
- The user asks to list experimental skills from `skills/.experimental`.
- The user gives a skill name and wants it installed into `$CODEX_HOME/skills`.
- The user provides a GitHub repository and path such as `owner/repo` plus `skills/foo`.
- The user provides a full GitHub URL to a skill directory.
- The install source is a private GitHub repo and valid credentials may already exist.
- The operator needs a safe workflow that validates destination, avoids accidental overwrite, and reports provenance.
- The user wants to verify whether a skill is already installed.

### Do not use this skill when

- The user wants to create a brand-new skill.
- The user wants to fix the internal logic of an already installed skill.
- The task is mainly about broader GitHub repository administration unrelated to skill installation.
- The user asks about `.system` skills that are already preinstalled; in that case, explain they normally do not need installation.

## Operating Table

| Request | Preferred action | Required inputs | Authentication needs | Validation step | User-facing reminder |
| --- | --- | --- | --- | --- | --- |
| List curated skills | Use the listing helper against `openai/skills` `skills/.curated` | none | none for public listing; auth may help if rate-limited | confirm installed annotations against `$CODEX_HOME/skills` | ask which skill to install |
| List experimental skills | List from `skills/.experimental` | source path | none for public listing; auth may help if rate-limited | label output as experimental | note that experimental skills may change more often |
| Install curated skill by name | Install from `openai/skills` curated path | skill name | none for public installs unless rate-limited | verify destination does not already exist; verify expected files landed | restart Codex after install |
| Install from repo/path | Install from `--repo` + `--path` or URL | repo, path, optional ref | depends on repo visibility | verify repo/path/ref before write; verify final directory name | restart Codex after install |
| Install from private repo | Prefer authenticated API access, then git fallback if needed | repo, path, ref, credentials | required | confirm credentials are present and least-privilege; do not print tokens | restart Codex after install |
| Install pinned ref | Use explicit `--ref` | repo, path, ref | depends on repo visibility | record ref in provenance | mention pinned ref in summary |
| Install multiple skills | Use multiple `--path` values | repo plus paths | depends on repo visibility | verify every target name and collision status before running | summarize each installed destination |
| Destination already exists | stop by default | destination path | none | require explicit overwrite intent before replacing anything | explain non-destructive default |

## Workflow

1. **Confirm the request type.** Determine whether the user wants to list, install, verify, or explain a preinstalled `.system` skill.
2. **Collect the minimum inputs.** Confirm skill name, source repo, source path, optional `ref`, destination, and whether replacement is allowed.
3. **Check installation boundaries.**
   - Default install destination is `$CODEX_HOME/skills`.
   - If `$CODEX_HOME` is unset, the practical default is usually `~/.codex`.
   - Do not write outside the intended skills directory unless the user explicitly requested a different destination.
4. **Handle `.system` requests correctly.** If the requested skill lives under `.system`, explain that these skills are typically preinstalled and do not need installation.
5. **Inspect collision risk.** If the destination skill directory already exists, stop and ask whether the user wants to keep, compare, or intentionally replace it.
6. **Choose the install method.**
   - Prefer the packaged install helper for curated and repo/path installs.
   - Prefer direct GitHub/API download for public repos when it works.
   - Use authenticated access for private repos.
   - Use git sparse checkout or clone fallback only when direct download is unsuitable or fails.
7. **Request approval if needed.** In sandboxed or approval-gated environments, ask for escalation before networked or filesystem-writing commands.
8. **Run the narrowest command that satisfies the request.** Favor a single listing command or a single install action over broader repository operations.
9. **Verify the result locally.** Confirm that the installed directory exists and contains expected files such as `SKILL.md`. Use the bundled verifier if helpful.
10. **Capture provenance.** Record the source repository, ref, source path, destination path, and install method used.
11. **Report outcome clearly.** State what was listed or installed, whether anything already existed, and any constraints encountered.
12. **Tell the user to restart Codex.** After a successful install, remind them: **Restart Codex to pick up new skills.**

### Install Decision Notes

- **Curated listing/install:** default source is `openai/skills` under `skills/.curated`.
- **Experimental listing/install:** use `skills/.experimental` when the user asks for experimental skills.
- **Repo/path installs:** validate exact path and optional ref before writing locally.
- **Private repos:** prefer existing credentials or least-privilege token-based access; do not expose secrets in command history or transcripts.
- **Existing destination:** abort by default rather than overwriting silently.

## Examples

### Example 1: List curated skills

```bash
python3 scripts/list-skills.py
```

Expected response shape:

```text
Skills from openai/skills (skills/.curated):
1. skill-a
2. skill-b (already installed)
3. skill-c
Which ones would you like installed?
```

### Example 2: List experimental skills

```bash
python3 scripts/list-skills.py --path skills/.experimental
```

Use this only when the user explicitly asks for experimental skills.

### Example 3: Install one curated skill from the default repository

```bash
python3 scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/example-skill
```

Then verify:

```bash
python3 scripts/verify_installed_skill.py --skill example-skill
```

### Example 4: Install from a repo/path with a pinned ref

```bash
python3 scripts/install-skill-from-github.py --repo owner/repo --ref main --path skills/my-skill
```

Then verify:

```bash
python3 scripts/verify_installed_skill.py --skill my-skill
```

### Example 5: Install multiple skills from one repository

```bash
python3 scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/skill-one skills/.curated/skill-two
```

Check each installed directory before reporting success.

### Example 6: Explain why a `.system` skill does not need installation

```text
That skill is normally preinstalled from the .system set, so it usually does not need to be installed into your local skills directory. If you still want to replace it manually, confirm that you want an explicit overwrite workflow.
```

See also the bundled worked examples:

- [Curated install example](examples/curated-install.md)
- [Repo/path install example](examples/repo-path-install.md)
- [Private repo install example](examples/private-repo-install.md)
- [Multi-skill install example](examples/multi-skill-install.md)

## Best Practices

### Do

- Confirm whether the task is listing, installing, or simply explaining preinstalled `.system` behavior.
- Validate `repo`, `path`, `ref`, and destination before running an install.
- Prefer the smallest possible operation: list only what is needed, install only the requested skill paths.
- Abort on destination collisions unless the user explicitly wants replacement.
- Prefer least-privilege credentials for private repositories.
- Keep provenance in your final response: repository, ref, path, destination, and method.
- Verify that expected files landed after installation.
- Remind the user to restart Codex after a successful install.
- Request approval before running networked commands in restricted agent environments.

### Do not

- Do not silently overwrite an existing skill directory.
- Do not paste tokens, credentialed URLs, or secret headers into transcripts, prompts, or repository files.
- Do not assume every GitHub 403 means missing permission; rate limits are also common.
- Do not assume a user-provided path is correct without checking it.
- Do not expand the task into full repo management when the user's goal is just installing a skill.
- Do not claim a skill is installed until the destination directory and expected files are present.

### Security Notes

- For private repos, prefer existing credential helpers or a fine-grained read-only token rather than broad credentials.
- Avoid commands that echo token values.
- Do not record secrets in shell history, markdown notes, screenshots, or issue comments.
- If auth fails, diagnose whether the problem is visibility, token permissions, missing git credentials, or API rate limits.
- Provenance should include at least: `owner/repo`, `ref`, source `path`, destination path, and method used (`download`, `git`, or `auto`).

## Troubleshooting

### Problem: GitHub listing or install fails with 403

**Symptoms:** Public listing suddenly stops working, install requests fail without a path error, or the response mentions rate limiting.

**Solution:** Treat 403 as ambiguous. It may be an unauthenticated API rate limit rather than a permission issue. Retry with authenticated access if available, reduce repeated API calls, or wait and retry later.

### Problem: Private repo install fails

**Symptoms:** The repository or path looks correct, but downloads or git access return authentication or permission errors.

**Solution:** Confirm the repo is private, then verify that credentials already exist and have read access to the repository contents. Prefer least-privilege access. If the environment uses GitHub CLI, re-authenticate there. If download-based access fails, a git-based fallback may work when the environment already has valid git credentials.

### Problem: Repo, path, or ref is wrong

**Symptoms:** The installer reports not found, the wrong directory name appears, or the installed result is not the requested skill.

**Solution:** Re-check the exact `owner/repo`, `ref`, and skill path before retrying. For URL-based requests, parse the URL carefully and confirm that the final path points to a skill directory rather than a parent folder.

### Problem: Destination already exists

**Symptoms:** The installer aborts before writing files, or verification shows an older skill already present at the target location.

**Solution:** Keep the default non-destructive behavior. Ask whether the user wants to keep the current install, compare versions, or intentionally replace the destination. Do not remove or overwrite files without explicit approval.

### Problem: Direct download fails and git fallback also fails

**Symptoms:** Download attempts fail, then sparse checkout or clone also fails with credential, transport, or network errors.

**Solution:** Check whether the environment supports HTTPS or SSH access to the repository, whether git credentials are configured, and whether network access requires approval. In sandboxed contexts, request escalation before retrying networked commands.

### Problem: The skill was installed but does not appear in Codex

**Symptoms:** Files exist under the destination, but the user still cannot invoke the skill.

**Solution:** Confirm the skill directory landed under the correct `$CODEX_HOME/skills` location, verify the expected files exist, and tell the user to restart Codex. Use the local verifier to confirm the install path.

## Related Skills

- Use a Git or GitHub-focused skill if the main blocker becomes repository auth, credential setup, or transport debugging rather than skill installation itself.
- Use a debugging or troubleshooting skill if installation succeeded but the installed skill behaves incorrectly.
- Use a documentation skill if the next step is documenting provenance, rollout notes, or operator instructions.
- Use a system/setup skill if the main issue is locating or configuring `$CODEX_HOME` rather than performing the install.

## Additional Resources

Start with these local references before broadening the task.

### References

- [Install modes decision guide](references/install-modes.md)
- [GitHub authentication matrix](references/github-auth-matrix.md)
- [Verification checklist](references/verification-checklist.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)

### Examples

- [Curated install example](examples/curated-install.md)
- [Repo/path install example](examples/repo-path-install.md)
- [Private repo install example](examples/private-repo-install.md)
- [Multi-skill install example](examples/multi-skill-install.md)

### Scripts

- `scripts/list-skills.py`
- `scripts/install-skill-from-github.py`
- [Installed skill verifier](scripts/verify_installed_skill.py)

### Agents

- [Install router and handoff notes](agents/install-router.md)

### Upstream operating notes preserved from the source workflow

- Default behavior prefers direct download for public GitHub repos.
- If direct download fails with auth or permission issues, git sparse checkout may be used as fallback.
- Installation normally targets `$CODEX_HOME/skills/<skill-name>`.
- Multiple `--path` values may install multiple skills in one run.
- Installed annotations come from the local skills directory.
- `.system` skills are generally preinstalled and usually do not need manual installation.
