# Interactive Trace Capture Snippets

Use these snippets inside `js_repl` after `context` already exists.

## Start trace

```javascript
await context.tracing.start({
  screenshots: true,
  snapshots: true,
});
console.log('Tracing started');
```

## Stop trace and save artifact

```javascript
await context.tracing.stop({ path: 'artifacts/trace.zip' });
console.log('Trace saved to artifacts/trace.zip');
```

## Suggested use

1. Start trace.
2. Reproduce the issue in the smallest number of steps.
3. Stop trace.
4. Mention the saved path in the final handoff packet.
