# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this repository, please report it responsibly:

1. **Do NOT open a public issue.**
2. Email the maintainers or open a private security advisory on GitHub.
3. Include details about the vulnerability, steps to reproduce, and potential impact.

We will acknowledge receipt within 48 hours and aim to resolve critical issues within 7 days.

## Scope

This policy covers:
- The CLI installer (`tools/bin/install.js`)
- Validation and build scripts (`tools/scripts/`)
- Skill content that includes shell commands, network access, or credential examples

## Skill Risk Levels

Every skill in this repository is tagged with a `risk` level in its frontmatter:
- `safe` — no destructive operations
- `caution` — may interact with external systems or modify files
- `offensive` — pentesting or security-testing tools (requires explicit authorization)
- `critical` — system-level operations with high impact potential
