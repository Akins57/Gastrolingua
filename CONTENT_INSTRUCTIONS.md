# GastroLingua — Content Writing Instructions

These rules apply every time a new topic is added to `js/data.js`.

---

## Summary Notes

- **Length**: Detailed clinical-level summary. Maximum 1,200 words. Written for a gastroenterology trainee (ST3–ST6 equivalent) — include named investigations, specific thresholds, classification systems, endoscopic findings, histological criteria, and management algorithms where relevant.
- **Currency**: Content must reflect current medical guidelines (BSG, ESGE, EASL, ACG, ECCO, NICE, etc.). State the guideline source inline when citing a threshold or recommendation.
- **Medications**: If any drug is mentioned, its dose and regimen must also be stated (e.g., "mesalazine 2.4 g daily").
- **Structure**: Use sections appropriate to the topic. Common sections include: Overview, Pathophysiology, Clinical Features, Investigation, Classification / Scoring, Management, Complications, Key Points.
- **Style**: Concise, clinical, point-form where appropriate. No introductory filler. For endoscopy topics, include technique, grading systems, landmarks, and procedural detail.

---

## Flashcards

- **Source**: Generated directly from the note — every clinically significant fact in the note must have a corresponding card.
- **Limit**: Maximum **20 cards per topic**. This produces 40 virtual cards per topic (20 EN + 20 RU). Prioritise the highest-yield clinical facts if the note exceeds 20 card-worthy items.
- **Answer length**: ≤ 3 words per answer. Frame questions so that a precise, short answer is possible.
- **Coverage**: Comprehensive within the 20-card limit. If a fact appears in the note, there should be a card for it — trim only the lowest-yield items to stay at or under 20.
- **Format per card**:
  ```
  question_en: "Clinical question in English?"
  answer_en:   "Short answer"          ← max 3 words

  question_ru: "Direct Russian translation of the question?"
  answer_ru:   "Прямой перевод ответа" ← max 3 words
  ```

---

## Bilingual Format

- **Russian = direct translation** of the English version. No paraphrasing, no additions.
- Use correct Russian medical terminology throughout (not lay terms).
- Abbreviations: introduce both the English abbreviation and its Russian equivalent where relevant (e.g., "ВЗК / IBD", "ЭГДС / OGD").
- **Russian abbreviations — spell out first**: Every Russian medical term must be written in full before its abbreviation in brackets on first use — e.g., "воспалительные заболевания кишечника (ВЗК)", never just "ВЗК" on its own. Subsequent uses within the same section may use the abbreviation alone.
- **Russian flashcard abbreviations — always full form**: In Russian flashcard questions and answers (`question_ru`, `answer_ru`), abbreviations must **always** include the full form, every time, without exception — e.g., "воспалительные заболевания кишечника (ВЗК)", never just "ВЗК". Each card stands alone and has no prior context, so the full term must always be present.

---

## Card ID Convention

Card IDs are permanent — they key SRS state in IndexedDB and must **never change** after first use.

Format: `[topic-slug]-[zero-padded number]`
Example: `peptic-ulcer-disease-001`, `peptic-ulcer-disease-002`, …

---

## Example Card Pair

```js
{
  id: 'peptic-ulcer-disease-001',
  question_en: 'Most common cause of duodenal ulcer?',
  question_ru: 'Наиболее частая причина язвы двенадцатиперстной кишки?',
  answer_en:   'H. pylori',
  answer_ru:   'H. pylori'
}
```

---

## Note Section Types

```js
// Prose paragraph(s) — separate paragraphs with \n\n
{ title: 'Overview', body: 'First paragraph.\n\nSecond paragraph.', type: 'text' }

// Bullet list
{ title: 'Key Points', body: ['Point one', 'Point two'], type: 'list' }
```
