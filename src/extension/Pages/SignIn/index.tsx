import { TwoColumns } from '../../Components/Layouts'
import { ShadowApp } from '../../Components/ShadowRoot'
import PlayGround from './PlayGround'

function SignInLeft() {
  return <div>left - sign in...</div>
}

export default function SignIn() {
  return (
    <TwoColumns left={<SignInLeft />}>
      <ShadowApp delegatesFocus={false} mode="open">
        <p> I am a shadow root</p>
        <PlayGround />
      </ShadowApp>
    </TwoColumns>
  )
}
