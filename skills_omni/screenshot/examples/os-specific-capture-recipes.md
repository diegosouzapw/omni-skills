# OS-Specific Capture Recipes

Use these as concise starting points.

## macOS

### Full screen to explicit path

```bash
screencapture -x output/screen.png
```

### Region to explicit path

```bash
screencapture -x -R100,200,800,600 output/region.png
```

### App capture with helper after permission preflight

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh && \
python3 <path-to-skill>/scripts/take_screenshot.py --app "Codex" --mode temp
```

## Linux

### Full screen with helper

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --path output/screen.png
```

### Check session type and tool availability first

```bash
printf 'session=%s\n' "${XDG_SESSION_TYPE:-unknown}" && \
command -v scrot || true && \
command -v gnome-screenshot || true && \
command -v import || true
```

### Direct fallback with scrot

```bash
scrot output/screen.png
```

## Windows

### Full screen to default or helper-defined location

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1
```

### Region capture to temp

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1 -Mode temp -Region 100,200,800,600
```

## Reporting checklist

After any recipe:

- confirm the file exists
- verify the image is not blank
- report every output path
- note if the result came from temp mode
