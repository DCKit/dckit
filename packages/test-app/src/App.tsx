import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Items } from './components/Items'
import { TestItem } from './items'

export const App: React.FC = () => (
  <Provider store={store}>
    <Items itemType={TestItem} optedItemId={3} />
  </Provider>
)
