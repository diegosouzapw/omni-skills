---
title: Create new group conversations
impact: CRITICAL
tags: groups, create, conversations
---

## Create new group conversations

Use `createGroupWithAddresses` to create groups with initial members.

**Basic group creation:**

```typescript
const group = await agent.createGroupWithAddresses(
  ["0x123...", "0x456..."],
  {
    groupName: "My Group",
    groupDescription: "A group for our project",
  }
);

await group.send("Welcome to the group!");
```

**With full options:**

```typescript
const group = await agent.createGroupWithAddresses(addresses, {
  groupName: "Project Discussion",
  groupDescription: "A group for our project collaboration",
  groupImageUrlSquare: "https://example.com/image.jpg",
});
```

**Update group metadata:**

```typescript
await group.updateName("New Group Name");
await group.updateDescription("Updated description");
await group.updateImageUrl("https://example.com/new-image.jpg");
```

**Create DM:**

```typescript
import { IdentifierKind } from "@xmtp/agent-sdk";

// By inbox ID
const dm = await client.conversations.newDm("inboxId123");

// By Ethereum address
const dmByAddress = await agent.createDmWithIdentifier({
  identifier: "0x7c40611372d354799d138542e77243c284e460b2",
  identifierKind: IdentifierKind.Ethereum,
});

await dm.send("Hello!");
```
