---
title: Send encrypted file attachments
impact: CRITICAL
tags: attachments, files, encryption, send
---

## Send encrypted file attachments

Use `sendRemoteAttachment` to send encrypted files.

**Basic usage:**

```typescript
import { type AttachmentUploadCallback } from "@xmtp/agent-sdk";

agent.on("text", async (ctx) => {
  if (ctx.message.content === "/send-file") {
    // Create a File object
    const file = new File(["Hello, World!"], "hello.txt", {
      type: "text/plain",
    });

    // Send the encrypted remote attachment
    await ctx.conversation.sendRemoteAttachment(file, uploadCallback);
  }
});
```

**Send an image:**

```typescript
import fs from "fs";

const imageBuffer = fs.readFileSync("./image.png");
const file = new File([imageBuffer], "image.png", { type: "image/png" });

await ctx.conversation.sendRemoteAttachment(file, uploadCallback);
```

**How it works:**

1. The SDK encrypts the file locally
2. Your upload callback uploads the encrypted data
3. The SDK sends a message with the URL and decryption keys
4. Recipients can download and decrypt the file
