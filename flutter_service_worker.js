'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9b72b65772c6efba870fd9e3701803b9",
".git/config": "2fa2292ebf3f2ccec2689a91722140e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "790330d139fca24d459451802e6846c6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ca7f36f756fb0ac4ac6222e6e5d8a260",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "699232b01184ddd87a30128fe04029cc",
".git/logs/refs/heads/main": "699232b01184ddd87a30128fe04029cc",
".git/logs/refs/remotes/origin/main": "4208697a352955de5aedf1d5ad36da02",
".git/objects/03/44ce3f8adf316762b462e6c53de344b7874b2a": "72016e8d21dd51a557e00c34e9b132c6",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/04/d423865cc45a9bd446897c7163acabd90556b1": "39502391a150f9f705d5cc67e4565028",
".git/objects/0b/562c0e66bf4b58b2bc1342d36865f53b340d3c": "df53925feafddb2ff31d02adcbf1c603",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/6c9f3a4b60f4d924748dee2f7cf9e198b508c7": "61464dff6a5b347953bf1f44753296b4",
".git/objects/1a/9d1edb9019a8ea7a3a53036f581cbc0ab8f76d": "4fac1936a4f11a8149fe253470117a70",
".git/objects/1b/26fa43280a11e938a1e2e90f677a71e5368907": "6879aefdf025cbf3eb03939541401a06",
".git/objects/23/c9931834f6553369cf17189f0cd1b5518f4882": "6a7a03517ad8f7c9552a231dad9eceb4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/34/1b421208324812693f4595eb6525716df2c234": "0c9551e698d9479aa1551b49843b46f7",
".git/objects/34/a7ebd4feaa100a5ca6e6905d83814513e1e9a9": "5c0ab3a155f08e3fb9ffc67674cb355d",
".git/objects/35/2560ff249a4ae96ccba80dd91ff40f487f4719": "cca745da4492043b5bb5acbd9a964dc2",
".git/objects/35/ad036d229deca055e4166ac5433f443557a9b4": "6401b6d038ff92501d2c92fd421ad84c",
".git/objects/36/53e8d7a9895ca8f06e24333315c4438c010302": "5da926a338333a6cdb7a6d6789a2d499",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/ab3b962fbc2a8459f4a85896bd38d12a70675d": "fa256171804f6150dfa3e0a8ff4a49d1",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/829bdd6c14171319b74915999c798f55c31f93": "a11a60860a4587387829c0b639c2bac6",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/60/f925e26466f1f7749fde6b0fe2fc9a24685808": "31a8a5e594bd443069e69b40771031ac",
".git/objects/61/866a0a734139ece03a73c003375c1cc94cd919": "3a73ee3d46a2d7d83185cdc67ba9749b",
".git/objects/63/daa93a22730060d9ba809a66c8b6a764dee788": "e11201340360d9266c4841fa30c31148",
".git/objects/67/41953767706bead8dd33f34227712df6bc3231": "2b057b6cd5a50dcf4187e2547779824f",
".git/objects/68/5602d5aa4c40300b4b6d9b455a879d47c6b38e": "6a6272e483dcbcbb3fef19a7890fe5ef",
".git/objects/68/637fb1a43f263717e3d7dc61d97e39c0ac14f5": "5a0795de4e8f56d099da6c2c377e6a85",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/69fd0a2f5dcdadef79bc628b76c4f8954cca9d": "db55657dc2976de9d4c8f93d6e7eaa93",
".git/objects/72/1ce1a2368a3e0b0dc036890b026b48adba7417": "5ff916c054475bf0c679826634358662",
".git/objects/73/88784474d0a70975b255678ce0d0eae20e9909": "9dfb5aa98f3e140dc07e8ba49eb9d6f0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/f2e1fbb6bad653a37ed70b147afbc73ce64230": "f59ce45e57c4db75d88f6a8af14abad2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f0639763ecf273f986fdbf554654de8e7f6852": "cc5dd30d80694460938ea1120a10a088",
".git/objects/85/132b06509bcabfaa78b5d312ba58be694087eb": "c5bb0a014ffad101f69e8535e61bc05c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/3f95a550ec99e8e8743c013458800ef7d570b1": "6b4e70c213900e758f56c8716349f5fb",
".git/objects/8e/7ae580f89228bce753b182d7ce8a8083402e13": "8d3e2246638ca4783d1b5714544999e1",
".git/objects/95/9a2828c0b28829cdb04fe4a6c469ebe4b57af2": "6ab92644b328a5495ee4b09278fcc7ce",
".git/objects/98/d387f45b138616ef7d589422b494a32b0fee78": "f9fcd60d74146560a07396c5c1848990",
".git/objects/a0/868420b8cb5b9ba50195bc0e86c5cd22b811dc": "92857d4fa9758b01d6b4ee078b50c92a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/0d519da08aa3e16b3efd08fffbdbd08f1b934e": "66385945afabb0a5f6a3556882d61477",
".git/objects/a9/7421b4943fd622fbf835dff73ce02a3adbdd67": "89042641a7be9769d9d759d16aec183a",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/82a9edae73aa7881881bea58e794949c33fda7": "4d12baaea30a30e25f087018dc23e509",
".git/objects/ad/d883760e56928cb03fa34b96dd0e706a98ed05": "3242869033d41954b5bd24c25adea90f",
".git/objects/af/a2abad56ab823efb0c3000639f324031c207e9": "e6220e85e6c88eec86f42b0427aa379f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d1/0e523830f16c7cd580a9cd1ef8c5bdf8727cb5": "d0d87d92987bfbf11cf721e0995465d4",
".git/objects/d1/cd9c3082e24842a8899aa777ae9b7d52994703": "42a060eb0ccf22a8673f026cb38697ea",
".git/objects/d3/68310714f6230d83b4a039dc91c87ef1209326": "0ee7ab840135a6c0785ae80378645b97",
".git/objects/d4/c0ff553ff6ae07e2c5c535784efa20df3b6f76": "37eea8ff4461a460c772164a4166fc05",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/bb7612c2f8440d0365de1780110076c3cf25d2": "bf4bfad12a5bd9d14742b0fa9f79e5da",
".git/objects/dd/c2a94ce1e42076d478cf02c03f3eda0f8a6a7e": "88f6e83402f0e8cee9555456368020b5",
".git/objects/de/5c15e6755af615c5d2cb64e6ffdcc3c297b41c": "7c834325e19ad5a02f77b20c60139cd5",
".git/objects/df/5ded0d75180fc709f1ae98c441e4a012f4f596": "23d1c04b0de65af2431b221b558ca17a",
".git/objects/e3/6757866a56c226347107b3da0fd46de6d590fe": "5440553f7afadb0e192bc0b159b72c55",
".git/objects/e4/b968d9f15124e19e9929518547d15685916639": "3693eaeff24be18ae316d4f389a5e5b6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/f3/077ff26a9f4414d59beaea42c017419559ce11": "689d35f38e8e7161414f939093b1770a",
".git/objects/f7/81c84f160e563ec45b221c98423d2bf6fdb295": "ca16aff3ba0e8c4a9f4d5025bf5bd3ec",
".git/objects/fb/c4df39309b4dd0836e77ffc70e2efadb104ecd": "3d7eefe9b4b4c749c2f5ef7671fdc9e2",
".git/objects/fe/e1cee0e413d9040e841d6ebc582816d2ad9f5d": "bcf6a89ecb723a99604a300960968a0b",
".git/ORIG_HEAD": "807f0de0f87c334364749ec2bd8617e0",
".git/refs/heads/main": "260deee605617552b10b799cc496de6a",
".git/refs/remotes/origin/main": "260deee605617552b10b799cc496de6a",
"assets/AssetManifest.json": "cd88eff0c3b791db8f136a8d9312728b",
"assets/assets/link.json": "165c9abdee53dbad69c0583981532946",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "145a34e18c67f6612fada843a4ec2dce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c54617d5f229452ccf27e0f62f626f1b",
"/": "c54617d5f229452ccf27e0f62f626f1b",
"LICENSE.md": "e62637ea8a114355b985fd86c9ffbd6e",
"main.dart.js": "e93f89e2e3095af9326538ec04aa1348",
"manifest.json": "7b4a8a98a51d3bb39ba7934317b5526c",
"README.md": "0c37c0401cb0c6a2670da8312b8be2ca",
"version.json": "509b43a4d492b2db57e06ae0dba62c24"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
