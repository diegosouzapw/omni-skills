---
title: Add and remove group members
impact: HIGH
tags: groups, members, add, remove
---

## Add and remove group members

Manage group membership with add/remove methods.

**Add members:**

```typescript
// Add by inbox ID
await group.addMembers(["inboxId1", "inboxId2"]);

// Add by Ethereum address
import { IdentifierKind } from "@xmtp/agent-sdk";

await group.addMembersByIdentifiers([
  {
    identifier: "0x123...",
    identifierKind: IdentifierKind.Ethereum,
  },
]);
```

**Remove members:**

```typescript
await group.removeMembers(["memberInboxId"]);
```

**Get member details:**

```typescript
const members = await conversation.members();

for (const member of members) {
  console.log("Inbox ID:", member.inboxId);
  console.log("Permission:", member.permissionLevel);
  
  // Get Ethereum address
  const ethId = member.accountIdentifiers.find(
    (id) => id.identifierKind === IdentifierKind.Ethereum
  );
  if (ethId) {
    console.log("Address:", ethId.identifier);
  }
  
  // Get installation IDs
  console.log("Installations:", member.installationIds);
}
```

**Check if member exists:**

```typescript
const members = await group.members();
const isMember = members.some(
  (m) => m.inboxId.toLowerCase() === targetInboxId.toLowerCase()
);
```
