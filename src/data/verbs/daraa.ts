import type { VerbData } from '../types'

export const daraa: VerbData = {
  id: 'daraa',
  root: 'د – ر – ي',
  arabic: 'دَرَى',
  transliteration: 'darā · Form I (Defective)',
  english: 'to know / be aware',
  category: 'Cognition',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I knew', arabic: 'أَنَا دَرَيْتُ' },
    { english: 'You knew', arabic: 'أَنْتَ دَرَيْتَ', note: 'm.' },
    { english: 'You knew', arabic: 'أَنْتِ دَرَيْتِ', note: 'f.' },
    { english: 'He knew', arabic: 'هُوَ دَرَى' },
    { english: 'She knew', arabic: 'هِيَ دَرَتْ' },
    { english: 'We knew', arabic: 'نَحْنُ دَرَيْنَا' },
  ],
  presentForms: [
    { english: 'I know', arabic: 'أَنَا أَدْرِي' },
    { english: 'You know', arabic: 'أَنْتَ تَدْرِي', note: 'm.' },
    { english: 'You know', arabic: 'أَنْتِ تَدْرِينَ', note: 'f.' },
    { english: 'He knows', arabic: 'هُوَ يَدْرِي' },
    { english: 'She knows', arabic: 'هِيَ تَدْرِي' },
    { english: 'We know', arabic: 'نَحْنُ نَدْرِي' },
  ],
}

export default daraa
