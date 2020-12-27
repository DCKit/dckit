import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  loading: {
    fontSize: 12,
    animation: 'loading-animation normal 1s infinite',
  },
}))
