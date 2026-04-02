# Troubleshooting Matrix

| Symptom | Likely cause | Next action |
| --- | --- | --- |
| Search or fetch returns not found | Wrong ID, wrong workspace, or resource not shared with the integration | Confirm workspace, confirm identifier, verify sharing and access |
| Read works but create fails | Missing create capability or wrong parent destination | Check integration capabilities and parent location |
| Update fails on known page | Write access missing or schema mismatch | Confirm permissions, required properties, and destination type |
| Login worked before but now fails | Expired auth, wrong workspace, or client restart needed | Re-authenticate and restart the client if required |
| Long page only partially writes | Oversized request or too much content in one pass | Create page shell first, then append in smaller sections |
| Writes start failing after repeated attempts | Rate limiting | Slow down, avoid tight loops, resume with staged writes |
| Property validation fails | Missing, misnamed, or wrong-typed property | Inspect destination schema and correct field mapping |
| Captured page is hard to read | Wrong content type or poor structure | Re-route content type and rebuild with summary-first headings |
