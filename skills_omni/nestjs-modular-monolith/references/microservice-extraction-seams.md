# Microservice Extraction Seams

Design for future extraction without paying distributed-system costs too early.

## What to preserve now

- strong module ownership
- stable public contracts
- narrow exported interfaces
- explicit event names and payloads
- isolated persistence ownership
- minimal shared kernel

## What not to do prematurely

- add network hops only to simulate service boundaries
- introduce brokers without a requirement
- split deployment units before ownership and contracts are stable
- copy microservice patterns into every module by default

## Good extraction signals

Extraction may be justified when a module has:

- independently changing lifecycle or team ownership
- scaling or isolation needs that differ materially from the rest of the app
- external integration boundaries already centered around it
- operational needs that the monolith cannot meet cleanly

## Preparation checklist

- Is the module's public API explicit?
- Is persistence ownership clear?
- Are cross-module dependencies narrow?
- Are events and contracts documented?
- Can the module be tested through its public behavior rather than internal imports?
