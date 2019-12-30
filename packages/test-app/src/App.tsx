import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from '@dckit/ui'
import { store } from './store'
import { routes } from './pages'

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>
)
