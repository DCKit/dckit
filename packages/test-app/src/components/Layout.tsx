import React from 'react'
import { Link } from 'react-router-dom'
import { AppLayout, AppBarHead } from '@dckit/ui'
import { SideBar } from '../components/SideBar'

export const Layout: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <AppLayout>
      <AppBarHead.Provider>
        <Link to="/">App</Link>
      </AppBarHead.Provider>
      <SideBar />
      {children || 'Welcome !'}
    </AppLayout>
  )
}
