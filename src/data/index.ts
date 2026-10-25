import type { VerbData } from './types'

// Automatically import all .ts files from the ./verbs directory
// Any new verb file added into ./verbs will be auto-discovered with zero manual configuration!
const verbModules = import.meta.glob<{ default: VerbData }>('./verbs/*.ts', { eager: true })

export const allVerbs: VerbData[] = Object.values(verbModules)
  .map((mod) => mod.default)
  .filter((verb): verb is VerbData => Boolean(verb && verb.id))

/**
 * Modern Fisher-Yates shuffle algorithm for fair, unbiased randomization
 */
export function shuffleVerbs(verbs: VerbData[]): VerbData[] {
  const array = [...verbs]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export * from './types'
