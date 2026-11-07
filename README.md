# Arabic Verb Revision

A mobile-first Arabic verb flashcard app. Cards appear in random order; tap to reveal conjugations, swipe or use the navigation buttons to move between verbs.

**Live app → [mustafadeel.github.io/arabic-practice](https://mustafadeel.github.io/arabic-practice/)**

---

## Adding a new verb

> Drop one file into `src/data/verbs/` and it automatically appears in both the practice deck and the "View All" directory. No other changes needed.

### Step-by-step

1. **Copy the template**

   ```bash
   cp src/data/_template.ts src/data/verbs/mySajada.ts
   ```

   Name the file after the verb's transliteration (lowercase, no diacritics), e.g. `sajada.ts`, `kataba.ts`.

2. **Fill in the fields**

   Open your new file and replace every placeholder value:

   | Field | Description | Example |
   |---|---|---|
   | `id` | Unique string key — use the filename without `.ts` | `'sajada'` |
   | `root` | Arabic root letters separated by `–` | `'س – ج – د'` |
   | `arabic` | The he-form past tense with full diacritics | `'سَجَدَ'` |
   | `transliteration` | Latin spelling + Form number | `'sajada · Form I'` |
   | `english` | English infinitive meaning | `'to prostrate'` |
   | `category` | Thematic group (see categories below) | `'Worship'` |
   | `formNumber` | Quranic/grammatical form | `'Form I'` |
   | `pronounPrompt` | Pronoun shown on the flashcard prompt | `'هُوَ'` *(usually he-form)* |
   | `pastForms` | 6 conjugated past-tense rows | see template |
   | `presentForms` | 6 conjugated present-tense rows | see template |

3. **Each form row looks like this**

   ```ts
   { english: 'He prostrated', arabic: 'هُوَ سَجَدَ' }
   // Optional note for disambiguating gender/number:
   { english: 'You prostrated', arabic: 'أَنْتَ سَجَدْتَ', note: 'm.' }
   ```

   Always include the full pronoun in the Arabic column.

4. **Save → done.** Vite discovers the file automatically via `import.meta.glob`. Rebuild (`npm run build`) or just refresh the dev server.

### Categories in use

| Category | Used for |
|---|---|
| `Movement verbs` | ذَهَبَ, جَاءَ, رَجَعَ, وَصَلَ, صَعِدَ, رَكِبَ … |
| `Daily actions` | أَكَلَ, شَرِبَ, لَبِسَ … |
| `Cognition` | عَرَفَ, فَهِمَ, دَرَى … |
| `Perception` | رَأَى, نَظَرَ … |
| `Communication` | قَالَ, قَرَأَ … |
| `State verbs` | كَانَ, عَاشَ … |
| `Moral & Spiritual` | تَابَ, هَدَى, وَقَى … |

You can introduce any new category string — it will appear automatically as a filter pill in the "View All" directory.

---

## Project structure

```
src/
  data/
    types.ts          ← VerbData / VerbForm TypeScript interfaces
    index.ts          ← auto-loads all verbs via import.meta.glob + shuffleVerbs()
    _template.ts      ← copy this when adding a new verb
    verbs/
      dhahaba.ts      ← one file per verb
      akala.ts
      saida.ts
      …
  App.tsx             ← practice deck + directory view
  App.css             ← all styles
```

## Development

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
```

## Deployment

Pushing to `main` automatically deploys to GitHub Pages via `.github/workflows/deploy.yml`.
