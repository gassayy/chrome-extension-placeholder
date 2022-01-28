import { TwoColumns } from '../../Components/Layouts'
import { ShadowApp } from '../../Components/ShadowRoot'
import PlayGround from './PlayGround'
import Popperover from '../../Components/Popperover/Popperover'
import Modal from '../../Components/Modal/Modal'

function SignInLeft() {
  return <div>left - sign in...</div>
}

export default function SignIn() {
  return (
    <TwoColumns left={<SignInLeft />}>
      <ShadowApp delegatesFocus={false} mode="open">
        <Popperover />
        <Modal />
      </ShadowApp>
    </TwoColumns>
  )
}
