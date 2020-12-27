import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
  contentPadding,
  drawerWidth,
  drawerMinWidth,
  appBarHeight,
  pageBarHeight,
} from '../theme'

export const useStyles = makeStyles((theme: Theme) => {
  const barsHeight = appBarHeight + pageBarHeight
  const { palette, zIndex, transitions } = theme
  const { common } = palette
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
      backgroundColor: common.white,
      zIndex: appBarZIndex,
      transition: transitionBar,
      //borderBottom: '1px solid #eee',
      boxShadow: '0px 5px 8px -8px rgba(0,0,0,0.4)',
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
      background: common.white,
      position: 'fixed',
      padding: contentPadding,
      overflowX: 'auto',
      overflowY: 'scroll',
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
