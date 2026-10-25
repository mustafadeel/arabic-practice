import type { VerbData } from '../types'

export const kataba: VerbData = {
  id: 'kataba',
  root: 'ك – ت – ب',
  arabic: 'كَتَبَ',
  transliteration: 'kataba · Form I',
  english: 'to write',
  category: 'Communication',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I wrote', arabic: 'أَنَا كَتَبْتُ' },
    { english: 'You wrote', arabic: 'أَنْتَ كَتَبْتَ', note: 'm.' },
    { english: 'You wrote', arabic: 'أَنْتِ كَتَبْتِ', note: 'f.' },
    { english: 'He wrote', arabic: 'هُوَ كَتَبَ' },
    { english: 'She wrote', arabic: 'هِيَ كَتَبَتْ' },
    { english: 'We wrote', arabic: 'نَحْنُ كَتَبْنَا' },
  ],
  presentForms: [
    { english: 'I write', arabic: 'أَنَا أَكْتُبُ' },
    { english: 'You write', arabic: 'أَنْتَ تَكْتُبُ', note: 'm.' },
    { english: 'You write', arabic: 'أَنْتِ تَكْتُبِينَ', note: 'f.' },
    { english: 'He writes', arabic: 'هُوَ يَكْتُبُ' },
    { english: 'She writes', arabic: 'هِيَ تَكْتُبُ' },
    { english: 'We write', arabic: 'نَحْنُ نَكْتُبُ' },
  ],
}

export default kataba
