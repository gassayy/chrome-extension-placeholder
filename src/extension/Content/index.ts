import { LiveSelector, MutationObserverWatcher } from '@dimensiondev/holoflows-kit'
import browser from 'webextension-polyfill'

import { TopNavMenuSelector, VideoFeedSelector } from './Selectors/twitter'

// add a link on nav menu
const navWrapper = new LiveSelector().querySelector<HTMLDivElement>(TopNavMenuSelector).enableSingleMode().evaluate()

if (navWrapper) {
  let link = document.createElement('a')
  link.setAttribute('href', 'https://fancy-limit-9973.on.fleek.co/')
  link.setAttribute('class', 'nav-item')
  link.innerText = 'Publish NFT'
  navWrapper.append(link)
}

const watcher = new MutationObserverWatcher(new LiveSelector().querySelectorAll(VideoFeedSelector)).useForeach(
  (node, key, meta) => {
    if (node.parentElement) {
      let nftButton = document.createElement('div')
      nftButton.setAttribute('class', 'bar-item-wrappe')
      let nftLink = document.createElement('a')
      nftLink.setAttribute('href', 'https://fancy-limit-9973.on.fleek.co/')
      nftLink.innerText = 'NFT'
      nftButton.appendChild(nftLink)
      node.parentElement.lastChild?.appendChild(nftButton)
    } else {
      console.log("can't get the parent of video feed div!!!!")
    }
  },
)

watcher.startWatch({ subtree: true, childList: true })

window.onload = () => {
  console.log('onload event')
}
