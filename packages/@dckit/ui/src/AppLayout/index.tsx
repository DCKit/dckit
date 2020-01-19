import React, { useState } from 'react'
import cn from 'clsx'
import { CssBaseline, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/Menu'
import CollapseIcon from '@material-ui/icons/ChevronLeft'
import {
  AppBarHead,
  AppBarNav,
  AppBarTail,
  PageBarHead,
  PageBarNav,
  PageBarTail,
} from '../ports'
import { SideBar } from '../SideBar'
import { SideBarContext } from '../SideBar/context'
import { useMediaMobile } from '../utils'
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
  PageBarContainer?: TContainer
  ContentContainer?: TContainer
  children?: any
}

export const AppLayout = ({
  PageBarContainer = DefaultContainer,
  ContentContainer = DefaultContainer,
  children,
}: IAppLayoutProps) => {
  const classes = useStyles()
  const isMobile = useMediaMobile()
  const [sideBarOpen, showSideBar] = useState(!isMobile)
  const isShifted = !isMobile && sideBarOpen
  const toggleSideBar = () => showSideBar(!sideBarOpen)

  const {
    appBarMobile,
    appBar,
    appBarShift,
    toolBar,
    menuButton,
    pageBar,
    pageBarMobile,
    pageBarDesktop,
    pageBarShift,
    content,
    contentMobile,
    contentDesktop,
    contentTwoBars,
    contentShift,
  } = classes

  return (
    <SideBarContext.Provider
      value={{
        sideBarOpen,
        showSideBar,
      }}
    >
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
            id="toggle-sidebar-button"
          >
            {sideBarOpen ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
          <AppBarHead.Consumer />
          <AppBarNav.Consumer />
          <AppBarTail.Consumer />
        </Toolbar>
      </AppBar>
      <PageBarContainer
        className={cn(
          pageBar,
          isMobile ? pageBarMobile : pageBarDesktop,
          isShifted && pageBarShift
        )}
        sideBarOpen={sideBarOpen}
      >
        <PageBarHead.Consumer />
        <PageBarNav.Consumer />
        <PageBarTail.Consumer />
      </PageBarContainer>
      )}
      <SideBar />
      <ContentContainer
        className={cn(
          content,
          contentTwoBars,
          isMobile ? contentMobile : contentDesktop,
          isShifted && contentShift
        )}
        sideBarOpen={sideBarOpen}
      >
        {children}
      </ContentContainer>
    </SideBarContext.Provider>
  )
}
