import React, { useContext } from 'react'
import cn from 'clsx'
import { Drawer } from '@material-ui/core'
import { useMediaType } from '@utils'
import { SideBarConsumer } from '@ports'
import { useStyles } from './styles'
import { SideBarContext } from './context'

const SideBarMobile = () => {
  const classes = useStyles()
  const { sideBarOpen, showSideBar } = useContext(SideBarContext)
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
      <SideBarConsumer />
    </Drawer>
  )
}

const SideBarDesktop = () => {
  const classes = useStyles()
  const { sideBarOpen } = useContext(SideBarContext)
  return (
    <div className={classes.sideBarContainer}>
      <Drawer
        variant="permanent"
        PaperProps={{ elevation: sideBarOpen ? 8 : 5 }}
        classes={{
          paper: cn(
            classes.drawerPaper,
            !sideBarOpen && classes.drawerPaperCollapsed
          ),
        }}
        open={sideBarOpen}
      >
        <SideBarConsumer />
      </Drawer>
    </div>
  )
}

export const SideBar = () => {
  const { isMobile } = useMediaType()
  return isMobile ? <SideBarMobile /> : <SideBarDesktop />
}
