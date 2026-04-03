# Event Communication Patterns

Use this guide to choose the right communication style.

## Decision guide

### 1. Direct call inside the same module

Use when:

- the workflow stays inside one bounded context
- consistency must be immediate
- extra indirection adds no value

### 2. Cross-module contract or application service boundary

Use when:

- another module needs a stable public capability
- the interaction is request/response in nature
- you want explicit coupling at the public API level

### 3. In-process events inside the monolith

Use when:

- one module completes a business action
- other modules may react independently
- loose coupling is useful
- eventual handling inside the same process is acceptable

Caveat:

In-process events are not durable messaging. They do not guarantee delivery across crashes or process restarts.

### 4. Durable messaging or outbox-based integration

Use only when:

- delivery guarantees matter
- an external system must consume events reliably
- retries, deduplication, and failure semantics are required

## Anti-patterns

Avoid these mistakes:

- replacing every method call with an event
- using ad hoc Node.js `EventEmitter` integration as architecture
- claiming reliable delivery from in-process event handlers
- allowing event schemas to drift without review

## Review questions

- Does this interaction need immediate consistency?
- Does it cross a bounded context?
- Is loose coupling actually useful here?
- What happens if the process crashes after the business transaction completes?
- Should this interaction stay local until a real durability requirement appears?
