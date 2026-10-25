import type { VerbData } from '../types'

export const aasha: VerbData = {
  id: 'aasha',
  root: 'ع – ي – ش',
  arabic: 'عَاشَ',
  transliteration: '\'āsha · Form I (Hollow)',
  english: 'to live',
  category: 'State verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I lived', arabic: 'أَنَا عِشْتُ' },
    { english: 'You lived', arabic: 'أَنْتَ عِشْتَ', note: 'm.' },
    { english: 'You lived', arabic: 'أَنْتِ عِشْتِ', note: 'f.' },
    { english: 'He lived', arabic: 'هُوَ عَاشَ' },
    { english: 'She lived', arabic: 'هِيَ عَاشَتْ' },
    { english: 'We lived', arabic: 'نَحْنُ عِشْنَا' },
  ],
  presentForms: [
    { english: 'I live', arabic: 'أَنَا أَعِيشُ' },
    { english: 'You live', arabic: 'أَنْتَ تَعِيشُ', note: 'm.' },
    { english: 'You live', arabic: 'أَنْتِ تَعِيشِينَ', note: 'f.' },
    { english: 'He lives', arabic: 'هُوَ يَعِيشُ' },
    { english: 'She lives', arabic: 'هِيَ تَعِيشُ' },
    { english: 'We live', arabic: 'نَحْنُ نَعِيشُ' },
  ],
}

export default aasha
