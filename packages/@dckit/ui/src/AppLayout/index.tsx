import React, { useState } from 'react'
import { CssBaseline, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/Menu'
import CollapseIcon from '@material-ui/icons/ChevronLeft'
import cn from 'clsx'
import { renderEmpty, useMediaType } from '../utils'
import { SideBar } from '../SideBar'
import { TRenderProp } from '../types'
import { useStyles } from './styles'

interface IContainerProps {
  className?: any
  sideBarOpen?: boolean
  children?: any
}
type TContainer = (props: IContainerProps) => JSX.Element

const DefaultContainer: TContainer = ({
  className,
  children,
}: IContainerProps) => <div className={className}>{children}</div>

interface IAppLayoutProps {
  renderAppBar?: TRenderProp
  renderPageBar?: TRenderProp
  renderSideBar?: TRenderProp
  PageBarContainer?: TContainer
  ContentContainer?: TContainer
  children?: any
}

export const AppLayout = ({
  renderAppBar = renderEmpty,
  renderPageBar,
  renderSideBar = renderEmpty,
  PageBarContainer = DefaultContainer,
  ContentContainer = DefaultContainer,
  children,
}: IAppLayoutProps) => {
  const classes = useStyles()
  const { isMobile } = useMediaType()
  const [sideBarOpen, showSideBar] = useState(!isMobile)
  const isShifted = !isMobile && sideBarOpen
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
      <CssBaseline />
      <AppBar
        className={cn(
          isMobile ? appBarMobile : appBar,
          isShifted && appBarShift
        )}
      >
        <Toolbar className={toolBar}>
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
            isShifted && pageBarShift
          )}
          sideBarOpen={sideBarOpen}
        >
          {renderPageBar(thisState)}
        </PageBarContainer>
      )}
      <SideBar
        sideBarOpen={sideBarOpen}
        renderSideBar={renderSideBar}
        onClose={() => showSideBar(false)}
      />
      <ContentContainer
        className={cn(
          content,
          isMobile ? contentMobile : contentDesktop,
          renderPageBar ? contentTwoBars : contentOneBar,
          isShifted && contentShift
        )}
        sideBarOpen={sideBarOpen}
      >
        {children}
      </ContentContainer>
    </>
  )
}
