# MCP Surface Selection Matrix

Use this matrix when deciding whether a capability should be exposed as a tool, resource, or prompt.

| If the capability is mainly... | Prefer | Why |
| :-- | :-- | :-- |
| An action that does work or changes state | Tool | Tools are action-oriented and can express input contracts and side-effect boundaries |
| Stable readable data addressed by URI | Resource | Resources are better for discoverable read access and reusable references |
| Reusable interaction scaffolding or task framing | Prompt | Prompts let clients request structured prompt content without pretending it is an action |
| A read operation with parameters but no side effects | Tool or resource template | Use a tool if it behaves like a query action; use a resource template if URI-oriented access is clearer |
| A write operation that needs explicit approval | Tool | Tools are the right place for explicit side-effect signaling and approval policy |

## Quick decision checks

### Choose a tool when

- the client is asking the server to do work now
- inputs are naturally modeled as an argument object
- side effects, timeout budget, or approval rules matter
- the result is an action response, not a durable addressable artifact

### Choose a resource when

- the value is primarily data, not behavior
- the object is naturally named by a URI
- clients may want to browse, fetch, cache, or subscribe to changes
- the same data should be addressable consistently across sessions

### Choose a prompt when

- the capability is a reusable interaction template
- the output is prompt content for a later model interaction
- the main value is framing, instruction, or argumentized prompt generation

## Anti-patterns

- Using a single giant tool to return every read and write behavior in one place
- Using prompts to hide side effects that should be explicit tools
- Using resources for operations that are really commands
- Exposing write-capable behaviors as if they were harmless reads

## Suggested review questions

1. What would a client operator expect this capability to be?
2. Does it have side effects?
3. Should it be addressable by URI?
4. Will users want to reference or subscribe to it later?
5. Would a prompt template make the interaction clearer than another tool?
