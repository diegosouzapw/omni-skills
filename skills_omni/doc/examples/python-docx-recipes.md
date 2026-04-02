# python-docx Recipes

## Add headings and paragraphs

```python
from docx import Document

doc = Document()
doc.add_heading("Project Brief", level=1)
doc.add_paragraph("Prepared for client review.")
doc.save("brief.docx")
```

## Add a table

```python
table = doc.add_table(rows=2, cols=2)
table.cell(0, 0).text = "Item"
table.cell(0, 1).text = "Status"
table.cell(1, 0).text = "Timeline"
table.cell(1, 1).text = "Approved"
```

## Insert an image

```python
doc.add_picture("chart.png")
```

## Page break

```python
doc.add_page_break()
```

## Style-safe editing guidance

- Prefer existing document styles over custom direct formatting.
- Make small edits, save, then render and review.
- If numbering or headers/footers are fragile, edit narrowly and validate every pass.
