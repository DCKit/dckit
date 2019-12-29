import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { store } from './store'
import { Items } from './components/Items'
import { SideBar } from './components/SideBar'
import { TestItem } from './items'
import { AppLayout, AppBarHead } from '@dckit/ui'

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Route path="/">
        <AppLayout>
          <AppBarHead.Provider>
            <Link to="/">App</Link>
          </AppBarHead.Provider>
          <SideBar />
          <Route path="/page1">
            <div style={{ padding: 16 }}>
              <Items itemType={TestItem} optedItemId={3} />
            </div>
          </Route>
          <Route path="/page2"></Route>
        </AppLayout>
      </Route>
    </Router>
  </Provider>
)
