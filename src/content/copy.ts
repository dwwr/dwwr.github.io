/** Assembled portfolio copy from Tina JSON + UI chrome. */

export { copy } from './loadCopy'
export type { Copy } from './loadCopy'

/** Replace `{key}` placeholders in copy templates. */
export function formatCopy(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  )
}
