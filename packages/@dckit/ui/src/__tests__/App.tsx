import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from '@/index'
import { routes } from './pages'

export const App: React.FC = () => <Router>{renderRoutes(routes)}</Router>
export const app = <App />
