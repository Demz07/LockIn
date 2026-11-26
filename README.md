# Monochrome Dock Tasks (PWA)

Minimalist macOS-dock inspired task & focus workspace with 60/120fps harmonic spring physics, auto-select hover/touch-scrub navigation, Dynamic Island Pomodoro timer, Command Palette (`⌘K`), and full offline Progressive Web App (PWA) support.

## Included Files
- `index.html` — Main app shell & PWA metadata
- `style.css` — Multi-ratio responsive monochrome styles (`OLED`, `Graphite`, `Paper`) & safe-area support
- `script.js` — Spring-physics Dock engine, auto-select hover/scrub, tasks/subtasks CRUD, Pomodoro timer, Command Palette, & PWA install controller
- `manifest.webmanifest` — Subpath-safe Web App Manifest with desktop, Android maskable, & iOS icons + OS app shortcuts
- `sw.js` — Offline-first Service Worker
- `favicon.ico` & `icons/` — Desktop favicons (`ICO`, `SVG`, `16×16`, `32×32`) & installed app icons (`180×180`, `192×192`, `512×512`, maskable `192×192` & `512×512`)
- `.nojekyll` — Ensures GitHub Pages serves all static files directly without Jekyll processing

## Deploy to GitHub Pages
1. Create a new GitHub repository (public or private with Pages enabled).
2. Extract this ZIP and upload/commit all files (`index.html`, `style.css`, `script.js`, `manifest.webmanifest`, `sw.js`, `favicon.ico`, `.nojekyll`, `README.md`, and the `icons/` folder) to the **root** of your repository's `main` branch.
3. Open **Settings → Pages**, set **Source** to **Deploy from a branch**, select **`main`** and **`/ (root)`**, and click **Save**.
4. Visit `https://<your-username>.github.io/<your-repo>/` to use or install the app on any desktop or mobile device.
