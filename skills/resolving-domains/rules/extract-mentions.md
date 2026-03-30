---
title: Extract @mentions from text
impact: HIGH
tags: mentions, parsing, extract
---

## Extract @mentions from text

Use `extractMentions` to find all mentions in a message.

**Basic extraction:**

```typescript
import { extractMentions } from "../../utils/resolver";

const message = "Hey @vitalik.eth and @dwr, check this out!";
const mentions = extractMentions(message);
// Returns: ["vitalik.eth", "dwr"]
```

**Supported formats:**

```typescript
// @domain.eth
extractMentions("Hello @vitalik.eth"); // ["vitalik.eth"]

// @username (becomes username.farcaster.eth when resolving)
extractMentions("Hello @fabri"); // ["fabri"]

// Standalone domain.eth
extractMentions("Check vitalik.eth"); // ["vitalik.eth"]

// Shortened addresses in groups
extractMentions("@0xabc5…f002"); // ["0xabc5…f002"]

// Full addresses
extractMentions("Send to 0x1234567890abcdef..."); // ["0x1234..."]
```

**Resolve all mentions:**

```typescript
import { resolveMentionsInMessage } from "../../utils/resolver";

const message = "Send 10 USDC to @vitalik.eth";
const members = await ctx.conversation.members();

const resolved = await resolveMentionsInMessage(message, members);
// Returns: { "vitalik.eth": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" }
```

**Filter subdomains:**

The function automatically filters parent domains when subdomains are present:
- If `"byteai.base.eth"` exists, `"base.eth"` is filtered out
