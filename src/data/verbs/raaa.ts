import type { VerbData } from '../types'

export const raaa: VerbData = {
  id: 'raaa',
  root: 'ر – أ – ي',
  arabic: 'رَأَى',
  transliteration: 'ra\'ā · Form I (Weak & Hamzated)',
  english: 'to see',
  category: 'Perception',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I saw', arabic: 'أَنَا رَأَيْتُ' },
    { english: 'You saw', arabic: 'أَنْتَ رَأَيْتَ', note: 'm.' },
    { english: 'You saw', arabic: 'أَنْتِ رَأَيْتِ', note: 'f.' },
    { english: 'He saw', arabic: 'هُوَ رَأَى' },
    { english: 'She saw', arabic: 'هِيَ رَأَتْ' },
    { english: 'We saw', arabic: 'نَحْنُ رَأَيْنَا' },
  ],
  presentForms: [
    { english: 'I see', arabic: 'أَنَا أَرَى' },
    { english: 'You see', arabic: 'أَنْتَ تَرَى', note: 'm.' },
    { english: 'You see', arabic: 'أَنْتِ تَرَيْنَ', note: 'f.' },
    { english: 'He sees', arabic: 'هُوَ يَرَى' },
    { english: 'She sees', arabic: 'هِيَ تَرَى' },
    { english: 'We see', arabic: 'نَحْنُ نَرَى' },
  ],
}

export default raaa
