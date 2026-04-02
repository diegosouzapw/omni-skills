# API Contracts and Validation

Use this reference to standardize module boundaries at the API layer.

## Validation defaults

Recommended NestJS baseline:

- global `ValidationPipe`
- `whitelist: true`
- `forbidNonWhitelisted: true`
- `transform: true`

These settings reduce accidental input drift and make boundary behavior more predictable.

## DTO guidance

Use dedicated DTOs for:

- request validation
- response shaping
- module contract documentation

Avoid using ORM entities or domain entities directly as transport models.

## Serialization guidance

Prefer one of these patterns:

- explicit response DTO mapping
- serializer/interceptor patterns with intentional field exposure

Review responses for accidental leakage of:

- internal IDs
- secret material
- debug flags
- persistence-only fields
- internal notes or audit metadata

## API contracts

For REST APIs:

- document endpoints clearly
- keep request and response shapes stable
- version intentionally when breaking changes occur
- document error shapes consistently

For internal module contracts:

- define the contract in one stable public location
- keep the surface narrow
- avoid exposing implementation-specific types

## Error contracts

Where appropriate, standardize on a Problem Details style response shape for HTTP APIs:

- `type`
- `title`
- `status`
- `detail`
- `instance`

Do not leak stack traces or raw driver errors to callers.
