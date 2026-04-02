# Sandbox, Auth, and Network Troubleshooting

## Missing dependency

If the environment cannot import `openai`, install it locally before retrying.

## Missing credentials

Use `OPENAI_API_KEY` only. Do not paste full keys into chat, tickets, or commits.

## 401 errors

Usually indicate a missing or invalid key. Re-check local environment configuration.

## 403 errors

Usually indicate an access, policy, or account-scope problem. Confirm the account or project can use the requested endpoint or model.

## 429 errors

Slow down the run, reduce batch size, and retry later.

## 5xx errors

Treat as transient unless they persist. Retry a single representative request before resuming broader execution.

## Path issues

If outputs are missing, verify that the destination directory exists and is writable.

## Status code reference

See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
