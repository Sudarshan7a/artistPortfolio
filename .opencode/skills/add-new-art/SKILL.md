# Add New Art - Portfolio Workflow

Use this skill when the user says "add new art", "new artwork", "latest art", or similar. This is a Ronal1710 artist portfolio site.

## How It Works (Rotation Pattern)

When adding new art, the **old latest art moves to the gallery list** and the **new image becomes the latest art**:

```
OLD latest art → prepend to galleryList.js
NEW image     → set as latest art in LatestWork.jsx
NEW image     → update gradient in Galleary.module.css
```

## Step 1: Identify the new image

Check for untracked images in `public/images/fullCom/`:
```bash
git status --short public/images/fullCom/
```
The new image will show as `?? filename.jpg`.

## Step 2: Read current latest art

Read `src/pages/components/Galleary/LatestWork.jsx` to get the **old latest art filename** from the `latestArt` background URL.

## Step 3: Prepend old latest art to gallery list

Edit `src/galleryList.js`. Prepend the **OLD latest art** (not the new image) as the first entry:

```js
export const galleryList = [
  [
    1,
    {
      name: "OLD_LATEST_ART_NAME",
      loc: "images/fullCom/OLD_LATEST_ART.jpg",
    },
  ],
  // ... existing entries follow
];
```

- First number (`1`) = number of images in that gallery entry
- `name` = filename without extension
- `loc` = path relative to `public/`

## Step 4: Set new image as latest art

Edit `src/pages/components/Galleary/LatestWork.jsx`. Update the `latestArt` object with the **NEW image**:

```js
const latestArt = {
  borderRadius: "40px",
  height: "100%",
  background:
    'url("images/fullCom/NEW_IMAGE.jpg") lightgray 50% / cover no-repeat',
};
```

## Step 5: Update gradient to match the new image

Edit `src/pages/components/Galleary/Galleary.module.css`. Update the `.latesArt` gradient.

**Read the new image first** to analyze its dominant colors, then create a vibrant gradient that matches:

```css
.latesArt {
  border-radius: 42px;
  background: linear-gradient(
    /* any angle that works */,
    /* 4-8 color stops with vibrant colors from the image */
  );
  filter: blur(64px);
  height: 100%;
}
```

### Gradient rules:
- Read the image using the Read tool to see its colors
- Pick vibrant, saturated colors from the image (dominant, accents, highlights)
- Mirror the artwork's layout: order stops top-to-bottom like the image (e.g. sky colors at 0%, ground/warm colors at 100%); use ~170-180deg when the image has sky on top and warm ground at bottom
- No phantom colors: every stop must exist in the image (a near-black navy has no place behind a bright daylight piece)
- Weight spacing by dominance: the color covering the most pixels gets the widest bands, not even 20% steps
- Never strand a key accent at the 100% edge alone — blur(64px) eats it; place accents at ~75-85% and anchor 100% with the dominant ground/edge color
- Saturate mids enough to survive blur + light-page washout (pale pastels disappear; pick one notch more saturated than the pixels look)
- Angle, number of colors (4-8), and percentages are flexible — whatever matches the image
- The gradient is blurred (blur: 64px) so colors blend smoothly
- Keep `border-radius: 42px`, `filter: blur(64px)`, and `height: 100%`

## Step 6: Verify

```bash
npm run lint
npm run build
```

Both must pass before committing.

## Step 7: Commit and push

Stage all changes, commit, and push — always, no exceptions:

```bash
git add src/galleryList.js src/pages/components/Galleary/Galleary.module.css src/pages/components/Galleary/LatestWork.jsx public/images/fullCom/NEW_IMAGE.jpg
git commit -m "feat(gallery): add NEW_IMAGE as latest artwork and update gallery list"
git push origin main
```

## File Reference

| File | Purpose |
|------|---------|
| `src/galleryList.js` | Gallery image list (prepend OLD latest art here) |
| `src/pages/components/Galleary/LatestWork.jsx` | Latest art background image (set NEW image here) |
| `src/pages/components/Galleary/Galleary.module.css` | Gradient glow behind latest art (match to NEW image) |
| `public/images/fullCom/` | Where full commission images live |

## Key Rules

1. **Rotation pattern**: OLD latest art → gallery list, NEW image → latest art
2. **Gallery list** = `galleryList.js` (prepend the OLD latest art, not the new one)
3. **Latest art** = `LatestWork.jsx` (set the NEW image as latest)
4. **Gradient** = `Galleary.module.css` (match to the NEW image colors)
5. Always read the image to analyze colors before setting gradient
6. Always run `npm run lint` and `npm run build` before committing
7. Always commit AND push (`git push origin main`) — never leave changes unpushed
