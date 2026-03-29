---
name: building-agents
description: Core XMTP Agent SDK setup and patterns. Use when creating new agents, handling messages, setting up middleware, or configuring environment variables. Triggers on agent setup, XMTP configuration, message handling, or middleware implementation.
category: ai-agents
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP agent basics

Build event-driven, middleware-powered messaging agents on the XMTP network using the `@xmtp/agent-sdk`.

## When to apply

Reference these guidelines when:
- Creating a new XMTP agent
- Setting up environment variables
- Handling text messages and events
- Implementing middleware
- Using filters and context helpers

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Setup | CRITICAL | `setup-` |
| 2 | Events | HIGH | `events-` |
| 3 | Middleware | MEDIUM | `middleware-` |
| 4 | Filters | MEDIUM | `filters-` |

## Quick reference

### Setup (CRITICAL)
- `setup-environment` - Configure environment variables for agent
- `setup-from-env` - Create agent using Agent.createFromEnv()
- `setup-manual` - Manual agent creation with signer

### Events (HIGH)
- `events-text` - Handle text messages
- `events-lifecycle` - Handle start/stop events
- `events-conversation` - Handle new DM and group conversations
- `events-message-types` - Handle different message types (reaction, reply, attachment)

### Middleware (MEDIUM)
- `middleware-basics` - Create and register middleware
- `middleware-error-handling` - Handle errors in middleware chain
- `middleware-command-router` - Use CommandRouter for slash commands

### Filters (MEDIUM)
- `filters-message-types` - Filter by message type
- `filters-sender` - Filter out self-messages

## Installation

```bash
npm install @xmtp/agent-sdk
# or
yarn add @xmtp/agent-sdk
```

SDK 2.0+ uses unified exports: import everything from `@xmtp/agent-sdk` (no `/debug`, `/middleware`, `/user`, `/util` subpaths).

## Quick start

```typescript
import { Agent, getTestUrl } from "@xmtp/agent-sdk";

// Create agent using environment variables
const agent = await Agent.createFromEnv();

// Handle text messages
agent.on("text", async (ctx) => {
  await ctx.conversation.sendText("Hello from my XMTP Agent!");
});

// Log when ready
agent.on("start", () => {
  console.log(`Agent online: ${getTestUrl(agent.client)}`);
});

await agent.start();
```

## Environment variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `XMTP_WALLET_KEY` | Private key for wallet | `0x1234...abcd` |
| `XMTP_DB_ENCRYPTION_KEY` | Database encryption key | `0xabcd...1234` |
| `XMTP_ENV` | Network environment | `dev` or `production` |
| `XMTP_DB_DIRECTORY` | Database directory | `./data` |

## How to use

Read individual rule files for detailed explanations:

```
rules/setup-environment.md
rules/events-text.md
rules/middleware-basics.md
```

