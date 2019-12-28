import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  divider: {
    margin: '6px 0 !important',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  root: {
    height: 44,
    paddingLeft: 24,
    '&.-selected': {
      fontWeight: 'bold',
    },
    '&:hover': {
      backgroundColor: '#fcfcfc',
    },
  },
  icon: {
    marginRight: 24,
  },
}))
