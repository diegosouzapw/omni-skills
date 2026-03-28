# Probe Design For Model Servers

Model servers often have long initialization phases, heavyweight artifacts, and external dependencies. Probe design should reflect that.

## Startup Probe

Use startup behavior for:

- loading model weights
- tokenizer or embedding cache initialization
- GPU runtime initialization
- one-time artifact verification

A server should not be restarted simply because warmup takes time.

## Readiness Probe

Use readiness to answer: **can this replica safely receive traffic now?**

Readiness may depend on:

- model loaded and warm
- required local caches initialized
- critical dependencies reachable enough to serve safely
- secret material available if required for serving

If readiness fails, traffic should stay away from the pod without forcing a restart.

## Liveness Probe

Use liveness only for: **is the process stuck or irrecoverably unhealthy?**

Avoid using liveness for:

- slow model loading
- transient downstream dependency failures
- temporary feature-store or retrieval-service flakiness

Dependency flakiness should usually reduce readiness, not kill the process.

## Design Checklist

- What is the realistic worst-case warmup time?
- When is the first request safe to serve?
- Which dependencies are critical for readiness?
- Which failures should trigger traffic removal versus process restart?
- Can warm replicas be kept available during rollout to reduce cold-start risk?

## Common Failure Pattern

**Symptom:** pods restart repeatedly during deployment.  
**Likely cause:** liveness probe fires before model initialization completes.  
**Safer fix:** extend startup handling, gate readiness on warmup completion, and make liveness narrower.
