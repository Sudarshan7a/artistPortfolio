# Add New Art - Portfolio Workflow

Use this skill when the user says "add new art", "new artwork", "latest art", or similar. This is a Ronal1710 artist portfolio site.

## Step 1: Identify the new image

Check for untracked images in `public/images/fullCom/`:
```bash
git status --short public/images/fullCom/
```
The new image will show as `?? filename.jpg`.

## Step 2: Prepend to gallery list

Edit `src/galleryList.js`. Add the new image as the **first entry** in the `galleryList` array:

```js
// new image images/fullCom/NEW_IMAGE.jpg
export const galleryList = [
  [
    1,
    {
      name: "NEW_IMAGE_NAME",
      loc: "images/fullCom/NEW_IMAGE.jpg",
    },
  ],
  // ... existing entries follow
];
```

- First number (`1`) = number of images in that gallery entry
- `name` = filename without extension
- `loc` = path relative to `public/`

## Step 3: Update Latest Art Work background

Edit `src/pages/components/Galleary/LatestWork.jsx`. Update the `latestArt` object:

```js
const latestArt = {
  borderRadius: "40px",
  height: "100%",
  background:
    'url("images/fullCom/NEW_IMAGE.jpg") lightgray 50% / cover no-repeat',
};
```

**Important:** Only update LatestWork.jsx if the user explicitly says to change the latest art. The gallery list and latest art are separate things.

## Step 4: Update gradient to match the image

Edit `src/pages/components/Galleary/Galleary.module.css`. Update the `.latesArt` gradient.

**Read the image first** to analyze its dominant colors, then create a gradient:

```css
.latesArt {
  border-radius: 42px;
  background: linear-gradient(
    DEGdeg,
    COLOR1 0%,
    COLOR2 16%,
    COLOR3 34%,
    COLOR4 53%,
    COLOR5 69%,
    COLOR6 82%,
    COLOR7 100%
  );
  filter: blur(64px);
  height: 100%;
}
```

### Color extraction tips:
- Read the image file using the Read tool
- Pick 7 colors from the image (dominant, accents, shadows, highlights)
- Use hex codes directly from what you see
- The gradient is blurred (blur: 64px) so colors blend — pick distinct hues
- Keep the same 7-stop structure for consistency

## Step 5: Verify

```bash
npm run lint
npm run build
```

Both must pass before committing.

## Step 6: Commit

Stage all changes and commit with a descriptive message:

```bash
git add src/galleryList.js src/pages/components/Galleary/Galleary.module.css src/pages/components/Galleary/LatestWork.jsx public/images/fullCom/NEW_IMAGE.jpg
git commit -m "feat(gallery): add NEW_IMAGE as latest artwork and update gallery list"
```

## File Reference

| File | Purpose |
|------|---------|
| `src/galleryList.js` | Gallery image list (prepend new art here) |
| `src/pages/components/Galleary/LatestWork.jsx` | Latest art background image |
| `src/pages/components/Galleary/Galleary.module.css` | Gradient glow behind latest art |
| `public/images/fullCom/` | Where full commission images live |

## Key Rules

1. **Gallery list** = `galleryList.js` (array of entries, prepend new art)
2. **Latest art** = `LatestWork.jsx` (single background image)
3. **Gradient** = `Galleary.module.css` (match to the latest art image)
4. Always read the image to analyze colors before setting gradient
5. Always run `npm run lint` and `npm run build` before committing
