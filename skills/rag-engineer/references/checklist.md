# RAG Checklist

Use this checklist when designing or reviewing retrieval-augmented generation systems.

## Corpus and Access

- Define the corpus boundary, freshness expectations, and who is allowed to retrieve which documents.
- Normalize document metadata early: title, section, source, timestamp, and permission scope.
- Decide which questions the system should refuse when evidence is weak or unavailable.

## Retrieval Quality

- Choose chunk size and overlap based on the document structure and question style, not guesswork.
- Measure retrieval recall and answer quality separately.
- Add reranking or query rewriting only when you can name the baseline failure they fix.

## Answer Contract

- Make citations, source references, or evidence snippets part of the response contract.
- Tell the user when retrieved evidence is thin, conflicting, or stale.
- Preserve enough metadata for debugging poor answers later.

## Notes

- This checklist is based on common production RAG practice and grounded-answer design patterns, not a single vendor-specific recipe.
