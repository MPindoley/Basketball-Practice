// Offline support: serve from the network when there is one, fall back to the last copy for gyms with no signal.
const CACHE = 'practice-book-v1';
const SHELL = ['./', 'index.html', 'css/app.css', 'js/data.js', 'js/court.js', 'js/diagrams-1.js', 'js/diagrams-2.js',
  'js/diagrams-3.js', 'js/diagrams-4.js', 'js/app.js', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-512.png'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
