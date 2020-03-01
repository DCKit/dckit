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
  const appBarZIndex = zIndex.drawer - 1
  const pageBarZIndex = appBarZIndex - 1

  const barWidth = `calc(100% - ${drawerWidth}px)`
  const barMinWidth = `calc(100% - ${drawerMinWidth}px)`

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
      width: barMinWidth,
      marginLeft: drawerMinWidth,
      zIndex: appBarZIndex,
      backgroundColor: primary.dark,
      transition: transitionBar,
    },
    appBarMobile: {
      position: 'fixed',
      height: appBarHeight,
      zIndex: appBarZIndex,
    },
    appBarShift: {
      zIndex: appBarZIndex,
      marginLeft: drawerWidth,
      width: barWidth,
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
      zIndex: pageBarZIndex,
      background: common.white,
      boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
    },
    pageBarDesktop: {
      width: barMinWidth,
      marginLeft: drawerMinWidth,
      transition: transitionBar,
    },
    pageBarMobile: {
      width: '100%',
      marginLeft: 0,
    },
    pageBarShift: {
      marginLeft: drawerWidth,
      width: barWidth,
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
      width: barMinWidth,
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
      left: drawerWidth,
      width: barWidth,
      transition: transitionContent,
    },
  }
})
