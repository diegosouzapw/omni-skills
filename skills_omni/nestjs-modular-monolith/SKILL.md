---
name: "nestjs-modular-monolith"
description: "Modular Monolith Specialist workflow skill. Use this skill when designing or evolving NestJS backends with bounded contexts, strict module boundaries, Clean Architecture, selective CQRS, and future microservice extraction seams. Use it for architecture-heavy work such as module decomposition, cross-module communication, persistence ownership, API contracts, and boundary validation. Do not use it for simple CRUD APIs, frontend work, or generic NestJS questions without architectural scope."
version: "0.0.1"
category: "backend"
tags:
  - "nestjs"
  - "modular-monolith"
  - "ddd"
  - "clean-architecture"
  - "cqrs"
  - "bounded-contexts"
  - "module-boundaries"
  - "nx"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/nestjs-modular-monolith"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Modular Monolith Specialist

## Overview

Use this skill for **NestJS modular monolith architecture work**, not for generic NestJS coding.

It helps the operator design and implement a backend that keeps the **operational simplicity of a monolith** while preserving **strong internal boundaries** between business capabilities. The intended outcome is a codebase that is easier to change, test, secure, and eventually extract into services if needed.

This skill preserves the original intent of the imported workflow while upgrading it into a more executable architecture kit. It emphasizes:

- bounded contexts before folder structure
- NestJS module encapsulation and dependency injection
- Clean Architecture layering inside each module
- CQRS only when justified
- in-process event-driven communication with clear caveats
- module-owned persistence and transaction boundaries
- validation, serialization, auth, and error-contract hardening
- monorepo boundary enforcement and architecture checks

If the task is mainly CRUD scaffolding, frontend work, or generic framework setup without architectural decisions, use a narrower skill instead.

## When to Use This Skill

Use this skill when the task includes one or more of these signals:

- Designing a new NestJS modular monolith from scratch
- Splitting an existing NestJS backend into bounded contexts or domain modules
- Defining strict module boundaries, exports, and dependency rules
- Applying DDD or Clean Architecture inside NestJS modules
- Deciding whether CQRS is justified for a particular subdomain
- Designing cross-module communication using contracts or in-process events
- Preventing boundary erosion in an Nx or monorepo-based codebase
- Planning extraction seams from monolith to microservices without premature distribution
- Clarifying ownership of schemas, tables, repositories, or transactional workflows
- Standardizing API contracts, validation, serialization, and error handling across modules

## When Not to Use This Skill

Do **not** use this skill as the default answer for:

- Simple CRUD APIs with one small domain and no boundary complexity
- Basic NestJS setup questions unrelated to architecture
- Frontend, UI, or full-stack presentation work
- Pure infrastructure or deployment tasks with no module-design implications
- Premature microservices design when a well-structured monolith is still sufficient
- CQRS-by-default proposals without clear read/write divergence or workflow complexity

If the task drifts toward auth redesign, schema tuning, deployment, observability platform work, or service extraction execution, hand off deliberately using `agents/architecture-handoff-router.md`.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New domain or greenfield design | `examples/bounded-context-map-template.md` | Forces domain discovery before implementation |
| Defining module rules | `references/module-boundary-rules.md` | Establishes exports, ownership, and deep-import restrictions |
| API contracts and secure defaults | `references/api-contracts-and-validation.md` | Standardizes DTOs, validation, serialization, and error shapes |
| Choosing communication style | `references/event-communication-patterns.md` | Helps decide between direct calls, in-process events, and durable messaging |
| Enforcing boundaries in a monorepo | `references/nx-boundary-enforcement.md` | Adds automated checks instead of relying on conventions alone |
| Improving operability | `references/observability-and-errors.md` | Covers logs, error mapping, readiness, and shutdown |
| Planning future extraction | `references/microservice-extraction-seams.md` | Preserves extraction seams without introducing distributed complexity too early |
| Quick architecture checks | `scripts/check_module_boundaries.sh` | Read-only helper for likely boundary leaks |
| Quick bootstrap security checks | `scripts/check_validation_defaults.sh` | Verifies expected validation and bootstrap defaults |
| Handoff routing | `agents/architecture-handoff-router.md` | Redirects adjacent work to more appropriate specialties |

## Workflow

Follow these phases in order. Do not start with code generation if the module map and ownership rules are still vague.

### Phase 1: Discover the Domain

1. Identify the business domain and the main user workflows.
2. List candidate bounded contexts.
3. For each context, define responsibilities, core entities, and invariants.
4. Identify places where terminology overlaps but ownership differs.
5. Clarify external integrations, compliance constraints, and growth expectations.
6. Ask whether the task is greenfield, refactor-in-place, or extraction planning.

