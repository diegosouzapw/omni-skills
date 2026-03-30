---
title: Filter by message type
impact: HIGH
tags: filters, message types, type safety
---

## Filter by message type

Use built-in filters to check message types instead of manual type checking.

**Available filters:**

```typescript
import {
  filter,
  isReaction,
  isRemoteAttachment,
  isReply,
  isText,
} from "@xmtp/agent-sdk";

// Check message types (direct imports)
isText(ctx.message);
isReaction(ctx.message);
isReply(ctx.message);
isRemoteAttachment(ctx.message);

// Check content and sender (filter)
filter.hasDefinedContent(ctx.message);
filter.fromSelf(ctx.message, ctx.client);
```

**Example usage:**

```typescript
import { filter, isText } from "@xmtp/agent-sdk";

agent.on("message", async (ctx) => {
  if (
    filter.hasDefinedContent(ctx.message) &&
    !filter.fromSelf(ctx.message, ctx.client) &&
    isText(ctx.message)
  ) {
    await ctx.conversation.sendText("Valid text message received");
  }
});
```

**Direct type check:**

```typescript
import { isText } from "@xmtp/agent-sdk";

if (isText(ctx.message)) {
  // Handle text message
}
```
