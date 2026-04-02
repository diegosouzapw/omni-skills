# Inspect Metadata and Encryption

## Goal

Quickly inspect whether a PDF is encrypted and summarize basic properties.

## Command

```bash
python3 scripts/pdf_info.py input.pdf
bash scripts/check_pdf_integrity.sh input.pdf
```

## Expected output

- page count
- metadata fields if present
- encrypted true/false
- outline presence
- form presence
- qpdf validation summary

## Use this when

- deciding whether a file is safe to modify
- documenting input state before edits
- confirming that output properties still match expectations
