import {
  LiveSelector,
  MutationObserverWatcher,
} from '@dimensiondev/holoflows-kit';
import { forEach } from 'lodash';

// add a link on nav menu
const navWrapper = new LiveSelector()
  .querySelector<HTMLDivElement>('div.nav-wrapper')
  .enableSingleMode()
  .evaluate();

if (navWrapper) {
  let link = document.createElement('a');
  link.setAttribute('href', 'https://fancy-limit-9973.on.fleek.co/');
  link.setAttribute('class', 'nav-item');
  link.innerText = 'Publish NFT';
  navWrapper.append(link);
}

const watcher = new MutationObserverWatcher(
  new LiveSelector().querySelectorAll('div.video-feed-item')
).useForeach((node, key, meta) => {
  const itemActionBar = node.getElementsByClassName('item-action-bar');
  let nftButton = document.createElement('div');
  nftButton.setAttribute('class', 'bar-item-wrappe');
  let nftLink = document.createElement('a');
  nftLink.setAttribute('href', 'https://fancy-limit-9973.on.fleek.co/');
  nftLink.innerText = 'NFT';
  nftButton.appendChild(nftLink);
  itemActionBar[0]?.appendChild(nftButton);
});

watcher.startWatch({ subtree: true, childList: true });
