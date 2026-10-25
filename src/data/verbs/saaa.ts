import type { VerbData } from '../types'

export const saaa: VerbData = {
  id: 'saaa',
  root: 'س – ع – ي',
  arabic: 'سَعَى',
  transliteration: 'sa\'ā · Form I (Defective)',
  english: 'to strive / hasten',
  category: 'Movement verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I strove', arabic: 'أَنَا سَعَيْتُ' },
    { english: 'You strove', arabic: 'أَنْتَ سَعَيْتَ', note: 'm.' },
    { english: 'You strove', arabic: 'أَنْتِ سَعَيْتِ', note: 'f.' },
    { english: 'He strove', arabic: 'هُوَ سَعَى' },
    { english: 'She strove', arabic: 'هِيَ سَعَتْ' },
    { english: 'We strove', arabic: 'نَحْنُ سَعَيْنَا' },
  ],
  presentForms: [
    { english: 'I strive', arabic: 'أَنَا أَسْعَى' },
    { english: 'You strive', arabic: 'أَنْتَ تَسْعَى', note: 'm.' },
    { english: 'You strive', arabic: 'أَنْتِ تَسْعَيْنَ', note: 'f.' },
    { english: 'He strives', arabic: 'هُوَ يَسْعَى' },
    { english: 'She strives', arabic: 'هِيَ تَسْعَى' },
    { english: 'We strive', arabic: 'نَحْنُ نَسْعَى' },
  ],
}

export default saaa
