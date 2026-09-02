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
      // ── ANATOMY ───────────────────────────────────────────────────────────────
      {
        slug: 'anatomy',
        title_en: 'Anatomy',
        title_ru: 'Анатомия',
        topics: [

          // ── Topic: Anatomy of the Oesophagus ──────────────────────────────────
          {
            slug: 'anatomy-oesophagus',
            title_en: 'Anatomy of the Oesophagus',
            title_ru: 'Анатомия пищевода',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The oesophagus is a muscular tube approximately 25 cm in length connecting the pharynx to the stomach. It begins at the level of C6 (cricopharyngeus / upper oesophageal sphincter) and ends at the oesophago-gastric junction (OGJ) at T10–T11 where it passes through the oesophageal hiatus of the diaphragm. It has three anatomical segments — cervical, thoracic, and abdominal — and is the narrowest part of the GI tract at the three natural constrictions.',
                    type: 'text'
                  },
                  {
                    title: 'Anatomical Course & Segments',
                    body: [
                      'Cervical segment (C6–T1, ~5 cm): begins at cricopharyngeus (C6); lies posterior to trachea; right and left recurrent laryngeal nerves run in tracheo-oesophageal grooves',
                      'Thoracic segment (T1–T10, ~16 cm): passes through superior and posterior mediastinum; deviates left at root of neck, returns to midline at T5, then deviates left again to pass through hiatus',
                      'Abdominal segment (T10–T11, ~2–3 cm): shortest segment; lies between diaphragm and OGJ; surrounded by phrenico-oesophageal ligament (Laimer\'s membrane)',
                      'Three natural constrictions (surgical importance — sites of foreign body impaction and stricture): cricopharyngeus (C6), aortic arch / left main bronchus (T4–T5), diaphragmatic hiatus (T10)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Important Relations',
                    body: [
                      'Anterior: trachea (cervical), left main bronchus (T4), pericardium and left atrium (lower thoracic) — left atrial enlargement can cause dysphagia',
                      'Posterior: prevertebral fascia, thoracic duct (right side below T4, crosses to left above T4–T5), descending aorta',
                      'Right side: azygos vein (arches over right lung root at T4), right pleura',
                      'Left side: thoracic duct (upper thorax), aortic arch, left subclavian artery, left pleura',
                      'Killian\'s triangle (Killian\'s dehiscence): anatomical weak point between thyropharyngeus and cricopharyngeus — site of Zenker\'s (pharyngeal) diverticulum formation'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Blood Supply',
                    body: [
                      'Cervical: inferior thyroid artery (from thyrocervical trunk of subclavian)',
                      'Thoracic: oesophageal branches directly from descending thoracic aorta (4–6 vessels); bronchial arteries contribute to upper thoracic',
                      'Abdominal: left gastric artery (from coeliac axis) — most important; left inferior phrenic artery',
                      'Segmental supply with watershed zones — reason for anastomotic leak risk in oesophagectomy'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Venous Drainage & Portosystemic Anastomosis',
                    body: [
                      'Upper two-thirds: drain into azygos and hemiazygos veins → superior vena cava (SVC) (systemic circulation)',
                      'Lower third: drain into left gastric (coronary) vein → portal vein (portal circulation)',
                      'Portosystemic anastomosis: lower oesophageal submucosal veins communicate between portal and systemic systems — clinically important in portal hypertension → oesophageal varices',
                      'Other portosystemic sites: umbilical veins (caput medusae), rectal veins (haemorrhoids), retroperitoneal veins (veins of Retzius)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Lymphatic Drainage',
                    body: [
                      'Upper third (cervical): deep cervical and paratracheal lymph nodes',
                      'Middle third (thoracic): mediastinal, tracheobronchial, and paratracheal nodes',
                      'Lower third (abdominal): coeliac and left gastric nodes',
                      'Skip metastases common — oesophageal lymphatics run longitudinally in submucosa before penetrating muscularis; spread may bypass local nodes; explains poor prognosis of oesophageal cancer'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Nerve Supply',
                    body: [
                      'Parasympathetic: vagus nerve (CN X); right vagus → posterior vagal trunk at OGJ; left vagus → anterior vagal trunk at OGJ',
                      'Sympathetic: from T5–T12 via greater and lesser splanchnic nerves and oesophageal plexus',
                      'Enteric nervous system: Auerbach\'s (myenteric) plexus — between inner circular and outer longitudinal muscle layers — controls motility; Meissner\'s (submucosal) plexus — in submucosa — controls secretion and mucosal function',
                      'Upper oesophageal sphincter (UOS): cricopharyngeus muscle — striated, under voluntary control; resting pressure ~60 mmHg; relaxes during swallowing',
                      'Lower oesophageal sphincter (LOS): physiological sphincter only — no discrete anatomical structure; high pressure zone 3–4 cm long; resting pressure 15–25 mmHg; maintained by intrinsic smooth muscle tone, extrinsic diaphragm compression, acute angle of His'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Histology',
                    body: [
                      'Mucosa: non-keratinised stratified squamous epithelium throughout; no goblet cells (unlike stomach)',
                      'Z-line (squamo-columnar junction / SCJ): visible endoscopically as irregular line where squamous oesophageal epithelium meets columnar gastric epithelium; normally at OGJ (38–40 cm from incisors)',
                      'Barrett\'s oesophagus: proximal displacement of Z-line with intestinal metaplasia (specialised columnar epithelium with goblet cells) — confirmed on biopsy; pre-malignant',
                      'Muscularis propria: upper third — striated; middle third — mixed; lower third — smooth muscle; explains why achalasia (smooth muscle dysmotility) affects the lower oesophagus',
                      'No serosa: adventitia only — contributes to rapid local spread of oesophageal cancer and higher anastomotic leak rates'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Пищевод — мышечная трубка длиной около 25 см, соединяющая глотку с желудком. Он начинается на уровне C6 (перстнеглоточная мышца / верхний пищеводный сфинктер — ВПС) и заканчивается на уровне пищеводно-желудочного перехода (ПЖП) на уровне T10–T11, где проходит через пищеводное отверстие диафрагмы. Пищевод имеет три анатомических отдела — шейный, грудной и брюшной — и является наиболее узким отделом желудочно-кишечного тракта (ЖКТ) в области трёх естественных сужений.',
                    type: 'text'
                  },
                  {
                    title: 'Анатомический ход и отделы',
                    body: [
                      'Шейный отдел (C6–T1, ~5 см): начинается у перстнеглоточной мышцы (C6); располагается позади трахеи; возвратные гортанные нервы проходят в трахеопищеводных бороздах',
                      'Грудной отдел (T1–T10, ~16 см): проходит через верхнее и заднее средостение; отклоняется влево у корня шеи, возвращается к средней линии на уровне T5, затем снова отклоняется влево, проходя через пищеводное отверстие',
                      'Брюшной отдел (T10–T11, ~2–3 см): наиболее короткий; расположен между диафрагмой и пищеводно-желудочным переходом (ПЖП); окружён диафрагмально-пищеводной связкой (мембраной Лаймера)',
                      'Три естественных сужения (хирургическое значение — места застревания инородных тел и стриктур): перстнеглоточная мышца (C6), дуга аорты / левый главный бронх (T4–T5), пищеводное отверстие диафрагмы (T10)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Важные топографические отношения',
                    body: [
                      'Спереди: трахея (шейный отдел), левый главный бронх (T4), перикард и левое предсердие (нижний грудной отдел) — увеличение левого предсердия может вызвать дисфагию',
                      'Сзади: предпозвоночная фасция, грудной лимфатический проток (справа ниже T4, пересекает на левую сторону выше T4–T5), нисходящая аорта',
                      'Справа: непарная вена (огибает корень правого лёгкого на уровне T4), правая плевра',
                      'Слева: грудной лимфатический проток (верхний грудной отдел), дуга аорты, левая подключичная артерия, левая плевра',
                      'Треугольник Киллиана (щель Киллиана): анатомически слабое место между щитоглоточной и перстнеглоточной мышцами — место формирования ценкеровского (глоточного) дивертикула'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Кровоснабжение',
                    body: [
                      'Шейный отдел: нижняя щитовидная артерия (от щито-шейного ствола подключичной артерии)',
                      'Грудной отдел: пищеводные ветви непосредственно от нисходящей грудной аорты (4–6 сосудов); бронхиальные артерии кровоснабжают верхний грудной отдел',
                      'Брюшной отдел: левая желудочная артерия (от чревного ствола) — наиболее важная; левая нижняя диафрагмальная артерия',
                      'Сегментарное кровоснабжение с зонами водораздела — причина риска несостоятельности анастомоза при эзофагэктомии'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Венозный отток и портосистемный анастомоз',
                    body: [
                      'Верхние две трети: отток в непарную и полунепарную вены → верхняя полая вена (ВПВ) (системное кровообращение)',
                      'Нижняя треть: отток в левую желудочную (венечную) вену → воротная вена (портальное кровообращение)',
                      'Портосистемный анастомоз: подслизистые вены нижнего отдела пищевода соединяют портальную и системную системы — клинически важно при портальной гипертензии → варикозное расширение вен пищевода',
                      'Другие портосистемные анастомозы: пупочные вены (голова медузы), прямокишечные вены (геморроидальные узлы), забрюшинные вены (вены Ретциуса)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Лимфатический отток',
                    body: [
                      'Верхняя треть (шейный отдел): глубокие шейные и паратрахеальные лимфатические узлы',
                      'Средняя треть (грудной отдел): медиастинальные, трахеобронхиальные и паратрахеальные узлы',
                      'Нижняя треть (брюшной отдел): чревные и узлы левой желудочной артерии',
                      'Характерны прыжковые метастазы — лимфатические сосуды пищевода идут продольно в подслизистом слое перед проникновением в мышечную оболочку; метастазирование может миновать регионарные узлы; объясняет плохой прогноз рака пищевода'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Иннервация',
                    body: [
                      'Парасимпатическая: блуждающий нерв (черепной нерв X — ЧН X); правый блуждающий нерв → задний вагусный ствол на уровне пищеводно-желудочного перехода (ПЖП); левый блуждающий нерв → передний вагусный ствол на уровне ПЖП',
                      'Симпатическая: от T5–T12 через большой и малый чревные нервы и пищеводное сплетение',
                      'Энтеральная нервная система (ЭНС): сплетение Ауэрбаха (межмышечное) — между внутренним циркулярным и наружным продольным мышечными слоями — управляет моторикой; сплетение Мейсснера (подслизистое) — в подслизистом слое — управляет секрецией и функцией слизистой',
                      'Верхний пищеводный сфинктер (ВПС): перстнеглоточная мышца — поперечнополосатая, под произвольным контролем; давление в покое ~60 мм рт. ст.; расслабляется при глотании',
                      'Нижний пищеводный сфинктер (НПС): только физиологический сфинктер — нет дискретной анатомической структуры; зона высокого давления длиной 3–4 см; давление в покое 15–25 мм рт. ст.; поддерживается тонусом гладкой мускулатуры, компрессией диафрагмой и острым углом Гиса'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Гистология',
                    body: [
                      'Слизистая оболочка: неороговевающий многослойный плоский эпителий на всём протяжении; бокаловидных клеток нет (в отличие от желудка)',
                      'Z-линия (плоскоклеточно-цилиндрический переход — ПЦП): видна при эндоскопии как неровная линия, где плоский эпителий пищевода переходит в цилиндрический эпителий желудка; в норме на уровне пищеводно-желудочного перехода (ПЖП) (38–40 см от резцов)',
                      'Пищевод Барретта: проксимальное смещение Z-линии с кишечной метаплазией (специализированный цилиндрический эпителий с бокаловидными клетками) — подтверждается биопсией; предраковое состояние',
                      'Мышечная оболочка: верхняя треть — поперечнополосатые мышцы; средняя треть — смешанные; нижняя треть — гладкие мышцы; объясняет, почему ахалазия (нарушение моторики гладких мышц) поражает нижний отдел пищевода',
                      'Нет серозной оболочки: только адвентиция — обусловливает быстрое местное распространение рака пищевода и более высокую частоту несостоятельности анастомоза'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'anatomy-oesophagus-001',
                question_en: 'Oesophagus length?',
                question_ru: 'Длина пищевода?',
                answer_en: '~25 cm',
                answer_ru: '~25 см'
              },
              {
                id: 'anatomy-oesophagus-002',
                question_en: 'Level of upper oesophageal sphincter (UOS)?',
                question_ru: 'Уровень верхнего пищеводного сфинктера (ВПС)?',
                answer_en: 'C6',
                answer_ru: 'C6'
              },
              {
                id: 'anatomy-oesophagus-003',
                question_en: 'Level of oesophago-gastric junction (OGJ)?',
                question_ru: 'Уровень пищеводно-желудочного перехода (ПЖП)?',
                answer_en: 'T10–T11',
                answer_ru: 'T10–T11'
              },
              {
                id: 'anatomy-oesophagus-004',
                question_en: 'Three oesophageal constrictions (top to bottom)?',
                question_ru: 'Три сужения пищевода (сверху вниз)?',
                answer_en: 'Cricopharyngeus, aortic arch, hiatus',
                answer_ru: 'Перстнеглоточная, дуга аорты, пищеводное отверстие'
              },
              {
                id: 'anatomy-oesophagus-005',
                question_en: 'UOS muscle type?',
                question_ru: 'Тип мышцы верхнего пищеводного сфинктера (ВПС)?',
                answer_en: 'Striated (voluntary)',
                answer_ru: 'Поперечнополосатая (произвольная)'
              },
              {
                id: 'anatomy-oesophagus-006',
                question_en: 'LOS resting pressure?',
                question_ru: 'Давление нижнего пищеводного сфинктера (НПС) в покое?',
                answer_en: '15–25 mmHg',
                answer_ru: '15–25 мм рт. ст.'
              },
              {
                id: 'anatomy-oesophagus-007',
                question_en: 'LOS: is there a discrete anatomical sphincter?',
                question_ru: 'Нижний пищеводный сфинктер (НПС): есть ли дискретная анатомическая структура?',
                answer_en: 'No — physiological only',
                answer_ru: 'Нет — только физиологический'
              },
              {
                id: 'anatomy-oesophagus-008',
                question_en: 'Thoracic oesophagus arterial supply?',
                question_ru: 'Кровоснабжение грудного отдела пищевода?',
                answer_en: 'Aortic oesophageal branches',
                answer_ru: 'Пищеводные ветви аорты'
              },
              {
                id: 'anatomy-oesophagus-009',
                question_en: 'Abdominal oesophagus main artery?',
                question_ru: 'Основная артерия брюшного отдела пищевода?',
                answer_en: 'Left gastric artery',
                answer_ru: 'Левая желудочная артерия'
              },
              {
                id: 'anatomy-oesophagus-010',
                question_en: 'Lower oesophagus venous drainage: portal vessel?',
                question_ru: 'Венозный отток нижнего отдела пищевода: портальный сосуд?',
                answer_en: 'Left gastric (coronary) vein',
                answer_ru: 'Левая желудочная (венечная) вена'
              },
              {
                id: 'anatomy-oesophagus-011',
                question_en: 'Site of portosystemic anastomosis in oesophagus?',
                question_ru: 'Место портосистемного анастомоза в пищеводе?',
                answer_en: 'Lower oesophageal submucosa',
                answer_ru: 'Подслизистый слой нижнего отдела пищевода'
              },
              {
                id: 'anatomy-oesophagus-012',
                question_en: 'Lymphatic drainage: lower third oesophagus?',
                question_ru: 'Лимфатический отток нижней трети пищевода?',
                answer_en: 'Coeliac nodes',
                answer_ru: 'Чревные лимфоузлы'
              },
              {
                id: 'anatomy-oesophagus-013',
                question_en: 'Left vagus nerve position at OGJ?',
                question_ru: 'Положение левого блуждающего нерва на уровне пищеводно-желудочного перехода (ПЖП)?',
                answer_en: 'Anterior vagal trunk',
                answer_ru: 'Передний вагусный ствол'
              },
              {
                id: 'anatomy-oesophagus-014',
                question_en: 'Auerbach\'s plexus location?',
                question_ru: 'Расположение сплетения Ауэрбаха?',
                answer_en: 'Between muscle layers',
                answer_ru: 'Между мышечными слоями'
              },
              {
                id: 'anatomy-oesophagus-015',
                question_en: 'Oesophageal mucosal epithelium type?',
                question_ru: 'Тип эпителия слизистой оболочки пищевода?',
                answer_en: 'Stratified squamous',
                answer_ru: 'Многослойный плоский'
              },
              {
                id: 'anatomy-oesophagus-016',
                question_en: 'Z-line: what does it mark?',
                question_ru: 'Z-линия: что она обозначает?',
                answer_en: 'Squamo-columnar junction',
                answer_ru: 'Плоскоклеточно-цилиндрический переход'
              },
              {
                id: 'anatomy-oesophagus-017',
                question_en: 'Z-line normal distance from incisors?',
                question_ru: 'Нормальное расстояние Z-линии от резцов?',
                answer_en: '38–40 cm',
                answer_ru: '38–40 см'
              },
              {
                id: 'anatomy-oesophagus-018',
                question_en: 'Killian\'s triangle: clinical significance?',
                question_ru: 'Треугольник Киллиана: клиническое значение?',
                answer_en: 'Zenker\'s diverticulum site',
                answer_ru: 'Место ценкеровского дивертикула'
              },
              {
                id: 'anatomy-oesophagus-019',
                question_en: 'Oesophagus: why no serosa?',
                question_ru: 'Пищевод: почему нет серозной оболочки?',
                answer_en: 'Adventitia only',
                answer_ru: 'Только адвентиция'
              },
              {
                id: 'anatomy-oesophagus-020',
                question_en: 'Lower third muscularis propria type?',
                question_ru: 'Тип мышечной оболочки нижней трети пищевода?',
                answer_en: 'Smooth muscle',
                answer_ru: 'Гладкая мускулатура'
              }
            ]
          }

        ]
      },

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
