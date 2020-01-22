import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
  return {
    helperText: {
      margin: 0,
      position: 'absolute',
      bottom: -16,
    },
    helperTextError: {
      color: theme.palette.error.main,
    },
  }
})
