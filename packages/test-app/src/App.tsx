import React, { useContext } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Items } from './components/Items'
import { TestItem } from './items'
import { AppLayout, AppBarHead, SideBarHead, SideBarContext } from '@dckit/ui'

const SideBar = () => {
  const { sideBarOpen } = useContext(SideBarContext)
  return (
    <SideBarHead.Provider>
      <div style={{ paddingTop: 56 }}>{sideBarOpen ? 'opened' : 'closed'}</div>
    </SideBarHead.Provider>
  )
}
export const App: React.FC = () => (
  <Provider store={store}>
    <AppLayout>
      <AppBarHead.Provider>App</AppBarHead.Provider>
      <SideBar />
      <div style={{ padding: 16 }}>
        <Items itemType={TestItem} optedItemId={3} />
      </div>
    </AppLayout>
  </Provider>
)
