import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/Menu'
import CollapseIcon from '@material-ui/icons/ChevronLeft'
import cn from 'clsx'
import { renderEmpty, useIsMobile } from '../utils'
import { TRenderProp } from '../types'
import { useStyles } from './styles'

export interface IAppLayoutContainerProps {
  className?: any
  sideBarOpen?: boolean
}

export type TAppLayoutContainer = React.FC<IAppLayoutContainerProps>

const DefaultContainer: TAppLayoutContainer = ({ className }, children) => (
  <div className={className}>{children}</div>
)

export interface IAppLayoutProps {
  renderAppBar?: TRenderProp
  renderPageBar?: TRenderProp
  renderSideBar?: TRenderProp
  PageBarContainer?: TAppLayoutContainer
  ContentContainer?: TAppLayoutContainer
}

export const AppLayout: React.FC<IAppLayoutProps> = (
  {
    renderAppBar = renderEmpty,
    renderPageBar,
    renderSideBar = renderEmpty,
    PageBarContainer = DefaultContainer,
    ContentContainer = DefaultContainer,
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
    content,
    contentMobile,
    contentDesktop,
    contentOneBar,
    contentTwoBars,
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
      {renderPageBar && (
        <PageBarContainer
          className={cn(
            isMobile ? pageBarMobile : pageBar,
            sideBarOpen && pageBarShift
          )}
          sideBarOpen={sideBarOpen}
        >
          {renderPageBar(thisState)}
        </PageBarContainer>
      )}
      {renderSideBar(thisState)}
      <ContentContainer
        className={cn(
          content,
          isMobile ? contentMobile : contentDesktop,
          renderAppBar ? contentTwoBars : contentOneBar,
          sideBarOpen && contentShift
        )}
        sideBarOpen={sideBarOpen}
      >
        {children}
      </ContentContainer>
    </>
  )
}
