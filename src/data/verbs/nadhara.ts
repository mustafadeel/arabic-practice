import type { VerbData } from '../types'

export const nadhara: VerbData = {
  id: 'nadhara',
  root: 'ن – ظ – ر',
  arabic: 'نَظَرَ',
  transliteration: 'naẓara · Form I',
  english: 'to look / gaze',
  category: 'Perception',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I looked', arabic: 'أَنَا نَظَرْتُ' },
    { english: 'You looked', arabic: 'أَنْتَ نَظَرْتَ', note: 'm.' },
    { english: 'You looked', arabic: 'أَنْتِ نَظَرْتِ', note: 'f.' },
    { english: 'He looked', arabic: 'هُوَ نَظَرَ' },
    { english: 'She looked', arabic: 'هِيَ نَظَرَتْ' },
    { english: 'We looked', arabic: 'نَحْنُ نَظَرْنَا' },
  ],
  presentForms: [
    { english: 'I look', arabic: 'أَنَا أَنْظُرُ' },
    { english: 'You look', arabic: 'أَنْتَ تَنْظُرُ', note: 'm.' },
    { english: 'You look', arabic: 'أَنْتِ تَنْظُرِينَ', note: 'f.' },
    { english: 'He looks', arabic: 'هُوَ يَنْظُرُ' },
    { english: 'She looks', arabic: 'هِيَ تَنْظُرُ' },
    { english: 'We look', arabic: 'نَحْنُ نَنْظُرُ' },
  ],
}

export default nadhara
