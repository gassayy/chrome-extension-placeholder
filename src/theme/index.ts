import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: { main: '#556cd6' },
    secondary: { main: '#19857b' },
    error: { main: red.A400 },
  },
  typography: { fontFamily: '-apple-system, system-ui, sans-serif, monospace' },
  breakpoints: { values: { xs: 0, sm: 600, md: 1112, lg: 1280, xl: 1920 } },
  components: {
    MuiLink: { defaultProps: { underline: 'hover' } },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'unset', minWidth: '100px' },
      },
      defaultProps: { size: 'small', disableElevation: true },
    },
  },
})

export default theme
