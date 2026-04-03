# Sentry Safe Output Checklist

Use this checklist before returning a production-facing summary.

## Include by default

- org and project
- environment
- time window
- exact query used
- result limit
- whether results may be partial
- issue titles and short IDs
- first seen / last seen
- counts
- release or environment correlations
- relevant Sentry URLs for handoff

## Omit by default

- API tokens
- cookies
- authorization headers
- request bodies
- response bodies
- raw stack traces
- emails
- IP addresses
- user-provided text that may contain secrets or PII

## If event detail was inspected

- summarize metadata rather than dumping payloads
- mention that sensitive fields were intentionally omitted
- include only the minimum detail needed for triage or handoff

## Redaction reminders

Redact or omit:

- emails
- IPs
- auth headers
- cookies
- session IDs
- access tokens
- request payloads
- untrusted free-form text from users or customers
