import type { VerbData } from '../types'

export const akala: VerbData = {
  id: 'akala',
  root: 'أ – ك – ل',
  arabic: 'أَكَلَ',
  transliteration: 'akala · Form I (Hamzated)',
  english: 'to eat',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I ate', arabic: 'أَنَا أَكَلْتُ' },
    { english: 'You ate', arabic: 'أَنْتَ أَكَلْتَ', note: 'm.' },
    { english: 'You ate', arabic: 'أَنْتِ أَكَلْتِ', note: 'f.' },
    { english: 'He ate', arabic: 'هُوَ أَكَلَ' },
    { english: 'She ate', arabic: 'هِيَ أَكَلَتْ' },
    { english: 'We ate', arabic: 'نَحْنُ أَكَلْنَا' },
  ],
  presentForms: [
    { english: 'I eat', arabic: 'أَنَا آكُلُ' },
    { english: 'You eat', arabic: 'أَنْتَ تَأْكُلُ', note: 'm.' },
    { english: 'You eat', arabic: 'أَنْتِ تَأْكُلِينَ', note: 'f.' },
    { english: 'He eats', arabic: 'هُوَ يَأْكُلُ' },
    { english: 'She eats', arabic: 'هِيَ تَأْكُلُ' },
    { english: 'We eat', arabic: 'نَحْنُ نَأْكُلُ' },
  ],
}

export default akala
