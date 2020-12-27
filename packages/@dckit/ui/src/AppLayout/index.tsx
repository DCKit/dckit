import cn from 'clsx'
/*
import { Menu, MenuOpen } from '@material-ui/icons'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import {
  AppBarHead,
  AppBarNav,
  AppBarTail,
  PageBarHead,
  PageBarNav,
  PageBarTail,
} from '../ports'

import { SideBarMobile } from '../SideBar'
import { useMediaMobile } from '../utils'
*/

import { Toolbar } from '@material-ui/core'
import { AppBar } from '../AppBar'
import { AppBarHead, AppBarNav, AppBarTail } from '../ports'
import { NoSsr, CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { SideBarDesktop } from '../SideBar'
import { SideBarContext } from '../SideBar/context'
import { useStyles } from './styles'
import { theme } from '../theme'

import { useLocalStorage } from 'utils/hooks'
import { ThemeProvider } from '../constateTheme'

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
  persistentSideBar?: boolean
  withPageBar?: boolean
  CollapseIcon?: any
  ExpandIcon?: any
  children?: any
}

export function AppLayout(props: AppLayoutProps) {
  const {
    /*
    PageBarContainer = DefaultContainer,
    persistentSideBar = false,
    withPageBar = true,
    CollapseIcon = MenuOpen,
    ExpandIcon = Menu,
    */
    ContentContainer = DefaultContainer,
    children,
  } = props

  const classes = useStyles()
  //const mediaMobile = useMediaMobile()
  const isMobile = false
  const [sideBarOpen, showSideBar] = useLocalStorage('sidebar', true)
  const isShifted = !isMobile && sideBarOpen
  //const toggleSideBar = () => showSideBar(!sideBarOpen)

  const {
    appBarMobile,
    appBar,
    appBarShift,
    toolBar,
    /* 
    menuButton,
    pageBar,
    pageBarMobile,
    pageBarDesktop,
    pageBarShift,
    contentMobile,
    contentTwoBars,
    contentFullPage,
    */
    content,
    contentDesktop,
    contentOneBar,
    contentShift,
  } = classes

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NoSsr>
        <ThemeProvider>
          <SideBarContext.Provider
            value={{
              sideBarOpen,
              showSideBar,
            }}
          >
            <AppBar
              elevation={0}
              className={cn(
                isMobile ? appBarMobile : appBar,
                isShifted && appBarShift
              )}
            >
              <Toolbar className={toolBar}>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <AppBarHead.Consumer />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexGrow: 2,
                      alignItems: 'center',
                    }}
                  >
                    <AppBarNav.Consumer />
                  </div>
                  <div style={{ display: 'flex' }}>
                    <AppBarTail.Consumer />
                  </div>
                </div>
              </Toolbar>
            </AppBar>
            <SideBarDesktop />
            <ContentContainer
              className={cn(
                content,
                contentDesktop,
                contentOneBar,
                isShifted && contentShift
              )}
              sideBarOpen={sideBarOpen}
            >
              {children}
            </ContentContainer>
          </SideBarContext.Provider>
        </ThemeProvider>
      </NoSsr>
    </MuiThemeProvider>
  )
}