**Ask before assuming:**

- HTTP adapter: Fastify or Express?
- ORM/data access: Prisma or TypeORM?
- API style: REST, GraphQL, or tRPC already in use?
- Monorepo tooling: Nx, Turborepo, or plain workspace?
- Auth approach: existing Nest guards/strategies, Passport/JWT, or other established stack?
- Complexity target: simple application services first, or a justified CQRS slice?

**Exit criteria:**

- [ ] Bounded contexts are named and explained
- [ ] Context ownership and responsibilities are explicit
- [ ] Existing stack constraints are confirmed
- [ ] Major integrations and non-functional requirements are known

### Phase 2: Design the Architecture Before Coding

1. Map each bounded context to a NestJS module or module group.
2. Define each module's **public API surface**: exports, controllers, contracts, and events.
3. Decide where a shared kernel is truly necessary and keep it minimal.
4. Define dependency direction rules between modules.
5. Define persistence ownership: which module owns which tables, schema segment, or repositories.
6. Decide communication style per interaction:
   - direct call inside one module
   - contract-based interaction across module boundaries
   - in-process event for cross-module reaction
   - durable messaging only if delivery guarantees or external integration require it
7. Decide whether CQRS is warranted, and only for the affected module.
8. Capture key decisions in an ADR using `examples/module-contract-adr-template.md`.

**Exit criteria:**

- [ ] Every module has a clear responsibility
- [ ] Public interfaces are documented
- [ ] Dependency rules are explicit
- [ ] Persistence ownership is documented
- [ ] Communication choices are justified
- [ ] CQRS is either rejected or narrowly justified

### Phase 3: Implement Module-by-Module

Implement one bounded context at a time.

**Default path: simple application services**

1. Domain layer: entities, value objects, domain services, repository interfaces
2. Application layer: use cases/services, DTO mapping, transaction orchestration
3. Infrastructure layer: repository implementations, external gateways, persistence adapters
4. Presentation layer: controllers/resolvers and request/response DTOs
5. Nest module definition: explicit imports, providers, exports, and adapters

**CQRS path: use only where justified**

1. Domain layer as above
2. Application layer: commands, queries, handlers, optional sagas/process managers
3. Infrastructure and presentation as above
4. Keep read-model complexity local to the module that benefits from it

**Implementation rules:**

- Use dependency injection for all services and adapters
- Export only what another module legitimately needs
- Keep repository interfaces in domain or application boundary; implementations belong in infrastructure
- Never deep-import another module's internals
- Avoid direct cross-module repository access
- Prefer response DTOs or serializers over returning ORM entities directly
- Keep transactions local to a module boundary whenever possible
- Use in-process events carefully; they are not durable delivery guarantees

### Phase 4: Validate Boundaries and Contracts

1. Run `scripts/check_module_boundaries.sh` for fast, read-only checks.
2. If using Nx, inspect the project graph and enforce dependency rules.
3. Review every module export and remove accidental public providers.
4. Verify DTO validation and response serialization rules.
5. Confirm that authn/authz boundaries match the domain, not only controller convenience.
6. Check that cross-module interactions happen through approved contracts.
7. Validate that tests exist at the right layers.

**Exit criteria:**

- [ ] No obvious deep imports or accidental coupling
- [ ] No unjustified circular dependencies
- [ ] Validation and serialization defaults are present
- [ ] Public APIs and events match intended contracts
- [ ] Tests cover module behavior and architecture boundaries

### Phase 5: Operationalize

1. Standardize logs and correlation fields across modules.
2. Map domain/application errors to safe API error responses.
3. Enable graceful shutdown hooks if the app owns DB connections, consumers, or workers.
4. Confirm config is environment-driven and validated.
5. Document readiness, health, and background-processing responsibilities.

**Exit criteria:**

- [ ] Logging and error behavior are consistent
- [ ] Shutdown behavior is considered
- [ ] Config is validated and not hardcoded
- [ ] Operational assumptions are visible to reviewers

### Phase 6: Handoff

Deliver one of these outcomes depending on task scope:

- architecture proposal
- module implementation plan
- code changes for one bounded context
- boundary review report
- extraction-seam plan for future services

If the task extends beyond this skill's scope, route using `agents/architecture-handoff-router.md`.

## Examples

### Example 1: Start with architecture discovery

```text
Use @nestjs-modular-monolith to design a billing and subscriptions backend in NestJS. Start by identifying bounded contexts, module boundaries, persistence ownership, and cross-module communication rules before proposing code.
```

