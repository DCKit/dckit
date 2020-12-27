import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import color from '@material-ui/core/colors/blue'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'block',
    visibility: 'visible',
    position: 'absolute',
    width: '100%',
    height: 3,
    zIndex: theme.zIndex.drawer + 10,
    background: color[100],
  },
  hidden: {
    visibility: 'hidden',
  },
  bar: {
    background: color[300],
  },
}))
