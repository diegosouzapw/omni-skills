---
name: handling-attachments
description: File attachment handling for XMTP agents. Use when sending or receiving images, files, or any encrypted remote attachments. Triggers on file upload, image sending, or remote attachment handling.
category: ai-agents
license: MIT
metadata:
  author: xmtp
  version: "1.0.0"
---
# XMTP attachments

Handle file attachments using encrypted remote attachments. Files are encrypted locally, uploaded to your storage provider, and sent as a remote attachment message.

## When to apply

Reference these guidelines when:
- Sending files or images from an agent
- Receiving and downloading attachments
- Implementing custom upload storage
- Working with encrypted file transfers

## Rule categories by priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Send | CRITICAL | `send-` |
| 2 | Receive | CRITICAL | `receive-` |
| 3 | Upload | HIGH | `upload-` |

## Quick reference

### Send (CRITICAL)
- `send-remote-attachment` - Send encrypted file attachments

### Receive (CRITICAL)
- `receive-attachment` - Download and decrypt attachments

### Upload (HIGH)
- `upload-callback` - Implement custom upload storage (Pinata, S3, etc.)

## Quick start

```typescript
import {
  type AttachmentUploadCallback,
  downloadRemoteAttachment,
} from "@xmtp/agent-sdk";

// Send an attachment
const file = new File(["Hello, World!"], "hello.txt", { type: "text/plain" });
await ctx.conversation.sendRemoteAttachment(file, uploadCallback);

// Receive an attachment
agent.on("attachment", async (ctx) => {
  const attachment = await downloadRemoteAttachment(ctx.message.content);
  console.log(`Received: ${attachment.filename}`);
});
```

## How to use

Read individual rule files for detailed explanations:

```
rules/send-remote-attachment.md
rules/receive-attachment.md
rules/upload-callback.md
```

