# Install Modes

Use this reference to choose the narrowest safe installation path.

## 1. Curated listing

Use when the user asks what is available.

- Default source: `openai/skills`
- Default path: `skills/.curated`
- Optional alternative: `skills/.experimental` when explicitly requested
- Validate against local installed directories so the response can mark existing installs

## 2. Curated install by name

Use when the user provides a skill name from the curated catalog.

Required checks:

- confirm the exact skill path
- confirm destination name
- stop if destination already exists
- verify `SKILL.md` exists after installation

## 3. Repo/path install

Use when the user provides:

- `owner/repo`
- one or more explicit skill paths
- a full GitHub tree URL

Required checks:

- validate repo
- validate path
- validate optional `ref`
- record provenance

## 4. Private repo install

Use when the skill source is not public.

Preferred order:

1. existing authenticated environment
2. least-privilege token-based access
3. git fallback when the environment already supports it

Do not expose or store credentials.

## 5. Multi-path install

Use when the user wants several skills from one repository.

Before running:

- review every target basename
- check collision status for each destination
- summarize what will be installed

## 6. Fallback to git

Use only when direct download is unavailable or unsuitable.

Examples:

- private repo download blocked but git auth works
- content retrieval constraints make direct download impractical
- exact path retrieval requires repo-aware fallback

Keep fallback narrow and verify the final installed directory after completion.
