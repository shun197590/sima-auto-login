const CACHE_NAME = 'sima-fixed-v1';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { if (e.request.url.startsWith(self.location.origin)) { e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))); } });
