# Source Maps Production Guidance

Use this reference to decide whether production source maps should be public, hidden, private-uploaded, or disabled.

## Decision table

| Posture | When it fits | Main tradeoff |
| --- | --- | --- |
| Public source maps | Only when exposure is accepted explicitly | Easier debugging, greater source disclosure |
| Hidden source maps | Good default when uploading to private error tracking | Better debugging without public map access |
| Private upload to error tracking | Strong option for production apps with observability tooling | Requires operational setup |
| Disabled entirely | Appropriate for simpler deployments or strict exposure minimization | Harder debugging without replacement tooling |

## Review steps

1. Check bundler config for production map generation.
2. Verify whether `.map` files are publicly reachable.
3. Check whether maps are uploaded privately to an approved error tracker.
4. Confirm what debugging workflow remains if public maps are removed.

## Example

```javascript
module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'source-map',
}
```

## Troubleshooting

### Stack traces became unreadable

- confirm whether hidden or private-uploaded maps are available
- verify release/version mapping in the error tracker
- avoid re-exposing public maps as the first fix

### Maps are still public after configuration changes

- check build output and CDN publishing rules
- verify old artifacts are not still being served
- inspect generated HTML or headers for stale references
