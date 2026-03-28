#!/usr/bin/env python3
"""Render a starter packet for RAG design and review."""

from __future__ import annotations

import json
import sys


def main() -> int:
    corpus = sys.argv[1] if len(sys.argv) > 1 else "knowledge corpus"
    priorities = sys.argv[2] if len(sys.argv) > 2 else "precision,citations,evals"

    payload = {
        "corpus": corpus,
        "priorities": [item.strip() for item in priorities.split(",") if item.strip()],
        "review_axes": [
            "corpus scope",
            "chunking strategy",
            "retrieval ranking",
            "citation contract",
            "evaluation plan",
        ],
        "questions": [
            "What should the assistant do when evidence is missing?",
            "How will retrieval quality be measured independently of answer quality?",
            "Which metadata fields must survive into the final answer?",
        ],
    }
    json.dump(payload, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
