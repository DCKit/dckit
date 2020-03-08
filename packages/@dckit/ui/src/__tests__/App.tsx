import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { renderRoutes } from '@dckit/routes'
import { routes } from './pages'

export const App: React.FC = () => <Router>{renderRoutes(routes)}</Router>
export const app = <App />
