import React, { useContext } from 'react'
import {
  SideBarHead,
  SideBarNav,
  SideBarContext,
  SideBarNavigation,
} from '@/index'

import { sideBarItems } from './pages'

export const SideBar = () => {
  const { sideBarOpen } = useContext(SideBarContext)
  return (
    <>
      <SideBarHead.Provider>
        {sideBarOpen ? 'opened' : 'closed'}
      </SideBarHead.Provider>
      <SideBarNav.Provider>
        <SideBarNavigation items={sideBarItems} />
      </SideBarNav.Provider>
    </>
  )
}
