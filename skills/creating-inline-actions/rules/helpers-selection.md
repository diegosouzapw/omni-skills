---
title: Send selection menus
impact: HIGH
tags: inline-actions, selection, menus
---

## Send selection menus

Use `sendSelection` for multi-option menus with handlers.

**Basic selection:**

```typescript
import { sendSelection } from "../../utils/inline-actions";

await sendSelection(ctx, "Pick a color:", [
  {
    id: "red",
    label: "🔴 Red",
    handler: async (ctx) => {
      await ctx.conversation.sendText("You picked red!");
    },
  },
  {
    id: "blue",
    label: "🔵 Blue",
    handler: async (ctx) => {
      await ctx.conversation.sendText("You picked blue!");
    },
  },
  {
    id: "green",
    label: "🟢 Green",
    handler: async (ctx) => {
      await ctx.conversation.sendText("You picked green!");
    },
  },
]);
```

**With custom styles:**

```typescript
import { sendSelection, ActionStyle } from "../../utils/inline-actions";

await sendSelection(ctx, "Choose action:", [
  {
    id: "save",
    label: "💾 Save",
    handler: saveHandler,
  },
  {
    id: "delete",
    label: "🗑️ Delete",
    style: ActionStyle.Danger,
    handler: deleteHandler,
  },
]);
```
