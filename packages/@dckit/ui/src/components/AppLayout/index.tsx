import React, { useState } from 'react'
import { CssBaseline, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/Menu'
import CollapseIcon from '@material-ui/icons/ChevronLeft'
import cn from 'clsx'
import { useMediaType } from '@utils'
import { PageTitleConsumer, AppBarConsumer, PageBarConsumer } from '@ports'
import { SideBar } from '@comp/SideBar'
import { SideBarContext } from '@comp/SideBar/context'
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
  const { isMobile } = useMediaType()
  const [sideBarOpen, showSideBar] = useState(!isMobile)
  const isShifted = !isMobile && sideBarOpen
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
            data-testid="toggle-sidebar-button"
          >
            {sideBarOpen ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
          <PageTitleConsumer />
          <AppBarConsumer />
        </Toolbar>
      </AppBar>
      <PageBarContainer
        className={cn(
          isMobile ? pageBarMobile : pageBar,
          isShifted && pageBarShift
        )}
        sideBarOpen={sideBarOpen}
      >
        <PageBarConsumer />
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
