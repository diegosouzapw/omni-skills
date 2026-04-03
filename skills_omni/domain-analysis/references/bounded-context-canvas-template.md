# Bounded Context Canvas Template

Use this template for each proposed bounded context.

## Context Identity

- **Context name:**
- **Short purpose statement:**
- **Confidence:** High | Medium | Low

## Ubiquitous Language

| Term | Meaning inside this context | Evidence |
| --- | --- | --- |

## Responsibilities

- What business capability does this context own?
- Which workflows belong here?
- Which decisions or rules are authoritative here?

## Included Concepts

- Entities / aggregates / records:
- Services / handlers / workflows:
- Events / commands / APIs:

## Excluded Concepts

- What looks related but should remain outside this context?
- Which nearby concepts belong to another context?

## Invariant Boundary

- Which rules must remain consistent inside this context?
- What state transitions or lifecycle rules define the boundary?

## Dependencies

- **Upstream contexts:**
- **Downstream contexts:**
- **Integration mechanism:** API | Event | Shared library | DB read model | Other

## Term Conflicts

| Shared term | Meaning here | Meaning elsewhere | Notes |
| --- | --- | --- | --- |

## Ownership Assumptions

- Team or role assumptions, if known:
- Operational constraints, if known:

## Service-Boundary Option

- Keep in modular monolith for now | Internal module | Future service candidate | Existing service boundary fits
- Why:
- Caveats:
