---
title: Create agent using environment variables
impact: CRITICAL
tags: setup, agent, createFromEnv
---

## Create agent using environment variables

Use `Agent.createFromEnv()` to automatically load configuration from environment variables.

**Incorrect (manual configuration every time):**

```typescript
import { Agent, createSigner, createUser, validHex } from "@xmtp/agent-sdk";

const agent = await Agent.create(
  createSigner(createUser(validHex(process.env.XMTP_WALLET_KEY))),
  {
    env: process.env.XMTP_ENV as "local" | "dev" | "production",
    dbPath: process.env.XMTP_DB_DIRECTORY,
  }
);
```

**Correct (use createFromEnv):**

```typescript
import { Agent } from "@xmtp/agent-sdk";

// Load .env file
process.loadEnvFile(".env");

// Create agent using environment variables
const agent = await Agent.createFromEnv();
```

The SDK automatically reads:
- `XMTP_WALLET_KEY` - Private key for the wallet
- `XMTP_DB_ENCRYPTION_KEY` - Encryption key for local database
- `XMTP_ENV` - Network environment (local, dev, production)
- `XMTP_DB_DIRECTORY` - Optional database directory
