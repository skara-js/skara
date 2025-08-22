const CACHE_NAME = 'skara-js-v1';
const urlsToCache = [
  '/skara',
  '/skara/assets/app.js',
  '/skara/assets/styles.css',
  '/skara/assets/favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});