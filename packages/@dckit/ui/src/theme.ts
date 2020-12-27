import { createMuiTheme } from '@material-ui/core/styles'
import { lightBlue, red } from '@material-ui/core/colors'
import { shadows } from './shadows'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[700],
    },
    secondary: {
      main: red[400],
    },
    error: {
      main: '#D62B57',
    },
  },
  shadows,
})

export const contentPadding = 0
export const drawerWidth = 220
export const drawerMinWidth = 56
export const appBarHeight = 44
export const pageBarHeight = 32
