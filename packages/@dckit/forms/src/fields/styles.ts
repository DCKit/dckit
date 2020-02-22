import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  noselect: {
    userSelect: 'none',
    marginRight: 24,
  },
  fullWidth: {
    width: '100%',
  },
  directionColumn: {
    flexDirection: 'column',
  },
  directionRow: {
    flexDirection: 'row',
    width: '100%',
  },
  helperText: {
    userSelect: 'none',
    marginTop: 0,
  },
}))
