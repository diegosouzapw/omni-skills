---
title: Send emoji reactions to messages
impact: HIGH
tags: reactions, emoji, send
---

## Send emoji reactions to messages

Use `sendReaction` to react to messages with emoji.

**Add a reaction:**

```typescript
await ctx.conversation.sendReaction({
  reference: ctx.message.id,  // Message ID to react to
  action: "added",            // "added" or "removed"
  content: "👍",              // Emoji to react with
  schema: "unicode",          // Always "unicode" for emoji
});
```

**Remove a reaction:**

```typescript
await ctx.conversation.sendReaction({
  reference: ctx.message.id,
  action: "removed",
  content: "👍",
  schema: "unicode",
});
```

**Common reaction patterns:**

```typescript
// Acknowledge receipt
await ctx.conversation.sendReaction({
  reference: ctx.message.id,
  action: "added",
  content: "✅",
  schema: "unicode",
});

// Show processing
await ctx.conversation.sendReaction({
  reference: ctx.message.id,
  action: "added",
  content: "⏳",
  schema: "unicode",
});

// Show error
await ctx.conversation.sendReaction({
  reference: ctx.message.id,
  action: "added",
  content: "❌",
  schema: "unicode",
});
```
