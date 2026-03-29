# Design-System Release Brief

## Scope

- package: `@omni/ui`
- change set: token cleanup, button variant normalization, form field spacing update

## Consumer impact

- dashboard app
- admin console
- growth site

## Review questions

- Which changes are additive?
- Which changes require migration guidance?
- Which examples or docs must ship at the same time?

## Release call

- phase token aliases first
- phase component prop cleanup second
- block destructive removal until downstream apps confirm adoption
