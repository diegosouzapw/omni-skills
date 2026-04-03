# Dependency Commands by Ecosystem

Use only the commands relevant to the repository you are analyzing.

## JavaScript / TypeScript

```bash
npm ls --all
npm explain <package-name>
```

## Python

```bash
pipdeptree
grep -R "^import \|^from " path/to/package | head -200
```

## Go

```bash
go mod graph
go list -deps ./...
```

## Rust

```bash
cargo tree
```

## JVM

```bash
./gradlew dependencies
mvn dependency:tree
```

## Git history

```bash
git log --since="6 months ago" --format='' --name-only | sed '/^$/d' | sort | uniq -c | sort -rn | head -50
```
