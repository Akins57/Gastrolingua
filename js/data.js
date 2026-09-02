// js/data.js
// ─────────────────────────────────────────────────────────────────────────────
// ALL study content lives here.
// Structure: Discipline → Subdiscipline → Topic → { note, cards }
//
// Claude Code adds new topics to this file when the user requests them.
// The app auto-discovers new cards on refresh and initialises their SRS state.
//
// NOTE SECTIONS: each section has { title, body, type }
//   type: 'text'  → body is a string (paragraphs separated by \n\n)
//   type: 'list'  → body is an array of strings (bullet points)
//
// CARD IDs: must be unique and NEVER changed after first review session.
// ─────────────────────────────────────────────────────────────────────────────

export const DATA = [

  // ── GASTROENTEROLOGY ────────────────────────────────────────────────────────
  {
    slug: 'gastroenterology',
    title_en: 'Gastroenterology',
    title_ru: 'Гастроэнтерология',
    subdisciplines: [
      {
        slug: 'sample-subdiscipline',
        title_en: 'Sample Subdiscipline',
        title_ru: 'Пример подраздела',
        topics: [
          {
            slug: 'sample-topic',
            title_en: 'Sample Topic',
            title_ru: 'Пример темы',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'This is a placeholder topic. Ask Claude Code to add a real topic and it will be written here with full bilingual content.',
                    type: 'text'
                  },
                  {
                    title: 'Key Points',
                    body: [
                      'Topic notes will appear in this section',
                      'Each bullet point is a high-yield fact',
                      'Toggle the tab above to see the Russian version'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Это тема-заполнитель. Попросите Claude Code добавить реальную тему, и она будет написана здесь с полным двуязычным содержанием.',
                    type: 'text'
                  },
                  {
                    title: 'Ключевые пункты',
                    body: [
                      'Заметки по теме появятся в этом разделе',
                      'Каждый пункт — это важный клинический факт',
                      'Переключите вкладку выше, чтобы увидеть английскую версию'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'sample-topic-001',
                question_en: 'This is a sample flashcard. What will real cards look like?',
                question_ru: 'Это пример карточки. Как будут выглядеть настоящие карточки?',
                answer_en: 'Precise clinical questions with short answers in both English and Russian.',
                answer_ru: 'Точные клинические вопросы с краткими ответами на английском и русском языках.'
              }
            ]
          }
        ]
      }
    ]
  }
]
