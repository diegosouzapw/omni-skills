# Mitigation Map

Map findings to concrete control families and likely implementation points.

| Threat pattern | Control family | Likely implementation touchpoints |
| --- | --- | --- |
| Missing authorization on route or action | AuthZ enforcement | route middleware, service layer policy checks, resource access helpers |
| Unvalidated payload or state transition | Input and schema validation | route boundary validators, DTO schemas, message validators |
| File upload abuse | Upload constraints and content handling | upload middleware, storage service, file type checks, size limits, scanning pipeline |
| SSRF or dangerous outbound fetch | Outbound request restriction | URL validators, allowlists, egress controls, fetch wrappers |
| Secret exposure in logs or config | Secret isolation and log hygiene | logging configuration, redaction helpers, env loading, secret manager integration |
| Queue/job forgery or replay | Message authenticity and replay protection | producer signing, consumer verification, idempotency controls, queue policy |
| Tenant boundary bypass | Server-side tenancy enforcement | tenant resolution middleware, storage query filters, authorization checks |
| Resource amplification or targeted DoS | Rate limiting and workload guards | API gateway, middleware, worker concurrency limits, request and payload caps |
| Unsafe parser or deserializer use | Safe parsing and sandboxing | parser configuration, format restrictions, isolated processing paths |

## Recommendation format

For each mitigation, write:

- what to change
- why it reduces the abuse path
- where it likely belongs in code or config
- whether it appears partially present already

## Reference anchors

When useful, align wording to:

- OWASP ASVS control families
- relevant OWASP Cheat Sheets
- application-specific secure design controls
