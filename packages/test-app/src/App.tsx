import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Items } from './components/Items'
import { TestItem } from './items'
import { AppLayout } from '@dckit/ui'
import { TRenderProp } from '@dckit/ui/dist/types'

const renderPageBar: TRenderProp = () => <>test app</>

export const App: React.FC = () => (
  <Provider store={store}>
    <AppLayout renderPageBar={renderPageBar}>
      <div style={{ padding: 16 }}>
        <Items itemType={TestItem} optedItemId={3} />
      </div>
    </AppLayout>
  </Provider>
)
