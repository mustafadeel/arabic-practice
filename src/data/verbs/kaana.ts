import type { VerbData } from '../types'

export const kaana: VerbData = {
  id: 'kaana',
  root: 'ك – و – ن',
  arabic: 'كَانَ',
  transliteration: 'kāna · Form I (Hollow)',
  english: 'to be / was',
  category: 'State verbs',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I was', arabic: 'أَنَا كُنْتُ' },
    { english: 'You were', arabic: 'أَنْتَ كُنْتَ', note: 'm.' },
    { english: 'You were', arabic: 'أَنْتِ كُنْتِ', note: 'f.' },
    { english: 'He was', arabic: 'هُوَ كَانَ' },
    { english: 'She was', arabic: 'هِيَ كَانَتْ' },
    { english: 'We were', arabic: 'نَحْنُ كُنَّا' },
  ],
  presentForms: [
    { english: 'I am / will be', arabic: 'أَنَا أَكُونُ' },
    { english: 'You are', arabic: 'أَنْتَ تَكُونُ', note: 'm.' },
    { english: 'You are', arabic: 'أَنْتِ تَكُونِينَ', note: 'f.' },
    { english: 'He is', arabic: 'هُوَ يَكُونُ' },
    { english: 'She is', arabic: 'هِيَ تَكُونُ' },
    { english: 'We are', arabic: 'نَحْنُ نَكُونُ' },
  ],
}

export default kaana
