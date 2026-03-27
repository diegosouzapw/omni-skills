# LLM Patterns Checklist

Use this checklist when reviewing a production-oriented LLM workflow.

## System Contract

- Define whether the workflow is direct generation, retrieval, tool use, or multi-step orchestration.
- State which actions require confirmation and which are safe to automate.
- Make structured outputs explicit where downstream code depends on them.

## Reliability

- Validate tool inputs and outputs.
- Add timeouts, retries, and fallback paths deliberately rather than implicitly.
- Persist enough state to recover interrupted work without corrupting user intent.

## Security and Operations

- Log tool usage and sensitive operations for audit purposes.
- Treat file writes, network calls, and external executors as privileged boundaries.
- Keep recovery behavior explicit so interrupted tasks do not silently disappear.

## Official Sources Used

- MCP tools and security guidance: https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- A2A key concepts: https://a2a-protocol.org/latest/topics/key-concepts/
