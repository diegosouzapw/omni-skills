# Docker Checklist

Use this checklist when preparing or reviewing containerized workflows.

## Architecture

- Define the runtime process, exposed ports, writable paths, and health semantics before editing the Dockerfile.
- Treat build stages and runtime stages as separate concerns.
- Keep the build context small and intentional.

## Build Hygiene

- Copy lockfiles and dependency manifests before source files to preserve cache reuse.
- Prefer multi-stage builds for compiled assets or dependency-heavy apps.
- Rebuild frequently enough to pick up upstream base image and package security fixes.

## Runtime Hardening

- Remove compilers and package managers from final images where possible.
- Run as a non-root user unless the workload has a hard requirement not to.
- Avoid baking secrets into image layers or default environment variables.

## Validation

- Provide the exact `docker build` and `docker run` commands you expect the user or CI to execute.
- State how the container should be debugged when it fails to start.
- If Compose is involved, document which behavior is Compose-specific and which is image behavior.

## Official Sources Used

- Docker build best practices: https://docs.docker.com/build/building/best-practices/
