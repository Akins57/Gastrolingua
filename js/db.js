// js/db.js
// IndexedDB wrapper — stores SRS scheduling state and review history.
// Content (notes + cards) lives in data.js, not here.

const DB_NAME = 'gastro-study'
const DB_VERSION = 2

let _db       = null
let _syncHook = null       // optional Firestore write registered by auth.js
let _topicReadsSyncHook = null

/** Register a function to call after every successful putSRS (for cloud sync). */
export function setSRSSyncHook(fn) { _syncHook = fn }

/** Register a function to call after every successful putTopicRead (for cloud sync). */
export function setTopicReadsSyncHook(fn) { _topicReadsSyncHook = fn }

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)

    req.onerror = () => reject(req.error)
    req.onsuccess = () => resolve(req.result)

    req.onupgradeneeded = (e) => {
      const db = e.target.result

      // SRS state — one record per card id
      if (!db.objectStoreNames.contains('srs')) {
        db.createObjectStore('srs', { keyPath: 'id' })
      }

      // Review history — append-only log
      if (!db.objectStoreNames.contains('reviews')) {
        const store = db.createObjectStore('reviews', {
          keyPath: 'id',
          autoIncrement: true
        })
        store.createIndex('by_card', 'cardId')
        store.createIndex('by_date', 'reviewedAt')
      }

      // Topic read status — one record per topic slug
      if (!db.objectStoreNames.contains('topicReads')) {
        db.createObjectStore('topicReads', { keyPath: 'slug' })
      }
    }
  })
}

async function getDB() {
  if (!_db) _db = await openDB()
  return _db
}

// ── SRS store ────────────────────────────────────────────────────────────────

export async function getSRS(cardId) {
  const db = await getDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction('srs', 'readonly')
      .objectStore('srs')
      .get(cardId)
    req.onsuccess = () => resolve(req.result || null)
    req.onerror = () => reject(req.error)
  })
}

export async function putSRS(state) {
  const db = await getDB()
  await new Promise((resolve, reject) => {
    const req = db.transaction('srs', 'readwrite')
      .objectStore('srs')
      .put(state)
    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
  // Fire-and-forget cloud sync if a hook has been registered by auth.js
  if (_syncHook) _syncHook(state).catch(() => {})
}

export async function getAllSRS() {
  const db = await getDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction('srs', 'readonly')
      .objectStore('srs')
      .getAll()
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

// ── Reviews store ────────────────────────────────────────────────────────────

export async function addReview(cardId, rating, language) {
  const db = await getDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction('reviews', 'readwrite')
      .objectStore('reviews')
      .add({ cardId, rating, language, reviewedAt: new Date().toISOString() })
    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
}

/**
 * Get all reviews within the last N days.
 */
export async function getRecentReviews(days = 7) {
  const db = await getDB()
  const cutoff = new Date(Date.now() - days * 86400000).toISOString()
  return new Promise((resolve, reject) => {
    const idx = db.transaction('reviews', 'readonly')
      .objectStore('reviews')
      .index('by_date')
    const req = idx.getAll(IDBKeyRange.lowerBound(cutoff))
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

/**
 * Count reviews done today.
 */
export async function getTodayReviewCount() {
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)
  const reviews = await getRecentReviews(1)
  return reviews.filter(r => r.reviewedAt >= todayStart.toISOString()).length
}

// ── Topic reads store ─────────────────────────────────────────────────────

export async function getTopicRead(slug) {
  const db = await getDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction('topicReads', 'readonly')
      .objectStore('topicReads')
      .get(slug)
    req.onsuccess = () => resolve(req.result || null)
    req.onerror = () => reject(req.error)
  })
}

export async function putTopicRead(state) {
  const db = await getDB()
  await new Promise((resolve, reject) => {
    const req = db.transaction('topicReads', 'readwrite')
      .objectStore('topicReads')
      .put(state)
    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
  if (_topicReadsSyncHook) _topicReadsSyncHook(state).catch(() => {})
}

export async function removeTopicRead(slug) {
  const db = await getDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction('topicReads', 'readwrite')
      .objectStore('topicReads')
      .delete(slug)
    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
}

export async function getAllTopicReads() {
  const db = await getDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction('topicReads', 'readonly')
      .objectStore('topicReads')
      .getAll()
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}
