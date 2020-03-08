import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from '@dckit/routes'
import { store } from './store'
import { routes } from './pages'

import { Table } from './tables'

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>{renderRoutes(routes)}</Router>
    <Table />
  </Provider>
)
