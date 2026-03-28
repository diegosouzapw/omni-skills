---
name: "rag-engineer"
description: "RAG workflow skill. Use this skill when a user needs retrieval pipelines, chunking, ranking, citations, and evaluation for an AI application."
version: "0.0.1"
category: "ai-agents"
tags:
  - "rag"
  - "retrieval"
  - "embeddings"
  - "evaluation"
  - "citations"
  - "indexing"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "antigravity"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-03-28"
upstream_skill: "skills/rag-engineer"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# RAG Engineer

## Overview

Use this skill when the user needs a retrieval-augmented generation workflow that is actually measurable. It is for corpus shaping, chunking, indexing, retrieval and reranking, answer grounding, citation behavior, and evaluation loops.

This skill should prefer retrieval quality and evaluation over prompt-only optimism. Good output should make it obvious what the model knows from retrieved context, what it inferred, and where the pipeline can fail.

## When to Use This Skill

- Use when designing or improving a knowledge-grounded assistant, search-augmented chatbot, or internal answer system.
- Use when chunking, ranking, or citation quality is more important than raw model creativity.
- Use when the user needs an evaluation plan for retrieval quality, hallucination risk, and fallback behavior.

## Core Concepts

### Retrieval Quality Beats Model Heroics

Weak chunking, noisy retrieval, or poor corpus boundaries usually dominate final answer quality. Fix those before reaching for more complex prompting.

### Grounding Needs Observable Evidence

The system should show which passages, documents, or records justified the answer. If the evidence is weak, the response should narrow its claims or ask for clarification.

## Step-by-Step Guide

### 1. Define the Knowledge Boundary

Name the corpus, freshness requirements, access controls, and which questions the system should refuse or defer when the evidence is missing.

### 2. Design Chunking and Metadata

Choose chunk sizes, overlap, document identifiers, section titles, timestamps, and permission metadata so retrieval can remain precise and auditable.

### 3. Choose Retrieval and Ranking Strategy

Start with a simple baseline, then justify any hybrid retrieval, reranking, or query rewriting step with a failure mode it actually fixes.

### 4. Design the Answer Contract

State how citations appear, how uncertainty is expressed, what happens when evidence conflicts, and when the assistant should abstain.

### 5. Add Evaluation and Fallback

Define task-focused evaluation examples, retrieval recall checks, answer quality checks, and fallback behavior for low-confidence retrieval.

## Examples

### Example 1: Internal knowledge assistant

```text
Design a RAG workflow for engineering runbooks where answers must cite the exact operational document section.
```

**Explanation:** The answer should emphasize chunking, metadata, citations, and abstention behavior.

### Example 2: Retrieval packet

```bash
python3 skills/rag-engineer/scripts/render_rag_review.py \
  "support docs corpus" \
  "precision,citations,freshness,evals"
```

**Explanation:** Use the packet when the user needs a structured retrieval review or system design pass.

## Best Practices

- ✅ **Do:** define corpus boundaries, freshness rules, and permission boundaries up front.
- ✅ **Do:** evaluate retrieval and answer quality separately.
- ✅ **Do:** make citations or evidence references part of the answer contract.
- ❌ **Don't:** hide weak retrieval behind a stronger-sounding answer.
- ❌ **Don't:** optimize chunk size or reranking in the abstract without testing representative questions.

## Troubleshooting

### Problem: Answers sound confident but are poorly grounded

**Symptoms:** The response is fluent, but cited evidence is weak, missing, or unrelated.  
**Solution:** Re-check corpus boundaries, chunk metadata, retrieval filters, and whether the answer prompt allows unsupported synthesis.

### Problem: Retrieval recall is too low

**Symptoms:** Relevant documents exist, but they are rarely returned in the top results.  
**Solution:** Inspect chunk granularity, document normalization, query rewriting, and whether metadata filters are too aggressive.

## Related Skills

- `@prompt-engineer` — Use when answer formatting, instructions, and citation wording need better prompt structure.
- `@llm-patterns` — Use when the broader application needs tool use, fallback paths, or agent orchestration beyond retrieval.
- `@documentation` — Use when the corpus itself needs cleanup or clearer structure before indexing.

## Additional Resources

- [RAG checklist](references/checklist.md)
- [Render a RAG review packet](scripts/render_rag_review.py)
