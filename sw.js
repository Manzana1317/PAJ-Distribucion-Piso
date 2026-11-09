// PAJ PWA: only static app shell; never cache API responses or staff records.
const CACHE='paj-pwa-shell-pisov3-v1';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/manifest.webmanifest','/icons/icon-192.png','/icons/icon-512.png'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('paj-pwa-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;if(req.mode==='navigate')return; if(!['/manifest.webmanifest','/icons/icon-192.png','/icons/icon-512.png'].includes(url.pathname))return;event.respondWith(caches.match(req).then(hit=>hit||fetch(req)))});
