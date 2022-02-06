import { Box, Button, Typography } from '@mui/material'

import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

export default function WalletConnectionForm() {
  const { active, account, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
      console.log(account)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <Box>
      <Button onClick={() => connect()}>Connect to MetaMask</Button>
      {active ? <Typography>Connect with {account}</Typography> : <Typography>Connect to MetaMask</Typography>}
      <Button onClick={disconnect}>Disconnect</Button>
    </Box>
  )
}
