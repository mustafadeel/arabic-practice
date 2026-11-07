import type { VerbData } from '../types'

export const rakiba: VerbData = {
  id: 'rakiba',
  root: 'ر – ك – ب',
  arabic: 'رَكِبَ',
  transliteration: 'rakiba · Form I',
  english: 'to ride / mount',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I rode', arabic: 'أَنَا رَكِبْتُ' },
    { english: 'You rode', arabic: 'أَنْتَ رَكِبْتَ', note: 'm.' },
    { english: 'You rode', arabic: 'أَنْتِ رَكِبْتِ', note: 'f.' },
    { english: 'He rode', arabic: 'هُوَ رَكِبَ' },
    { english: 'She rode', arabic: 'هِيَ رَكِبَتْ' },
    { english: 'We rode', arabic: 'نَحْنُ رَكِبْنَا' },
  ],
  presentForms: [
    { english: 'I ride', arabic: 'أَنَا أَرْكَبُ' },
    { english: 'You ride', arabic: 'أَنْتَ تَرْكَبُ', note: 'm.' },
    { english: 'You ride', arabic: 'أَنْتِ تَرْكَبِينَ', note: 'f.' },
    { english: 'He rides', arabic: 'هُوَ يَرْكَبُ' },
    { english: 'She rides', arabic: 'هِيَ تَرْكَبُ' },
    { english: 'We ride', arabic: 'نَحْنُ نَرْكَبُ' },
  ],
}

export default rakiba
