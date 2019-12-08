export const styles = (theme: any): any => {
  const drawerWidth = theme.mixins.sideBar.width
  const appBarHeight = theme.mixins.appBar.height
  const pageBarHeight = theme.mixins.pageBar.height
  const barsHeight = appBarHeight + pageBarHeight

  const transition = {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }
  const transitionBar = theme.transitions.create(
    ['width', 'margin'],
    transition
  )
  const transitionContent = theme.transitions.create(
    ['width', 'left'],
    transition
  )

  return {
    appBar: {
      position: 'absolute',
      height: appBarHeight,
      zIndex: theme.zIndex.drawer + 1,
      transition: transitionBar,
    },
    appBarMobile: {
      position: 'absolute',
      height: appBarHeight,
      zIndex: theme.zIndex.drawer - 1,
    },
    appBarShift: {
      zIndex: theme.zIndex.drawer - 1,
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
      marginLeft: 8,
      marginRight: 8,
    },
    pageBar: {
      position: 'absolute',
      top: appBarHeight,
      height: pageBarHeight,
      width: `calc(100% - ${theme.spacing.unit * 7}px)`,
      marginLeft: theme.spacing.unit * 7,
      zIndex: theme.zIndex.drawer - 2,
      background: 'rgba(0,0,0,0.01)',
      boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.2)',
      transition: transitionBar,
      display: 'flex',
      alignItems: 'center',
    },
    pageBarMobile: {
      position: 'absolute',
      top: appBarHeight,
      height: pageBarHeight,
      width: '100%',
      marginLeft: 0,
      zIndex: theme.zIndex.drawer - 2,
      background: 'rgba(0,0,0,0.01)',
      boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
    },
    pageBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionBar,
    },
    content: {
      background: theme.palette.srxGrey,
      position: 'fixed',
      top: barsHeight,
      left: theme.spacing.unit * 7,
      width: `calc(100% - ${theme.spacing.unit * 7}px)`,
      height: `calc(100vh - ${barsHeight}px)`,
      padding: theme.spacing.unit * 2,
      overflow: 'auto',
      transition: transitionContent,
    },
    contentMobile: {
      background: theme.palette.srxGrey,
      position: 'fixed',
      top: barsHeight,
      left: 0,
      width: '100vw',
      height: `calc(100vh - ${barsHeight}px)`,
      padding: theme.spacing.unit * 2,
      overflow: 'auto',
    },
    contentShift: {
      left: `calc(${drawerWidth}px)`,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionContent,
    },
  }
}
