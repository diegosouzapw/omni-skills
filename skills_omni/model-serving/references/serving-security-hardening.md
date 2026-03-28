# Serving Security Hardening

Use this checklist to reduce supply-chain and operational risk for model-serving systems.

## Image And Build Hygiene

- prefer minimal runtime images
- use multi-stage builds to keep build tools out of runtime
- pin and review base images
- make runtime images reproducible where practical
- avoid interactive hotfixes inside running containers

## Secrets

- do not bake credentials into images
- do not commit tokens, model registry credentials, or secret files into the repository
- inject secrets through supported secret-management paths
- rotate secrets independently from container rebuilds when possible
- test startup and readiness behavior for secret retrieval failure

## Artifact Handling

- track model artifact version and provenance
- avoid mutable ad hoc artifacts copied into live containers
- separate model promotion controls from application code deployment where needed
- verify artifact compatibility with the serving contract

## Scanning

Scan:

- container images
- filesystem contents
- infrastructure-as-code
- dependency manifests

Use scan findings to distinguish:

- fix before release
- accepted risk with owner
- false positive requiring suppression process

## Operational Safety

- restrict who can promote models and rotate production traffic
- preserve rollback access to the prior known-good version
- keep auditability for model version, config version, and secret change events
