# Threat Modeling Checklist

## Scope

- define the system or feature boundary
- name sensitive assets and privileged actions
- list external interfaces and internal trust assumptions
- name the release or design decision being reviewed

## Threat Path

- identify likely attacker types
- identify entry points
- map lateral movement or escalation paths
- note where assumptions are enforced vs implied

## Mitigations

- mark must-fix blockers
- mark short-term hardening work
- mark accepted residual risk
- attach owner and validation method to each high-priority item

## Follow-through

- update the model after incidents or major architecture changes
- connect the model to release review and test planning
