---
name: handling-transactions
description: Token transactions and wallet integration for XMTP agents. Use when sending USDC, creating transaction requests, or handling transaction confirmations. Triggers on USDC transfer, wallet calls, or transaction reference.
category: ai-agents
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP transactions

Send and receive token transactions using wallet_sendCalls (EIP-5792) specification.

## When to apply

Reference these guidelines when:
- Sending USDC or other tokens
- Creating transaction requests
- Handling transaction confirmations
- Checking token balances
- Working with smart contract wallets

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Send | CRITICAL | `send-` |
| 2 | Receive | CRITICAL | `receive-` |
| 3 | Balance | HIGH | `balance-` |

## Quick reference

### Send (CRITICAL)
- `send-usdc-transfer` - Create USDC transfer requests
- `send-wallet-calls` - Send wallet_sendCalls messages

### Receive (CRITICAL)
- `receive-transaction-reference` - Handle transaction confirmations

### Balance (HIGH)
- `balance-check` - Check USDC balance

## Supported networks

| Network | Chain ID | USDC Address |
|---------|----------|--------------|
| Base Sepolia | 84532 | `0x036CbD53842c5426634e7929541eC2318f3dCF7e` |
| Base Mainnet | 8453 | `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` |

## Quick start

Use the SDK 2.2.0 transaction helpers with viem chains and bigint amounts:

```typescript
import {
  createERC20TransferCalls,
  getERC20Balance,
  getERC20Decimals,
  validHex,
} from "@xmtp/agent-sdk";
import { formatUnits, parseUnits } from "viem";
import { base, baseSepolia } from "viem/chains";

const CHAIN = baseSepolia; // or base for mainnet
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e"; // Base Sepolia

// Get decimals (e.g. 6 for USDC)
const decimals = await getERC20Decimals({ chain: CHAIN, tokenAddress: USDC_ADDRESS });

// Check balance (returns bigint; format for display)
const balance = await getERC20Balance({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  address: validHex(address),
});
await ctx.conversation.sendText(`Your balance: ${formatUnits(balance, decimals)} USDC`);

// Create USDC transfer calls (EIP-5792)
const calls = createERC20TransferCalls({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  from: validHex(fromAddress),
  to: validHex(toAddress),
  amount: parseUnits("1", decimals), // 1 USDC
  description: `Transfer 1 USDC on ${CHAIN.name}`,
});
await ctx.conversation.sendWalletSendCalls(calls);
```

## Implementation snippets

**USDC addresses (viem chains):**

```typescript
import { base, baseSepolia } from "viem/chains";

const CHAIN = baseSepolia; // or base
const USDC_ADDRESS = CHAIN.id === 8453
  ? "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"   // Base Mainnet
  : "0x036CbD53842c5426634e7929541eC2318f3dCF7e";  // Base Sepolia
```

**Get ERC-20 balance (SDK 2.2.0):**

```typescript
import { getERC20Balance, getERC20Decimals } from "@xmtp/agent-sdk";
import { formatUnits } from "viem";

const balance = await getERC20Balance({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  address: validHex(address),
});
const decimals = await getERC20Decimals({ chain: CHAIN, tokenAddress: USDC_ADDRESS });
const formatted = formatUnits(balance, decimals);
```

**Create ERC-20 transfer calls (SDK 2.2.0):**

```typescript
import { createERC20TransferCalls } from "@xmtp/agent-sdk";
import { parseUnits } from "viem";

const walletSendCalls = createERC20TransferCalls({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  from: validHex(senderAddress),
  to: validHex(recipientAddress),
  amount: parseUnits("2.5", 6), // 2.5 USDC
  description: "Transfer 2.5 USDC",
});
await ctx.conversation.sendWalletSendCalls(walletSendCalls);
```

## How to use

Read individual rule files for detailed explanations:

```
rules/send-usdc-transfer.md
rules/receive-transaction-reference.md
rules/balance-check.md
```

