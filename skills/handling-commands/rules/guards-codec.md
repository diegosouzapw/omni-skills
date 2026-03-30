---
title: Use usesCodec for type-safe content handling
impact: HIGH
tags: type guards, codec, type safety
---

## Use usesCodec for type-safe content handling

Use `usesCodec()` type guard instead of type assertions when checking message content types.

**Incorrect (type assertion):**

```typescript
const mw: AgentMiddleware = async (ctx, next) => {
  // Bad: Using type assertions for content types
  const transactionRef = ctx.message.content as TransactionReference;
};
```

**Correct (use usesCodec):**

```typescript
import { TransactionReferenceCodec } from "@xmtp/content-type-transaction-reference";

const mw: AgentMiddleware = async (ctx, next) => {
  // Good: Using the usesCodec type guard
  if (ctx.usesCodec(TransactionReferenceCodec)) {
    // TypeScript now knows ctx.message.content is TransactionReference
    const transactionRef = ctx.message.content;
    console.log(transactionRef.networkId);
  }
};
```

**Why this matters:**

- Type assertions bypass runtime checks
- `usesCodec()` validates the content type at runtime
- TypeScript automatically narrows the type after the check
