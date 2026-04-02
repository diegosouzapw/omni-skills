# Deployment Readiness

Use this checklist only when the user asks for hosted testing, private rollout, or production deployment.

## Endpoint requirements

- public HTTPS endpoint
- stable hostname
- correct `/mcp` path
- dependable TLS
- production-appropriate availability

## Operational requirements

- secrets stored outside the repo
- logs for tool calls and failures
- request latency visibility
- enough diagnostics to distinguish server, bridge, and widget failures
- environment-specific configuration for CSP and domains

## Pre-launch checks

- hosted endpoint responds correctly
- descriptor and metadata served from the production URL are current
- widget assets resolve from production domains
- ChatGPT Developer Mode test succeeds against the hosted URL
- auth, if present, works with the intended production flow

## Avoid

- treating a tunnel as production hosting
- copying local CSP domains into production unchanged
- claiming readiness without a ChatGPT test against the hosted endpoint
