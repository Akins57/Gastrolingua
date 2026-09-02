// sw.js — Service Worker
// Caches the app shell for offline use.
// data.js is intentionally NOT cached so new topics load immediately.

const CACHE = 'gastrolingua-v1'

const APP_SHELL = [
  './index.html',
  './notes.html',
  './note.html',
  './review.html',
  './cards.html',
  './manifest.json',
  './css/app.css',
  './js/app.js',
  './js/db.js',
  './js/sm2.js',
  './js/index-page.js',
  './js/notes-page.js',
  './js/note-page.js',
  './js/review-page.js',
  './js/cards-page.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
]

// Install: cache app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))
  )
  self.skipWaiting()
})

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch: network-first for JS files, cache-first for static assets
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)

  // Always fetch JS fresh — code changes frequently and stale cache
  // causes old behaviour to persist after updates.
  // Falls back to cache when offline.
  if (url.pathname.endsWith('.js')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    )
    return
  }

  // Cache-first for HTML, CSS, icons, manifest
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  )
})
