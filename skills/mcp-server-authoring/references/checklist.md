# MCP Server Authoring Checklist

- Define target clients and supported transports before adding tools.
- Separate canonical server contract from client-specific config writers.
- Review each tool for schema clarity, write scope, timeout, and failure semantics.
- Decide which capabilities are read-only, local-write, or unsupported.
- Document transport and auth assumptions explicitly.
- Add rollout notes that explain compatibility gaps instead of hiding them.
