import type { VerbData } from '../types'

export const saida: VerbData = {
  id: 'saida',
  root: 'ص – ع – د',
  arabic: 'صَعِدَ',
  transliteration: 'ṣaʿida · Form I',
  english: 'to climb / ascend',
  category: 'Movement',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I climbed', arabic: 'أَنَا صَعِدْتُ' },
    { english: 'You climbed', arabic: 'أَنْتَ صَعِدْتَ', note: 'm.' },
    { english: 'You climbed', arabic: 'أَنْتِ صَعِدْتِ', note: 'f.' },
    { english: 'He climbed', arabic: 'هُوَ صَعِدَ' },
    { english: 'She climbed', arabic: 'هِيَ صَعِدَتْ' },
    { english: 'We climbed', arabic: 'نَحْنُ صَعِدْنَا' },
  ],
  presentForms: [
    { english: 'I climb', arabic: 'أَنَا أَصْعَدُ' },
    { english: 'You climb', arabic: 'أَنْتَ تَصْعَدُ', note: 'm.' },
    { english: 'You climb', arabic: 'أَنْتِ تَصْعَدِينَ', note: 'f.' },
    { english: 'He climbs', arabic: 'هُوَ يَصْعَدُ' },
    { english: 'She climbs', arabic: 'هِيَ تَصْعَدُ' },
    { english: 'We climb', arabic: 'نَحْنُ نَصْعَدُ' },
  ],
}

export default saida
