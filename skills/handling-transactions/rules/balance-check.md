---
title: Check USDC balance
impact: HIGH
tags: transactions, balance, usdc
---

## Check USDC balance

Use the SDK 2.2.0 `getERC20Balance` and `getERC20Decimals` to check token balances.

**Basic balance check:**

```typescript
import { getERC20Balance, getERC20Decimals, validHex } from "@xmtp/agent-sdk";
import { formatUnits } from "viem";
import { baseSepolia } from "viem/chains";

const CHAIN = baseSepolia;
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

const balance = await getERC20Balance({
  chain: CHAIN,
  tokenAddress: USDC_ADDRESS,
  address: validHex(address),
});
const decimals = await getERC20Decimals({ chain: CHAIN, tokenAddress: USDC_ADDRESS });

await ctx.conversation.sendText(`Your balance: ${formatUnits(balance, decimals)} USDC`);
```

**In a command handler:**

```typescript
import {
  CommandRouter,
  getERC20Balance,
  getERC20Decimals,
  validHex,
} from "@xmtp/agent-sdk";
import { formatUnits } from "viem";

const router = new CommandRouter();

router.command("/balance", async (ctx) => {
  const agentAddress = agent.address;
  const senderAddress = await ctx.getSenderAddress();
  const decimals = await getERC20Decimals({ chain: CHAIN, tokenAddress: USDC_ADDRESS });

  const [agentBalance, senderBalance] = await Promise.all([
    getERC20Balance({ chain: CHAIN, tokenAddress: USDC_ADDRESS, address: validHex(agentAddress) }),
    getERC20Balance({ chain: CHAIN, tokenAddress: USDC_ADDRESS, address: validHex(senderAddress) }),
  ]);

  await ctx.conversation.sendText(
    `Agent balance: ${formatUnits(agentBalance, decimals)} USDC\n` +
      `Your balance: ${formatUnits(senderBalance, decimals)} USDC`,
  );
});
```

**Other ERC-20 tokens:**

Use the same `getERC20Balance` and `getERC20Decimals` with a different `tokenAddress` and chain.

**Requirements:**

- Smart contract wallet (SCW) required for transaction signing
- EOA wallets may see "Signature validation failed" error
- Get testnet USDC from [Circle Faucet](https://faucet.circle.com) or [Base Faucet](https://portal.cdp.coinbase.com/products/faucet)
