# Accessibility and Labeling

Use this guide when Mermaid output will be embedded in documentation, shared externally, or kept as a durable artifact.

## Accessibility baseline

Prefer diagrams that include:

- a clear title
- a concise description
- short readable labels
- meaningful relationship text

## Practical rules

- Put high-detail explanation in surrounding prose, not inside every node.
- Avoid overcrowded labels.
- Prefer explicit actor/system names over abbreviations when space allows.
- Keep relationship labels action-oriented.

## Packaging recommendation

When diagrams are shared in docs or reviews, include:

- the Mermaid source
- the rendered artifact
- any surrounding prose needed to interpret the diagram

## Review checklist

- Can a reader understand the diagram purpose from the title?
- Are the labels short enough to render cleanly?
- Is the description sufficient for reuse outside the immediate chat?
- Would splitting the diagram improve clarity?
