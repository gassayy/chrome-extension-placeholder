import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

interface ShadowRootProp extends React.PropsWithChildren<{}> {
  delegatesFocus: boolean
  mode: 'open' | 'closed'
  stylessheet?: string
}

export function ShadowApp({ delegatesFocus, mode, children }: ShadowRootProp) {
  const hostRef = useRef<HTMLDivElement>(null!)
  const [root, setRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const shadowRoot = hostRef.current.attachShadow({ mode: mode })
    const head = shadowRoot.appendChild(document.createElement('head'))
    const bootstrapStyleSheet = document.createElement('link')
    bootstrapStyleSheet.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
    bootstrapStyleSheet.rel = 'stylesheet'
    head.appendChild(bootstrapStyleSheet)
    const mountPoint = shadowRoot.appendChild(document.createElement('div'))
    setRoot(mountPoint)
  }, [mode])

  return <div ref={hostRef}>{root && ReactDOM.createPortal(children, root)}</div>
}

/**
 * ! Do not export !
 */
let mountingHost: HTMLDivElement // visible to the outside of react component tree or dom tree
let mountingShadowRoot: ShadowRoot
let mountingPoint: HTMLDivElement // served as root of the react component tree of dom tree, not visible to the outside of react component tree or dom tree

export function setupShadowHost(mode: ShadowRootMode, delegatesFocus: boolean = false) {
  if (mountingHost && mountingPoint) return { mountingHost, mountingPoint }
  mountingHost = document.body.appendChild(document.createElement('div'))
  mountingShadowRoot = mountingHost.attachShadow({ mode: mode })
  mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'))
  return { mountingHost, mountingPoint }
}

/**
 * TODO: we need insert stylesheets from material-ui theme
 * reference to: https://github.com/DimensionDev/Maskbook/blob/develop/packages/mask/src/utils/shadow-root/renderInShadowRoot.tsx
 * git issue:
 *  - https://github.com/mui-org/material-ui/issues/22449
 *    based on the above discussion, we could simply inline all shadow root > div > div creation, then render mui inside the
 *    second div as container
 *  - https://github.com/mui-org/material-ui/pull/22465
 *  - https://github.com/mui-org/material-ui/issues/16223
 *  - https://github.com/mui-org/material-ui/issues/17473
 *  - A known issue:
 *    https://github.com/DimensionDev/Maskbook/issues/2815
 */
