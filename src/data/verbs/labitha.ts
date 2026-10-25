import type { VerbData } from '../types'

export const labitha: VerbData = {
  id: 'labitha',
  root: 'ل – ب – ث',
  arabic: 'لَبِثَ',
  transliteration: 'labitha · Form I',
  english: 'to stay / remain',
  category: 'State verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I stayed', arabic: 'أَنَا لَبِثْتُ' },
    { english: 'You stayed', arabic: 'أَنْتَ لَبِثْتَ', note: 'm.' },
    { english: 'You stayed', arabic: 'أَنْتِ لَبِثْتِ', note: 'f.' },
    { english: 'He stayed', arabic: 'هُوَ لَبِثَ' },
    { english: 'She stayed', arabic: 'هِيَ لَبِثَتْ' },
    { english: 'We stayed', arabic: 'نَحْنُ لَبِثْنَا' },
  ],
  presentForms: [
    { english: 'I stay', arabic: 'أَنَا أَلْبَثُ' },
    { english: 'You stay', arabic: 'أَنْتَ تَلْبَثُ', note: 'm.' },
    { english: 'You stay', arabic: 'أَنْتِ تَلْبَثِينَ', note: 'f.' },
    { english: 'He stays', arabic: 'هُوَ يَلْبَثُ' },
    { english: 'She stays', arabic: 'هِيَ تَلْبَثُ' },
    { english: 'We stay', arabic: 'نَحْنُ نَلْبَثُ' },
  ],
}

export default labitha
