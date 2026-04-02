# Flow Mapping Template

```text
Flow name:
- [authentication, checkout, sync job, etc.]

Mission:
- Explain how [flow] works in this repository.

Entry point:
- [file and symbol]

Trace:
1. [entrypoint] → [next symbol/file]
2. [next step] → [next symbol/file]
3. [boundary or side effect]

Inputs:
- [request, event, config, state]

Outputs:
- [response, DB write, queue publish, side effect]

Dependencies:
- [service, cache, external API, env var]

Tests or docs consulted:
- [paths]

Unknowns:
- [runtime-only branches, missing config, external dependency gaps]

Notebook output:
- [planned note title]
```
