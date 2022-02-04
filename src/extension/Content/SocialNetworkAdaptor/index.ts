import type { DOMProxy } from '@dimensiondev/holoflows-kit/es'

export interface HtmlInjection {
  origin: string
  locationPattern: string
  selector: string
  action: (node: Element, key?: unknown, meta?: DOMProxy) => void
}
