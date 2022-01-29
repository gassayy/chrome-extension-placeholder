import { LiveSelector, MutationObserverWatcher } from '@dimensiondev/holoflows-kit'
import { VideoCountSelector } from './Selectors/youtube'
import { nftButton } from './AgumentedElements/NFTButton'

const watcher = new MutationObserverWatcher(new LiveSelector().querySelectorAll(VideoCountSelector)).useForeach(
    (node, key, meta) => {
        let parent = node.parentElement?.parentElement
        if (parent) {
            parent.append(nftButton)
        } else {
            console.log("can't get the parent of the video anchor")
        }
    }

);

watcher.startWatch({ subtree: true, childList: true })