import type { VerbData } from '../types'

// Hollow verb (فعل أجوف): root س–ي–ر; middle ي collapses in conjugated past forms.
// Past: سَارَ / سِرْتُ · Present: يَسِيرُ / أَسِيرُ
// Note: filename saara-sin to distinguish from saara.ts (صَارَ — to become, root ص–ي–ر)

export const saarasin: VerbData = {
  id: 'saarasin',
  root: 'س – ي – ر',
  arabic: 'سَارَ',
  transliteration: 'sāra · Form I (Hollow)',
  english: 'to travel / walk',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I travelled', arabic: 'أَنَا سِرْتُ' },
    { english: 'You travelled', arabic: 'أَنْتَ سِرْتَ', note: 'm.' },
    { english: 'You travelled', arabic: 'أَنْتِ سِرْتِ', note: 'f.' },
    { english: 'He travelled', arabic: 'هُوَ سَارَ' },
    { english: 'She travelled', arabic: 'هِيَ سَارَتْ' },
    { english: 'We travelled', arabic: 'نَحْنُ سِرْنَا' },
  ],
  presentForms: [
    { english: 'I travel', arabic: 'أَنَا أَسِيرُ' },
    { english: 'You travel', arabic: 'أَنْتَ تَسِيرُ', note: 'm.' },
    { english: 'You travel', arabic: 'أَنْتِ تَسِيرِينَ', note: 'f.' },
    { english: 'He travels', arabic: 'هُوَ يَسِيرُ' },
    { english: 'She travels', arabic: 'هِيَ تَسِيرُ' },
    { english: 'We travel', arabic: 'نَحْنُ نَسِيرُ' },
  ],
}

export default saarasin
