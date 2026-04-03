# Dependency Map Template

Map dependencies before choosing extraction order.

## Candidate

- Candidate seam:
- Owning team:
- Proposed extraction phase:

## Dependency categories

### Runtime dependencies

| Dependency | Direction | Criticality | Sync/async | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

### Build-time / code dependencies

| Dependency | Type | Refactor needed | Notes |
| --- | --- | --- | --- |
| | | | |

### Data dependencies

| Dataset / table | Read/write | Shared owner? | Risk | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

### Batch / reporting dependencies

| Job / report | Frequency | Upstream dependency | Break risk | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

### Team / process dependencies

| Dependency | Team | Impact if delayed | Mitigation |
| --- | --- | --- | --- |
| | | | |

## Blockers and temporary seams

- Hidden coupling discovered:
- Temporary adapter needed:
- Anti-corruption boundary needed:
- Abstraction/refactor needed before extraction:

## Recommendation

- Safe to extract now? yes / no / partially
- Preconditions:
- Highest-risk dependency:
