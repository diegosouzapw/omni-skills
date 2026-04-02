# Library Asset Troubleshooting

Use this guide when expected components, variables, or styles do not appear.

## Problem categories

### 1. The asset exists, but the library is not accessible

**Symptoms:** Search results are unexpectedly empty, or teammates can see assets that you cannot.

**Checks:**

- Confirm the correct file is open.
- Confirm the file has access to the intended library.
- Confirm the library is enabled for the file.
- Confirm you are using the right account, team, or workspace context.

### 2. The asset exists in a library, but it is not published or not discoverable yet

**Symptoms:** The design team says the asset exists, but search cannot find it.

**Checks:**

- Confirm the source component, style, or variable was published.
- Confirm you are searching with broad enough terms.
- Try searching fragments and synonyms rather than one exact name.

### 3. The asset exists in the file, but not as a named library search result

**Symptoms:** Search is weak, but existing screens clearly use the asset.

**Checks:**

- Inspect existing instances directly.
- Inspect bound variables from existing nodes.
- Inspect text and effect style IDs from comparable frames.

This is often the most authoritative recovery path.

### 4. Local variable discovery appears empty

**Symptoms:** Local variable APIs return no collections, leading to the false conclusion that no variables exist.

**Checks:**

- Remember that local variable discovery does not reveal published remote variables.
- Search for variables through the design-system workflow.
- Inspect bound variables on existing screens.

## Verification sequence

Use this order:

1. inspect existing comparable screens
2. inspect imported instances and applied styles
3. inspect bound variables on existing nodes
4. search broadly across the design system
5. confirm library publication and access assumptions
6. only then use a local fallback

## Safe fallback rule

If an asset truly cannot be found:

- keep the fallback minimal
- note that the official asset was unavailable
- prefer values already visible in adjacent approved screens
- avoid creating broad local substitutes that will drift later
