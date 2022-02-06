import { Link, Tooltip, IconButton, Button, TooltipProps, SvgIconProps } from '@mui/material'
import { useState } from 'react'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme'
import { LiveSelector } from '@dimensiondev/holoflows-kit'
import { ShadowApp } from '../../Components/ShadowRoot'
import Popperover from '../../Components/Popperover/Popperover'
import { Modal } from '../../Components/Modal/Modal'
import { TikTokConnectionDialog } from './TikTokConnectionDialog'

const TopNavMenu = '[data-e2e="inbox-icon"]'
const VideoFeed = '[data-e2e="feed-video"]'
const SharedGroup = '[data-e2e="browse-share-group"]'

const NavItemInjection = () => {
  return (
    <ThemeProvider theme={theme}>
      <span>
        <Tooltip title="Cypher Matrix - NFT" arrow>
          <Link underline="none" href="https://fancy-limit-9973.on.fleek.co/" target="_blank" rel="noreferrer">
            <TokenOutlinedIcon fontSize="large" />
          </Link>
        </Tooltip>
      </span>
    </ThemeProvider>
  )
}

type TooltipButtonProps = Partial<TooltipProps>

const TipButton = ({ placement }: TooltipButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title="tips" placement={placement}>
        <IconButton onClick={() => alert('tips tips tips!!!!!')}>
          <MonetizationOnRoundedIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </ThemeProvider>
  )
}

const MintNFTButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title="Mint NFT" placement="top">
        <IconButton onClick={() => window.open('https://fancy-limit-9973.on.fleek.co/', '_blank')}>
          <TokenOutlinedIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </ThemeProvider>
  )
}

function TiktokUserConnectionBox() {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <ShadowApp delegatesFocus={false} mode="open">
      <Popperover />
      <Modal handleClose={handleClose} isOpen={isOpen}>
        <TikTokConnectionDialog handleClose={handleClose} />
      </Modal>
    </ShadowApp>
  )
}

export const injections = [
  {
    origin: 'https://www.tiktok.com',
    match: 'https://www.tiktok.com/@gassayan',
    selector: new LiveSelector().querySelector(TopNavMenu),
    action: function (node: Element) {
      let injectedItem = document.createElement('div')
      injectedItem.style.position = 'relative'
      injectedItem.style.padding = '5px 5px 0px 16px'
      node.insertAdjacentElement('afterend', injectedItem)
      ReactDOM.render(<NavItemInjection />, injectedItem)
    },
  },
  {
    origin: 'https://www.tiktok.com',
    match: 'https://www.tiktok.com',
    selector: new LiveSelector().querySelectorAll(VideoFeed),
    action: function (node: Element) {
      if (node.parentElement) {
        let nftButton = document.createElement('div')
        node.parentElement.lastChild?.appendChild(nftButton)
        node.parentElement.lastChild && ReactDOM.render(<TipButton placement="top" />, nftButton)
      } else {
        console.log("can't get the parent of video feed div!!!!")
      }
    },
  },
  {
    origin: 'https://www.tiktok.com',
    match: 'https://www.tiktok.com/@gassayan',
    selector: new LiveSelector().querySelector(SharedGroup),
    action: function (node: Element) {
      let injectedDiv1 = document.createElement('div')
      injectedDiv1.style.marginRight = '8px'
      injectedDiv1.style.paddingTop = '-2px'
      node.insertBefore(injectedDiv1, node.children[0])
      ReactDOM.render(<MintNFTButton />, injectedDiv1)
      let injectedDiv2 = document.createElement('div')
      injectedDiv2.style.marginTop = '-2px'
      node.insertBefore(injectedDiv2, node.children[0])
      ReactDOM.render(<TipButton placement="top" />, injectedDiv2)
    },
  },
]

export function openConnectionBox() {
  let appDiv = document.querySelector('#app')
  let shadowRoot = document.createElement('div')
  appDiv?.appendChild(shadowRoot)
  appDiv && ReactDOM.render(<TiktokUserConnectionBox />, shadowRoot)
}
