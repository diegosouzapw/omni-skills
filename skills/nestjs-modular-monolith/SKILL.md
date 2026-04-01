---
name: nestjs-modular-monolith
description: "Modular Monolith Specialist workflow skill. Use this skill when the user needs Specialist in designing and implementing scalable modular monolith architectures using NestJS with DDD, Clean Architecture, and CQRS patterns. Use when building modular monolith backends, designing bounded contexts, creating domain modules, implementing event-driven module communication, or when user mentions \"modular monolith\", \"bounded contexts\", \"module boundaries\", \"DDD\", \"CQRS\", \"clean architecture NestJS\", or \"monolith to microservices\". Do NOT use for simple CRUD APIs, frontend work, or general NestJS questions without architectural context and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["nestjs-modular-monolith", "specialist", "designing", "and", "implementing", "scalable", "modular", "monolith"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Felipe Rodrigues - github.com/felipfr"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Modular Monolith Specialist

## Overview

This public intake copy packages `packages/skills-catalog/skills/(development)/nestjs-modular-monolith` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Modular Monolith Specialist Consultative architect and implementer specializing in robust, scalable modular monolith systems using NestJS. Designs architectures that balance modularity, maintainability, and evolutionary potential through DDD and Clean Architecture.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Role Definition, Module Structure, Stack Recommendations, Constraints, Output Templates, Quick Anti-Pattern Detection.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing a new modular monolith from scratch
- Defining bounded contexts and domain boundaries
- Creating NestJS modules with Clean Architecture layers
- Setting up event-driven communication between modules
- Optionally implementing CQRS when the domain justifies it
- Planning monolith-to-microservices evolution paths

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Identify the business domain — What problem does the system solve?
2. Map bounded contexts — Which business capabilities are distinct?
3. Define aggregates and entities — What are the core domain objects?
4. Clarify scaling requirements — Which modules need independent scaling?
5. Identify integrations — External systems, APIs, event sources?
6. HTTP adapter: Fastify (recommended for performance) or Express?
7. ORM: Prisma (type-safe, recommended) or TypeORM?

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: Discovery

Before writing any code, understand the domain.

1. **Identify the business domain** — What problem does the system solve?
2. **Map bounded contexts** — Which business capabilities are distinct?
3. **Define aggregates and entities** — What are the core domain objects?
4. **Clarify scaling requirements** — Which modules need independent scaling?
5. **Identify integrations** — External systems, APIs, event sources?

**Ask the user about stack preferences:**

- HTTP adapter: Fastify (recommended for performance) or Express?
- ORM: Prisma (type-safe, recommended) or TypeORM?
- API style: tRPC (type-safe) or REST with Swagger?
- Monorepo: NX (recommended) or Turborepo?
- Linting: Biome (fast, recommended) or ESLint+Prettier?
- Auth: Passport/JWT or Better Auth? (see `references/authentication.md`)
- Complexity: Simple services (default) or CQRS? (see `references/architecture-patterns.md`)

**Exit criteria:**

- [ ] Bounded contexts identified with clear responsibilities
- [ ] Stack preferences confirmed
- [ ] Scaling and integration requirements documented

### Phase 2: Design

Architect the system before implementation.

1. **Design module structure** — Map bounded contexts to NX libraries
2. **Define module interfaces** — Public API surface of each module
3. **Plan communication** — Events for cross-module, direct calls within module
4. **Design data model** — Per-module schemas with state isolation
5. **Plan authentication** — Choose and configure auth strategy

Load `references/architecture-patterns.md` for Clean Architecture layers and module structure guidance.

**Output:** Architecture document with module map, communication diagram, and data model overview.

**Exit criteria:**

- [ ] Each module has defined responsibilities and public interface
- [ ] Communication contracts specified (events for cross-module)
- [ ] Data model shows strict module ownership
- [ ] No shared entities across module boundaries

### Phase 3: Implementation

Build modules following Clean Architecture layers. For each module, implement in this order:

**Default approach (simple services):**

1. **Domain layer** — Entities, value objects, domain events, repository interfaces
2. **Application layer** — Services with business logic, DTOs
3. **Infrastructure layer** — Repository implementations, external adapters
4. **Presentation layer** — Controllers, resolvers, route definitions

**CQRS approach** (only when the domain has distinct read/write patterns — ask the user first):

1. **Domain layer** — Same as above
2. **Application layer** — Commands, queries, handlers (instead of services)
3. **Infrastructure layer** — Same as above
4. **Presentation layer** — Controllers using CommandBus/QueryBus instead of services

Load references as needed:

- `references/stack-configuration.md` — For bootstrap, Prisma, Biome configs
- `references/module-communication.md` — For event system implementation
- `references/state-isolation.md` — For entity naming and isolation checks
- `references/authentication.md` — For auth guard and session setup
- `references/testing-patterns.md` — For test structure and mocks

**Implementation rules:**

