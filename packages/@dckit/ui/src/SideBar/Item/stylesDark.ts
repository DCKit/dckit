import { makeStyles } from '@material-ui/core/styles'

export const useStylesDark = makeStyles(() => ({
  divider: {
    margin: '6px 0 !important',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  root: {
    height: 44,
    paddingLeft: 16,
    color: 'rgba(255, 255, 255, 1)',
    '&.-selected': {
      fontWeight: 'bold',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },
  },
  icon: {
    marginRight: -16,
  },
}))
