import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  header: {
    marginLeft: 24,
    color: '#777',
    fontSize: 16,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    borderBottomWidth: 1,
    borderBottomStyle: 'dotted',
    '&:hover': {
      color: '#1da1f2 !important',
      borderBottomColor: '#1da1f2 !important',
    },
  },
  span: {
    margin: 0,
    padding: 0,
    color: '#555',
    fontSize: 18,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    cursor: 'default',
  },
}))