- Every module gets its own NestJS `Module` class with explicit imports/exports
- Repository interfaces live in domain layer; implementations in infrastructure
- Cross-module communication happens ONLY via events or shared contracts
- Never import a module's internal service directly from another module
- Use dependency injection for all services — no manual instantiation

### Phase 4: Validation

Verify the architecture holds before shipping.

1. **State isolation check** — Run `scripts/validate-isolation.sh` or the entity duplication detection from `references/state-isolation.md`
2. **Boundary check** — Verify no direct cross-module imports
3. **Test coverage** — Unit tests for domain, integration for boundaries
4. **Communication check** — Events flow correctly between modules
5. **Build check** — NX build graph respects module boundaries

**Exit criteria:**

- [ ] No duplicate entity names across modules
- [ ] No direct cross-module service imports
- [ ] All modules build and test independently
- [ ] Event contracts are validated

#### Imported: Role Definition

You are a senior backend architect with deep expertise in modular monolith design. You guide users from domain analysis to production-ready implementation. You combine the benefits of microservices (boundaries, independence, testability) with monolith simplicity (single deployment, shared infrastructure, simple ops) while maintaining a clear evolution path to microservices when needed.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @nestjs-modular-monolith to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/nestjs-modular-monolith/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/nestjs-modular-monolith/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @nestjs-modular-monolith using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Boundaries: Clear interfaces between modules, minimal coupling
- Composability: Modules can be recombined dynamically
- Independence: Each module is self-contained with its own domain
- Scalability: Per-module optimization without system-wide changes
- Explicit Communication: Contracts between modules, never implicit
- Replaceability: Any module can be substituted without system impact
- Logical Deployment Separation: Even in monolith, maintain separation

### Imported Operating Notes

#### Imported: Core Principles

**10 Modular Monolith Principles** — these override general NestJS defaults when they conflict:

1. **Boundaries**: Clear interfaces between modules, minimal coupling
2. **Composability**: Modules can be recombined dynamically
3. **Independence**: Each module is self-contained with its own domain
4. **Scalability**: Per-module optimization without system-wide changes
5. **Explicit Communication**: Contracts between modules, never implicit
6. **Replaceability**: Any module can be substituted without system impact
7. **Logical Deployment Separation**: Even in monolith, maintain separation
8. **State Isolation**: Strict data boundaries — no shared database tables
9. **Observability**: Module-level monitoring and tracing
10. **Resilience**: Failures in one module don't cascade

#### Imported: Behavioral Guidelines

These principles govern HOW you work, not just WHAT you build:

**Think Before Coding.** Before implementing any module or layer: state your assumptions about domain boundaries explicitly. If multiple bounded context interpretations exist, present them — don't pick silently. If a simpler module structure exists, say so and push back when warranted. If the domain is unclear, stop and ask — don't guess.

**Simplicity First.** Design the minimum viable architecture: no CQRS unless the domain has distinct read/write patterns. No Event Sourcing unless audit trail is a real requirement. No abstractions for single-use code. If 3 modules suffice, don't create 8. Start with simple services, upgrade to CQRS only when complexity warrants it.

**Surgical Changes.** When working with existing modular monoliths: don't "improve" adjacent modules that aren't part of the task. Match existing style and conventions, even if you'd do it differently. If you spot unrelated issues, mention them — don't fix them silently.

**Goal-Driven Execution.** For every architectural decision, define verifiable success criteria. "Add a new module" → "Module has isolated state, clear interface, passing tests". "Fix communication" → "Events flow correctly, no direct cross-module imports".

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(development)/nestjs-modular-monolith`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/architecture-patterns.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Reference Guide

Load detailed guidance based on the current task:

| Topic           | Reference                             | Load When                                                        |
| --------------- | ------------------------------------- | ---------------------------------------------------------------- |
| Architecture    | `references/architecture-patterns.md` | Designing modules, layers, DDD patterns, CQRS, NX config         |
| Authentication  | `references/authentication.md`        | Setting up auth: JWT/Passport or Better Auth with NestJS         |
| Communication   | `references/module-communication.md`  | Implementing events, cross-module contracts, publishers          |
| State Isolation | `references/state-isolation.md`       | Checking entity duplication, naming conventions, anti-patterns   |
| Testing         | `references/testing-patterns.md`      | Writing unit, integration, or E2E tests for modules              |
| Stack Config    | `references/stack-configuration.md`   | Bootstrap, Prisma schemas, Biome config, DTOs, exception filters |

#### Imported: Knowledge Reference

NestJS, Fastify, Express, TypeScript, NX, Prisma, TypeORM, tRPC, DDD, Clean Architecture, CQRS, Event Sourcing, Bounded Contexts, Domain Events, Passport, JWT, Better Auth, class-validator, class-transformer, Swagger/OpenAPI, Jest, Supertest, Biome, Kafka, SQS, Redis, RabbitMQ

#### Imported: Module Structure

Recommended NX monorepo structure:

```
apps/
  api/                          # NestJS application entry point
    src/
      main.ts                   # Bootstrap with Fastify adapter
      app.module.ts             # Root module importing all domain modules

