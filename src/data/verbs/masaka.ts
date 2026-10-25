import type { VerbData } from '../types'

export const masaka: VerbData = {
  id: 'masaka',
  root: 'م – س – ك',
  arabic: 'مَسَكَ',
  transliteration: 'masaka · Form I',
  english: 'to hold / grasp',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I held', arabic: 'أَنَا مَسَكْتُ' },
    { english: 'You held', arabic: 'أَنْتَ مَسَكْتَ', note: 'm.' },
    { english: 'You held', arabic: 'أَنْتِ مَسَكْتِ', note: 'f.' },
    { english: 'He held', arabic: 'هُوَ مَسَكَ' },
    { english: 'She held', arabic: 'هِيَ مَسَكَتْ' },
    { english: 'We held', arabic: 'نَحْنُ مَسَكْنَا' },
  ],
  presentForms: [
    { english: 'I hold', arabic: 'أَنَا أَمْسِكُ' },
    { english: 'You hold', arabic: 'أَنْتَ تَمْسِكُ', note: 'm.' },
    { english: 'You hold', arabic: 'أَنْتِ تَمْسِكِينَ', note: 'f.' },
    { english: 'He holds', arabic: 'هُوَ يَمْسِكُ' },
    { english: 'She holds', arabic: 'هِيَ تَمْسِكُ' },
    { english: 'We hold', arabic: 'نَحْنُ نَمْسِكُ' },
  ],
}

export default masaka
