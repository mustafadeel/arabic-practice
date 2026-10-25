import type { VerbData } from '../types'

export const jaaa: VerbData = {
  id: 'jaaa',
  root: 'ج – ي – ء',
  arabic: 'جَاءَ',
  transliteration: 'jā\'a · Form I (Hollow)',
  english: 'to come',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I came', arabic: 'أَنَا جِئْتُ' },
    { english: 'You came', arabic: 'أَنْتَ جِئْتَ', note: 'm.' },
    { english: 'You came', arabic: 'أَنْتِ جِئْتِ', note: 'f.' },
    { english: 'He came', arabic: 'هُوَ جَاءَ' },
    { english: 'She came', arabic: 'هِيَ جَاءَتْ' },
    { english: 'We came', arabic: 'نَحْنُ جِئْنَا' },
  ],
  presentForms: [
    { english: 'I come', arabic: 'أَنَا أَجِيءُ' },
    { english: 'You come', arabic: 'أَنْتَ تَجِيءُ', note: 'm.' },
    { english: 'You come', arabic: 'أَنْتِ تَجِيئِينَ', note: 'f.' },
    { english: 'He comes', arabic: 'هُوَ يَجِيءُ' },
    { english: 'She comes', arabic: 'هِيَ تَجِيءُ' },
    { english: 'We come', arabic: 'نَحْنُ نَجِيءُ' },
  ],
}

export default jaaa
