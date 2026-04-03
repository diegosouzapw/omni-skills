# Output Validation Checklist

Validate artifacts before sharing findings, importing into a graph database, or giving the outputs to another agent.

## Minimum checks

### 1. Confirm required files exist

Typical outputs:

- `people.csv`
- `files.csv`
- `edges.csv`
- `summary.json`

Optional outputs depend on flags and data quality.

### 2. Validate bounded summary access

Run at least one small query successfully:

```bash
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section bus_factor_hotspots
```

### 3. Confirm `summary.json` is parseable

```bash
python -m json.tool ownership-map-out/summary.json >/dev/null
```

### 4. Check CSV headers quickly

```bash
head -n 3 ownership-map-out/people.csv
head -n 3 ownership-map-out/files.csv
head -n 3 ownership-map-out/edges.csv
```

### 5. Validate the handoff packet

Ensure the packet states:

- repo and branch
- analysis window
- attribution model
- bot handling
- identity normalization status
- sensitivity config used
- major limitations

## GraphML note

If GraphML was generated, treat it as optional convenience output. If a visualization tool behaves unexpectedly, fall back to CSV/JSON rather than debugging GraphML first.

## CSV portability note

When reprocessing CSVs in Python or importing elsewhere, be explicit about headers, quoting, and numeric casting rather than relying on spreadsheet defaults.
