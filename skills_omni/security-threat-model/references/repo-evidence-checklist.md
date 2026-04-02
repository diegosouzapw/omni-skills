# Repo Evidence Checklist

Use this checklist before writing the final threat model.

## Core Application Evidence

- [ ] Main entrypoints identified
- [ ] Routing, handlers, or command surface identified
- [ ] Data stores or persistence layers identified
- [ ] External services or APIs identified
- [ ] Auth or session handling identified

## Dependency and Supply Chain Evidence

- [ ] Dependency manifests found
- [ ] Lockfiles found
- [ ] Private registries or package feeds noted
- [ ] Build scripts or release scripts reviewed
- [ ] Signing, provenance, or attestation evidence checked if present

## CI/CD and Automation Evidence

- [ ] CI workflow files reviewed
- [ ] Trigger types noted
- [ ] Token or permissions configuration noted
- [ ] Third-party actions or automation dependencies noted
- [ ] Artifact publishing or release automation reviewed

## Deployment Evidence

- [ ] Dockerfiles or container build definitions reviewed
- [ ] Kubernetes or orchestration manifests reviewed if present
- [ ] Terraform, Helm, or deployment scripts reviewed if present
- [ ] Environment configuration and secret references noted
- [ ] Network exposure hints identified

## Security-Relevant Config Evidence

- [ ] RBAC, IAM, or policy files reviewed
- [ ] CORS, CSP, or gateway policy reviewed if relevant
- [ ] Logging or audit configuration reviewed if relevant
- [ ] Secret-loading patterns reviewed
- [ ] Unsafe defaults or debug settings noted

## Scope Safety Checks

- [ ] Tests and examples separated from runtime paths
- [ ] Dev-only tooling separated from production paths
- [ ] Architecture claims backed by file evidence
- [ ] Unknowns moved to assumptions instead of guessed
