import type { VerbData } from '../types'

export const wajada: VerbData = {
  id: 'wajada',
  root: 'و – ج – د',
  arabic: 'وَجَدَ',
  transliteration: 'wajada · Form I (Assimilated)',
  english: 'to find',
  category: 'Perception',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I found', arabic: 'أَنَا وَجَدْتُ' },
    { english: 'You found', arabic: 'أَنْتَ وَجَدْتَ', note: 'm.' },
    { english: 'You found', arabic: 'أَنْتِ وَجَدْتِ', note: 'f.' },
    { english: 'He found', arabic: 'هُوَ وَجَدَ' },
    { english: 'She found', arabic: 'هِيَ وَجَدَتْ' },
    { english: 'We found', arabic: 'نَحْنُ وَجَدْنَا' },
  ],
  presentForms: [
    { english: 'I find', arabic: 'أَنَا أَجِدُ' },
    { english: 'You find', arabic: 'أَنْتَ تَجِدُ', note: 'm.' },
    { english: 'You find', arabic: 'أَنْتِ تَجِدِينَ', note: 'f.' },
    { english: 'He finds', arabic: 'هُوَ يَجِدُ' },
    { english: 'She finds', arabic: 'هِيَ تَجِدُ' },
    { english: 'We find', arabic: 'نَحْنُ نَجِدُ' },
  ],
}

export default wajada
