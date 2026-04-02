# Handoff Categories

Use this guide when the current task stops being mainly about generating persistent design-system rules.

## Hand off to a Figma implementation workflow when

- the user wants a specific component or screen built now
- the rule file already exists and the next step is implementation
- the task needs node-by-node code generation more than durable repo guidance

## Hand off to MCP debugging when

- Figma MCP connectivity is failing
- tool calls consistently error or return incomplete context
- the workflow is blocked before rule generation can begin

## Hand off to accessibility review when

- the project already has rules but components still fail accessible behavior checks
- the team needs deeper keyboard, ARIA, or WCAG remediation guidance
- the issue is validation depth, not missing repo conventions

## Hand off to token migration or refactor when

- the repo lacks a usable token system
- Figma variables are far ahead of the codebase
- unresolved mappings indicate structural token work is required

## Hand off to frontend architecture when

- the main problem is component boundaries, state management, routing, package structure, or rendering strategy
- Figma is only incidental to the decision

## Minimum context to carry into the next workflow

- target agent and instruction file path
- discovered component directories
- token source locations
- unresolved token/theme gaps
- pilot validation result
- any MCP issues encountered
