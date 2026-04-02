# Action Payload Schema

Use action payloads to drive the game in short, intentional bursts.

## Core principles

- Be explicit.
- Keep bursts short.
- Insert pauses when a visual or state transition needs inspection.
- Use documented key names and coordinate space.

## Common shape

```json
{
  "steps": [
    {
      "buttons": ["ArrowRight"],
      "frames": 8
    },
    {
      "buttons": [],
      "frames": 4
    },
    {
      "buttons": [" "],
      "frames": 2
    }
  ]
}
```

## Fields

### `steps`
Array of ordered input segments.

### `buttons`
Buttons or keys held during the segment.

Document whether your client expects:

- browser `KeyboardEvent.key` values such as `ArrowRight`, `ArrowLeft`, `Escape`, `f`
- mouse button names such as `left_mouse_button`
- an internal abstraction

Do not guess. Keep naming aligned with the packaged client.

### `frames`
How many deterministic frames or equivalent update ticks to apply while the buttons are active.

### `mouse_x`, `mouse_y`
Pointer coordinates, when needed.

Document the coordinate space used by the client and the game. Prefer coordinates relative to the active canvas after layout and scaling are known.

### pauses
If the client supports pauses separately, use them to allow menu transitions, scene changes, or screenshot capture.

## Input troubleshooting checklist

If actions do nothing, verify:

1. the page or canvas has focus
2. key names match the expected scheme
3. the game is in the right mode
4. coordinates use the expected origin and scale
5. fullscreen or resize did not invalidate mapping
