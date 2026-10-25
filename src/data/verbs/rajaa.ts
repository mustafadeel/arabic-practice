import type { VerbData } from '../types'

export const rajaa: VerbData = {
  id: 'rajaa',
  root: 'ر – ج – ع',
  arabic: 'رَجَعَ',
  transliteration: 'raja\'a · Form I',
  english: 'to return',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I returned', arabic: 'أَنَا رَجَعْتُ' },
    { english: 'You returned', arabic: 'أَنْتَ رَجَعْتَ', note: 'm.' },
    { english: 'You returned', arabic: 'أَنْتِ رَجَعْتِ', note: 'f.' },
    { english: 'He returned', arabic: 'هُوَ رَجَعَ' },
    { english: 'She returned', arabic: 'هِيَ رَجَعَتْ' },
    { english: 'We returned', arabic: 'نَحْنُ رَجَعْنَا' },
  ],
  presentForms: [
    { english: 'I return', arabic: 'أَنَا أَرْجِعُ' },
    { english: 'You return', arabic: 'أَنْتَ تَرْجِعُ', note: 'm.' },
    { english: 'You return', arabic: 'أَنْتِ تَرْجِعِينَ', note: 'f.' },
    { english: 'He returns', arabic: 'هُوَ يَرْجِعُ' },
    { english: 'She returns', arabic: 'هِيَ تَرْجِعُ' },
    { english: 'We return', arabic: 'نَحْنُ نَرْجِعُ' },
  ],
}

export default rajaa
