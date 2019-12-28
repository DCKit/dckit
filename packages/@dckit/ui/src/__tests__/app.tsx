import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  AppLayout,
  AppBarHead,
  AppBarNav,
  AppBarTail,
  AppTabs,
  PageBarHead,
  ISideBarItemProps,
  SideBarHead,
  SideBarNav,
  SideBarContext,
  SideBarNavigation,
} from '../index'

const Custom: React.FC<any> = (props: any) => {
  return null
}

export const pages: ISideBarItemProps[] = [
  {
    label: 'page1',
    to: '/',
  },
  {
    label: 'page2',
  },
  {
    divider: true,
  },
  {
    Component: Custom,
  },
]

const SideBar = () => {
  const { sideBarOpen } = useContext(SideBarContext)
  return (
    <>
      <SideBarHead.Provider>
        {sideBarOpen ? 'opened' : 'closed'}
      </SideBarHead.Provider>
      <SideBarNav.Provider>
        <SideBarNavigation items={pages} />
      </SideBarNav.Provider>
    </>
  )
}

const tabs = [
  { id: 'tab1', label: 'tab1' },
  { id: 'tab2', label: 'tab2' },
  { id: 'tab3', label: 'tab3' },
]

const App: React.FC = () => (
  <Router>
    <AppLayout>
      <AppBarHead.Provider>App</AppBarHead.Provider>
      <SideBar />
      <AppBarNav.Provider>
        <AppTabs tabs={tabs} path="" />
      </AppBarNav.Provider>
      <AppBarTail.Provider>test app</AppBarTail.Provider>
      )}
      <PageBarHead.Provider>test page</PageBarHead.Provider>
    </AppLayout>
  </Router>
)

export const app = <App />
