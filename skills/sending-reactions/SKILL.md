---
name: sending-reactions
description: Emoji reactions and thinking indicators for XMTP agents. Use when adding reactions to messages or showing processing state with thinking emoji. Triggers on emoji reactions, thinking indicator, or message acknowledgment.
category: ai-agents
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP reactions

Send and receive emoji reactions, including thinking indicator patterns.

## When to apply

Reference these guidelines when:
- Reacting to user messages with emoji
- Showing processing/thinking state
- Receiving and handling reactions
- Implementing acknowledgment patterns

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Send | HIGH | `send-` |
| 2 | Receive | HIGH | `receive-` |
| 3 | Patterns | MEDIUM | `patterns-` |

## Quick reference

### Send (HIGH)
- `send-reaction` - Send emoji reactions to messages

### Receive (HIGH)
- `receive-reaction` - Handle incoming reactions

### Patterns (MEDIUM)
- `patterns-thinking` - Thinking indicator pattern

## Quick start

```typescript
// Send a reaction
await ctx.conversation.sendReaction({
  reference: ctx.message.id,
  action: "added",
  content: "👍",
  schema: "unicode",
});

// Thinking indicator pattern
await ctx.conversation.sendReaction({
  reference: ctx.message.id,
  action: "added",
  content: "⏳",
  schema: "unicode",
});

// Process...

await ctx.conversation.sendReaction({
  reference: ctx.message.id,
  action: "removed",
  content: "⏳",
  schema: "unicode",
});
```

## How to use

Read individual rule files for detailed explanations:

```
rules/send-reaction.md
rules/receive-reaction.md
rules/patterns-thinking.md
```

