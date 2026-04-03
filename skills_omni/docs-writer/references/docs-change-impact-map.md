# Docs Change Impact Map

When documentation changes, inspect nearby surfaces that commonly drift.

## Core targets

- Primary markdown file being edited
- Related README sections
- Neighboring guides or concept pages
- Troubleshooting and FAQ pages

## Navigation and discovery

- Docs index page
- Sidebar or navigation config
- Landing pages or section overviews
- Inbound links from other docs

## Technical adjacency

- CLI reference or command help examples
- Config reference pages
- Environment variable docs
- Sample files and example projects
- Screenshots or diagrams tied to the changed workflow

## Change-history surfaces

- Changelog
- Release notes
- Migration / upgrade guides
- Deprecation notices

## Review prompts

- Did the behavior change elsewhere in the docs?
- Does a new page need to be linked from navigation?
- Did a renamed heading break anchor links?
- Did examples or screenshots become stale?
- Does this change need a migration note or release mention?
