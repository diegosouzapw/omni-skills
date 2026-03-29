---
name: managing-groups
description: Group conversation management for XMTP agents. Use when creating groups, managing members, setting permissions, or sending welcome messages. Triggers on group creation, member management, or permissions.
category: ai-agents
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP groups

Manage group conversations, permissions, and members.

## When to apply

Reference these guidelines when:
- Creating new group conversations
- Managing group members (add/remove)
- Setting group permissions
- Sending welcome messages
- Gating group access

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Create | CRITICAL | `create-` |
| 2 | Members | HIGH | `members-` |
| 3 | Permissions | HIGH | `permissions-` |
| 4 | Welcome | MEDIUM | `welcome-` |

## Quick reference

### Create (CRITICAL)
- `create-group` - Create new group conversations
- `create-dm` - Create direct messages

### Members (HIGH)
- `members-add` - Add members to groups
- `members-remove` - Remove members from groups
- `members-get-address` - Get member Ethereum addresses

### Permissions (HIGH)
- `permissions-roles` - Understand member, admin, super admin roles
- `permissions-custom` - Set custom permission policies

### Welcome (MEDIUM)
- `welcome-on-install` - Send welcome on agent installation
- `welcome-new-members` - Welcome new group members

## Quick start

```typescript
// Create a group
const group = await agent.createGroupWithAddresses(addresses, {
  groupName: "My Group",
  groupDescription: "A cool group",
});

// Welcome on new conversations
agent.on("group", async (ctx) => {
  await ctx.conversation.sendText("Hello group!");
});

agent.on("dm", async (ctx) => {
  await ctx.conversation.sendText("Hello! How can I help?");
});
```

## How to use

Read individual rule files for detailed explanations:

```
rules/create-group.md
rules/members-add.md
rules/permissions-roles.md
rules/welcome-on-install.md
```

