import cn from 'clsx'
import { SideBarDesktop } from '../SideBar'
import { SideBarContext } from '../SideBar/context'
import { useStyles } from './styles'
import { useLocalStorage } from 'utils/hooks'

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

type AppLayoutSimpleProps = {
  ContentContainer?: TContainer
  CollapseIcon?: any
  ExpandIcon?: any
  children?: any
}

export function AppLayoutSimple(props: AppLayoutSimpleProps) {
  const { ContentContainer = DefaultContainer, children } = props

  const classes = useStyles()
  const [sideBarOpen, showSideBar] = useLocalStorage('sidebar', true)
  const isShifted = sideBarOpen

  const { content, contentFullPage, contentShift } = classes

  return (
    <SideBarContext.Provider
      value={{
        sideBarOpen,
        showSideBar,
      }}
    >
      <SideBarDesktop />
      <ContentContainer
        className={cn(content, contentFullPage, isShifted && contentShift)}
        sideBarOpen={sideBarOpen}
      >
        {children}
      </ContentContainer>
    </SideBarContext.Provider>
  )
}
