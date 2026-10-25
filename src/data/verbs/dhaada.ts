import type { VerbData } from '../types'

export const dhaada: VerbData = {
  id: 'dhaada',
  root: 'ذ – و – د',
  arabic: 'ذَادَ',
  transliteration: 'dhāda · Form I (Hollow)',
  english: 'to defend / drive away',
  category: 'Moral & Spiritual',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I defended', arabic: 'أَنَا ذُدْتُ' },
    { english: 'You defended', arabic: 'أَنْتَ ذُدْتَ', note: 'm.' },
    { english: 'You defended', arabic: 'أَنْتِ ذُدْتِ', note: 'f.' },
    { english: 'He defended', arabic: 'هُوَ ذَادَ' },
    { english: 'She defended', arabic: 'هِيَ ذَادَتْ' },
    { english: 'We defended', arabic: 'نَحْنُ ذُدْنَا' },
  ],
  presentForms: [
    { english: 'I defend', arabic: 'أَنَا أَذُودُ' },
    { english: 'You defend', arabic: 'أَنْتَ تَذُودُ', note: 'm.' },
    { english: 'You defend', arabic: 'أَنْتِ تَذُودِينَ', note: 'f.' },
    { english: 'He defends', arabic: 'هُوَ يَذُودُ' },
    { english: 'She defends', arabic: 'هِيَ تَذُودُ' },
    { english: 'We defend', arabic: 'نَحْنُ نَذُودُ' },
  ],
}

export default dhaada
