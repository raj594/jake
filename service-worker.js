"use strict";var precacheConfig=[["/jake/index.html","123ae29c82f4443256ed13646b0ed386"],["/jake/static/css/main.bdb00f08.css","993f2ee22fd16510bbc7ec5e1af1c864"],["/jake/static/js/main.accafcb9.js","7fdaeac307219358b2e613a3aa0e6d2b"],["/jake/static/media/Vampyro_0_TOC.2e10a1d7.jpg","2e10a1d76ec89bd5661d5d4d4be50c7a"],["/jake/static/media/Vampyro_spread_1.caa396de.jpg","caa396dea92a2a27eb571c155bb615da"],["/jake/static/media/Vampyro_spread_2.d047c629.jpg","d047c6295e4ececf3b4b07580a56cd91"],["/jake/static/media/a_sublev_0_T_O_C.8b16f5c9.jpg","8b16f5c9f13d7d49333cad6f86e54946"],["/jake/static/media/a_sublev_1.9b5eb613.jpg","9b5eb6134d5cc69e85060415d5b52740"],["/jake/static/media/a_sublev_2.60d72c0f.jpg","60d72c0fd38607deb15ed57fda578f83"],["/jake/static/media/a_sublev_3.39049284.jpg","39049284cfbbdf393490248a25080d6c"],["/jake/static/media/ej_final_1.7bc07bd2.jpg","7bc07bd24e1654fbc2d5a63b30b56e83"],["/jake/static/media/electra_spread_1.2eacbf60.jpg","2eacbf600203f25446155fe8f9023508"],["/jake/static/media/electra_spread_2.0fcc0efb.jpg","0fcc0efb35de49db8cac95dacae77bf9"],["/jake/static/media/electra_spread_3.6fb14ca1.jpg","6fb14ca14d85db88b3d0f05adf6f3a46"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/jake/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});