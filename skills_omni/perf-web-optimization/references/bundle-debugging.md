# Bundle Debugging

Use this reference when shipped JavaScript is too large or code splitting is not paying off.

## Start with evidence

Check:

- the largest bundles or chunks
- duplicated modules across chunks
- route-independent code loaded on every page
- third-party packages with disproportionate cost

## Common failure modes

### Tree shaking did not work

Possible causes:

- broad imports
- CommonJS packages
- side effects in a dependency
- bundler configuration or package metadata that prevents dead-code elimination

### Code splitting changed files but not perceived speed

Possible causes:

- split code is still imported eagerly
- duplicated dependencies were created across chunks
- too many small requests added overhead without reducing critical work
- route-independent code still loads on every route

### Replacing a heavy library did not reduce output much

Possible causes:

- the old package remains transitively
- another dependency brought similar code back
- imports were not narrowed enough
- compression hid the actual parse and execution cost difference

## Safe fixes

- remove unused dependencies fully
- prefer ESM-friendly libraries where possible
- narrow imports
- split by route or real feature boundaries
- confirm with analyzer output after each change

## Example checks

```bash
# Webpack
npx webpack-bundle-analyzer dist/stats.json

# Vite-based projects
npx vite-bundle-visualizer
```
