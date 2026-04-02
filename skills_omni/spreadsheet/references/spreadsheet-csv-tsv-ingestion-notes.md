# CSV and TSV Ingestion Notes

CSV and TSV workflows fail most often because defaults are treated as truth.

## Confirm before import

- delimiter
- encoding
- header row presence
- quote character behavior
- decimal convention
- NA/null conventions
- identifier columns that must stay strings
- date columns and expected format

## Good defaults when correctness matters

- set `sep` explicitly
- set `encoding` explicitly
- set `dtype` for IDs and codes explicitly
- use controlled date parsing instead of blind inference
- validate a few representative rows after load

## Common traps

### Leading zeros dropped

Read ID-like columns as strings.

### Ambiguous dates

Do not rely on inference for values like `03/04/2026`.

### Garbled text

Recheck encoding before cleaning the data itself.

### Wrong column splits

Verify delimiter and quoting rules before assuming the source data is malformed.

## When to use Python's csv module instead of pandas

Prefer the built-in `csv` module when:

- exact dialect handling matters
- the file is simple and pandas would be unnecessary overhead
- newline and quoting behavior need tight control
