import type { VerbData } from '../types'

export const fahima: VerbData = {
  id: 'fahima',
  root: 'ف – ه – م',
  arabic: 'فَهِمَ',
  transliteration: 'fahima · Form I',
  english: 'to understand',
  category: 'Cognition',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I understood', arabic: 'أَنَا فَهِمْتُ' },
    { english: 'You understood', arabic: 'أَنْتَ فَهِمْتَ', note: 'm.' },
    { english: 'You understood', arabic: 'أَنْتِ فَهِمْتِ', note: 'f.' },
    { english: 'He understood', arabic: 'هُوَ فَهِمَ' },
    { english: 'She understood', arabic: 'هِيَ فَهِمَتْ' },
    { english: 'We understood', arabic: 'نَحْنُ فَهِمْنَا' },
  ],
  presentForms: [
    { english: 'I understand', arabic: 'أَنَا أَفْهَمُ' },
    { english: 'You understand', arabic: 'أَنْتَ تَفْهَمُ', note: 'm.' },
    { english: 'You understand', arabic: 'أَنْتِ تَفْهَمِينَ', note: 'f.' },
    { english: 'He understands', arabic: 'هُوَ يَفْهَمُ' },
    { english: 'She understands', arabic: 'هِيَ تَفْهَمُ' },
    { english: 'We understand', arabic: 'نَحْنُ نَفْهَمُ' },
  ],
}

export default fahima