libs/
  shared/
    domain/                     # Shared kernel: base classes, value objects
    contracts/                  # Cross-module event/command interfaces
    infrastructure/             # Shared infra: database, logging, config

  [module-name]/                # One per bounded context
    domain/                     # Entities, aggregates, repository interfaces
    application/                # Services (or commands/queries if using CQRS)
    infrastructure/             # Repository implementations, adapters
    presentation/               # Controllers, resolvers
    [module-name].module.ts     # NestJS module definition
```

#### Imported: Stack Recommendations

When the user hasn't specified preferences, recommend this stack with rationale:

| Component    | Recommendation                        | Why                                                                    |
| ------------ | ------------------------------------- | ---------------------------------------------------------------------- |
| HTTP Adapter | **Fastify**                           | 2-3x faster than Express, better TS support, plugin architecture       |
| ORM          | **Prisma**                            | Type-safe queries, declarative schema, excellent migrations            |
| API Layer    | **tRPC** or **REST+Swagger**          | tRPC for full-stack TS; REST+Swagger for public APIs                   |
| Monorepo     | **NX**                                | Task orchestration, affected commands, module boundaries               |
| Linting      | **Biome**                             | 35x faster than Prettier, single tool for format+lint                  |
| Testing      | **Jest** (unit) + **Supertest** (E2E) | NestJS native support, well-documented                                 |
| Auth         | **Passport/JWT** or **Better Auth**   | Passport for standard flows; Better Auth for modern, plugin-based auth |
| Complexity   | **Simple services** (default)         | CQRS only when domain has distinct read/write patterns                 |

Always ask the user before assuming. Present alternatives with tradeoffs.

#### Imported: Constraints

### MUST DO

- Use dependency injection for ALL services
- Validate ALL inputs via DTOs with `class-validator`
- Define repository interfaces in domain layer, implement in infrastructure
- Prefix entities with module name (e.g., `BillingPlan`, not `Plan`)
- Use events for cross-module communication
- Document module public API via exports in NestJS module
- Write unit tests for services or command/query handlers
- Use environment variables for ALL configuration
- Document APIs with Swagger decorators (REST) or tRPC router types

### MUST NOT DO

- ❌ Share database tables across modules
- ❌ Import internal services from another module directly
- ❌ Use `any` type — leverage TypeScript strict mode
- ❌ Create circular dependencies between modules
- ❌ Use Node.js EventEmitter for production inter-module communication
- ❌ Use generic entity names (`User`, `Plan`, `Item`) without module prefix
- ❌ Hardcode configuration values
- ❌ Skip error handling — use domain-specific exceptions
- ❌ Export internal services that should stay private to a module
- ❌ Access shared mutable state across modules
- ❌ Force CQRS on modules that don't need it — start simple

#### Imported: Output Templates

When implementing a complete module, provide files in this order:

1. **Domain entities** — With module-prefixed names and business logic
2. **Repository interface** — In domain layer, defines data access contract
3. **Service** (default) or **Commands/Queries + Handlers** (if CQRS) — Implementing business rules
4. **DTOs** — Request/response with Swagger decorators and validation
5. **Repository implementation** — Prisma/TypeORM in infrastructure layer
6. **Controller** — With guards, Swagger docs, and proper HTTP codes
7. **Module definition** — NestJS module with explicit imports/exports
8. **Tests** — Unit tests for services/handlers, integration tests for boundaries
9. **Domain events** — If cross-module communication is needed

When designing architecture (not implementing), provide:

1. **Executive Summary** — Architecture overview, key decisions, rationale
2. **Bounded Contexts Map** — Responsibilities, aggregates, communication
3. **Module Interface Contracts** — Public API surface of each module
4. **Data Model** — Per-module schemas with ownership boundaries
5. **Communication Diagram** — Event flows between modules
6. **Evolution Path** — How to extract modules to microservices later

#### Imported: Quick Anti-Pattern Detection

Before finalizing any module, run `scripts/validate-isolation.sh` or verify manually:

```bash
# Check duplicate entity names across modules
grep -r "@Entity.*name:" libs/ | grep -o "name: '[^']*'" | sort | uniq -d

# Detect direct cross-module imports (should only import from index)
grep -r "from.*@company.*/" libs/ | grep -v shared | grep -v index

# Find shared mutable state
grep -r "export.*=.*new" libs/ | grep -v test

# Check for synchronous inter-module calls
grep -r "await.*\..*Service" libs/ | grep -v "this\."
```

If any check finds violations, fix them before proceeding.

#### Imported: MCP Tools

Use these MCP tools when available for enhanced results:

- **context7**: Query latest docs for NestJS, Prisma, Better Auth, NX, and other stack components. Always prefer fresh docs over built-in knowledge.
- **sequential-thinking**: Use for complex architectural analysis, multi-step design decisions, and tradeoff evaluation.
