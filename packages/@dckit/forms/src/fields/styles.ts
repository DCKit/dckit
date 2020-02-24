import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },

  smallLabel: {
    fontSize: 'small',
  },
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
  chipsMargin: {
    marginTop: 8,
    marginLeft: -8,
    width: 'calc(100% + 8px)',
  },
  chipPadding: {
    padding: '0 0px 8px 8px',
  },
}))
