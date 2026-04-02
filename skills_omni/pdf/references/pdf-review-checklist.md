# PDF Review Checklist

Use this checklist before delivery or handoff.

## Visual checks

- Page size and orientation are correct.
- Margins look intentional and consistent.
- No clipped text or overlapping elements.
- Fonts render correctly with no missing glyphs.
- Tables fit the page and preserve readable structure.
- Images and charts are sharp enough for intended use.
- Headers, footers, and page numbers are consistent.
- Page breaks occur in sensible places.
- Links, bookmarks, and form elements appear where expected.

## Structural checks

- `qpdf --check` passes or any warnings are documented.
- Page count matches expectations.
- Metadata is present and not obviously wrong.
- Encryption or permission restrictions are documented.
- Forms or outlines are present or absent as expected.

## Handoff checks

- Output path is clear.
- Temporary files are cleaned up or intentionally retained.
- Notes state which pages were rendered and reviewed.
- Notes state which tool made the final change.
- Any known limitation is recorded explicitly.
