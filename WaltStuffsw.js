/*newWaltStuffsw.js from Copy of tryThisSw.js Nov16 Walt, This is boilerplate code I found on the internet and there is a request to keep the Apache licence text below:
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to 'precache-v2', etc. when you update any of the local resources, which will
// in turn trigger the install event again.
//Walt note that after you change the precache name each time you want to make and launch  a program edit you won't see the changes on the web until the service worker runs a second time!
const PRECACHE = 'precache-v4';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
 // 'index.html',
  //'./', // Alias for index.html
 // 'styles.css',
 // '../../styles/main.css',
//  'demo.js'
 '/',//https://github.com/username//directory path to project folder
       '/index.html',//directory path to project folder/app name.html file
	   //walt note that github pages requires the main html file to be named index.html
	   
      // '/GSmac/GSmacSPLSH.html',
          '/GSmac/GSmac3x.html',
          '/GSmac/gsCSSmac.css',
          '/GSmac/gsJSmac3x.js',
          '/GSmac/locstorMAC.html',
          '/GSmac/SLIDERpage.html',
          '/GSmac/4a.jpg'
	   
       // '/HighElbowCatch.jpeg',//directory path to project folder/app name.js file
       // '/bjoCchrtH2.png',////directory path to project folder/app name.css file
	   // '/3-HingeDrill2.png',
	   // '/Notes21.xml',
	   // '/WaltStuff.webmanifest',////directory path to project folder/app name.trainmanifest file
	  // '/jquery-3.6.0.min.js',////directory path to project folder/app name.jQuery file
	    // '/eeyore.JPG',//add this file to github repository
		// '/fudd4.jpeg'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});