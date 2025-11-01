// service-worker.js
const CACHE_NAME = 'forca-pwa-cache-v3'; // Alterado para v3 para forçar a atualização do cache
const urlsToCache = [
  '/JogodaForca/', 
  '/JogodaForca/index.html',
  '/JogodaForca/style.css',
  '/JogodaForca/app.js',
  '/JogodaForca/placeholder.png', 
  '/JogodaForca/icons/icon-192x192.png',
  '/JogodaForca/icons/icon-512x512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache aberto e adicionando URLs');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Service Worker: Falha ao adicionar URLs ao cache', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Retorna o recurso do cache se encontrado
        }
        // Se não estiver no cache, tenta buscar na rede
        return fetch(event.request).catch(() => {
            // Este catch é importante para lidar com o offline se o recurso não estiver no cache
            // Aqui você pode retornar uma página offline personalizada, se tiver uma
            // Ex: return caches.match('/JogodaForca/offline.html');
            console.log('Service Worker: Falha ao buscar recurso na rede e não encontrado no cache.', event.request.url);
            // Em caso de falha total, para evitar um erro no navegador, você pode retornar uma resposta vazia ou um erro
            return new Response(null, { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deletando cache antigo', cacheName);
            return caches.delete(cacheName); // Deleta caches antigos
          }
        })
      );
    })
  );
});
