# Common Generator Commands

Replace `pnpm` with the package-manager wrapper used by the repo.

## List plugins and generators

```bash
pnpm nx list
pnpm nx list @nx/react
pnpm nx list @nx/js
```

## Inspect generator help

```bash
pnpm nx g @nx/react:library --help
pnpm nx g @nx/web:app --help
pnpm nx g my-plugin:feature --help
```

## Generate a library

```bash
pnpm nx g @nx/js:library --name=shared-utils --directory=libs/shared --no-interactive
```

## Generate an app

```bash
pnpm nx g @nx/web:app --name=storefront --directory=apps --no-interactive
```

## Generate a component

```bash
pnpm nx g @nx/react:component --name=product-card --project=storefront --no-interactive
```

## Run a local workspace generator

```bash
pnpm nx g my-plugin:feature --name=checkout --directory=storefront --no-interactive
```

## Preview first with dry-run

```bash
pnpm nx g @nx/js:library --name=shared-utils --directory=libs/shared --dry-run --no-interactive
```

## Verify the result

```bash
pnpm nx format --fix
pnpm nx lint shared-utils
pnpm nx test shared-utils
pnpm nx build shared-utils
```
