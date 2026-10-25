import type { VerbData } from '../types'

export const jalasa: VerbData = {
  id: 'jalasa',
  root: 'ج – ل – س',
  arabic: 'جَلَسَ',
  transliteration: 'jalasa · Form I',
  english: 'to sit',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I sat', arabic: 'أَنَا جَلَسْتُ' },
    { english: 'You sat', arabic: 'أَنْتَ جَلَسْتَ', note: 'm.' },
    { english: 'You sat', arabic: 'أَنْتِ جَلَسْتِ', note: 'f.' },
    { english: 'He sat', arabic: 'هُوَ جَلَسَ' },
    { english: 'She sat', arabic: 'هِيَ جَلَسَتْ' },
    { english: 'We sat', arabic: 'نَحْنُ جَلَسْنَا' },
  ],
  presentForms: [
    { english: 'I sit', arabic: 'أَنَا أَجْلِسُ' },
    { english: 'You sit', arabic: 'أَنْتَ تَجْلِسُ', note: 'm.' },
    { english: 'You sit', arabic: 'أَنْتِ تَجْلِسِينَ', note: 'f.' },
    { english: 'He sits', arabic: 'هُوَ يَجْلِسُ' },
    { english: 'She sits', arabic: 'هِيَ تَجْلِسُ' },
    { english: 'We sit', arabic: 'نَحْنُ نَجْلِسُ' },
  ],
}

export default jalasa
