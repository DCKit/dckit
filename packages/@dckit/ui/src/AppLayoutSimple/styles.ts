import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { contentPadding, drawerWidth, drawerMinWidth } from '../theme'

export const useStyles = makeStyles((theme: Theme) => {
  const { transitions } = theme
  const barWidth = `calc(100% - ${drawerWidth}px)`
  const barMinWidth = `calc(100% - ${drawerMinWidth}px)`

  const transition = {
    easing: transitions.easing.sharp,
    duration: transitions.duration.enteringScreen,
  }
  const transitionContent = transitions.create(['width', 'left'], transition)

  return {
    menuButton: {
      marginLeft: 4,
      marginRight: 4,
    },
    content: {
      backgroundColor: '#fcfcfc',
      position: 'fixed',
      padding: contentPadding,
      overflowX: 'auto',
      overflowY: 'scroll',
    },
    contentFullPage: {
      top: 0,
      height: '100%',
      left: drawerMinWidth,
      width: barMinWidth,
      transition: transitionContent,
    },
    contentShift: {
      left: drawerWidth,
      width: barWidth,
      transition: transitionContent,
    },
  }
})
