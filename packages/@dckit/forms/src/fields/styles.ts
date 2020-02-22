import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  noselect: {
    userSelect: 'none',
    marginRight: 24,
  },
  directionColumn: {
    flexDirection: 'column',
  },
  directionRow: {
    flexDirection: 'row',
  },
}))
