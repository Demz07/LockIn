/* ==========================================================
   MONOCHROME DOCK TASKS — OFFLINE-FIRST SERVICE WORKER
   Subpath-safe for GitHub Pages (https://<user>.github.io/<repo>/)
   ========================================================== */
const CACHE_NAME = 'monochrome-dock-pwa-v1';

const APP_SHELL_RELATIVE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.webmanifest',
  './favicon.ico',
  './icons/favicon.svg',
  './icons/favicon-16x16.png',
  './icons/favicon-32x32.png',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const urls = APP_SHELL_RELATIVE.map((p) => new URL(p, self.registration.scope).href);
      return cache.addAll(urls);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((oldKey) => caches.delete(oldKey))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigation requests (including ?action=... PWA shortcuts): network-first with instant cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResp) => {
          const copy = networkResp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return networkResp;
        })
        .catch(async () => {
          const cachedExact = await caches.match(request, { ignoreSearch: true });
          if (cachedExact) return cachedExact;
          const fallbackIndex = new URL('./index.html', self.registration.scope).href;
          return caches.match(fallbackIndex);
        })
    );
    return;
  }

  // Static assets: Stale-While-Revalidate for instant offline/cached load + seamless updates
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});
