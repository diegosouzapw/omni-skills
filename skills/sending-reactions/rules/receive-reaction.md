---
title: Handle incoming reactions
impact: HIGH
tags: reactions, receive, events
---

## Handle incoming reactions

Use the `reaction` event to handle incoming emoji reactions.

**Basic handler:**

```typescript
agent.on("reaction", async (ctx) => {
  const reaction = ctx.message.content;
  
  console.log("Emoji:", reaction.content);
  console.log("Action:", reaction.action); // "added" or "removed"
  console.log("Message ID:", reaction.reference);
  
  if (reaction.action === "added") {
    await ctx.conversation.sendText(
      `Thanks for the ${reaction.content} reaction!`
    );
  }
});
```

**React back:**

```typescript
agent.on("reaction", async (ctx) => {
  const reaction = ctx.message.content;
  
  // Mirror the reaction back
  if (reaction.action === "added") {
    await ctx.conversation.sendReaction({
      reference: reaction.reference,
      action: "added",
      content: reaction.content,
      schema: "unicode",
    });
  }
});
```

**Reaction structure:**

```typescript
interface Reaction {
  reference: string;      // ID of the message being reacted to
  action: "added" | "removed";
  content: string;        // The emoji
  schema: "unicode";
}
```
