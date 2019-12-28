import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useTabs = makeStyles((theme: Theme) => {
  const { spacing, palette } = theme
  return {
    root: {
      marginLeft: spacing(1),
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: palette.common.white,
    },
  }
})

export const useTabItem = makeStyles((theme: Theme) => {
  const { breakpoints, spacing } = theme
  return {
    root: {
      textTransform: 'initial',
      margin: spacing(0, 2),
      minWidth: 0,
      [breakpoints.up('md')]: {
        minWidth: 0,
      },
    },
    wrapper: {
      fontWeight: 'normal',
      letterSpacing: 0.5,
    },
  }
})
