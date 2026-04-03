# Request-to-Options Mapping

## Example 1

**User request:** Create a shared TypeScript utility library for formatting money.

**Likely interpretation:**

- artifact type: library
- likely generator: `@nx/js:library` or a local workspace library generator
- name: `money-formatting` or `shared-money-formatting`
- directory: `libs/shared` if that matches repo layout
- verification: lint, test, build for the new project

**Command shape:**

```bash
pnpm nx g @nx/js:library --name=money-formatting --directory=libs/shared --no-interactive
```

## Example 2

**User request:** Scaffold a checkout feature using the repo's conventions.

**Likely interpretation:**

- first inspect local generators
- likely generator family: local plugin
- name: `checkout`
- directory: depends on app or domain structure
- side effects: may update routing, tags, or shared config

**Command shape:**

```bash
pnpm nx list
pnpm nx g my-plugin:feature --help
pnpm nx g my-plugin:feature --name=checkout --directory=storefront --no-interactive
```

## Example 3

**User request:** Add a React component inside the storefront app.

**Likely interpretation:**

- artifact type: component
- likely generator: `@nx/react:component` or local equivalent
- target project: `storefront`
- name: `product-card`

**Command shape:**

```bash
pnpm nx g @nx/react:component --name=product-card --project=storefront --no-interactive
```

## Option-mapping checklist

Before execution, make sure you can fill in:

- exact generator
- name
- target project if applicable
- directory/path
- tags or scope metadata
- framework-specific options
- verification plan
