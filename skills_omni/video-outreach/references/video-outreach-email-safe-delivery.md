# Video Outreach Email-Safe Delivery

Do not assume the recipient can play video inline inside the email client.

## Recommended pattern

1. Host the video or demo on a landing page.
2. Use a clickable thumbnail or GIF preview in the email.
3. Link the image to the hosted page.
4. Add a plain text fallback link.
5. Keep the body copy short and explain why the video matters.

## Thumbnail checklist

- Show a face, artifact, or both
- Add a visible play button overlay
- Keep text minimal and readable
- Use alt text
- Prefer stable image hosting
- Test rendering in your main sending environment

## Fallback copy examples

- "Watch the short video here"
- "If the preview does not load, open the video here"
- "Recorded a 58-second walkthrough for you: [link]"

## Common mistakes

- attaching the raw video file to the email
- assuming embedded playback works everywhere
- using a generic thumbnail with no visible relevance
- sending a long body paragraph that hides the CTA

## If previews fail

- switch to a static image instead of an animated GIF
- keep the direct text link visible near the image
- confirm image hosting and tracking redirects are not blocked by policy
- use reply and booked-meeting metrics if tracking is degraded
