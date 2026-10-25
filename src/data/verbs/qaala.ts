import type { VerbData } from '../types'

export const qaala: VerbData = {
  id: 'qaala',
  root: 'ق – و – ل',
  arabic: 'قَالَ',
  transliteration: 'qāla · Form I (Hollow)',
  english: 'to say',
  category: 'Communication',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I said', arabic: 'أَنَا قُلْتُ' },
    { english: 'You said', arabic: 'أَنْتَ قُلْتَ', note: 'm.' },
    { english: 'You said', arabic: 'أَنْتِ قُلْتِ', note: 'f.' },
    { english: 'He said', arabic: 'هُوَ قَالَ' },
    { english: 'She said', arabic: 'هِيَ قَالَتْ' },
    { english: 'We said', arabic: 'نَحْنُ قُلْنَا' },
  ],
  presentForms: [
    { english: 'I say', arabic: 'أَنَا أَقُولُ' },
    { english: 'You say', arabic: 'أَنْتَ تَقُولُ', note: 'm.' },
    { english: 'You say', arabic: 'أَنْتِ تَقُولِينَ', note: 'f.' },
    { english: 'He says', arabic: 'هُوَ يَقُولُ' },
    { english: 'She says', arabic: 'هِيَ تَقُولُ' },
    { english: 'We say', arabic: 'نَحْنُ نَقُولُ' },
  ],
}

export default qaala
