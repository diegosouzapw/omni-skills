# Sora Error Matrix

Use this table for first-response troubleshooting before deeper investigation.

| Error class | Common symptoms | Likely cause | First response |
| --- | --- | --- | --- |
| 401 Unauthorized | Request fails immediately | Missing or invalid `OPENAI_API_KEY` | Confirm the key is set locally and valid |
| 403 Forbidden | API works generally but Sora call fails | Account or organization lacks Sora access | Confirm Sora entitlement and organization access |
| 400 Bad Request | Request rejected before generation | Invalid model, size, duration, or unsupported input combination | Check `references/parameter-matrix.md` and `references/video-api.md` |
| 404/asset retrieval failure | Download step fails after earlier success | Wrong ID, expired asset URL, or retrieval attempted too late | Poll first, then download promptly to local storage |
| 429 Rate limit | Bursts of requests start failing | Too much concurrency for current usage tier | Reduce concurrency, retry with backoff, avoid overloading local queue |
| 5xx/transient server error | Sporadic failure without obvious local issue | Temporary service-side problem | Retry with backoff and keep a record of the failed job IDs |
| Polling stalls | Job remains nonterminal for longer than expected | Queueing delay, transient issue, or too much local fan-out | Keep polling, reduce concurrency, and separate local queue expectations from official Batch API |
| Local runtime failure | Script does not start or dependency setup fails | Python or `uv` environment problem | Verify local environment; if cache permissions fail, set `UV_CACHE_DIR=/tmp/uv-cache` |

## Notes

- Do not ask the user to paste secrets or raw headers during troubleshooting.
- Keep records of prompt files, command parameters, job IDs, and output paths.
- If the failure is due to unsupported content or guardrails, do not try to bypass the restriction.
