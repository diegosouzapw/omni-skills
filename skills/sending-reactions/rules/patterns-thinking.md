---
title: Thinking indicator pattern
impact: MEDIUM
tags: reactions, thinking, patterns, ux
---

## Thinking indicator pattern

Show users that your agent is processing by adding a thinking emoji reaction, then removing it when done.

**Basic pattern:**

```typescript
agent.on("text", async (ctx) => {
  // Add thinking reaction
  await ctx.conversation.sendReaction({
    reference: ctx.message.id,
    action: "added",
    content: "⏳",
    schema: "unicode",
  });

  try {
    // Simulate processing
    const response = await processMessage(ctx.message.content);
    
    // Send response
    await ctx.conversation.sendText(response);
  } finally {
    // Always remove thinking reaction
    await ctx.conversation.sendReaction({
      reference: ctx.message.id,
      action: "removed",
      content: "⏳",
      schema: "unicode",
    });
  }
});
```

**With helper function:**

```typescript
async function withThinking<T>(
  ctx: MessageContext,
  fn: () => Promise<T>
): Promise<T> {
  const reaction = {
    reference: ctx.message.id,
    content: "⏳",
    schema: "unicode" as const,
  };

  await ctx.conversation.sendReaction({ ...reaction, action: "added" });
  
  try {
    return await fn();
  } finally {
    await ctx.conversation.sendReaction({ ...reaction, action: "removed" });
  }
}

// Usage
agent.on("text", async (ctx) => {
  const response = await withThinking(ctx, async () => {
    return await processMessage(ctx.message.content);
  });
  
  await ctx.conversation.sendText(response);
});
```

**Alternative thinking emojis:**

- `⏳` - Hourglass (processing)
- `🤔` - Thinking face
- `💭` - Thought bubble
- `⚙️` - Gear (working)
