import { TwoColumns } from '../../Components/Layouts'
import { ShadowApp } from '../../Components/ShadowRoot'
import PlayGround from './PlayGround'
import Popperover from '../../Components/Popperover/Popperover'
import Modal from '../../Components/Modal/Modal'
import { NftIcon, TokenIcon } from '../../Components/SvgIcons'
// import TokenIcon from '@mui/icons-material/Token'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'

function SignInLeft() {
  return <div>left - sign in...</div>
}

export default function SignIn() {
  return (
    <TwoColumns left={<SignInLeft />}>
      <NftIcon color="primary" fontSize="large" viewBox="0 0 60 24" />
      <NftIcon color="primary" fontSize="medium" viewBox="0 0 60 24" />
      <NftIcon color="primary" fontSize="small" viewBox="0 0 60 24" />
      <NftIcon color="primary" fontSize="large" viewBox="0 0 60 24" />

      <TokenIcon color="primary" fontSize="large" />
      <TokenIcon color="primary" fontSize="medium" />
      <TokenIcon color="primary" fontSize="small" />
      <TokenIcon color="primary" />

      <TokenOutlinedIcon fontSize="large" />
      <TokenOutlinedIcon fontSize="large" />
      <TokenOutlinedIcon fontSize="large" />
      <TokenOutlinedIcon fontSize="large" />
      <TokenOutlinedIcon fontSize="large" />

      <TipsAndUpdatesIcon />
      <ShadowApp delegatesFocus={false} mode="open">
        <Popperover />
        <Modal />
      </ShadowApp>
    </TwoColumns>
  )
}
