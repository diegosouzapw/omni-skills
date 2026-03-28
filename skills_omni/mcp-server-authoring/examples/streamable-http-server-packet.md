# Example: Streamable HTTP Server Packet

## Server

`catalog-mcp`

## Purpose

Expose read-oriented catalog browsing plus one preview action for installation planning.

## Deployment mode

Remote single-tenant

## Target transports

- Streamable HTTP
- `stdio` for local development only

## Lifecycle notes

- initialize must advertise tools and resources actually implemented
- unsupported prompt features are declared as unsupported rather than implied
- long-running preview actions should log request IDs and emit progress where available

## Surface design

### Tools

- `search_skills` — read-only search
- `get_skill` — read-only lookup
- `preview_install` — planning action with no system mutation

### Resources

- `catalog://skills/{slug}` — canonical skill metadata
- `catalog://categories/{name}` — category summaries

### Prompts

- `compare-skills` — reusable prompt for comparing two skills

## Auth notes

- bearer token expected for remote deployment
- audience validation required
- write-capable actions are not exposed in this version

## Compatibility notes

| Client class | Support |
| :-- | :-- |
| Local IDE via `stdio` | supported for development |
| Remote app with Streamable HTTP | supported |
| Legacy HTTP+SSE-only client | unsupported in current version |

## Validation notes

- initialize flow smoke-tested
- capability listing checked against implementation
- remote path tested through staging proxy
