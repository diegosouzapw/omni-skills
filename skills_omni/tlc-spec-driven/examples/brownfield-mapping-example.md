# Brownfield Mapping Example

## Request

"Before planning the notifications feature, map this existing repository so we understand where to add it safely."

## Expected outputs

Create these documents under `.specs/codebase/`:

- `STACK.md`
- `ARCHITECTURE.md`
- `CONVENTIONS.md`
- `STRUCTURE.md`
- `TESTING.md`
- `INTEGRATIONS.md`
- `CONCERNS.md`

## Example findings

- `STACK.md`: React frontend, Node API, PostgreSQL
- `STRUCTURE.md`: notifications code belongs under `services/notifications/`
- `TESTING.md`: integration tests run with seeded database fixtures
- `INTEGRATIONS.md`: outbound email provider and webhook callbacks
- `CONCERNS.md`: existing retry logic is fragile and should be treated as a risk area

## How this feeds planning

After mapping:

1. decide whether the feature is medium, large, or complex
2. reuse existing conventions instead of inventing new patterns
3. build the feature spec with known integration and testing constraints
