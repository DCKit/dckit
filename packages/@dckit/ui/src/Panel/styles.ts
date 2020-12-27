import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  accordion: {
    margin: '0 !important',
    padding: '0 !important',
    width: '100%',
    '&:before': {
      backgroundColor: 'transparent !important',
    },
    border: '1px solid #ddd',
  },
  accordionExpanded: {
    margin: '0 !important',
  },
  header: {
    margin: '0 !important',
    padding: '0 !important',
    minHeight: '48px !important',
    display: 'flex',
    alignItems: 'center',
  },
  headerContent: {
    margin: '0 !important',
    padding: '0 !important',
    minHeight: '48px !important',
  },
  headerExpanded: {
    margin: '0 !important',
    padding: '0 !important',
    minHeight: '48px !important',
  },
  expandIcon: {
    margin: '0 12px 0 0 !important',
    padding: '0 !important',
  },
}))
