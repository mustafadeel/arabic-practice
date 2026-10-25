import type { VerbData } from '../types'

export const qaraa: VerbData = {
  id: 'qaraa',
  root: 'ق – ر – أ',
  arabic: 'قَرَأَ',
  transliteration: 'qara\'a · Form I (Hamzated)',
  english: 'to read / recite',
  category: 'Communication',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I read', arabic: 'أَنَا قَرَأْتُ' },
    { english: 'You read', arabic: 'أَنْتَ قَرَأْتَ', note: 'm.' },
    { english: 'You read', arabic: 'أَنْتِ قَرَأْتِ', note: 'f.' },
    { english: 'He read', arabic: 'هُوَ قَرَأَ' },
    { english: 'She read', arabic: 'هِيَ قَرَأَتْ' },
    { english: 'We read', arabic: 'نَحْنُ قَرَأْنَا' },
  ],
  presentForms: [
    { english: 'I read', arabic: 'أَنَا أَقْرَأُ' },
    { english: 'You read', arabic: 'أَنْتَ تَقْرَأُ', note: 'm.' },
    { english: 'You read', arabic: 'أَنْتِ تَقْرَئِينَ', note: 'f.' },
    { english: 'He reads', arabic: 'هُوَ يَقْرَأُ' },
    { english: 'She reads', arabic: 'هِيَ تَقْرَأُ' },
    { english: 'We read', arabic: 'نَحْنُ نَقْرَأُ' },
  ],
}

export default qaraa
