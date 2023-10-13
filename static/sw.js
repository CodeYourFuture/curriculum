const CACHE_CYF = "cyf-site-cache-v1";
const IMAGE_CACHE_CYF = "cyf-image-cache";
const FONT_CACHE_CYF = "cyf-font-cache";
const urlsToCache = ["/"];

const IMAGE_CACHE_CYF_LIMIT = 50;

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_CYF).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);

  event.respondWith(
    // Try to fetch from network first
    fetch(event.request)
      .then(function (networkResponse) {
        // If request is successful, clone and cache the response
        let cacheName = requestUrl.pathname;

        // Choose the cache depending on the file type
        if (/\.woff2?$|\.ttf$/.test(requestUrl.pathname)) {
          cacheName = FONT_CACHE_CYF;
        } else if (/\.jpe?g$|\.png$|\.webp$/.test(requestUrl.pathname)) {
          cacheName = IMAGE_CACHE_CYF;
        } else {
          cacheName = CACHE_CYF;
        }

        caches.open(cacheName).then(function (cache) {
          cache.put(event.request, networkResponse.clone());
        });

        // Return the network response
        return networkResponse;
      })
      .catch(function () {
        // If network request fails, try to get from cache
        return caches.match(event.request).then(function (cacheResponse) {
          return cacheResponse;
        });
      })
  );
});
