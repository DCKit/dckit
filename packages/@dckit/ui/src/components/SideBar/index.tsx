import React, { useContext } from 'react'
import cn from 'clsx'
import { Drawer } from '@material-ui/core'
import { useMediaType } from '@utils'
import { SideBarConsumer } from '@ports'
import { TCallback } from 'types'
import { useStyles } from './styles'

interface ISideBarContext {
  sideBarOpen: boolean
  showSideBar: TCallback
}

const defaultSideBarContext: ISideBarContext = {
  sideBarOpen: false,
  showSideBar: () => {},
}

export const SideBarContext = React.createContext(defaultSideBarContext)

const SideBarMobile = () => {
  const classes = useStyles()
  const { sideBarOpen, showSideBar } = useContext(SideBarContext)
  return (
    <Drawer
      PaperProps={{ elevation: 8 }}
      classes={{
        paper: classes.drawerPaperMobile,
      }}
      open={sideBarOpen}
      onBackdropClick={() => showSideBar(false)}
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
