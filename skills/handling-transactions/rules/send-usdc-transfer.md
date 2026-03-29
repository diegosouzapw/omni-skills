---
title: Create USDC transfer requests
impact: CRITICAL
tags: transactions, usdc, transfer, wallet
---

## Create USDC transfer requests

Use the SDK 2.2.0 `createERC20TransferCalls` to create EIP-5792 compliant transfer requests.

**Basic transfer:**

```typescript
import { createERC20TransferCalls, validHex } from "@xmtp/agent-sdk";
import { parseUnits } from "viem";
import { baseSepolia } from "viem/chains";

const CHAIN = baseSepolia;
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

const walletSendCalls = createERC20TransferCalls({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  from: validHex(senderAddress),
  to: validHex(recipientAddress),
  amount: parseUnits("1", 6), // 1 USDC (6 decimals)
  description: "Transfer 1 USDC on Base Sepolia",
});

await ctx.conversation.sendWalletSendCalls(walletSendCalls);
```

**Parse user input:**

```typescript
import { parseUnits } from "viem";

// Parse human-readable amount to bigint (e.g. "2.5" USDC with 6 decimals)
let amount: bigint;
try {
  amount = parseUnits(userInput, 6);
} catch {
  await ctx.conversation.sendText("Please provide a valid amount.");
  return;
}
if (amount <= 0n) {
  await ctx.conversation.sendText("Amount must be positive.");
  return;
}
```

**WalletSendCalls structure:**

The SDK's `createERC20TransferCalls` returns a `WalletSendCalls` object with `version`, `chainId`, `from`, and `calls` (each with `to`, `data`, `value`, and `metadata`: `description`, `transactionType: "transfer"`).
