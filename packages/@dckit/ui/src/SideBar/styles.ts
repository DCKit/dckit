import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { drawerWidth, drawerMinWidth } from '../theme'

export const useStyles = makeStyles((theme: Theme) => {
  const transition = {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }
  const transitionDrawer = theme.transitions.create(['width'], transition)

  return {
    sideBarContainer: {
      display: 'flex',
      height: '100vh',
      position: 'absolute',
    },
    drawerPaper: {
      position: 'fixed',
      border: 0,
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      width: drawerWidth,
      height: '100vh',
      transition: transitionDrawer,
    },
    drawerPaperMobile: {
      position: 'fixed',
      top: 0,
      border: 0,
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      width: drawerWidth,
      height: '100vh',
    },
    drawerPaperCollapsed: {
      width: drawerMinWidth,
      transition: transitionDrawer,
    },
  }
})
