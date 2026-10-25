import type { VerbData } from '../types'

export const dakhala: VerbData = {
  id: 'dakhala',
  root: 'د – خ – ل',
  arabic: 'دَخَلَ',
  transliteration: 'dakhala · Form I',
  english: 'to enter',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I entered', arabic: 'أَنَا دَخَلْتُ' },
    { english: 'You entered', arabic: 'أَنْتَ دَخَلْتَ', note: 'm.' },
    { english: 'You entered', arabic: 'أَنْتِ دَخَلْتِ', note: 'f.' },
    { english: 'He entered', arabic: 'هُوَ دَخَلَ' },
    { english: 'She entered', arabic: 'هِيَ دَخَلَتْ' },
    { english: 'We entered', arabic: 'نَحْنُ دَخَلْنَا' },
  ],
  presentForms: [
    { english: 'I enter', arabic: 'أَنَا أَدْخُلُ' },
    { english: 'You enter', arabic: 'أَنْتَ تَدْخُلُ', note: 'm.' },
    { english: 'You enter', arabic: 'أَنْتِ تَدْخُلِينَ', note: 'f.' },
    { english: 'He enters', arabic: 'هُوَ يَدْخُلُ' },
    { english: 'She enters', arabic: 'هِيَ تَدْخُلُ' },
    { english: 'We enter', arabic: 'نَحْنُ نَدْخُلُ' },
  ],
}

export default dakhala
