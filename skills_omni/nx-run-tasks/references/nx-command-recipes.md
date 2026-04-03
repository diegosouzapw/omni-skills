# Nx Command Recipes

These recipes assume the workspace already defines the targets being run.

## Discover project targets

```bash
nx show project myapp --json
```

## Run one target for one project

```bash
nx run myapp:test
nx run myapp:lint
nx run myapp:build --configuration=production
nx run myapp:serve
```

## Run the same target for selected projects

```bash
nx run-many -t test --projects=myapp,mylib
nx run-many -t lint --projects=web,ui --exclude=legacy-ui
```

## Run several tasks across the workspace

```bash
nx run-many -t build,test,lint --parallel=3
```

## Affected execution

```bash
nx affected -t test --base=origin/main --head=HEAD
nx affected -t build,lint --base=origin/main --head=HEAD
nx affected -t test --files=libs/util/src/index.ts
```

## Debugging flags

```bash
nx run myapp:test --verbose
nx affected -t test --base=origin/main --head=HEAD --verbose
```

## Cache diagnosis

```bash
nx run myapp:build --skipNxCache
```

Use this only to verify whether cached replay is involved in a suspicious result.

## Stop on first failure

```bash
nx run-many -t test --projects=app1,app2,app3 --nxBail
```

## Forward arguments to the underlying tool

```bash
nx run myapp:test -- --watch
nx run myapp:test -- --runInBand
nx run myapp:e2e -- --grep="checkout"
```

Whether `--` is required depends on the target and executor behavior used by the workspace.

## Reset local Nx state

```bash
nx reset
```
