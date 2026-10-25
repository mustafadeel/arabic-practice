import type { VerbData } from '../types'

export const akhadha: VerbData = {
  id: 'akhadha',
  root: 'أ – خ – ذ',
  arabic: 'أَخَذَ',
  transliteration: 'akhadha · Form I (Hamzated)',
  english: 'to take',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I took', arabic: 'أَنَا أَخَذْتُ' },
    { english: 'You took', arabic: 'أَنْتَ أَخَذْتَ', note: 'm.' },
    { english: 'You took', arabic: 'أَنْتِ أَخَذْتِ', note: 'f.' },
    { english: 'He took', arabic: 'هُوَ أَخَذَ' },
    { english: 'She took', arabic: 'هِيَ أَخَذَتْ' },
    { english: 'We took', arabic: 'نَحْنُ أَخَذْنَا' },
  ],
  presentForms: [
    { english: 'I take', arabic: 'أَنَا آخُذُ' },
    { english: 'You take', arabic: 'أَنْتَ تَأْخُذُ', note: 'm.' },
    { english: 'You take', arabic: 'أَنْتِ تَأْخُذِينَ', note: 'f.' },
    { english: 'He takes', arabic: 'هُوَ يَأْخُذُ' },
    { english: 'She takes', arabic: 'هِيَ تَأْخُذُ' },
    { english: 'We take', arabic: 'نَحْنُ نَأْخُذُ' },
  ],
}

export default akhadha
