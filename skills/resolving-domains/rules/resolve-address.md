---
title: Resolve domain names to addresses
impact: HIGH
tags: resolver, ens, domains, addresses
---

## Resolve domain names to addresses

Use the name resolver to convert Web3 identities to Ethereum addresses.

**Basic resolution:**

```typescript
import { createNameResolver } from "@xmtp/agent-sdk";

const resolver = createNameResolver(process.env.WEB3_BIO_API_KEY || "");

// Resolve ENS name
const address = await resolver("vitalik.eth");
console.log(address); // "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"

// Resolve Farcaster name  
const fcAddress = await resolver("dwr.farcaster.eth");

// Resolve Basename
const baseAddress = await resolver("tony.base.eth");
```

**Using resolveIdentifier helper:**

```typescript
import { resolveIdentifier } from "../../utils/resolver";

// Handles multiple formats:
// - Full address: "0x1234...abcd" (returned as-is)
// - Shortened address: "0xabc5…f002" (matched against members)
// - Domain name: "vitalik.eth" (resolved via web3.bio)
// - Username: "fabri" (becomes "fabri.farcaster.eth")

const address = await resolveIdentifier("vitalik.eth");
const fromShortened = await resolveIdentifier("0xabc5…f002", memberAddresses);
```

**Environment setup:**

```bash
WEB3_BIO_API_KEY=your_api_key  # Optional, for higher rate limits
```
