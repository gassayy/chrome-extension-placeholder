import { MutationObserverWatcher } from '@dimensiondev/holoflows-kit'
import { injections, openConnectionBox } from './SocialNetworkAdaptor/TikTokAdpator'
import { forEach } from 'lodash'
import { untilDocumentReady, untilDomLoaded } from '../../utils'

var browser = require('webextension-polyfill')

await untilDocumentReady()

// tiktop
if (window.location.origin.match('tiktok')) {
  // popop connection box
  openConnectionBox()
  // insert html injection
  forEach(injections, (item) => {
    const watcher = new MutationObserverWatcher(item.selector).useForeach(item.action)
    watcher.startWatch({ subtree: true, childList: true })
  })
}

const xyzValue = window.localStorage.getItem('xyz')
console.log(xyzValue)
browser.storage.local.get('xyz').then((value: any) => {
  console.log(value)
})
