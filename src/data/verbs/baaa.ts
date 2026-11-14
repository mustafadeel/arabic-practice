import type { VerbData } from '../types'

// Hollow verb (فعل أجوف): root ب–ي–ع; the middle ي collapses in non-he past forms.
// Past: بَاعَ / بِعْتُ · Present: يَبِيعُ / أَبِيعُ

export const baaa: VerbData = {
  id: 'baaa',
  root: 'ب – ي – ع',
  arabic: 'بَاعَ',
  transliteration: 'bāʿa · Form I (Hollow)',
  english: 'to sell',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I sold', arabic: 'أَنَا بِعْتُ' },
    { english: 'You sold', arabic: 'أَنْتَ بِعْتَ', note: 'm.' },
    { english: 'You sold', arabic: 'أَنْتِ بِعْتِ', note: 'f.' },
    { english: 'He sold', arabic: 'هُوَ بَاعَ' },
    { english: 'She sold', arabic: 'هِيَ بَاعَتْ' },
    { english: 'We sold', arabic: 'نَحْنُ بِعْنَا' },
  ],
  presentForms: [
    { english: 'I sell', arabic: 'أَنَا أَبِيعُ' },
    { english: 'You sell', arabic: 'أَنْتَ تَبِيعُ', note: 'm.' },
    { english: 'You sell', arabic: 'أَنْتِ تَبِيعِينَ', note: 'f.' },
    { english: 'He sells', arabic: 'هُوَ يَبِيعُ' },
    { english: 'She sells', arabic: 'هِيَ تَبِيعُ' },
    { english: 'We sell', arabic: 'نَحْنُ نَبِيعُ' },
  ],
}

export default baaa
