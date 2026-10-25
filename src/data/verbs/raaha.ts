import type { VerbData } from '../types'

export const raaha: VerbData = {
  id: 'raaha',
  root: 'ر – و – ح',
  arabic: 'رَاحَ',
  transliteration: 'rāḥa · Form I (Hollow)',
  english: 'to depart / go',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I departed', arabic: 'أَنَا رُحْتُ' },
    { english: 'You departed', arabic: 'أَنْتَ رُحْتَ', note: 'm.' },
    { english: 'You departed', arabic: 'أَنْتِ رُحْتِ', note: 'f.' },
    { english: 'He departed', arabic: 'هُوَ رَاحَ' },
    { english: 'She departed', arabic: 'هِيَ رَاحَتْ' },
    { english: 'We departed', arabic: 'نَحْنُ رُحْنَا' },
  ],
  presentForms: [
    { english: 'I depart', arabic: 'أَنَا أَرُوحُ' },
    { english: 'You depart', arabic: 'أَنْتَ تَرُوحُ', note: 'm.' },
    { english: 'You depart', arabic: 'أَنْتِ تَرُوحِينَ', note: 'f.' },
    { english: 'He departs', arabic: 'هُوَ يَرُوحُ' },
    { english: 'She departs', arabic: 'هِيَ تَرُوحُ' },
    { english: 'We depart', arabic: 'نَحْنُ نَرُوحُ' },
  ],
}

export default raaha
