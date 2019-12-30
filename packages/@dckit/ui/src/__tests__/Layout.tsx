import React from 'react'
import { Link } from 'react-router-dom'
import { SideBar } from './SideBar'
import { AppLayout, AppBarHead } from '@/index'

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
