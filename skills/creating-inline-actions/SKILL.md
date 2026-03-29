---
name: creating-inline-actions
description: Interactive button-based UI for XMTP agents following XIP-67. Use when creating menus, confirmation dialogs, selection options, or any button-based interaction. Triggers on inline actions, buttons, menus, or ActionBuilder.
category: ai-agents
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP inline actions

Interactive button-based UI for XMTP agents following the XIP-67 specification. Users can tap buttons instead of typing commands.

## When to apply

Reference these guidelines when:
- Creating interactive button menus
- Building confirmation dialogs
- Implementing selection options
- Setting up multi-menu navigation
- Handling action callbacks

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | ActionBuilder | CRITICAL | `builder-` |
| 2 | Helpers | HIGH | `helpers-` |
| 3 | App Config | MEDIUM | `config-` |
| 4 | Validators | MEDIUM | `validators-` |

## Quick reference

### ActionBuilder (CRITICAL)
- `builder-create` - Create action menus with ActionBuilder
- `builder-send` - Send actions to conversation

### Helpers (HIGH)
- `helpers-confirmation` - Send confirmation dialogs
- `helpers-selection` - Send selection menus
- `helpers-navigation` - Show navigation options

### App Config (MEDIUM)
- `config-menus` - Configure multi-menu applications
- `config-initialize` - Initialize app from config

### Validators (MEDIUM)
- `validators-inbox-id` - Validate inbox ID format
- `validators-ethereum-address` - Validate Ethereum address

## Quick start

```typescript
// 1. Add middleware to handle intent messages
agent.use(inlineActionsMiddleware);

// 2. Register action handlers
registerAction("my-action", async (ctx) => {
  await ctx.conversation.sendText("Action executed!");
});

// 3. Send interactive buttons
await ActionBuilder.create("my-menu", "Choose an option:")
  .add("my-action", "Click Me")
  .add("other-action", "Cancel")
  .send(ctx);
```

## Implementation snippets

**Action registry and handler:**

```typescript
import type { AgentMiddleware, MessageContext } from "@xmtp/agent-sdk";
import type { Intent } from "@xmtp/node-sdk";

type ActionHandler = (ctx: MessageContext) => Promise<void>;
const actionHandlers = new Map<string, ActionHandler>();

const registerAction = (id: string, handler: ActionHandler) => {
  actionHandlers.set(id, handler);
};
```

**Inline actions middleware:**

```typescript
const inlineActionsMiddleware: AgentMiddleware = async (ctx, next) => {
  if (ctx.message.contentType?.typeId === "intent") {
    const intent = ctx.message.content as Intent;
    const handler = actionHandlers.get(intent.actionId);
    if (handler) await handler(ctx);
    else await ctx.conversation.sendText(`Unknown action: ${intent.actionId}`);
    return;
  }
  await next();
};
```

**ActionBuilder class:**

```typescript
import { ActionStyle } from "@xmtp/node-sdk";

class ActionBuilder {
  private actions: { id: string; label: string; style?: ActionStyle }[] = [];
  constructor(private id: string, private description: string) {}
  
  static create(id: string, description: string) {
    return new ActionBuilder(id, description);
  }
  
  add(id: string, label: string, style?: ActionStyle) {
    this.actions.push({ id, label, style });
    return this;
  }
  
  async send(ctx: MessageContext) {
    await ctx.conversation.sendActions({
      id: this.id,
      description: this.description,
      actions: this.actions,
    });
  }
}
```

**Confirmation helper:**

```typescript
const sendConfirmation = async (
  ctx: MessageContext, message: string,
  onYes: ActionHandler, onNo?: ActionHandler
) => {
  const ts = Date.now();
  registerAction(`yes-${ts}`, onYes);
  registerAction(`no-${ts}`, onNo || (async (c) => c.conversation.sendText("Cancelled")));
  await ActionBuilder.create(`confirm-${ts}`, message)
    .add(`yes-${ts}`, "Yes").add(`no-${ts}`, "No", ActionStyle.Danger).send(ctx);
};
```

## How to use

Read individual rule files for detailed explanations:

```
rules/builder-create.md
rules/helpers-confirmation.md
rules/config-menus.md
```

