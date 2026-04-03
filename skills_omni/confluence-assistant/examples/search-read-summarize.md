# Example: Search, Read, Summarize

## User request

```text
Find our onboarding documentation in Confluence and summarize the key steps.
```

## Suggested agent flow

1. Ask for the Confluence site if it is not already known.
2. Search for `onboarding documentation`.
3. Review likely matches.
4. Retrieve the best matching page.
5. Summarize only the retrieved content.
6. Report the page title and page ID used.

## Good confirmation output

```text
I found the page "Employee Onboarding" and summarized its current content. I used page ID 123456789 on the confirmed Confluence site.
```
