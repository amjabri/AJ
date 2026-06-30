# Lab Research Flip Challenge
## تحدي المختبر والبحث العلمي

**Medical Laboratory Department — King Fahd Armed Forces Hospital, Jeddah, Saudi Arabia**

---

## Overview

A bilingual (English / Arabic) interactive flip-card quiz application for the Medical Laboratory Department booth at King Fahd Armed Forces Hospital Research Day. It teaches visitors how the medical laboratory supports clinical research, from specimen collection to scientific evidence.

- React 18 + TypeScript + Tailwind CSS + Vite
- Works entirely in the browser — no login, no server, no external database
- Full RTL support for Arabic
- Kiosk-ready: inactivity reset, touchscreen-optimised, full-screen capable
- Anonymous local-only statistics (localStorage)

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Add the official hospital logo (see Logo section below)
# Place the file at:  public/kfafh-logo.png

# 3. Start the development server
npm run dev

# Open:  http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Output: `dist/` folder — a complete static website.

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The `dist/` folder can be deployed to:

| Platform | Command / Method |
|---|---|
| **Vercel** | `vercel --prod` or connect Git repository |
| **Netlify** | Drag-and-drop `dist/` or connect Git |
| **GitHub Pages** | Push `dist/` to `gh-pages` branch |
| **Hospital server** | Copy `dist/` to any static web server (Apache, Nginx) |

No server-side configuration required. No environment variables needed.

---

## Logo

Replace the official hospital logo before deployment.

1. Obtain the official **King Fahd Armed Forces Hospital** logo file.
2. Save it as:  `public/kfafh-logo.png`
3. Supported formats: PNG (recommended), SVG, JPEG.
4. Do **not** modify the logo colours, crop it, distort it or stretch it.
5. The application automatically shows a placeholder if the file is not found.

The logo path is configured in one place:

```
src/config/appConfig.ts  →  LOGO_PATH
```

---

## Editing Questions

All 30 questions (5 per topic × 6 topics) live in one file:

```
src/data/questions.ts
```

Each question follows this structure:

```typescript
{
  id: 'q1_1',                        // Unique question ID
  topicId: 'topic1',                  // Must match a topic ID in appConfig.ts
  questionEnglish: 'Question text…',
  questionArabic:  'نص السؤال…',
  options: [
    { id: 'q1_1_A', textEnglish: 'Option A…', textArabic: 'الخيار أ…' },
    { id: 'q1_1_B', textEnglish: 'Option B…', textArabic: 'الخيار ب…' },
    { id: 'q1_1_C', textEnglish: 'Option C…', textArabic: 'الخيار ج…' },
  ],
  correctOptionId: 'q1_1_A',          // Must match an option's id
  explanationEnglish: 'Explanation…',
  explanationArabic:  'الشرح…',
}
```

> **Important:** The correct answer is identified by `correctOptionId`, never by
> the position of the option in the array. Options are shuffled at runtime.

---

## Central Configuration

All branding, settings, and contact information are in one file:

```
src/config/appConfig.ts
```

Editable settings include:

| Setting | Description |
|---|---|
| `HOSPITAL_NAME_EN/AR` | Hospital name in both languages |
| `DEPARTMENT_NAME_EN/AR` | Department name |
| `APP_NAME_EN/AR` | Application title |
| `EVENT_THEME_EN/AR` | Event banner text |
| `LOGO_PATH` | Path to the official logo file |
| `QUESTIONS_PER_TOPIC` | Questions shown per topic quiz (default: 5) |
| `FULL_CHALLENGE_QUESTIONS` | Questions in the Full Challenge (default: 10) |
| `INACTIVITY_TIMEOUT_SECONDS` | Seconds before countdown starts (default: 120) |
| `COUNTDOWN_SECONDS` | Length of reset countdown (default: 10) |
| `ENABLE_CONFETTI` | Show confetti on correct answers (default: true) |
| `STATS_PIN` | PIN to access the booth statistics screen (default: 1234) |
| `CONTACT_INFO` | Phone, email and location for the contact modal |
| `TOPICS` | Topic IDs, titles and icons |

---

## Booth Statistics

Tap the hospital logo **5 times**, then enter the PIN (default: `1234`).

The statistics screen shows:
- Total quiz sessions
- Questions answered, correct, incorrect
- Accuracy percentage
- How many times each topic was selected

Statistics are stored only in the browser's `localStorage`. They are never
transmitted to any server. They remain on the booth device between sessions.

---

## Kiosk / Booth Mode

- After **2 minutes** of inactivity a 10-second countdown appears.
- If no interaction occurs, the app resets to the Welcome screen.
- Tap anywhere or press any key to dismiss the countdown.
- A **Reset** button in the header allows booth staff to return to the Welcome screen at any time.
- For full-screen presentation: press **F11** in Chrome / Edge, or use **View → Enter Full Screen** in Safari.

---

## Accessibility

- Full keyboard navigation with visible focus rings.
- Screen-reader ARIA labels in both English and Arabic.
- Correct answers communicated via icon + text + colour (never colour alone).
- `lang` and `dir` attributes set automatically per selected language.
- Respects `prefers-reduced-motion` — flip animation and confetti are disabled.
- Minimum touch target size: 44 × 44 px.

---

## Privacy

This application:
- Does **not** collect names, patient data, employee IDs or any personal information.
- Does **not** transmit any data to external servers.
- Stores only anonymous aggregate statistics in the local browser storage.
- Has no login, no tracking, no analytics.

---

## File Structure

```
├── public/
│   ├── kfafh-logo.png          ← Place official logo here
│   └── kfafh-logo-placeholder.svg
├── src/
│   ├── config/
│   │   └── appConfig.ts        ← Central branding & settings
│   ├── data/
│   │   └── questions.ts        ← Complete bilingual question bank
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── shuffle.ts
│   │   └── scoring.ts
│   ├── hooks/
│   │   ├── useInactivity.ts
│   │   └── useStats.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── LanguageSelectScreen.tsx
│   │   ├── WelcomeScreen.tsx
│   │   ├── TopicSelectScreen.tsx
│   │   ├── FlipCard.tsx
│   │   ├── QuizScreen.tsx
│   │   ├── ResultScreen.tsx
│   │   ├── Confetti.tsx
│   │   ├── ContactModal.tsx
│   │   ├── PinModal.tsx
│   │   ├── StatsModal.tsx
│   │   └── InactivityOverlay.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Browser Compatibility

Tested on: Chrome 120+, Edge 120+, Firefox 121+, Safari 17+

Works on: Windows, macOS, iOS (iPad / iPhone), Android tablets and phones.

---

*Medical Laboratory Department — King Fahd Armed Forces Hospital — Jeddah, Saudi Arabia*
