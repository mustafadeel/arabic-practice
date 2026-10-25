import type { VerbData } from '../types'

export const waqaa: VerbData = {
  id: 'waqaa',
  root: 'و – ق – ي',
  arabic: 'وَقَى',
  transliteration: 'waqā · Form I (Doubly weak)',
  english: 'to protect / safeguard',
  category: 'Moral & Spiritual',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I protected', arabic: 'أَنَا وَقَيْتُ' },
    { english: 'You protected', arabic: 'أَنْتَ وَقَيْتَ', note: 'm.' },
    { english: 'You protected', arabic: 'أَنْتِ وَقَيْتِ', note: 'f.' },
    { english: 'He protected', arabic: 'هُوَ وَقَى' },
    { english: 'She protected', arabic: 'هِيَ وَقَتْ' },
    { english: 'We protected', arabic: 'نَحْنُ وَقَيْنَا' },
  ],
  presentForms: [
    { english: 'I protect', arabic: 'أَنَا أَقِي' },
    { english: 'You protect', arabic: 'أَنْتَ تَقِي', note: 'm.' },
    { english: 'You protect', arabic: 'أَنْتِ تَقِينَ', note: 'f.' },
    { english: 'He protects', arabic: 'هُوَ يَقِي' },
    { english: 'She protects', arabic: 'هِيَ تَقِي' },
    { english: 'We protect', arabic: 'نَحْنُ نَقِي' },
  ],
}

export default waqaa
