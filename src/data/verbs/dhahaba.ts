import type { VerbData } from '../types'

export const dhahaba: VerbData = {
  id: 'dhahaba',
  root: 'ذ – ه – ب',
  arabic: 'ذَهَبَ',
  transliteration: 'dhahaba · Form I',
  english: 'to go',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I went', arabic: 'أَنَا ذَهَبْتُ' },
    { english: 'You went', arabic: 'أَنْتَ ذَهَبْتَ', note: 'm.' },
    { english: 'You went', arabic: 'أَنْتِ ذَهَبْتِ', note: 'f.' },
    { english: 'He went', arabic: 'هُوَ ذَهَبَ' },
    { english: 'She went', arabic: 'هِيَ ذَهَبَتْ' },
    { english: 'We went', arabic: 'نَحْنُ ذَهَبْنَا' },
  ],
  presentForms: [
    { english: 'I go', arabic: 'أَنَا أَذْهَبُ' },
    { english: 'You go', arabic: 'أَنْتَ تَذْهَبُ', note: 'm.' },
    { english: 'You go', arabic: 'أَنْتِ تَذْهَبِينَ', note: 'f.' },
    { english: 'He goes', arabic: 'هُوَ يَذْهَبُ' },
    { english: 'She goes', arabic: 'هِيَ تَذْهَبُ' },
    { english: 'We go', arabic: 'نَحْنُ نَذْهَبُ' },
  ],
}

export default dhahaba
