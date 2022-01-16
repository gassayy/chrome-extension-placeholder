import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../theme'
import { Pages } from '../Pages/routes'
import { HashRouter, Link } from 'react-router-dom'
// import { Web3ReactProvider } from '@web3-react/core'
// import Web3 from 'web3'

// function getLibrary(provider: any) {
//   return new Web3(provider)
// }

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/welcome">welcome</Link> |<Link to="/setup">set up</Link> |{' '}
      <Link to="/sign-up">sign up</Link> | <Link to="/sign-in">sign in</Link>
    </nav>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <Web3ReactProvider getLibrary={getLibrary}> */}
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <HashRouter>
      <Navbar />
      <Pages />
    </HashRouter>
    {/* </Web3ReactProvider> */}
  </ThemeProvider>,
  document.querySelector('#app-container'),
)
