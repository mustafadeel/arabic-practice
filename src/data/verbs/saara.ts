import type { VerbData } from '../types'

// Hollow verb (فعل أجوف): root ص–ي–ر; middle ي collapses in conjugated past forms.
// Past: صَارَ / صِرْتُ · Present: يَصِيرُ / أَصِيرُ

export const saara: VerbData = {
  id: 'saara',
  root: 'ص – ي – ر',
  arabic: 'صَارَ',
  transliteration: 'ṣāra · Form I (Hollow)',
  english: 'to become',
  category: 'State verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I became', arabic: 'أَنَا صِرْتُ' },
    { english: 'You became', arabic: 'أَنْتَ صِرْتَ', note: 'm.' },
    { english: 'You became', arabic: 'أَنْتِ صِرْتِ', note: 'f.' },
    { english: 'He became', arabic: 'هُوَ صَارَ' },
    { english: 'She became', arabic: 'هِيَ صَارَتْ' },
    { english: 'We became', arabic: 'نَحْنُ صِرْنَا' },
  ],
  presentForms: [
    { english: 'I become', arabic: 'أَنَا أَصِيرُ' },
    { english: 'You become', arabic: 'أَنْتَ تَصِيرُ', note: 'm.' },
    { english: 'You become', arabic: 'أَنْتِ تَصِيرِينَ', note: 'f.' },
    { english: 'He becomes', arabic: 'هُوَ يَصِيرُ' },
    { english: 'She becomes', arabic: 'هِيَ تَصِيرُ' },
    { english: 'We become', arabic: 'نَحْنُ نَصِيرُ' },
  ],
}

export default saara
