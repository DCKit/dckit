import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
  return {
    paper: {
      margin: 0,
      position: 'absolute',
      top: 70,
      overflowY: 'auto',
      maxHeight: `calc(100% - ${theme.spacing(12) + 70}px)`,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(),
      top: theme.spacing(),
      color: theme.palette.grey[500],
    },
  }
})
