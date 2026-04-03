# Example Repo Evidence Map

| Repo path | Interpreted component | Security relevance |
| --- | --- | --- |
| `services/gateway/main.go` | API gateway entrypoint | internet-facing entry surface |
| `services/gateway/routes/` | request handlers | auth, validation, rate-limit logic |
| `internal/auth/` | authentication helpers | identity boundary |
| `deploy/helm/gateway/values.yaml` | deployment config | exposure, defaults, secret references |
| `.github/workflows/publish.yml` | release pipeline | artifact integrity, token scope |
| `Dockerfile.gateway` | build definition | build context, base image, secret handling |
| `package-lock.json` | dependency lockfile | supply-chain review input |
