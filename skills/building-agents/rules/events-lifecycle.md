---
title: Handle lifecycle events
impact: HIGH
tags: events, start, stop, lifecycle
---

## Handle lifecycle events

Use lifecycle events to run code when the agent starts or stops.

**Start event:**

```typescript
import { getTestUrl } from "@xmtp/agent-sdk";

agent.on("start", () => {
  console.log(`Agent address: ${agent.address}`);
  console.log(`Test URL: ${getTestUrl(agent.client)}`);
  console.log("Agent started. Waiting for messages...");
});

await agent.start();
```

**Stop event:**

```typescript
agent.on("stop", () => {
  console.log("Agent stopped");
});
```

**Unhandled errors:**

```typescript
agent.on("unhandledError", (error) => {
  console.error("Agent error:", error);
});
```

**Unknown message types:**

```typescript
agent.on("unknownMessage", (ctx) => {
  console.warn("Unknown message type:", ctx.message.contentType);
});
```
