---
name: resolving-domains
description: ENS and Web3 identity resolution for XMTP agents. Use when resolving domain names, extracting mentions, or fetching Farcaster profiles. Triggers on ENS resolution, Farcaster lookup, or mention extraction.
category: fullstack-web
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP domain resolver

Resolve Web3 identities including ENS, Farcaster, Basenames, and Lens Protocol.

## When to apply

Reference these guidelines when:
- Resolving ENS names to addresses
- Extracting @mentions from messages
- Fetching Farcaster profiles
- Working with shortened addresses in groups

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Resolve | HIGH | `resolve-` |
| 2 | Extract | HIGH | `extract-` |
| 3 | Profiles | MEDIUM | `profiles-` |

## Quick reference

### Resolve (HIGH)
- `resolve-address` - Resolve domain names to addresses
- `resolve-mentions` - Resolve all mentions in a message

### Extract (HIGH)
- `extract-mentions` - Extract @mentions from text

### Profiles (MEDIUM)
- `profiles-farcaster` - Fetch Farcaster profile data

## Supported platforms

- **ENS** - `vitalik.eth`
- **Farcaster** - `dwr.eth`, `username.farcaster.eth`
- **Basenames** - `tony.base.eth`
- **Lens Protocol** - `stani.lens`

## Quick start

```typescript
import { createNameResolver } from "@xmtp/agent-sdk";

// Resolve a single name using the SDK resolver
const resolver = createNameResolver(process.env.WEB3_BIO_API_KEY || "");
const address = await resolver("vitalik.eth");

// Resolve all mentions in a message
const resolved = await resolveMentionsInMessage(
  ctx.message.content,
  await ctx.conversation.members()
);
// Returns: { "bankr.eth": "0x...", "@fabri": "0x..." }

// Get Farcaster profile via web3.bio API
const profile = await fetchFarcasterProfile("dwr.eth");
console.log(profile.username, profile.fid);
```

## Implementation snippets

**Extract mentions from text:**

```typescript
const extractMentions = (message: string): string[] => {
  const mentions: string[] = [];
  
  // Full addresses
  const addresses = message.match(/(0x[a-fA-F0-9]{40})\b/g);
  if (addresses) mentions.push(...addresses);
  
  // @mentions and domains
  const atMentions = message.match(/@(?!0x)([\w.-]+\.eth|[\w.-]+)/g);
  if (atMentions) mentions.push(...atMentions.map(m => m.slice(1)));
  
  // Standalone domains
  const domains = message.match(/\b([\w-]+(?:\.[\w-]+)*\.eth)\b/g);
  if (domains) mentions.push(...domains);
  
  return [...new Set(mentions)];
};
```

**Resolve mentions in message:**

```typescript
import { createNameResolver } from "@xmtp/agent-sdk";

const resolveMentionsInMessage = async (
  message: string, members?: GroupMember[]
): Promise<Record<string, string | null>> => {
  const resolver = createNameResolver(process.env.WEB3_BIO_API_KEY || "");
  const mentions = extractMentions(message);
  const results: Record<string, string | null> = {};
  
  await Promise.all(mentions.map(async (mention) => {
    if (mention.match(/^0x[a-fA-F0-9]{40}$/)) {
      results[mention] = mention;
    } else {
      const name = mention.includes(".") ? mention : `${mention}.farcaster.eth`;
      results[mention] = await resolver(name).catch(() => null);
    }
  }));
  return results;
};
```

**Fetch Farcaster profile:**

```typescript
const fetchFarcasterProfile = async (name: string) => {
  const response = await fetch(`https://api.web3.bio/profile/${encodeURIComponent(name)}`);
  if (!response.ok) return { address: null, username: null, fid: null };
  const data = await response.json();
  const profile = data?.find((p: any) => p.platform === "farcaster");
  return {
    address: profile?.address,
    username: profile?.displayName,
    fid: profile?.social?.uid?.toString(),
  };
};
```

## How to use

Read individual rule files for detailed explanations:

```
rules/resolve-address.md
rules/extract-mentions.md
rules/profiles-farcaster.md
```

