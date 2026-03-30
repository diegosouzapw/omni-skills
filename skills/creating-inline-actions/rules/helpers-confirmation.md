---
title: Send confirmation dialogs
impact: HIGH
tags: inline-actions, confirmation, dialogs
---

## Send confirmation dialogs

Use `sendConfirmation` for yes/no dialogs.

**Basic confirmation:**

```typescript
import { sendConfirmation } from "../../utils/inline-actions";

await sendConfirmation(
  ctx,
  "Delete this item?",
  async (ctx) => {
    // User clicked Yes
    await ctx.conversation.sendText("Item deleted!");
  },
  async (ctx) => {
    // User clicked No (optional)
    await ctx.conversation.sendText("Cancelled");
  }
);
```

**Without cancel handler:**

```typescript
// Default cancel handler sends "❌ Cancelled"
await sendConfirmation(
  ctx,
  "Proceed with action?",
  async (ctx) => {
    await ctx.conversation.sendText("Proceeding...");
  }
);
```

**How it works:**

The helper automatically:
1. Creates unique action IDs with timestamps
2. Registers handlers for yes/no buttons
3. Styles the "No" button as danger
