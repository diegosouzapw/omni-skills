# Component Sizing Exclusions

Use these defaults before measuring component size. Override them only when the user explicitly wants a broader or narrower scope.

## Default include rule

Count executable source files that belong to the analyzed repository scope and represent maintained application or library code.

## Default exclusions

### Dependencies and vendored code

Exclude:

- `node_modules/`
- vendored SDKs or third-party code copied into the repository
- language-specific dependency caches or vendor trees

Reason: they distort ownership and size totals.

### Build and packaging output

Exclude:

- `dist/`
- `build/`
- compiled output directories
- static export output
- packaging artifacts

Reason: these are generated products, not primary source boundaries.

### Generated code

Exclude unless the user explicitly wants it included:

- generated API clients
- generated ORM/database code
- generated protobuf or schema bindings
- checked-in codegen output

Reason: generated files can dominate totals without reflecting component ownership.

### Tests and test artifacts

Exclude by default:

- test directories
- snapshots
- fixtures
- mocks
- golden files

Reason: this skill sizes implementation components unless the user requests test-inclusive sizing.

### Documentation and non-code assets

Exclude:

- docs
- markdown files
- design assets
- images
- static media

Reason: they are useful project assets but not executable component size signals.

### Repository noise

Exclude:

- coverage reports
- temporary output
- editor artifacts
- cache directories

## Report requirement

Always state:

- what was excluded
- why it was excluded
- any user-requested overrides

## Overrides

Common valid overrides:

- include tests to evaluate maintenance burden
- include generated code when the codegen output is a committed product boundary
- analyze a single app inside a monorepo instead of the whole repo

When overriding, say so explicitly in the report.
