# Bugfix Prompt Template

```text
Use @coding-guidelines to fix <bug> in <path>. First identify the smallest failing test or concrete reproduction case. Then implement the minimal fix that matches existing repository patterns. Run only the relevant tests and checks for the touched area. In the final summary, include changed files, validation run, assumptions, and any remaining edge cases.
```
