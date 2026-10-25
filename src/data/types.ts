export interface VerbForm {
  english: string
  arabic: string
  note?: string
}

export interface VerbData {
  id: string
  root: string
  arabic: string
  transliteration: string
  english: string
  category: string
  formNumber?: string
  pronounPrompt?: string // Defaults to "هُوَ"
  pastForms: VerbForm[]
  presentForms: VerbForm[]
}
