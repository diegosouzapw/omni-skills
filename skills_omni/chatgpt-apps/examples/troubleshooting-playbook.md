# Troubleshooting Playbook

Use this quick sequence before making broad code changes.

## 1. Connection failure

If ChatGPT cannot connect:

- verify public HTTPS URL
- verify `/mcp` path
- confirm the server is actually running
- reconnect using the exact same URL you tested

## 2. Tools stale or missing

If tools look outdated:

- rebuild or restart the app
- inspect the live descriptor source
- refresh or reconnect in ChatGPT
- confirm the endpoint serving metadata is the one you edited

## 3. Blank widget

If tool calls work but no UI appears:

- compare template URI in the result against the registered resource
- verify resource type and registration
- test a minimal static widget
- inspect CSP and external asset requests

## 4. Wrong tool selected

If the model chooses badly:

- tighten tool descriptions
- reduce overlap between tools
- add schema constraints
- review annotations

## 5. UI action cannot call tool

If buttons fail:

- inspect the canonical call path
- verify tool name and input payload
- remove wrapper-only assumptions
- confirm the server accepts the expected schema

## 6. Hosted app fails after deploy

If local works but hosted fails:

- compare local and production CSP/domain settings
- check production asset URLs
- confirm secrets and auth config
- retest from ChatGPT against the hosted endpoint
