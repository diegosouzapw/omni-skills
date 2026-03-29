---
name: handling-commands
description: Patterns for handling commands, validating input, and filtering messages in XMTP agents. Use when implementing slash commands, validators, or message filters. Triggers on command handling, input validation, or type guards.
category: ai-agents
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP commands and validation

Best practices for handling commands, validating input, and filtering messages.

## When to apply

Reference these guidelines when:
- Implementing slash commands
- Validating hex strings and addresses
- Filtering message types
- Using type guards instead of type assertions

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Validators | CRITICAL | `validators-` |
| 2 | Filters | HIGH | `filters-` |
| 3 | Type Guards | HIGH | `guards-` |

## Quick reference

### Validators (CRITICAL)
- `validators-hex` - Use validHex() for hex string validation
- `validators-address` - Validate Ethereum addresses

### Filters (HIGH)
- `filters-message-types` - Filter by message type (SDK 2.0+: use direct imports `isText`, `isReaction`, `isReply`, etc. from `@xmtp/agent-sdk`; keep `filter.fromSelf`, `filter.hasDefinedContent`)
- `filters-sender` - Filter out self-messages
- `filters-content` - Check for defined content

### Type Guards (HIGH)
- `guards-codec` - Use usesCodec() instead of type assertions
- `guards-content-type` - Use filter helpers for type safety

## How to use

Read individual rule files for detailed explanations:

```
rules/validators-hex.md
rules/filters-message-types.md
rules/guards-codec.md
```

