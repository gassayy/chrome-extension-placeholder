import { MutationObserverWatcher } from '@dimensiondev/holoflows-kit'
import { injections, openConnectionBox } from './SocialNetworkAdaptor/TikTokAdpator'
import { forEach } from 'lodash'
import { untilDocumentReady, untilDomLoaded } from '../../utils'
import browser from 'webextension-polyfill'

await untilDocumentReady()

// tiktop
if (window.location.origin.match('tiktok')) {
  // popop connection box
  const userId = await browser.runtime
    .sendMessage(browser.runtime.id, { service: 'storage', action: 'get', key: 'user-id' })
    .then(
      (response) => {
        console.log('response', response)
        return response['user-id']
      },
      (reject) => {
        console.log('error', reject)
        return undefined
      },
    )

  // only open the conecntion box if user-id has not been set!!
  !userId && openConnectionBox()
  // insert html injection
  forEach(injections, (item) => {
    const watcher = new MutationObserverWatcher(item.selector).useForeach(item.action)
    watcher.startWatch({ subtree: true, childList: true })
  })
}
