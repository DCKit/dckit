import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
  flexGrow: {
    display: 'flex',
    flexGrow: 1,
  },
  smallLabel: {
    fontSize: 'small',
  },
  noselect: {
    userSelect: 'none',
  },
  marginRight: {
    marginRight: 24,
  },
  marginZero: {
    margin: 0,
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
    marginTop: -2,
    position: 'absolute',
    lineHeight: '0.8rem',
  },
  helperTextInput: {
    marginTop: 52,
    userSelect: 'none',
    position: 'absolute',
    lineHeight: '0.8rem',
  },
  helperTextCheck: {
    marginTop: 40,
    userSelect: 'none',
    position: 'absolute',
    lineHeight: '0.8rem',
  },
  togglesContainer: {
    margin: '12px 0 4px -8px',
    width: 'calc(100% + 8px)',
  },
  togglesPadding: {
    padding: '0 0px 8px 8px',
  },
}))
