// WHY: Firebase Messaging web plugin tries to register this default
// service worker path. A valid JS file prevents registration failures
// when running in browsers.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
