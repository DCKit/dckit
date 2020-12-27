import * as React from 'react'
import cn from 'clsx'
import { Drawer } from '@material-ui/core'
import { SideBarHead, SideBarNav, SideBarTail } from '../ports'
import { useStyles } from './styles'
import { useStylesDark } from './stylesDark'
import { SideBarContext } from './context'
import { useTheme } from '../constateTheme'

export const SideBarMobile = () => {
  const classes = useStyles()
  const { sideBarOpen, showSideBar } = React.useContext(SideBarContext)
  const closeSideBar = () => showSideBar(false)
  return (
    <Drawer
      PaperProps={{ elevation: 8 }}
      classes={{
        paper: classes.drawerPaperMobile,
      }}
      open={sideBarOpen}
      onBackdropClick={closeSideBar}
    >
      <SideBarHead.Consumer />
      <SideBarNav.Consumer />
      <SideBarTail.Consumer />
    </Drawer>
  )
}

export const SideBarDesktop = () => {
  const { sidebarDark } = useTheme()
  const clsLight = useStyles()
  const clsDark = useStylesDark()
  const classes = sidebarDark ? clsDark : clsLight

  const { sideBarOpen } = React.useContext(SideBarContext)
  return (
    <div className={classes.sideBarContainer}>
      <Drawer
        variant="permanent"
        PaperProps={{ elevation: 6 }}
        classes={{
          paper: cn(
            classes.drawerPaper,
            !sideBarOpen && classes.drawerPaperCollapsed
          ),
        }}
        open={sideBarOpen}
      >
        <SideBarHead.Consumer />
        <SideBarNav.Consumer />
        <SideBarTail.Consumer />
      </Drawer>
    </div>
  )
}
