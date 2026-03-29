---
title: Use CommandRouter for slash commands
impact: MEDIUM
tags: middleware, commands, router
---

## Use CommandRouter for slash commands

The `CommandRouter` middleware makes it easy to handle slash commands.

**Incorrect (manual command parsing):**

```typescript
agent.on("text", async (ctx) => {
  if (ctx.message.content.startsWith("/balance")) {
    // Business logic
  } else if (ctx.message.content.startsWith("/help")) {
    // Help logic
  }
});
```

**Correct (use CommandRouter):**

```typescript
import { CommandRouter } from "@xmtp/agent-sdk";

const router = new CommandRouter();

router.command("/balance", async (ctx) => {
  await ctx.conversation.sendText("Your balance is: 100 USDC");
});

router.command("/help", async (ctx) => {
  await ctx.conversation.sendText("Available commands: /balance, /help");
});

// Default handler for non-command messages
router.default(async (ctx) => {
  const commands = router.commandList;
  await ctx.conversation.sendText(`Unknown command. Try: ${commands.join(", ")}`);
});

// Apply middleware
agent.use(router.middleware());
```

**Access command list:**

```typescript
const commands = router.commandList; // ["/balance", "/help"]
```
