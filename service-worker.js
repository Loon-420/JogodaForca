const CACHE_NAME = 'forca-pwa-cache-v2'; // Alterado para v2 para forçar a atualização
const urlsToCache = [
  '/JogodaForca/', 
  '/JogodaForca/index.html',
  '/JogodaForca/style.css',
  '/JogodaForca/app.js',
  '/JogodaForca/placeholder.png', // Certifique-se que esta imagem existe na raiz
  '/JogodaForca/icons/icon-192x192.png', // Certifique-se que estas imagens existam na pasta icons
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
            // Caso a rede também falhe (offline), você pode retornar uma página offline aqui
            // Ex: return caches.match('/JogodaForca/offline.html');
            console.log('Service Worker: Falha ao buscar recurso na rede e não encontrado no cache.', event.request.url);
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
