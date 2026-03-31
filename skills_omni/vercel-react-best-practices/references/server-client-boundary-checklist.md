# Server/Client Boundary Checklist

Use this checklist before optimizing lower-level rendering details.

## Goal

Prefer Server Components by default in Next.js App Router and isolate Client Components to code that truly needs client execution.

## Checkpoints

### 1. Identify the boundary

- Which files currently use `'use client'`?
- Does each client-marked file actually need:
  - event handlers
  - browser-only APIs
  - local interactive state
  - client-only libraries

If not, move it back to the server.

### 2. Keep data fetching server-first

- Prefer fetching in Server Components when the data is needed for initial render.
- Avoid fetching on the client when the same data could be fetched on the server and streamed.
- Do not move data fetching into the client solely to avoid understanding cache behavior.

### 3. Prevent client bundle leakage

Check whether a Client Component imports:

- heavy utility libraries
- server-only modules
- large data transformation code
- static content that could be rendered on the server

If yes, split the tree so the client layer stays thin.

### 4. Minimize serialized props

- Pass only the data the Client Component needs.
- Avoid sending large objects when a few primitives or derived values are enough.
- Do not duplicate the same large payload across multiple client children.

### 5. Interleave instead of flattening everything to the client

Prefer:

- server-rendered layout and data-heavy shells
- small client islands for interaction
- explicit boundaries around forms, filters, modals, toggles, and editors

Avoid:

- turning an entire page into a Client Component because one button is interactive

## Review prompts

- What can remain on the server?
- What must run on the client?
- Which dependency is forcing this file to be client-side?
- Can the interactive part be extracted into a smaller island?

## Common fixes

- Move fetches from client components into Server Components.
- Split a large client page into a server wrapper plus small interactive children.
- Remove accidental client imports from shared modules.
- Reduce props passed from server to client.

## Watch-outs

- Do not break interactivity by moving truly interactive code to the server.
- Do not assume server-first means no loading states; use Suspense and streaming where appropriate.
- If a boundary change affects forms or actions, re-check auth and validation.
