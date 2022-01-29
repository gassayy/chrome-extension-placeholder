import { LiveSelector, MutationObserverWatcher } from '@dimensiondev/holoflows-kit'
import browser from 'webextension-polyfill'
import { nftButton } from './AgumentedElements/NFTButton'
import { VideoFeedSelector } from './Selectors/twitter'

const watcher = new MutationObserverWatcher(new LiveSelector().querySelectorAll(VideoFeedSelector)).useForeach(
  (node, key, meta) => {
    if (node.parentElement) {
      node.parentElement.lastChild?.appendChild(nftButton)
    } else {
      console.log("can't get the parent of video feed div!!!!")
    }
  },
)

watcher.startWatch({ subtree: true, childList: true })

