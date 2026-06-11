const CACHE_NAME = 'ocean-serenity-v1';
const urlsToCache = [
  '/',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css',
  '/src/components/Navbar.jsx',
  '/src/components/Footer.jsx',
  '/src/components/CustomCursor.jsx',
  '/src/components/SmoothScroll.jsx',
  '/src/components/ScrollToTop.jsx',
  '/src/pages/Home.jsx',
  '/src/sections/Hero.jsx',
  '/src/sections/About.jsx',
  '/src/sections/Companies.jsx',
  '/src/sections/Services.jsx',
  '/src/sections/WhyChooseUs.jsx',
  '/src/sections/MissionVision.jsx',
  '/src/sections/CallToAction.jsx'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // Return offline page for failed requests
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
