import React, { useState } from 'react'
import cn from 'clsx'
import { CssBaseline, AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
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

type ContainerProps = {
  className?: any
  sideBarOpen?: boolean
  children?: any
}
type TContainer = (props: ContainerProps) => JSX.Element

const DefaultContainer: TContainer = ({
  className,
  children,
}: ContainerProps) => <div className={className}>{children}</div>

type AppLayoutProps = {
  PageBarContainer?: TContainer
  ContentContainer?: TContainer
  CollapseIcon?: any
  ExpandIcon?: any
  children?: any
}

export function AppLayout(props: AppLayoutProps) {
  const {
    PageBarContainer = DefaultContainer,
    ContentContainer = DefaultContainer,
    CollapseIcon = MenuOpenIcon,
    ExpandIcon = MenuIcon,
    children,
  } = props

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
