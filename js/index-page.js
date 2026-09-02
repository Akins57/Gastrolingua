// js/index-page.js  — index.html (Dashboard)

import { DATA } from './data.js'
import { bootstrap, getLang, getDueCards } from './app.js'
import { getAllSRS, getTodayReviewCount } from './db.js'

async function init() {
  await bootstrap()

  const lang = getLang()

  // getDueCards() returns ONLY previously-reviewed cards that are now due.
  // New cards live inside their topics — never shown in the global queue.
  const reviewCards = await getDueCards()
  const todayCount  = await getTodayReviewCount()
  const allSRS      = await getAllSRS()

  // "Learned" = virtual cards the user has reviewed at least once (EN + RU separately)
  const learnedCount = allSRS.filter(s => s.lastReview !== null).length

  // Build a quick lookup: srsId → state (for per-discipline new-card counts)
  const srsMap = new Map(allSRS.map(s => [s.id, s]))

  // Total unique cards in data (each data card = 1 here, even though 2 virtual cards exist)
  let totalCards = 0
  for (const d of DATA) for (const s of d.subdisciplines) for (const t of s.topics)
    totalCards += t.cards.length

  const main = document.getElementById('main')
  main.innerHTML = `
    <div class="page-header" style="margin-bottom:20px">
      <h1 class="page-title">Dashboard</h1>
    </div>

    <!-- Stats row -->
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-value" style="color:var(--accent)">${learnedCount}</div>
        <div class="stat-label">Learned</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--amber)">${reviewCards.length}</div>
        <div class="stat-label">Due for review</div>
      </div>
      <div class="stat-card">
        <div class="stat-value green">${todayCount}</div>
        <div class="stat-label">Done today</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalCards}</div>
        <div class="stat-label">Total cards</div>
      </div>
    </div>

    <!-- Review CTA -->
    ${buildCTA(reviewCards.length)}

    <!-- Disciplines list -->
    <div class="section-heading">Disciplines</div>
    <div class="grid" id="disciplinesGrid"></div>
  `

  const grid = document.getElementById('disciplinesGrid')

  if (DATA.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">📚</div>
        <h3>No content yet</h3>
        <p>Ask Claude Code to add disciplines and topics to data.js</p>
      </div>`
    return
  }

  for (const discipline of DATA) {
    const topicCount = discipline.subdisciplines.reduce(
      (n, s) => n + s.topics.length, 0
    )
    const cardCount = discipline.subdisciplines.reduce(
      (n, s) => n + s.topics.reduce((m, t) => m + t.cards.length, 0), 0
    )

    // Count virtual card IDs for this discipline
    const virtualIds = discipline.subdisciplines.flatMap(s =>
      s.topics.flatMap(t => t.cards.flatMap(c => [c.id + '_en', c.id + '_ru']))
    )

    // Due for review (previously seen + past scheduled date)
    const baseIds = new Set(discipline.subdisciplines.flatMap(s =>
      s.topics.flatMap(t => t.cards.map(c => c.id))
    ))
    const disciplineDue = reviewCards.filter(c => {
      const baseId = c.id.replace(/_(?:en|ru)$/, '')
      return baseIds.has(baseId)
    }).length

    // New (unstarted) cards in this discipline
    const disciplineNew = virtualIds.filter(id => {
      const s = srsMap.get(id)
      return s && s.lastReview === null
    }).length / 2   // /2: each real card has EN + RU virtual cards

    const title = lang === 'en' ? discipline.title_en : discipline.title_ru

    const a = document.createElement('a')
    a.className = 'card'
    a.href = `notes.html?d=${discipline.slug}`
    a.innerHTML = `
      <div class="card-icon">🫁</div>
      <div class="card-title">${title}</div>
      <div class="card-meta">
        <span>${topicCount} topic${topicCount !== 1 ? 's' : ''}</span>
        <span>·</span>
        <span>${cardCount} cards</span>
        ${disciplineDue > 0
          ? `<span class="badge badge-due" style="margin-left:2px">${disciplineDue} due</span>`
          : ''
        }
        ${disciplineNew > 0
          ? `<span class="badge" style="margin-left:2px;background:rgba(59,130,246,0.15);
               color:var(--blue);border:1px solid rgba(59,130,246,0.3)">${disciplineNew} new</span>`
          : ''
        }
      </div>
    `
    grid.appendChild(a)
  }
}

// ── CTA builder ────────────────────────────────────────────────────────────────

function buildCTA(reviewCount) {
  if (reviewCount === 0) {
    return `
      <div style="margin-bottom:32px;padding:20px;background:var(--surface);
                  border:1px solid var(--border);border-radius:var(--radius);
                  text-align:center;color:var(--text-muted)">
        🎉 All caught up on reviews!
        <span style="display:block;margin-top:6px;font-size:0.85rem">
          Go to <a href="notes.html" style="color:var(--accent)">Notes</a>
          to start studying new topics.
        </span>
      </div>
    `
  }

  return `
    <div style="margin-bottom:32px">
      <a href="review.html?mode=review"
         style="display:flex;flex-direction:column;align-items:center;gap:6px;
                padding:20px 12px;background:var(--surface);
                border:1px solid rgba(245,158,11,0.35);border-radius:var(--radius);
                text-decoration:none;transition:border-color .15s,background .15s"
         onmouseenter="this.style.background='var(--surface-2)'"
         onmouseleave="this.style.background='var(--surface)'">
        <div style="font-size:1.8rem">🔄</div>
        <div style="font-size:1.9rem;font-weight:700;color:var(--amber);line-height:1">${reviewCount}</div>
        <div style="font-size:0.78rem;font-weight:600;color:var(--text-muted);
                    letter-spacing:0.06em;text-transform:uppercase">Cards Due for Review</div>
        <div style="margin-top:8px;padding:7px 18px;background:var(--amber);
                    color:#000;border-radius:var(--radius-sm);
                    font-size:0.82rem;font-weight:600">Start Review</div>
      </a>
    </div>
  `
}

init()
