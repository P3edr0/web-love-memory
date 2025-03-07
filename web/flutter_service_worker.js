'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f4d9c62c7a0a7d2fbf8abf38106d172b",
"assets/AssetManifest.bin.json": "fdab8a9338e858f61cd4067857d7d843",
"assets/AssetManifest.json": "d118b3c9188a49d060b494cfdd64d698",
"assets/assets/audio/flip.mp3": "158b391a0a704c7788a577bc8d5d0e06",
"assets/assets/audio/match.mp3": "efbead1ac02ec2af04e9bf109b090229",
"assets/assets/images/1.png": "73d0cf15f997466029d06a6a2fe84ef9",
"assets/assets/images/10.png": "3771402afe37b8cbe295645b45a21312",
"assets/assets/images/11.png": "719fe46a3416434ab3e0a42187a62274",
"assets/assets/images/12.png": "898d7c052b4b8a96582037fc0477e1ae",
"assets/assets/images/13.png": "c3107714ad5bc149a3254dbe0833d8ed",
"assets/assets/images/14.png": "2236c142190090f40748b3299bd49709",
"assets/assets/images/2.png": "c0ff7fe1dd2655e5f9422bff2b6238ec",
"assets/assets/images/2coracoes.png": "d02671426e076bf42ba23d9c05bdd8dd",
"assets/assets/images/3.png": "ec4f07590febaa816adc73df2d9614b1",
"assets/assets/images/4.png": "4f6a7f3701ae0d112830149d18a5ece4",
"assets/assets/images/5.png": "0936b8945488bce0780948640e6e06d9",
"assets/assets/images/6.png": "fd3ab8ddc2aeab6ffde4604b515063b7",
"assets/assets/images/7.png": "01c75243b3fb2bda117f07c564e988a5",
"assets/assets/images/8.png": "6ae27c8f52301441e27477b33b8bcc8c",
"assets/assets/images/9.png": "7c03911658a1f2c5168adb0a7ab9cfa3",
"assets/assets/images/aprovado.png": "a1bd8f6a3483c84453f887ddce8728c4",
"assets/assets/images/card_normal.png": "9c588ffd4f6a13dbb4925cc256a516c9",
"assets/assets/images/card_round.png": "2a14e1e1d91d5989b1fb80dab453eca0",
"assets/assets/images/coracao.png": "82a10b766d3d3c1f3f6a27708c87f8b3",
"assets/assets/images/coracao2.png": "1d8f06a16d5c328bf86ab4565de9db69",
"assets/assets/images/cupido.png": "04fe98dab0e7f5d00cb87a560cc1d62a",
"assets/assets/images/eliminado.png": "cf75dface593ee79ba453df14653b793",
"assets/assets/images/host.png": "61bd254acbfc7e3ed9e495ec83b28b20",
"assets/assets/images/love_animation.json": "3737827e542e466780932559996ca265",
"assets/assets/images/maratona_levels.json": "3cf6c4ec08efe7b5d83c340e7938b6a2",
"assets/assets/images/maratona_love_levels.json": "75cda175056a77143e5ccefff2690d5e",
"assets/assets/images/model.png": "72f52b5075d93e9c0415e4ed7c330462",
"assets/assets/images/splash_animation.json": "d7504a717e5b0aa9129fbc4fb36eb7cd",
"assets/assets/images/winner.json": "a08876c3ebdf06d2c7877487917c65b1",
"assets/assets/images/winner_love.json": "c437a742efe78b5143d5437f35761f3e",
"assets/assets/images/winner_love_two.json": "3d742e4771dc2cd85af2068486bd50a3",
"assets/assets/images/win_animation.json": "68801ecf6bcf9db9a61a66d5629b2276",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "aa0a383256f9b719cd8134922c0686a4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1415d92276c3ae05f251448f1f45dd4f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1117386e46ef1a4f3b53dec06ab0911e",
"/": "1117386e46ef1a4f3b53dec06ab0911e",
"main.dart.js": "492f2e105ea095c60c5ad7143b5223eb",
"manifest.json": "a96682b9c51da002650225c1cb904784",
"version.json": "d41597d5fd799015f2809121cdc6e40d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
