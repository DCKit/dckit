import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
  return {
    helperText: {
      position: 'absolute',
      bottom: -18,
    },
  }
})
