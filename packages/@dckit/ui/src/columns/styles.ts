import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  tableRowHover: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  tableRowSelected: {
    backgroundColor: theme.palette.action.selected,
  },
  headerCell: {
    paddingBottom: 8,
    paddingTop: 8,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  tableContainer: {
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
  },
  tableCell: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  expandableCell: {
    display: 'flex',
    alignItems: 'center',
    height: 53,
  },
  expandIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandIconExpanded: {
    transform: 'rotate(90deg)',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& button': {
      marginLeft: 8,
    },
  },
  label: {
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  resultBox: {
    height: 56,
    marginTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F4F6F9',
    borderRadius: theme.shape.borderRadius,
  },
  resultText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  resultEmpty: {
    color: theme.palette.text.hint,
    fontStyle: 'italic',
  },
  nameColumnInactive: {
    color: theme.palette.text.secondary,
  },
  selectedColumnHint: {
    color: theme.palette.text.hint,
    fontStyle: 'italic',
  },
  actionColumn: {
    position: 'relative',
    marginLeft: -16,
  },
  actionColumnButtons: {
    position: 'absolute',
    top: -24,
    '& button': {
      marginRight: 4,
    },
  },
}))
