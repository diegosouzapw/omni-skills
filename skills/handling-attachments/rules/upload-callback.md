---
title: Implement custom upload storage
impact: HIGH
tags: attachments, upload, storage, pinata
---

## Implement custom upload storage

Create an upload callback to store encrypted files on your storage provider.

**Pinata example:**

```typescript
import { type AttachmentUploadCallback } from "@xmtp/agent-sdk";
import { PinataSDK } from "pinata";

const uploadCallback: AttachmentUploadCallback = async (attachment) => {
  const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT,
    pinataGateway: process.env.PINATA_GATEWAY,
  });

  // Create blob from encrypted payload
  const mimeType = "application/octet-stream";
  const encryptedBlob = new Blob(
    [Buffer.from(attachment.content.payload)],
    { type: mimeType }
  );
  
  const encryptedFile = new File([encryptedBlob], attachment.filename, {
    type: mimeType,
  });

  // Upload to Pinata
  const upload = await pinata.upload.public.file(encryptedFile);

  // Return the public URL
  return pinata.gateways.public.convert(`${upload.cid}`);
};
```

**S3 example pattern:**

```typescript
const uploadCallback: AttachmentUploadCallback = async (attachment) => {
  const s3 = new S3Client({ region: "us-east-1" });
  
  const key = `attachments/${Date.now()}-${attachment.filename}`;
  
  await s3.send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: Buffer.from(attachment.content.payload),
    ContentType: "application/octet-stream",
  }));

  return `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`;
};
```

**Required environment variables (Pinata):**

```bash
PINATA_JWT=your_jwt_token
PINATA_GATEWAY=your_gateway_url
```
