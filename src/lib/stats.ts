export type TestKey =
  | 'ttest'
  | 'mannWhitney'
  | 'pairedT'
  | 'wilcoxon'
  | 'anova'
  | 'kruskal'
  | 'rmAnova'
  | 'friedman'
  | 'chi2'
  | 'mcnemar'
  | 'cochran'

export type TestAnswers = {
  kind?: 'quant' | 'qual'
  groups?: 'two' | 'more'
  design?: 'indep' | 'paired'
  normal?: 'yes' | 'no' | 'unsure'
}

/** Which questions still need an answer, in order. Normality is only asked for quantitative outcomes. */
export function pendingTestQuestions(a: TestAnswers) {
  const q: (keyof TestAnswers)[] = ['kind', 'groups', 'design']
  if (a.kind === 'quant') q.push('normal')
  return q.filter((k) => a[k] === undefined)
}

export function pickTest(a: TestAnswers): TestKey | null {
  if (pendingTestQuestions(a).length) return null
  const two = a.groups === 'two'
  const paired = a.design === 'paired'
  if (a.kind === 'qual') return paired ? (two ? 'mcnemar' : 'cochran') : 'chi2'
  // When unsure, the rank-based test is the safer default
  const normal = a.normal === 'yes'
  if (two) return paired ? (normal ? 'pairedT' : 'wilcoxon') : normal ? 'ttest' : 'mannWhitney'
  return paired ? (normal ? 'rmAnova' : 'friedman') : normal ? 'anova' : 'kruskal'
}

const Z: Record<number, number> = { 90: 1.645, 95: 1.96, 99: 2.576 }

/** n = Z² · p(1−p) / e², with optional finite population correction. p and e are fractions. */
export function sampleSizeProportion(p: number, e: number, confidence: 90 | 95 | 99, population?: number) {
  const z = Z[confidence]
  const n0 = (z * z * p * (1 - p)) / (e * e)
  const n = population && population > 0 ? n0 / (1 + (n0 - 1) / population) : n0
  return Math.ceil(n)
}

export const zFor = (c: 90 | 95 | 99) => Z[c]
