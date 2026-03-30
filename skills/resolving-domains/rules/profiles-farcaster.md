---
title: Fetch Farcaster profile data
impact: MEDIUM
tags: farcaster, profiles, social
---

## Fetch Farcaster profile data

Use `fetchFarcasterProfile` to get Farcaster user information.

**Basic usage:**

```typescript
import { fetchFarcasterProfile } from "../../utils/resolver";

const profile = await fetchFarcasterProfile("dwr.eth");

console.log("Address:", profile.address);
console.log("Username:", profile.username);
console.log("Display Name:", profile.displayName);
console.log("FID:", profile.fid);
console.log("Followers:", profile.social?.follower);
console.log("Following:", profile.social?.following);
```

**In agent context:**

```typescript
agent.on("text", async (ctx) => {
  const senderAddress = await ctx.getSenderAddress();
  const profile = await fetchFarcasterProfile(senderAddress);
  
  if (profile.username) {
    await ctx.conversation.sendText(
      `Hello ${profile.displayName || profile.username}! ` +
      `You have ${profile.social?.follower || 0} followers on Farcaster.`
    );
  }
});
```

**Profile structure:**

```typescript
interface FarcasterProfile {
  address: string | null;
  displayName?: string | null;
  platform: string;            // "farcaster"
  username: string | null;
  fid: string | null;          // Farcaster ID
  social?: {
    uid: number | null;
    follower: number | null;
    following: number | null;
  } | null;
}
```

**Note:** The function uses web3.bio API under the hood. An API key is optional but recommended for higher rate limits.
