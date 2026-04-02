# Troubleshooting Playbook

## 403 from GitHub

Possible causes:

- API rate limit reached
- missing auth for a private resource
- token lacks required repository read access

Recovery:

- retry with authenticated access if appropriate
- reduce repeated listing calls
- verify whether the repo is public or private

## Path not found

Possible causes:

- typo in path
- wrong ref
- URL points at a parent directory instead of the skill

Recovery:

- confirm exact path
- confirm exact branch or tag
- retry with the corrected path only

## Existing destination collision

Possible causes:

- skill already installed
- basename collision during multi-path install

Recovery:

- stop by default
- ask whether to compare, keep, or intentionally replace

## Git fallback failure

Possible causes:

- missing git credentials
- SSH not configured
- network restrictions
- sandbox approval required

Recovery:

- test the simpler authenticated route first
- confirm HTTPS or SSH capability
- request approval before networked retry in restricted environments

## Installed but not visible

Possible causes:

- wrong destination root
- incomplete install
- user has not restarted Codex

Recovery:

- verify destination path
- verify required files
- tell the user to restart Codex
