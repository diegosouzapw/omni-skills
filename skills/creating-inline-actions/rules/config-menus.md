---
title: Configure multi-menu applications
impact: MEDIUM
tags: inline-actions, config, menus, navigation
---

## Configure multi-menu applications

Use `AppConfig` for complex bots with multiple menus.

**Define app configuration:**

```typescript
import { AppConfig, initializeAppFromConfig, showMenu } from "../../utils/inline-actions";

const config: AppConfig = {
  name: "My Bot",
  menus: {
    "main-menu": {
      id: "main-menu",
      title: "Main Menu",
      actions: [
        { id: "products-menu", label: "🛍️ Browse Products" },
        { id: "cart-menu", label: "🛒 View Cart" },
        { id: "help", label: "❓ Help", handler: helpHandler },
      ],
    },
    "products-menu": {
      id: "products-menu",
      title: "Products",
      actions: [
        { id: "buy-item-1", label: "Item 1 - $10", handler: buyItem1 },
        { id: "buy-item-2", label: "Item 2 - $20", handler: buyItem2 },
        { id: "main-menu", label: "⬅️ Back" },
      ],
    },
  },
  options: {
    autoShowMenuAfterAction: true,
    defaultNavigationMessage: "What would you like to do next?",
  },
};

// Initialize the app
initializeAppFromConfig(config);
```

**Show a menu:**

```typescript
agent.on("text", async (ctx) => {
  const text = ctx.message.content.toLowerCase();
  if (text === "menu" || text === "hi") {
    await showMenu(ctx, config, "main-menu");
  }
});
```

**Auto-navigation:**

Actions without handlers that match menu IDs automatically navigate to that menu.
