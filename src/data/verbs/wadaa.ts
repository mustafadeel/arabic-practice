import type { VerbData } from '../types'

export const wadaa: VerbData = {
  id: 'wadaa',
  root: 'و – ض – ع',
  arabic: 'وَضَعَ',
  transliteration: 'waḍa\'a · Form I (Assimilated)',
  english: 'to put / place',
  category: 'Daily actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I put', arabic: 'أَنَا وَضَعْتُ' },
    { english: 'You put', arabic: 'أَنْتَ وَضَعْتَ', note: 'm.' },
    { english: 'You put', arabic: 'أَنْتِ وَضَعْتِ', note: 'f.' },
    { english: 'He put', arabic: 'هُوَ وَضَعَ' },
    { english: 'She put', arabic: 'هِيَ وَضَعَتْ' },
    { english: 'We put', arabic: 'نَحْنُ وَضَعْنَا' },
  ],
  presentForms: [
    { english: 'I put', arabic: 'أَنَا أَضَعُ' },
    { english: 'You put', arabic: 'أَنْتَ تَضَعُ', note: 'm.' },
    { english: 'You put', arabic: 'أَنْتِ تَضَعِينَ', note: 'f.' },
    { english: 'He puts', arabic: 'هُوَ يَضَعُ' },
    { english: 'She puts', arabic: 'هِيَ تَضَعُ' },
    { english: 'We put', arabic: 'نَحْنُ نَضَعُ' },
  ],
}

export default wadaa
