import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
  const contentPadding = 0
  const drawerWidth = 240
  const drawerMinWidth = 56
  const appBarHeight = 48
  const pageBarHeight = 32
  const barsHeight = appBarHeight + pageBarHeight
  const { palette, zIndex, transitions } = theme
  const { common, background, primary } = palette

  const transition = {
    easing: transitions.easing.sharp,
    duration: transitions.duration.enteringScreen,
  }
  const transitionBar = transitions.create(['width', 'margin'], transition)
  const transitionContent = transitions.create(['width', 'left'], transition)

  return {
    appBar: {
      position: 'fixed',
      height: appBarHeight,
      zIndex: zIndex.drawer + 1,
      backgroundColor: primary.dark,
      transition: transitionBar,
    },
    appBarMobile: {
      position: 'fixed',
      height: appBarHeight,
      zIndex: zIndex.drawer - 1,
    },
    appBarShift: {
      zIndex: zIndex.drawer - 1,
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionBar,
    },
    toolBar: {
      display: 'flex',
      padding: 0,
      margin: 0,
      minHeight: appBarHeight,
    },
    menuButton: {
      marginLeft: 4,
      marginRight: 4,
    },
    pageBar: {
      position: 'fixed',
      left: 0,
      top: appBarHeight,
      height: pageBarHeight,
      zIndex: zIndex.drawer - 2,
      background: common.white,
      boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
    },
    pageBarDesktop: {
      width: `calc(100% - ${drawerMinWidth}px)`,
      marginLeft: drawerMinWidth,
      transition: transitionBar,
    },
    pageBarMobile: {
      width: '100%',
      marginLeft: 0,
    },
    pageBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionBar,
    },
    content: {
      background: background.default,
      position: 'fixed',
      padding: contentPadding,
      overflow: 'auto',
    },
    contentDesktop: {
      left: drawerMinWidth,
      width: `calc(100% - ${drawerMinWidth}px)`,
      transition: transitionContent,
    },
    contentMobile: {
      left: 0,
      width: '100%',
    },
    contentOneBar: {
      top: appBarHeight,
      height: `calc(100% - ${appBarHeight}px)`,
    },
    contentTwoBars: {
      top: barsHeight,
      height: `calc(100% - ${barsHeight}px)`,
    },
    contentShift: {
      left: `calc(${drawerWidth}px)`,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionContent,
    },
  }
})
