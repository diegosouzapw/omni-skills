# Edit Invariants Examples

## Object removal

```text
Use case: precise-object-edit
Asset type: product photo cleanup
Primary request: remove the charging cable from the desk
Constraints: change only the cable; keep the laptop, desk grain, shadows, and framing unchanged
Avoid: altering reflections, changing crop, adding text
```

## Text localization

```text
Use case: text-localization
Asset type: retail poster adaptation
Primary request: replace the English headline with French text
Text (verbatim): "Offre de printemps"
Constraints: preserve layout, preserve typography feel, preserve product imagery, replace only the headline text
Avoid: changing colors, moving elements, adding decorative graphics
```

## Background replacement

```text
Use case: precise-object-edit
Asset type: catalog product image
Primary request: replace only the plain gray background with a warm sunset gradient
Constraints: keep the product shape, highlights, edges, and shadow contour unchanged
Avoid: recoloring the product, changing camera angle, adding text
```

## Compositing

```text
Use case: compositing
Asset type: promotional bitmap
Primary request: place the provided smartwatch onto the provided athlete wrist scene
Input images: Image 1: supporting insert; Image 2: reference scene
Constraints: match perspective and lighting; keep the athlete pose unchanged; keep the watch design unchanged
Avoid: changing anatomy, adding extra accessories, altering crop unless needed
```
