import { MutationObserverWatcher } from '@dimensiondev/holoflows-kit'
import { injections } from './SocialNetworkAdaptor/TikTokAdpator'
import { forEach } from 'lodash'

var browser = require('webextension-polyfill')

forEach(injections, (item) => {
  const watcher = new MutationObserverWatcher(item.selector).useForeach(item.action)
  watcher.startWatch({ subtree: true, childList: true })
})

const xyzValue = window.localStorage.getItem('xyz')
console.log(xyzValue)
browser.storage.local.get('xyz').then((value: any) => {
  console.log(value)
})
