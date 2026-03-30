---
title: Use validHex for hex string validation
impact: CRITICAL
tags: validators, hex, type safety
---

## Use validHex for hex string validation

Use the `validHex` validator instead of type assertions to maintain runtime safety.

**Incorrect (type assertion):**

```typescript
// Bad: Using type assertions for hexadecimal strings
await getERC20Balance({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  address: agentAddress as `0x${string}`,
});
```

**Correct (use validHex):**

```typescript
import { getERC20Balance, validHex } from "@xmtp/agent-sdk";

// Good: Using the validHex validator to guarantee hexadecimal strings
await getERC20Balance({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  address: validHex(agentAddress),
});
```

**Why this matters:**

- Type assertions only work at compile time
- `validHex` validates at runtime and throws if invalid
- Prevents bugs from invalid hex strings reaching blockchain operations
