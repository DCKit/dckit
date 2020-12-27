import { NoSsr, CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { theme } from '../theme'
import { ThemeProvider } from '../constateTheme'

export function Theme(props: any) {
  const { children } = props

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NoSsr>
        <ThemeProvider>{children}</ThemeProvider>
      </NoSsr>
    </MuiThemeProvider>
  )
}
