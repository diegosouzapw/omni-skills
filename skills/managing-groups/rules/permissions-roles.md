---
title: Understand group permission roles
impact: HIGH
tags: groups, permissions, roles, admin
---

## Understand group permission roles

XMTP groups have three permission levels: Member, Admin, and Super Admin.

**Role hierarchy:**

| Role | Capabilities |
|------|-------------|
| Member | Basic group participant |
| Admin | Can perform admin-level actions based on group settings |
| Super Admin | Full permissions, can manage other admins |

**Check roles:**

```typescript
const isAdmin = group.isAdmin(inboxId);
const isSuperAdmin = group.isSuperAdmin(inboxId);

// Get all admins
const admins = group.admins;
const superAdmins = group.superAdmins;
```

**Manage admin status:**

```typescript
// Promote to admin
await group.addAdmin(inboxId);

// Demote from admin
await group.removeAdmin(inboxId);

// Promote to super admin
await group.addSuperAdmin(inboxId);

// Demote from super admin
await group.removeSuperAdmin(inboxId);
```

**Default permissions (All_Members policy):**

| Action | Who Can Perform |
|--------|----------------|
| Add Member | All members |
| Remove Member | Admin only |
| Add/Remove Admin | Super Admin only |
| Update Metadata | All members |

**Permission policies:**

```typescript
enum PermissionPolicy {
  Allow = 0,      // All members can perform
  Deny = 1,       // No one can perform
  Admin = 2,      // Only admins
  SuperAdmin = 3, // Only super admins
}
```
