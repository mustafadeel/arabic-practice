import type { VerbData } from '../types'

export const jazaa: VerbData = {
  id: 'jazaa',
  root: 'ج – ز – ي',
  arabic: 'جَزَى',
  transliteration: 'jazā · Form I (Defective)',
  english: 'to reward / recompense',
  category: 'Moral & Spiritual',
  formNumber: 'Form I',
  pronounPrompt: 'هُوَ',
  pastForms: [
    { english: 'I rewarded', arabic: 'أَنَا جَزَيْتُ' },
    { english: 'You rewarded', arabic: 'أَنْتَ جَزَيْتَ', note: 'm.' },
    { english: 'You rewarded', arabic: 'أَنْتِ جَزَيْتِ', note: 'f.' },
    { english: 'He rewarded', arabic: 'هُوَ جَزَى' },
    { english: 'She rewarded', arabic: 'هِيَ جَزَتْ' },
    { english: 'We rewarded', arabic: 'نَحْنُ جَزَيْنَا' },
  ],
  presentForms: [
    { english: 'I reward', arabic: 'أَنَا أَجْزِي' },
    { english: 'You reward', arabic: 'أَنْتَ تَجْزِي', note: 'm.' },
    { english: 'You reward', arabic: 'أَنْتِ تَجْزِينَ', note: 'f.' },
    { english: 'He rewards', arabic: 'هُوَ يَجْزِي' },
    { english: 'She rewards', arabic: 'هِيَ تَجْزِي' },
    { english: 'We reward', arabic: 'نَحْنُ نَجْزِي' },
  ],
}

export default jazaa
