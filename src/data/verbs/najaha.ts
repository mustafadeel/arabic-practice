import type { VerbData } from '../types'

export const najaha: VerbData = {
  id: 'najaha',
  root: 'ن – ج – ح',
  arabic: 'نَجَحَ',
  transliteration: 'najaḥa · Form I',
  english: 'to succeed',
  category: 'State verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I succeeded', arabic: 'أَنَا نَجَحْتُ' },
    { english: 'You succeeded', arabic: 'أَنْتَ نَجَحْتَ', note: 'm.' },
    { english: 'You succeeded', arabic: 'أَنْتِ نَجَحْتِ', note: 'f.' },
    { english: 'He succeeded', arabic: 'هُوَ نَجَحَ' },
    { english: 'She succeeded', arabic: 'هِيَ نَجَحَتْ' },
    { english: 'We succeeded', arabic: 'نَحْنُ نَجَحْنَا' },
  ],
  presentForms: [
    { english: 'I succeed', arabic: 'أَنَا أَنْجَحُ' },
    { english: 'You succeed', arabic: 'أَنْتَ تَنْجَحُ', note: 'm.' },
    { english: 'You succeed', arabic: 'أَنْتِ تَنْجَحِينَ', note: 'f.' },
    { english: 'He succeeds', arabic: 'هُوَ يَنْجَحُ' },
    { english: 'She succeeds', arabic: 'هِيَ تَنْجَحُ' },
    { english: 'We succeed', arabic: 'نَحْنُ نَنْجَحُ' },
  ],
}

export default najaha
