import type { VerbData } from '../types'

export const shariba: VerbData = {
  id: 'shariba',
  root: 'ش – ر – ب',
  arabic: 'شَرِبَ',
  transliteration: 'shariba · Form I',
  english: 'to drink',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I drank', arabic: 'أَنَا شَرِبْتُ' },
    { english: 'You drank', arabic: 'أَنْتَ شَرِبْتَ', note: 'm.' },
    { english: 'You drank', arabic: 'أَنْتِ شَرِبْتِ', note: 'f.' },
    { english: 'He drank', arabic: 'هُوَ شَرِبَ' },
    { english: 'She drank', arabic: 'هِيَ شَرِبَتْ' },
    { english: 'We drank', arabic: 'نَحْنُ شَرِبْنَا' },
  ],
  presentForms: [
    { english: 'I drink', arabic: 'أَنَا أَشْرَبُ' },
    { english: 'You drink', arabic: 'أَنْتَ تَشْرَبُ', note: 'm.' },
    { english: 'You drink', arabic: 'أَنْتِ تَشْرَبِينَ', note: 'f.' },
    { english: 'He drinks', arabic: 'هُوَ يَشْرَبُ' },
    { english: 'She drinks', arabic: 'هِيَ تَشْرَبُ' },
    { english: 'We drink', arabic: 'نَحْنُ نَشْرَبُ' },
  ],
}

export default shariba
