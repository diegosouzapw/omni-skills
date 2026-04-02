# Data, State, Outbound HTTP, and Services

Use built-in patterns before adding extra infrastructure.

Focus on:

- `DbContext` lifetime alignment
- options-driven service configuration
- `IHttpClientFactory` for outbound HTTP
- avoiding request-scoped leakage into background work
- state mechanisms used intentionally and minimally
