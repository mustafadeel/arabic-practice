import type { VerbData } from '../types'

export const labisa: VerbData = {
  id: 'labisa',
  root: 'ل – ب – س',
  arabic: 'لَبِسَ',
  transliteration: 'labisa · Form I',
  english: 'to wear / put on',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I wore', arabic: 'أَنَا لَبِسْتُ' },
    { english: 'You wore', arabic: 'أَنْتَ لَبِسْتَ', note: 'm.' },
    { english: 'You wore', arabic: 'أَنْتِ لَبِسْتِ', note: 'f.' },
    { english: 'He wore', arabic: 'هُوَ لَبِسَ' },
    { english: 'She wore', arabic: 'هِيَ لَبِسَتْ' },
    { english: 'We wore', arabic: 'نَحْنُ لَبِسْنَا' },
  ],
  presentForms: [
    { english: 'I wear', arabic: 'أَنَا أَلْبَسُ' },
    { english: 'You wear', arabic: 'أَنْتَ تَلْبَسُ', note: 'm.' },
    { english: 'You wear', arabic: 'أَنْتِ تَلْبَسِينَ', note: 'f.' },
    { english: 'He wears', arabic: 'هُوَ يَلْبَسُ' },
    { english: 'She wears', arabic: 'هِيَ تَلْبَسُ' },
    { english: 'We wear', arabic: 'نَحْنُ نَلْبَسُ' },
  ],
}

export default labisa
