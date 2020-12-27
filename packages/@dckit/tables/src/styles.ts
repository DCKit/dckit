import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  pagePaper: {
    width: '100%',
    marginTop: 24,
    paddingLeft: 48,
    paddingRight: 48,
    paddingBottom: 48,
  },
  tableBar: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  tableTitle: {
    marginRight: 24,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 22,
  },
  tableContainer: {
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
  },
  tableRow: {
    '&:hover': {
      //backgroundColor: '#f8f8f8',
      boxShadow: '0px 1px 6px 0px rgba(0,0,0,0.25)',
    },
  },
  actionColumn: {
    position: 'relative',
    paddingLeft: 48,
  },
  actionColumnButtons: {
    position: 'absolute',
    top: -24,
    '& button': {
      marginRight: 4,
    },
  },
  headerCell: {
    paddingBottom: 6,
    paddingTop: 6,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 13,
    color: '#888',
  },
}))
