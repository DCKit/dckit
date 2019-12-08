import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/Menu'
import CollapseIcon from '@material-ui/icons/ChevronLeft'
import cn from 'clsx'
import { renderEmpty, useIsMobile } from '../utils'
import { TRenderProp } from '../types'
import { useStyles } from './styles'

export interface IAppLayoutProps {
  renderAppBar?: TRenderProp
  renderPageBar?: TRenderProp
  renderSideBar?: TRenderProp
}

export const AppLayout: React.FC<IAppLayoutProps> = (
  {
    renderAppBar = renderEmpty,
    renderPageBar = renderEmpty,
    renderSideBar = renderEmpty,
  },
  children
) => {
  const classes = useStyles()
  const isMobile = useIsMobile()
  const [sideBarOpen, showSideBar] = useState(!isMobile)
  const thisState = { sideBarOpen }
  const toggleSideBar = () => showSideBar(!sideBarOpen)

  const {
    appBarMobile,
    appBar,
    appBarShift,
    toolBar,
    menuButton,
    pageBarMobile,
    pageBar,
    pageBarShift,
    contentMobile,
    content,
    contentShift,
  } = classes

  return (
    <>
      <AppBar
        className={cn(
          isMobile ? appBarMobile : appBar,
          sideBarOpen && appBarShift
        )}
      >
        <Toolbar disableGutters={true} className={toolBar}>
          <IconButton
            color="inherit"
            onClick={toggleSideBar}
            className={menuButton}
            data-testid="toggle-sidebar-button"
          >
            {sideBarOpen ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
          {renderAppBar(thisState)}
        </Toolbar>
      </AppBar>
      <div
        className={cn(
          isMobile ? pageBarMobile : pageBar,
          sideBarOpen && pageBarShift
        )}
      >
        {renderPageBar(thisState)}
      </div>
      {renderSideBar(thisState)}
      <main
        className={cn(
          isMobile ? contentMobile : content,
          sideBarOpen && contentShift
        )}
      >
        {children}
      </main>
    </>
  )
}
