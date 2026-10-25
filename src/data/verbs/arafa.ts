import type { VerbData } from '../types'

export const arafa: VerbData = {
  id: 'arafa',
  root: 'ع – ر – ف',
  arabic: 'عَرَفَ',
  transliteration: '\'arafa · Form I',
  english: 'to know / recognize',
  category: 'Cognition',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I knew', arabic: 'أَنَا عَرَفْتُ' },
    { english: 'You knew', arabic: 'أَنْتَ عَرَفْتَ', note: 'm.' },
    { english: 'You knew', arabic: 'أَنْتِ عَرَفْتِ', note: 'f.' },
    { english: 'He knew', arabic: 'هُوَ عَرَفَ' },
    { english: 'She knew', arabic: 'هِيَ عَرَفَتْ' },
    { english: 'We knew', arabic: 'نَحْنُ عَرَفْنَا' },
  ],
  presentForms: [
    { english: 'I know', arabic: 'أَنَا أَعْرِفُ' },
    { english: 'You know', arabic: 'أَنْتَ تَعْرِفُ', note: 'm.' },
    { english: 'You know', arabic: 'أَنْتِ تَعْرِفِينَ', note: 'f.' },
    { english: 'He knows', arabic: 'هُوَ يَعْرِفُ' },
    { english: 'She knows', arabic: 'هِيَ تَعْرِفُ' },
    { english: 'We know', arabic: 'نَحْنُ نَعْرِفُ' },
  ],
}

export default arafa
