---
title: Create and use middleware
impact: MEDIUM
tags: middleware, agent, flow control
---

## Create and use middleware

Middleware lets you intercept and process messages before they reach event handlers.

**Basic middleware:**

```typescript
import { Agent, AgentMiddleware, isText } from "@xmtp/agent-sdk";

const onlyText: AgentMiddleware = async (ctx, next) => {
  if (isText(ctx.message)) {
    // Continue to next middleware
    await next();
  }
  // Break middleware chain (return without calling next)
  return;
};

agent.use(onlyText);
```

**Middleware flow control:**

1. `await next()` - Continue to next middleware
2. `return` - Stop the chain, prevent events from firing
3. `throw` - Trigger error-handling middleware

**Multiple middleware:**

```typescript
// Register one at a time
agent.use(middleware1);
agent.use(middleware2);

// Or as an array (executed in order)
agent.use([middleware1, middleware2, middleware3]);
```

**Error-handling middleware:**

```typescript
import { AgentErrorMiddleware } from "@xmtp/agent-sdk";

const errorHandler: AgentErrorMiddleware = async (error, ctx, next) => {
  if (error instanceof Error) {
    await next(`Handled: ${error.message}`);
  } else {
    await next(error);
  }
};

agent.errors.use(errorHandler);
```
