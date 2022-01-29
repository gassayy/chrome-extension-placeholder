let nftButton = document.createElement('div')
nftButton.setAttribute('class', 'bar-item-wrappe')
let nftLink = document.createElement('a')
nftLink.setAttribute('href', 'https://fancy-limit-9973.on.fleek.co/')
nftLink.innerText = 'NFT'
nftButton.appendChild(nftLink)

export { nftButton }