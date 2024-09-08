import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type CheckboxPrefix = 'checkbox'

export const staticCheckbox: Record<`${CheckboxPrefix}-${string}` | CheckboxPrefix, string> = {
  // base
  'checkbox': 'shrink-0 text-md checkbox-primary flex items-center data-[state=unchecked]:bg-base text-inverted transition-base bg-brand w-1em h-1em border border-brand rounded-sm disabled:n-disabled',
  'checkbox-label': 'block',
  'checkbox-reverse': 'flex-row-reverse',

  // wrappers
  'checkbox-wrapper': 'gap-x-3 relative inline-flex items-center hover:cursor-pointer',

  // icon
  'checkbox-indicator': 'flex items-center justify-center h-full w-full data-[state=unchecked]:opacity-0 transition-base opacity-100 text-inverted',
  'checkbox-icon-base': 'w-1em h-1em',
  'checkbox-checked-icon': 'i-check',
  'checkbox-unchecked-icon': '',
  'checkbox-indeterminate-icon': 'i-lucide-minus',
}

export const dynamicCheckbox = [
  [/^checkbox-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const checkbox = [
  ...dynamicCheckbox,
  staticCheckbox,
]
