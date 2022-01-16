import Typography from '@mui/material/Typography'
import { SingleColumn } from '../../Components/Layouts'
import { StepperBox, StepItemProps } from './Components/StepperBox'
import UserInfoForm from './Components/UserInfoForm'
import WalletConnectionForm from './Components/WalletConnectionForm'

const steps: StepItemProps[] = [
  { label: 'User Information', item: <UserInfoForm /> },
  { label: 'Connect to Wallet', item: <WalletConnectionForm /> },
  { label: 'Connect to Social Media', item: <Typography>step 3 - item</Typography> },
]

export default function SignUp() {
  return (
    <SingleColumn>
      <StepperBox steps={steps} />
    </SingleColumn>
  )
}
