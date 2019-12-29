import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  AppLayout,
  AppBarHead,
  AppBarNav,
  AppBarTail,
  AppTabs,
  PageBarHead,
  SideBarHead,
  SideBarNav,
  SideBarContext,
  SideBarNavigation,
} from '@/index'

import { stub } from '@/utils'

export const pages = [
  {
    label: 'page1',
    route: { path: '/tab1', component: stub },
  },
  {
    label: 'page2',
  },
  {
    divider: true,
  },
  {
    component: stub,
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
  {
    id: 'tab1',
    label: 'Tab 1',
    route: { path: '/tab1', component: stub },
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    route: { path: '/tab2', component: stub },
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    route: { path: '/tab3', component: stub },
  },
]

const App: React.FC = () => (
  <Router>
    <AppLayout>
      <AppBarHead.Provider>App</AppBarHead.Provider>
      <SideBar />
      <AppBarNav.Provider>
        <AppTabs tabs={tabs} />
      </AppBarNav.Provider>
      <AppBarTail.Provider>test app</AppBarTail.Provider>
      )}
      <PageBarHead.Provider>test page</PageBarHead.Provider>
    </AppLayout>
  </Router>
)

export const app = <App />
