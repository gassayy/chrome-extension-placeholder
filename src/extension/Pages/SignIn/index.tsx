import { TwoColumns } from '../../Components/Layouts';

function SignInLeft() {
  return <div>left - sign in...</div>;
}

export default function SignIn() {
  return (
    <TwoColumns left={<SignInLeft />}>
      <div> sign in</div>
    </TwoColumns>
  );
}
