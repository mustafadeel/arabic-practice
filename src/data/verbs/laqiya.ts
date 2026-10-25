import type { VerbData } from '../types'

export const laqiya: VerbData = {
  id: 'laqiya',
  root: 'ل – ق – ي',
  arabic: 'لَقِيَ',
  transliteration: 'laqiya · Form I (Defective)',
  english: 'to meet / encounter',
  category: 'Communication',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I met', arabic: 'أَنَا لَقِيتُ' },
    { english: 'You met', arabic: 'أَنْتَ لَقِيتَ', note: 'm.' },
    { english: 'You met', arabic: 'أَنْتِ لَقِيتِ', note: 'f.' },
    { english: 'He met', arabic: 'هُوَ لَقِيَ' },
    { english: 'She met', arabic: 'هِيَ لَقِيَتْ' },
    { english: 'We met', arabic: 'نَحْنُ لَقِينَا' },
  ],
  presentForms: [
    { english: 'I meet', arabic: 'أَنَا أَلْقَى' },
    { english: 'You meet', arabic: 'أَنْتَ تَلْقَى', note: 'm.' },
    { english: 'You meet', arabic: 'أَنْتِ تَلْقَيْنَ', note: 'f.' },
    { english: 'He meets', arabic: 'هُوَ يَلْقَى' },
    { english: 'She meets', arabic: 'هِيَ تَلْقَى' },
    { english: 'We meet', arabic: 'نَحْنُ نَلْقَى' },
  ],
}

export default laqiya
