# Abuse Path Patterns

Use these as prompts, not as a checklist to copy blindly.

## Public API or web app patterns

- Missing or inconsistent authorization on internal or admin routes
- User-controlled object reference leading to cross-account or cross-tenant access
- Schema validation gaps enabling unsafe state transitions
- SSRF through fetch, URL ingestion, webhook relay, or image/document processing
- File upload abuse: path traversal, content-type confusion, oversized payloads, malware relay, archive extraction issues
- Unsafe parser or deserializer behavior on user-supplied content
- Secret leakage through logs, debug endpoints, stack traces, or config reflection
- Rate-limit bypass or resource amplification causing targeted DoS

## Worker and queue patterns

- Forged or replayed job messages
- Over-privileged consumers processing attacker-shaped payloads
- Poison messages causing repeated failure or backlog amplification
- Worker actions on behalf of users without authorization context propagation

## CLI and local tool patterns

- Untrusted file parsing
- Path traversal through user-provided paths
- Dangerous subprocess or shell argument construction
- Insecure config loading or credential file handling

## Library or SDK patterns

- Unsafe defaults that consumers may expose directly
- Missing validation around deserialization, parsing, or callback hooks
- Security-sensitive behavior hidden behind convenience helpers

## Multi-tenant patterns

- Tenant identifier taken from user-controlled input without server-side enforcement
- Shared cache, queue, or storage namespace with weak isolation
- Admin/debug endpoints bypassing tenant checks

## Abuse path mini-schema

For each finding, prefer this structure:

- Preconditions
- Attack path
- Impacted asset
- Boundary crossed
- Effect
- Existing controls
- Evidence
- Recommended mitigations
