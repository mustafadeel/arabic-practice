import type { VerbData } from './types'

/**
 * Verb Template:
 * To add a new verb:
 * 1. Duplicate this file into src/data/verbs/[verb-name].ts (e.g. sajada.ts)
 * 2. Fill in the root, arabic text, transliteration, english meaning, and the 6 past/present forms.
 * 3. Save the file.
 * Vite automatically discovers it and adds it to the practice deck with zero configuration!
 */
export const templateVerb: VerbData = {
  id: 'template-verb',
  root: 'ف – ع – ل',
  arabic: 'فَعَلَ',
  transliteration: 'fa\'ala · Form I',
  english: 'to do / act',
  category: 'General actions',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I did', arabic: 'أَنَا فَعَلْتُ' },
    { english: 'You did', arabic: 'أَنْتَ فَعَلْتَ', note: 'm.' },
    { english: 'You did', arabic: 'أَنْتِ فَعَلْتِ', note: 'f.' },
    { english: 'He did', arabic: 'هُوَ فَعَلَ' },
    { english: 'She did', arabic: 'هِيَ فَعَلَتْ' },
    { english: 'We did', arabic: 'نَحْنُ فَعَلْنَا' },
  ],
  presentForms: [
    { english: 'I do', arabic: 'أَنَا أَفْعَلُ' },
    { english: 'You do', arabic: 'أَنْتَ تَفْعَلُ', note: 'm.' },
    { english: 'You do', arabic: 'أَنْتِ تَفْعَلِينَ', note: 'f.' },
    { english: 'He does', arabic: 'هُوَ يَفْعَلُ' },
    { english: 'She does', arabic: 'هِيَ تَفْعَلُ' },
    { english: 'We do', arabic: 'نَحْنُ نَفْعَلُ' },
  ],
}

export default templateVerb
