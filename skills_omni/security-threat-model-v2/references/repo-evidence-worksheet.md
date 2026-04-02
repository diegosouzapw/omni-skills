# Repo Evidence Worksheet

Use this worksheet before drafting the final threat model.

## 1. Scope

- Repo root:
- Requested in-scope path:
- Explicit exclusions:
- Visibility limits:

## 2. Runtime Identification

- Application type: API / web app / worker / CLI / library / mixed
- Main entrypoints:
- Process model:
- Deployment clues:

## 3. Files Reviewed

| Path | Type | Why it matters | Notes |
| --- | --- | --- | --- |
| `README.md` | doc | high-level architecture | |

## 4. Components

| Component | Evidence paths | Responsibility | External exposure |
| --- | --- | --- | --- |
| API service | `src/server.ts` | handles HTTP requests | public/internal/unknown |

## 5. Entry Points

- Routes:
- Webhooks:
- Uploads:
- Parsers/decoders:
- Queue handlers:
- Scheduled jobs:
- CLI flags:
- Config or env loading:

## 6. Data Stores and Integrations

| System | Evidence | Data or privilege involved | Notes |
| --- | --- | --- | --- |
| PostgreSQL | `src/db.ts` | application records | |

## 7. Trust Boundaries

| Boundary | Evidence | Authentication | Validation | Encryption | Notes |
| --- | --- | --- | --- | --- | --- |
| User -> API | `src/routes/*` | JWT | schema validation? | HTTPS assumed? | |

## 8. Assets

- Credentials or secrets:
- Sensitive data:
- Integrity-critical state:
- Availability-critical components:
- Audit or security telemetry:
- Build or deployment artifacts if in scope:

## 9. Existing Controls Observed

- Authentication:
- Authorization:
- Input validation:
- Rate limiting:
- Logging and audit:
- Secret handling:
- Isolation or sandboxing:
- Error handling:

## 10. Assumptions Needed

- Exposure model:
- Tenant model:
- Data sensitivity:
- Administrative roles:
- Network trust:

## 11. Candidate Abuse Paths

List short candidate paths before prioritization.

1.
2.
3.
