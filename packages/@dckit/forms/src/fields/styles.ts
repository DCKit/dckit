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
  raised: {
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
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
