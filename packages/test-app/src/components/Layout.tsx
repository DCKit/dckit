import React from 'react'
import { Link } from 'react-router-dom'
import { NoSsr } from '@material-ui/core'
import { AppLayout, AppBarHead } from '@dckit/ui'
import { SideBar } from '../components/SideBar'

export const Layout: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <NoSsr>
      <AppLayout>
        <AppBarHead.Provider>
          <Link to="/">App</Link>
        </AppBarHead.Provider>
        <SideBar />
        {children || 'Welcome !'}
      </AppLayout>
    </NoSsr>
  )
}
