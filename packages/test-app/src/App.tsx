import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store'
import { Items } from './components/Items'
import { SideBar } from './components/SideBar'
import { TestItem } from './items'
import { AppLayout, AppBarHead, AppBarNav } from '@dckit/ui'

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <AppLayout>
        <AppBarHead.Provider>App</AppBarHead.Provider>
        <AppBarNav.Provider>
          <></>
        </AppBarNav.Provider>
        <SideBar />
        <div style={{ padding: 16 }}>
          <Items itemType={TestItem} optedItemId={3} />
        </div>
      </AppLayout>
    </Router>
  </Provider>
)
