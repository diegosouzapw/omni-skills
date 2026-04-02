# Module Boundary Rules

Use these rules to preserve modularity in a NestJS modular monolith.

## Core rules

1. Each bounded context owns one or more NestJS modules with a clear public API.
2. A module's internal providers stay private unless explicitly exported.
3. Other modules should depend on exported contracts, not internal classes.
4. Deep imports across bounded contexts are forbidden.
5. Shared libraries must stay small and generic.
6. Business data has a single owning module.

## Practical rules

### Public API

Expose only what another module truly needs:

- exported providers
- public DTOs or contracts where justified
- documented events
- controller or resolver endpoints

Do not export:

- internal repositories
- implementation details
- helper services created only for internal orchestration

### Shared kernel

Acceptable shared-kernel content:

- base value object helpers
- shared primitives
- generic infrastructure contracts
- cross-cutting utilities with no domain ownership

Do not place in shared kernel:

- context-specific entities
- business policies that belong to one module
- repositories for multiple business contexts

### Persistence ownership

A good rule is: other modules may consume a module's behavior, but should not reach into its storage model.

Target state:

- one module owns writes for its business data
- other modules interact through APIs, contracts, or events
- exceptions are documented explicitly during legacy transitions

## Review checklist

- Does each module have a clear owner and responsibility?
- Are `exports` arrays narrow and intentional?
- Are there deep imports across contexts?
- Is any entity class shared between unrelated domains?
- Are multiple modules writing the same data without an explicit ownership rule?
- Has the shared kernel grown beyond fundamentals?
