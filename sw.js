// Service worker mínimo, solo para que el sitio cumpla los requisitos
// de instalación como app (PWA) y el icono se aplique correctamente.
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // No intercepta nada, simplemente deja pasar la petición normal.
  event.respondWith(fetch(event.request));
});
