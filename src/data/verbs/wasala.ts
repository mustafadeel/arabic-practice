import type { VerbData } from '../types'

export const wasala: VerbData = {
  id: 'wasala',
  root: 'و – ص – ل',
  arabic: 'وَصَلَ',
  transliteration: 'waṣala · Form I (Assimilated)',
  english: 'to arrive / reach',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I arrived', arabic: 'أَنَا وَصَلْتُ' },
    { english: 'You arrived', arabic: 'أَنْتَ وَصَلْتَ', note: 'm.' },
    { english: 'You arrived', arabic: 'أَنْتِ وَصَلْتِ', note: 'f.' },
    { english: 'He arrived', arabic: 'هُوَ وَصَلَ' },
    { english: 'She arrived', arabic: 'هِيَ وَصَلَتْ' },
    { english: 'We arrived', arabic: 'نَحْنُ وَصَلْنَا' },
  ],
  presentForms: [
    { english: 'I arrive', arabic: 'أَنَا أَصِلُ' },
    { english: 'You arrive', arabic: 'أَنْتَ تَصِلُ', note: 'm.' },
    { english: 'You arrive', arabic: 'أَنْتِ تَصِلِينَ', note: 'f.' },
    { english: 'He arrives', arabic: 'هُوَ يَصِلُ' },
    { english: 'She arrives', arabic: 'هِيَ تَصِلُ' },
    { english: 'We arrive', arabic: 'نَحْنُ نَصِلُ' },
  ],
}

export default wasala
