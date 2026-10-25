import type { VerbData } from '../types'

export const aada: VerbData = {
  id: 'aada',
  root: 'ع – و – د',
  arabic: 'عَادَ',
  transliteration: '\'āda · Form I (Hollow)',
  english: 'to return / go back',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I returned', arabic: 'أَنَا عُدْتُ' },
    { english: 'You returned', arabic: 'أَنْتَ عُدْتَ', note: 'm.' },
    { english: 'You returned', arabic: 'أَنْتِ عُدْتِ', note: 'f.' },
    { english: 'He returned', arabic: 'هُوَ عَادَ' },
    { english: 'She returned', arabic: 'هِيَ عَادَتْ' },
    { english: 'We returned', arabic: 'نَحْنُ عُدْنَا' },
  ],
  presentForms: [
    { english: 'I return', arabic: 'أَنَا أَعُودُ' },
    { english: 'You return', arabic: 'أَنْتَ تَعُودُ', note: 'm.' },
    { english: 'You return', arabic: 'أَنْتِ تَعُودِينَ', note: 'f.' },
    { english: 'He returns', arabic: 'هُوَ يَعُودُ' },
    { english: 'She returns', arabic: 'هِيَ تَعُودُ' },
    { english: 'We return', arabic: 'نَحْنُ نَعُودُ' },
  ],
}

export default aada
