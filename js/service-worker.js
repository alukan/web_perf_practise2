self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '../index.html',
                '../about.html',
                '../contact.html',
                '../menu.html',
                '../news-detail.html',
                '../news.html',
                '../css/bootstrap-icons.css',
                '../css/bootstrap.min.css',
                '../css/tooplate-crispy-kitchen.css',
                './custom.js',
                './jquery.min.js',
                './bootstrap.bundle.min.js',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
