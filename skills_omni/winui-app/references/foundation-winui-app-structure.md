# WinUI App Structure

Use this guide when reviewing or creating app structure in a WinUI 3 project.

## Typical areas to inspect

- app startup and window creation
- shell/page structure
- resource dictionaries and theme resources
- page navigation wiring
- bindings, view models, and commands
- packaged versus unpackaged assumptions that leak into startup code

## Review goals

- keep startup composition understandable
- avoid unnecessary custom shell complexity
- keep resources organized and traceable
- preserve existing codebase conventions where reasonable
- separate app-model decisions from page-level UI concerns

## Practical checks

- Is startup creating the right initial window?
- Is the shell implemented with stock patterns where possible?
- Are resources merged predictably?
- Are navigation and page ownership easy to follow?
- Is theming centralized instead of hard-coded per page?
