let nftButton = document.createElement('button')
nftButton.setAttribute('class', 'bar-item-wrappe')
let nftLink = document.createElement('a')
nftLink.setAttribute('href', 'https://fancy-limit-9973.on.fleek.co/')
nftLink.innerText = 'NFT'
nftButton.appendChild(nftLink)

export { nftButton }