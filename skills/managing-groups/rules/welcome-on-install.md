---
title: Send welcome on agent installation
impact: MEDIUM
tags: groups, welcome, installation, events
---

## Send welcome on agent installation

Use `dm` and `group` events to welcome users when they start a conversation.

**Welcome on new conversations:**

```typescript
import { Agent, Conversation, ConversationContext } from "@xmtp/agent-sdk";

// Shared welcome message function
async function sendWelcomeMessage(
  ctx: ConversationContext<unknown, Conversation>
) {
  await ctx.conversation.sendText(
    "👋 Welcome! I'm your XMTP agent. How can I help you today?"
  );
}

// Listen for new DM conversations
agent.on("dm", async (ctx) => {
  await sendWelcomeMessage(ctx);
});

// Listen for new Group conversations  
agent.on("group", async (ctx) => {
  await sendWelcomeMessage(ctx);
});
```

**Welcome with inline actions:**

```typescript
async function sendWelcomeMessage(ctx: ConversationContext) {
  const welcomeActions = ActionBuilder.create(
    `welcome-${Date.now()}`,
    "👋 Welcome! I'm your ETH price agent. What would you like to do?"
  )
    .add("get-current-price", "💰 Get Current ETH Price")
    .add("get-price-chart", "📊 Get Price with 24h Change")
    .build();

  await ctx.conversation.sendActions(welcomeActions);
}
```

See the [creating-inline-actions](../../creating-inline-actions/) skill for implementing `ActionBuilder`.

**Group gating example:**

```typescript
import { IdentifierKind } from "@xmtp/agent-sdk";

const GROUP_CONFIG = {
  secretWord: "xmtp",
  groupName: "Secret Group",
  messages: {
    welcome: "Hi! What's the secret passphrase?",
    success: "🎉 Correct! You've been added to the group.",
    invalid: "❌ Invalid passphrase. Please try again.",
  },
};

agent.on("dm", async (ctx) => {
  await ctx.conversation.sendText(GROUP_CONFIG.messages.welcome);
});

agent.on("text", async (ctx) => {
  if (ctx.message.content.toLowerCase() === GROUP_CONFIG.secretWord) {
    const senderAddress = await ctx.getSenderAddress();
    await group.addMembersByIdentifiers([{
      identifier: senderAddress,
      identifierKind: IdentifierKind.Ethereum,
    }]);
    await ctx.conversation.sendText(GROUP_CONFIG.messages.success);
  } else {
    await ctx.conversation.sendText(GROUP_CONFIG.messages.invalid);
  }
});
```
