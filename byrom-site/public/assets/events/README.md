# Event images

Used by:
- the "Recent & upcoming" track-record cards (`EVENTS` in `src/js/SectionsMid.jsx`)
- the world-map popups (`LOCATIONS` → `image` in `mapgen` / `src/js/mapdata.js`)

Recommended: 1200×675 px JPG. Name them clearly, e.g.:

```
f1-madrid-2026.jpg
afc-asian-cup-2027.jpg
the-open.jpg
ryder-cup.jpg
fifa-world-cup.jpg
rugby-world-cup.jpg
```

Then reference them from the components, e.g. `image: '/assets/events/f1-madrid-2026.jpg'`.
