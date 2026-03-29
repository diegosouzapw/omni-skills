---
title: Handle text messages
impact: HIGH
tags: events, text, messages
---

## Handle text messages

Use the `text` event to handle incoming text messages.

**Basic text handler:**

```typescript
agent.on("text", async (ctx) => {
  console.log(`Received: ${ctx.message.content}`);
  await ctx.conversation.sendText("Hello!");
});
```

**Access message context:**

```typescript
agent.on("text", async (ctx) => {
  // Message content
  const text = ctx.message.content;
  
  // Sender information
  const senderInboxId = ctx.message.senderInboxId;
  const senderAddress = await ctx.getSenderAddress();
  
  // Conversation helpers
  await ctx.conversation.sendText("Response");
  await ctx.conversation.sendMarkdown("**Bold** response");
});
```

**Important:** The `message` event fires for every message type. Always use specific events like `text`, `reaction`, `reply` when possible to avoid infinite loops.
