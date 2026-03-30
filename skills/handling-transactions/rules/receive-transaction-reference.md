---
title: Handle transaction confirmations
impact: CRITICAL
tags: transactions, reference, confirmation
---

## Handle transaction confirmations

Use the `transaction-reference` event to handle completed transactions.

**Basic handler:**

```typescript
agent.on("transaction-reference", async (ctx) => {
  const transactionRef = ctx.message.content;
  
  await ctx.conversation.sendText(
    `✅ Transaction confirmed!\n` +
    `🔗 Network: ${transactionRef.networkId}\n` +
    `📄 Hash: ${transactionRef.reference}`
  );
});
```

**Coinbase Wallet compatibility:**

Coinbase Wallet incorrectly wraps transaction references. Handle both formats:

```typescript
agent.on("transaction-reference", async (ctx) => {
  // Handle both standard and Coinbase's nested format
  // Standard: { networkId, reference, metadata }
  // Coinbase: { transactionReference: { networkId, reference, metadata } }
  
  // @ts-expect-error - Coinbase Wallet wraps incorrectly
  let transactionRef = ctx.message.content.transactionReference;
  if (transactionRef?.transactionReference) {
    transactionRef = transactionRef.transactionReference;
  } else {
    transactionRef = ctx.message.content;
  }

  console.log("Network:", transactionRef.networkId);
  console.log("Hash:", transactionRef.reference);
  
  if (transactionRef.metadata) {
    console.log("Metadata:", transactionRef.metadata);
  }
});
```

**Transaction reference structure:**

```typescript
interface TransactionReference {
  networkId: string;      // e.g., "base-sepolia"
  reference: string;      // Transaction hash
  metadata?: {
    // Optional transaction metadata
  };
}
```
