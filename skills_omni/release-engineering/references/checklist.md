# Release Engineering Checklist

Use this checklist before approving a release packet.

## Scope and Ownership

- name the release owner
- list affected services and dependencies
- identify user-visible impact and communication needs
- mark irreversible steps explicitly

## Preflight

- confirm build artifact identity and environment target
- verify migrations, feature flags, and config changes are understood
- verify dashboards, alerts, and rollback tooling are available
- confirm on-call and stakeholder awareness

## Rollout

- define staged rollout steps
- define hold points and required evidence to continue
- name who approves each transition
- define maximum tolerated error or latency shift

## Rollback

- define rollback trigger conditions
- document reversible vs irreversible steps
- document data recovery or mitigation steps
- confirm rollback owner and communication path

## Closeout

- define post-release verification window
- record follow-up checks and unresolved risks
- capture release notes and improvement items
