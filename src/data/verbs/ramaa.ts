import type { VerbData } from '../types'

export const ramaa: VerbData = {
  id: 'ramaa',
  root: 'ر – م – ي',
  arabic: 'رَمَى',
  transliteration: 'ramā · Form I (Defective)',
  english: 'to throw',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I threw', arabic: 'أَنَا رَمَيْتُ' },
    { english: 'You threw', arabic: 'أَنْتَ رَمَيْتَ', note: 'm.' },
    { english: 'You threw', arabic: 'أَنْتِ رَمَيْتِ', note: 'f.' },
    { english: 'He threw', arabic: 'هُوَ رَمَى' },
    { english: 'She threw', arabic: 'هِيَ رَمَتْ' },
    { english: 'We threw', arabic: 'نَحْنُ رَمَيْنَا' },
  ],
  presentForms: [
    { english: 'I throw', arabic: 'أَنَا أَرْمِي' },
    { english: 'You throw', arabic: 'أَنْتَ تَرْمِي', note: 'm.' },
    { english: 'You throw', arabic: 'أَنْتِ تَرْمِينَ', note: 'f.' },
    { english: 'He throws', arabic: 'هُوَ يَرْمِي' },
    { english: 'She throws', arabic: 'هِيَ تَرْمِي' },
    { english: 'We throw', arabic: 'نَحْنُ نَرْمِي' },
  ],
}

export default ramaa
