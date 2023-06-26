const CACHE_CYF = "cyf-site-cache-v1";
const IMAGE_CACHE_CYF = "cyf-image-cache";
const FONT_CACHE_CYF = "cyf-font-cache";
const urlsToCache = ["/"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_CYF).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);

  // Ignore non-HTTP/HTTPS requests
  if (!requestUrl.protocol.startsWith("http")) {
    return;
  }

  // Bypass cache for external image requests
  if (
    requestUrl.origin !== location.origin &&
    /\.(jpe?g|png|webp)$/.test(requestUrl.pathname)
  ) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      var fetchPromise = fetch(event.request)
        .then(function (networkResponse) {
          if (!networkResponse || networkResponse.status !== 200) {
            return cachedResponse;
          }

          let cacheName = CACHE_CYF;
          let responseToCache = networkResponse.clone();

          // Choose the cache depending on the file type
          if (/\.woff2?$|\.ttf$/.test(requestUrl.pathname)) {
            cacheName = FONT_CACHE_CYF;
          } else if (/\.jpe?g$|\.png$|\.webp$/.test(requestUrl.pathname)) {
            cacheName = IMAGE_CACHE_CYF;
          }

          caches.open(cacheName).then(function (cache) {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(function (error) {
          console.log(
            "[Service Worker] Network request Failed. Serving content from cache: " +
              error
          );
          return cachedResponse;
        });

      return fetchPromise || cachedResponse;
    })
  );
});