**Expected outcome:** A bounded-context map, module responsibilities, dependency rules, and a recommendation on whether CQRS is needed.

### Example 2: Review an existing monolith for boundary leaks

```text
Review this NestJS monorepo as a modular monolith. Identify circular dependencies, deep imports, shared entity leakage, and places where modules bypass public contracts.
```

**Expected outcome:** A findings list with concrete fixes, including boundary-rule violations and safer public interfaces.

### Example 3: Run boundary checks

```bash
bash skills/nestjs-modular-monolith/scripts/check_module_boundaries.sh .
```

**Expected outcome:** Read-only warnings about likely deep imports, cross-module service usage, or mutable singleton patterns that deserve review.

### Example 4: Check validation defaults in bootstrap

```bash
bash skills/nestjs-modular-monolith/scripts/check_validation_defaults.sh apps/api/src/main.ts
```

**Expected outcome:** Confirmation that `ValidationPipe` and secure defaults are present, or a short list of missing settings.

### Example 5: Bootstrap example for secure defaults

```ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: false },
    }),
  );

  app.enableShutdownHooks();

  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ? Number(process.env.PORT) : 3000);
}

bootstrap();
```

**Expected outcome:** A safer Nest bootstrap baseline for DTO validation, OpenAPI, and graceful shutdown.

## Best Practices

### Design Rules

- Start with the fewest modules that honestly represent the domain.
- Prefer simple application services before introducing CQRS.
- Treat NestJS modules as encapsulation boundaries, not just folders.
- Keep the shared kernel small; overuse recreates tight coupling.
- Design public contracts so future extraction is possible, but do not add distributed-system complexity yet.

### Communication Rules

- Use direct method calls **inside** a module when the workflow is local.
- Use cross-module contracts or application events when another module reacts to a completed business action.
- Do not turn every interaction into an event.
- Do not present in-process events as durable messaging.
- If delivery guarantees matter, document that a broker/outbox pattern is required instead of implying Nest events are enough.

### Persistence Rules

- Each module should own its write model and repositories.
- Avoid direct reads or writes into another module's persistence layer.
- "No shared tables" means no ambiguous write ownership; document exceptions if legacy constraints exist.
- Keep transactions as local as possible; use events or orchestration for cross-module consistency.

### Testing Rules

- Unit test domain logic and application services or handlers.
- Integration test repository implementations and module wiring.
- E2E test public API behavior at the application edge.
- Add architecture checks in CI for dependency directions and boundary regressions.
- Prefer focused test modules over importing the whole app in every test.

### Do / Don't

**Do**

- State assumptions before modeling contexts
- Export a narrow public API from each module
- Use DTOs and serializers for boundary safety
- Document dependency direction rules
- Justify CQRS with domain complexity, not fashion
- Keep commands and queries inside the module that owns them

**Don't**

- Deep-import internal files from another module
- Return ORM entities directly from controllers
- Let multiple modules write to the same business data without explicit ownership
- Use Node.js `EventEmitter` as ad hoc production module integration
- Introduce sagas, brokers, or event sourcing without a real requirement
- Silently refactor adjacent modules that are outside the task scope

## Security Defaults

Use these defaults unless the repository already has a stronger established standard.

### Input Validation

- Use Nest `ValidationPipe` globally where appropriate
- Prefer:
  - `whitelist: true`
  - `forbidNonWhitelisted: true`
  - `transform: true`
- Validate DTOs at module boundaries, not only deep inside services
- Avoid permissive DTOs that silently accept unknown fields unless that is intentional

### Output Safety

- Do not return ORM entities or internal domain objects directly from controllers
- Use response DTOs or Nest serialization patterns to prevent leaking internal fields
- Review sensitive fields such as passwords, tokens, internal notes, flags, and tenant metadata

### Configuration

- Keep configuration in environment variables or validated config sources
- Validate required config at startup
- Do not hardcode secrets, callback URLs, or service endpoints

### Authentication and Authorization

- Apply authentication consistently at API boundaries
- Apply authorization per module capability, not just per route group
- Prefer least-privilege policies and explicit guards
- Be careful when one module acts on behalf of another; document trust boundaries

### Error Handling

- Map domain exceptions to safe client-facing responses
- Prefer a consistent error contract such as Problem Details for HTTP APIs when appropriate
- Avoid leaking stack traces or persistence internals to clients

## Validation and Boundary Checks

Use these checks before merge or handoff.

### Manual checks

