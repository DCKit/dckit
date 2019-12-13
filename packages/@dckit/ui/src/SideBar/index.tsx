import React from 'react'
import cn from 'clsx'
import { Drawer } from '@material-ui/core'
import { useMediaType, renderEmpty } from '../utils'
import { TRenderProp, TCallback } from '../types'
import { useStyles } from './styles'

interface ISideBarProps {
  sideBarOpen: boolean
  onClose: TCallback
  renderSideBar?: TRenderProp
}

const SideBarMobile = ({
  sideBarOpen,
  onClose,
  renderSideBar = renderEmpty,
}: ISideBarProps) => {
  const classes = useStyles()
  return (
    <Drawer
      PaperProps={{ elevation: 8 }}
      classes={{
        paper: classes.drawerPaperMobile,
      }}
      open={sideBarOpen}
      onBackdropClick={onClose}
    >
      {renderSideBar({ sideBarOpen })}
    </Drawer>
  )
}

const SideBarDesktop = ({
  sideBarOpen,
  renderSideBar = renderEmpty,
}: ISideBarProps) => {
  const classes = useStyles()
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
        {renderSideBar({ sideBarOpen })}
      </Drawer>
    </div>
  )
}

export const SideBar = (props: ISideBarProps) => {
  const { isMobile } = useMediaType()
  return isMobile ? <SideBarMobile {...props} /> : <SideBarDesktop {...props} />
}
