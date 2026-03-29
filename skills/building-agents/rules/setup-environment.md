---
title: Configure environment variables
impact: CRITICAL
tags: setup, environment, configuration
---

## Configure environment variables

Set up the required environment variables for your XMTP agent.

**Required variables:**

```bash
# Network: local, dev, or production
XMTP_ENV=dev

# Private keys (generate with yarn gen:keys)
XMTP_WALLET_KEY=0x1234...abcd
XMTP_DB_ENCRYPTION_KEY=0xabcd...1234
```

**Optional variables:**

```bash
# Database directory (defaults to current working directory)
XMTP_DB_DIRECTORY=./data

# Debug logging (SDK 2.0+)
XMTP_FORCE_DEBUG_LEVEL=Debug
```

**Generate keys:**

```bash
yarn gen:keys
```

> Warning: Running `yarn gen:keys` will append keys to your existing `.env` file.