- Review every `exports` array in NestJS modules
- Review every import path crossing bounded contexts
- Review whether shared libraries contain domain logic that should stay local
- Review whether one module is reading another module's tables or repositories directly
- Review whether events are being used where a direct in-module call would be simpler

### Automated checks

- Run `scripts/check_module_boundaries.sh`
- Run `scripts/check_validation_defaults.sh`
- If using Nx, enforce tags and dependency constraints
- If using Nx, inspect the project graph for forbidden coupling
- Run targeted unit, integration, and e2e tests for affected modules

## Troubleshooting

### Problem: Circular dependencies between modules or providers

**Symptoms:** Nest cannot resolve dependencies, bootstrap fails, or `forwardRef()` starts spreading across the codebase.

**Likely causes:**

- Two modules depend on each other's internal services
- Cross-context logic was not modeled as a contract or event
- Shared utilities grew into hidden business dependencies

**Solution:**

- Re-check module public APIs and dependency direction
- Move shared abstractions to a narrow shared contract only if truly generic
- Replace direct mutual service references with a clearer application boundary or event flow
- Use `forwardRef()` only as a temporary mitigation, not the architectural fix

### Problem: Boundary leaks through deep imports or shared entities

**Symptoms:** Modules compile, but business rules are spread across contexts, imports target internal files, or many modules depend on the same entity class.

**Likely causes:**

- Missing public API barrels or exports
- Convenience imports from internal implementation files
- Shared kernel expanded beyond foundational abstractions

**Solution:**

- Ban deep imports across bounded contexts
- Export only stable contracts from module entry points
- Move context-specific entities back into the owning module
- Add Nx boundary constraints if the repo supports them

### Problem: DTO validation is inconsistent or unsafe

**Symptoms:** Unexpected fields reach handlers, payloads transform unpredictably, or validation only works in some controllers.

**Likely causes:**

- Missing global `ValidationPipe`
- Inconsistent DTO usage across modules
- Overreliance on plain objects instead of validated DTO classes

**Solution:**

- Standardize bootstrap validation defaults
- Validate all external input at the presentation boundary
- Use request DTOs consistently and test invalid payload behavior
- Run `scripts/check_validation_defaults.sh` and review missing settings

### Problem: Sensitive fields leak in API responses

**Symptoms:** Internal IDs, flags, notes, hashes, or persistence-specific fields appear in client responses.

**Likely causes:**

- Controllers return ORM entities directly
- No explicit response DTO or serializer policy
- Domain objects are reused as API contracts

**Solution:**

- Introduce response DTOs or serialization controls
- Review all controller return types for boundary safety
- Separate persistence, domain, and API representations where needed

### Problem: CQRS added overhead without domain benefit

**Symptoms:** Too many handlers, extra boilerplate, slower delivery, and tests are harder without clearer business value.

**Likely causes:**

- CQRS was applied by default
- Read and write models are not meaningfully different
- Architectural complexity exceeded actual workflow complexity

**Solution:**

- Collapse back to application services for simpler modules
- Keep CQRS only in slices with genuine read/write divergence or workflow orchestration needs
- Document why CQRS exists in the remaining modules

## Related Skills

Use adjacent skills when the task moves beyond modular monolith design:

- `@api-design` - for broader API style, versioning, and contract design work
- `@authentication-security` - for deeper authn/authz redesign or threat-driven access control
- `@database-design` - for schema strategy, indexing, migrations, and persistence tuning
- `@testing-strategy` - for broader test architecture and CI quality gates
- `@observability` - for logging, tracing, metrics, and production diagnostics platforms
- `@microservices-architecture` - for actual service extraction or distributed-system design

## Additional Resources

### Local references

- [Module boundary rules](references/module-boundary-rules.md)
- [API contracts and validation](references/api-contracts-and-validation.md)
- [Event communication patterns](references/event-communication-patterns.md)
- [Observability and errors](references/observability-and-errors.md)
- [Microservice extraction seams](references/microservice-extraction-seams.md)
- [Nx boundary enforcement](references/nx-boundary-enforcement.md)

### Local examples

- [Bounded context map template](examples/bounded-context-map-template.md)
- [Module contract ADR template](examples/module-contract-adr-template.md)
- [Nest bootstrap with validation and OpenAPI](examples/nest-bootstrap-validation-openapi.ts)
- [Nx tags and boundaries example](examples/nx-tags-and-boundaries.jsonc)

### Local scripts

- [Check module boundaries](scripts/check_module_boundaries.sh)
- [Check validation defaults](scripts/check_validation_defaults.sh)

### Handoff guidance

- [Architecture handoff router](agents/architecture-handoff-router.md)
