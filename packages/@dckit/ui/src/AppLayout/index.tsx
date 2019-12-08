import React, { useState } from 'react'
import cn from 'clsx'

import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/Menu'
import CollapseIcon from '@material-ui/icons/ChevronLeft'

import { renderEmpty, useMobile } from '../utils'
import { TRenderProp } from '../types'
import { styles } from './styles'

const useStyles = makeStyles(styles)

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
  const classes: any = useStyles()
  const isMobile = useMobile()
  const [sideBarOpen, showSideBar] = useState(!isMobile)
  const thisState = { sideBarOpen }

  const toggleSideBar = () => showSideBar(!sideBarOpen)

  return (
    <>
      <AppBar
        className={cn(
          isMobile ? classes.appBarMobile : classes.appBar,
          sideBarOpen && classes.appBarShift
        )}
      >
        <Toolbar disableGutters={true} className={classes.toolBar}>
          <IconButton
            color="inherit"
            onClick={toggleSideBar}
            className={classes.menuButton}
            data-testid="toggle-sidebar-button"
          >
            {sideBarOpen ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
          {renderAppBar(thisState)}
        </Toolbar>
      </AppBar>
      <div
        className={cn(
          isMobile ? classes.pageBarMobile : classes.pageBar,
          sideBarOpen && classes.pageBarShift
        )}
      >
        {renderPageBar(thisState)}
      </div>
      {renderSideBar(thisState)}
      <main
        className={cn(
          isMobile ? classes.contentMobile : classes.content,
          sideBarOpen && classes.contentShift
        )}
      >
        {children}
      </main>
    </>
  )
}
