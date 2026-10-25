import type { VerbData } from '../types'

export const hadaa: VerbData = {
  id: 'hadaa',
  root: 'ه – د – ي',
  arabic: 'هَدَى',
  transliteration: 'hadā · Form I (Defective)',
  english: 'to guide',
  category: 'Moral & Spiritual',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I guided', arabic: 'أَنَا هَدَيْتُ' },
    { english: 'You guided', arabic: 'أَنْتَ هَدَيْتَ', note: 'm.' },
    { english: 'You guided', arabic: 'أَنْتِ هَدَيْتِ', note: 'f.' },
    { english: 'He guided', arabic: 'هُوَ هَدَى' },
    { english: 'She guided', arabic: 'هِيَ هَدَتْ' },
    { english: 'We guided', arabic: 'نَحْنُ هَدَيْنَا' },
  ],
  presentForms: [
    { english: 'I guide', arabic: 'أَنَا أَهْدِي' },
    { english: 'You guide', arabic: 'أَنْتَ تَهْدِي', note: 'm.' },
    { english: 'You guide', arabic: 'أَنْتِ تَهْدِينَ', note: 'f.' },
    { english: 'He guides', arabic: 'هُوَ يَهْدِي' },
    { english: 'She guides', arabic: 'هِيَ تَهْدِي' },
    { english: 'We guide', arabic: 'نَحْنُ نَهْدِي' },
  ],
}

export default hadaa
