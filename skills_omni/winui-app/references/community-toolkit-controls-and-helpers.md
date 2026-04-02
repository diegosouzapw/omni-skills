# CommunityToolkit Controls and Helpers

Use this guide when considering a toolkit dependency.

## Default rule

Prefer stock WinUI first.

Only add CommunityToolkit when:

- built-in WinUI controls or helpers do not cover the need cleanly
- the added dependency clearly reduces complexity or improves maintainability
- the team can accept the dependency and maintenance surface

## Good reasons to use it

- a helper or control solves a verified gap cleanly
- the existing codebase already standardizes on toolkit usage
- the toolkit materially reduces bespoke code

## Weak reasons to use it

- avoiding a small amount of normal WinUI composition
- replacing stock controls that already fit the requirement
- adding a dependency before checking platform-native options

## Review question

What specific platform gap or maintainability gain justifies this dependency?
