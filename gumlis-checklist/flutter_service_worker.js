'use strict';

// Persistent Service Worker for Gumlis Checklist
// Satisfies PWA criteria to allow installing as a standalone app with a home screen icon.

const CACHE_NAME = 'gumlis-checklist-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through fetch handler to ensure installability while keeping resources strictly fresh from network
  event.respondWith(fetch(event.request));
});
