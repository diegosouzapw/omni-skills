# Output Contract

Produce both a Markdown summary and a machine-readable inventory whenever possible.

## Markdown report

Minimum sections:

1. **Scope**
   - repository or subpath analyzed
   - languages present
   - date/time or commit context if available

2. **Structural signals used**
   - manifests, package roots, namespaces, import aliases, or other boundary sources

3. **Inclusion and exclusion rules**
   - explicit list of counted and ignored content

4. **Component inventory table**
   - one row per component

5. **Size analysis summary**
   - total components
   - total statements
   - mean and median
   - optional standard deviation

6. **Findings and recommendations**
   - oversized, undersized, ambiguous, generated/mixed, or segmented components

7. **Limitations and confidence**
   - where heuristics or fallback metrics were used

## JSON inventory

Recommended top-level shape:

```json
{
  "scope": {
    "path": ".",
    "languages": ["TypeScript", "Python"]
  },
  "exclusions": {
    "defaults_applied": true,
    "rules": ["dist/", "coverage/", "generated/"]
  },
  "summary": {
    "component_count": 3,
    "total_statements": 12000,
    "mean_statements": 4000,
    "median_statements": 3200,
    "std_dev_statements": 2800,
    "notes": ["std_dev is approximate due to skew"]
  },
  "components": []
}
```

## Required component fields

Each component record should include:

```json
{
  "component_id": "billing",
  "display_name": "Billing",
  "canonical_path": "packages/billing",
  "boundary_type": "workspace-package",
  "language": "TypeScript",
  "included_file_count": 24,
  "excluded_file_count": 8,
  "statement_count": 4312,
  "percent_of_codebase": 35.9,
  "status": "Too Large",
  "boundary_confidence": "high",
  "exclusion_notes": ["Excluded tests", "Excluded generated client"],
  "recommendation": "Validate whether invoicing and payment processing should be separated"
}
```

## Status values

Preferred values:

- `OK`
- `Too Large`
- `Too Small`
- `Ambiguous Boundary`
- `Generated/Mixed`
- `Needs Segmentation`

## Reporting rule

If a fallback metric is used instead of executable statement count, rename the field or explain it clearly in `notes` and the Markdown report.
