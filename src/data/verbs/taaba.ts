import type { VerbData } from '../types'

export const taaba: VerbData = {
  id: 'taaba',
  root: 'ت – و – ب',
  arabic: 'تَابَ',
  transliteration: 'tāba · Form I (Hollow)',
  english: 'to repent / turn back',
  category: 'Moral & Spiritual',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I repented', arabic: 'أَنَا تُبْتُ' },
    { english: 'You repented', arabic: 'أَنْتَ تُبْتَ', note: 'm.' },
    { english: 'You repented', arabic: 'أَنْتِ تُبْتِ', note: 'f.' },
    { english: 'He repented', arabic: 'هُوَ تَابَ' },
    { english: 'She repented', arabic: 'هِيَ تَابَتْ' },
    { english: 'We repented', arabic: 'نَحْنُ تُبْنَا' },
  ],
  presentForms: [
    { english: 'I repent', arabic: 'أَنَا أَتُوبُ' },
    { english: 'You repent', arabic: 'أَنْتَ تَتُوبُ', note: 'm.' },
    { english: 'You repent', arabic: 'أَنْتِ تَتُوبِينَ', note: 'f.' },
    { english: 'He repents', arabic: 'هُوَ يَتُوبُ' },
    { english: 'She repents', arabic: 'هِيَ تَتُوبُ' },
    { english: 'We repent', arabic: 'نَحْنُ نَتُوبُ' },
  ],
}

export default taaba
