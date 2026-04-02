# Render Game to Text Contract

Use this contract for `window.render_game_to_text`.

## Goal

Return a concise JSON string that captures the current game state well enough for automated reasoning and artifact review.

## Required fields

Include the following when they exist for the game:

- `mode`: current screen or mode such as `start`, `playing`, `paused`, `game_over`, `dialog`
- `player`: current player state relevant to control and survival
- `entities` or domain-specific collections for visible threats, pickups, obstacles, or interactables
- `coordinate_system`: document origin and axis direction

## Strongly recommended fields

- score, health, resources, inventory
- timers or cooldowns that affect valid actions
- objective or progression state
- flags such as `paused`, `can_jump`, `has_key`, `boss_active`

## Anti-patterns

Avoid:

- full event histories
- giant physics dumps
- irrelevant internal caches
- text that disagrees with what is currently rendered
- omitting coordinate conventions when positions are present

## Shape guidance

Keep names stable across runs. Prefer current, visible, decision-relevant state.

Example:

```json
{
  "mode": "playing",
  "player": { "x": 120, "y": 64, "vx": 0, "vy": -4, "hp": 3 },
  "entities": [
    { "id": "slime-1", "type": "enemy", "x": 220, "y": 64, "hp": 1 },
    { "id": "coin-2", "type": "pickup", "x": 300, "y": 52 }
  ],
  "score": 150,
  "cooldowns": { "attack_ms": 0 },
  "coordinate_system": {
    "origin": "top-left",
    "x_increases": "right",
    "y_increases": "down"
  }
}
```

## Return type

Return a JSON string, not a raw object, unless the packaged client explicitly expects a different type.

```js
window.render_game_to_text = () => JSON.stringify(payload);
```
