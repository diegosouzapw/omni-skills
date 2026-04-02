# Troubleshooting Triage Table

| OS / context | Symptom | Likely blocker | First action |
| --- | --- | --- | --- |
| macOS | Blank/black app capture | Screen Recording permission missing or stale | Run `ensure_macos_permissions.sh` and retry |
| macOS | App name match returns nothing | Window matching too broad or target not visible | Run `--list-windows --app "AppName"` |
| Linux Wayland | File created but screenshot is blank | Session/compositor restriction | Check `XDG_SESSION_TYPE` and review Wayland notes |
| Linux | Region capture fails | Unsupported backend or missing tool | Check `command -v scrot`, `gnome-screenshot`, `import` |
| Windows non-interactive | Helper fails outside desktop session | No interactive desktop access | Move to an interactive user session |
| Multi-display setup | Too many files or wrong monitor | Platform-specific multi-display behavior | Re-run with explicit region and report all outputs |
| Any OS | Save failed | Output path not writable or unsuitable | Retry with explicit writable path or temp mode |

## Minimal diagnostic bundle

### macOS

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh
```

### Linux

```bash
printf 'session=%s\n' "${XDG_SESSION_TYPE:-unknown}" && \
command -v scrot || true && \
command -v gnome-screenshot || true && \
command -v import || true
```

### Windows

Confirm the capture is running in an interactive desktop session before retry.
