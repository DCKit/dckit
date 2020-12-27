import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  badge: {
    display: 'flex',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    fontSize: '14px',
    fontWeight: 400,
    opacity: 1,
    lineHeight: '20px',
    padding: '0 4px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
}))
