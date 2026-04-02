# Component Flattening Decision Matrix

Use this matrix to compare strategies for each affected namespace or feature.

## Strategies

- **Consolidate down**: merge nested implementation into the parent because the parent is the real coherent component
- **Split up**: move parent implementation into clearer leaf modules because the parent mixes distinct responsibilities
- **Extract shared code**: move common logic into a shared utility area or shared submodule
- **No move**: retain the current structure because the parent-level file is intentional

## Scoring dimensions

Score each dimension as `low`, `medium`, or `high` impact.

| Dimension | Consolidate down | Split up | Extract shared code | No move |
| --- | --- | --- | --- | --- |
| Cohesion improvement | Good when child code is tightly related | Good when parent responsibilities are mixed | Good when common logic is reused | Best when structure is already intentional |
| API churn risk | Medium if public imports point to children | Medium to high if many new paths appear | Low to medium | Lowest |
| Alias / barrel rewrite effort | Medium | High | Medium | None |
| Lazy loading / routing risk | Medium if boundaries collapse | Medium to high | Low to medium | Lowest |
| Test impact | Low to medium | Medium to high | Medium | None |
| Migration effort | Low to medium | High | Medium | None |
| Best fit | Small related nested modules | Distinct functional areas | Shared validators/constants/helpers | Intentional shells or entrypoints |

## Selection guidance

### Prefer consolidate down when

- child modules are small and tightly related
- the parent is already the true user-facing component
- route or package boundaries are not tied to the child structure
- consumer impact is manageable

### Prefer split up when

- the parent contains clearly different behaviors
- keeping everything at the root harms comprehension
- each responsibility can become a stable leaf module
- the team accepts a broader refactor and verification effort

### Prefer extract shared code when

- root-level files are mostly validators, formatters, constants, or mappers
- multiple leaf modules consume the same helper logic
- you want better ownership without collapsing unrelated modules

### Prefer no move when

- the file is a barrel, public API, route shell, layout, bootstrap file, or package export surface
- moving it would mainly satisfy aesthetics rather than improve cohesion
- the public import path is more important than local folder purity

## Required output sentence

When recommending a strategy, include this sentence pattern:

> Recommended because it improves cohesion with the least harmful impact on imports, API surface, routing, and verification scope.
