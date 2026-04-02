# Diagram Decision Matrix

Use this matrix to map user intent to the most appropriate Excalidraw diagram family.

| User says or implies | Best starting diagram | Notes |
| --- | --- | --- |
| process, workflow, steps, approvals | Flowchart | Best for sequential logic and branching |
| concepts, topics, brainstorming, breakdown | Mind map | Best for hierarchical ideation |
| components, services, dependencies | Relationship diagram | Good for simple connected structures |
| system architecture, environments, zones | Architecture diagram | Add boundaries or zones where helpful |
| data movement, processing, stores | DFD | Focus on flows, processes, stores, actors |
| roles, departments, handoffs | Swimlane | Use lanes for responsibility separation |
| classes, inheritance, methods, attributes | Class diagram | Keep notation lightweight and readable |
| participants, messages, time order | Sequence diagram | Prioritize ordered interaction clarity |
| entities, attributes, keys, relationships | ER diagram | Focus on cardinality and key fields |

## Escalation rules

If the user asks for too much in one image:

- start with a high-level architecture or overview diagram
- propose one or more focused sub-diagrams

Examples:

- architecture + sequence
- architecture + DFD
- ER + workflow

## Ambiguous requests

Ask a short clarification when needed:

- Do you want component structure, process flow, or time-ordered interactions?
- Should this be a high-level overview or an implementation-detail diagram?
- Do you want one diagram or a small set of related diagrams?
