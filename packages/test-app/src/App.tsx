import React, { useContext } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Items } from './components/Items'
import { TestItem } from './items'
import {
  AppLayout,
  PageTitleProvider,
  SideBarHeaderProvider,
  SideBarContext,
} from '@dckit/ui'

const SideBar = () => {
  const { sideBarOpen } = useContext(SideBarContext)
  return (
    <SideBarHeaderProvider>
      <div style={{ paddingTop: 56 }}>{sideBarOpen ? 'opened' : 'closed'}</div>
    </SideBarHeaderProvider>
  )
}
export const App: React.FC = () => (
  <Provider store={store}>
    <AppLayout>
      <PageTitleProvider>App</PageTitleProvider>
      <SideBar />
      <div style={{ padding: 16 }}>
        <Items itemType={TestItem} optedItemId={3} />
      </div>
    </AppLayout>
  </Provider>
)
