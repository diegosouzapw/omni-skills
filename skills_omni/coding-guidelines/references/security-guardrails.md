# Security Guardrails

Apply these rules whenever code changes touch sensitive surfaces.

## High-risk areas

- authentication and authorization
- secrets, credentials, tokens, and session data
- shell commands and subprocess construction
- untrusted input, serialization, templating, and parsing
- file paths, uploads, extraction, and filesystem writes
- dependency supply chain
- container and infrastructure privilege settings

## Required behaviors

- Never hardcode real secrets or plausible credentials.
- Prefer environment or configuration references over embedded values.
- Preserve least privilege by default.
- Do not widen network, filesystem, or runtime permissions unless explicitly required.
- Do not guess about secure defaults when uncertain.
- Add focused validation for risky input handling where possible.
- Recommend extra review if the blast radius is unclear.

## Escalate when

- auth behavior changes materially
- permission scope increases
- command execution paths are introduced or modified
- dependency risk cannot be evaluated confidently
- container or IaC changes broaden privilege or exposure
- a secure implementation depends on assumptions you cannot verify from the repo
