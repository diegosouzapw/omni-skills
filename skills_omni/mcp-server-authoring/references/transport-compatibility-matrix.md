# Transport Compatibility Matrix

Use this reference to document what your server supports and what target clients expect.

| Transport | Best fit | Key strengths | Common risks | Notes |
| :-- | :-- | :-- | :-- | :-- |
| `stdio` | Local tools, IDE integrations, tightly coupled launches | Simple local setup, clear process boundary | Process lifecycle issues, local environment mismatch | Good default for local integrations |
| Streamable HTTP | Remote or service-style deployments | Better fit for networked deployments, explicit HTTP boundary | Proxy buffering, auth complexity, mixed client expectations | Prefer this over older ad hoc HTTP streaming patterns when supported |
| Legacy HTTP+SSE compatibility | Older or transitional client environments | Helps support clients still expecting older streaming behavior | Assumption drift, proxy issues, long-term maintenance burden | Treat as compatibility work, not the preferred default |

## Review prompts

- Which target clients require `stdio`?
- Which target clients support Streamable HTTP?
- Do any clients still assume legacy HTTP+SSE behavior?
- Are there proxies, gateways, or load balancers that can buffer streaming responses?
- Does auth differ between local and remote transports?

## Common failure patterns

### Transport mismatch

A client is configured for one transport while the server is implemented for another.

### Hidden buffering

A deployment path introduces buffering so progress or streaming behavior appears broken.

### Launch-wrapper confusion

The protocol is correct, but a client-specific launcher passes the wrong environment, working directory, or command.

## Minimum artifact to record

For each target client, note:

- supported transport(s)
- configuration mechanism
- auth expectations
- known caveats
- whether support is full, partial, or intentionally unsupported
