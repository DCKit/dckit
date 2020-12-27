import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    margin: '6px 0 !important',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  root: {
    height: 44,
    paddingLeft: 14,
    color: theme.palette.primary.main,
    borderLeft: '3px solid transparent',
    '&.-selected': {
      color: '#555',
      borderLeft: `2px solid ${theme.palette.primary.main}`,
      //fontWeight: 'bold',
      backgroundColor: 'rgba(0, 180, 250, 0.1)',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  icon: {
    marginRight: -16,
  },
}))
