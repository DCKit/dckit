import React, { useContext } from 'react'
import {
  SideBarHead,
  SideBarNav,
  SideBarContext,
  SideBarNavigation,
} from '@dckit/ui'

import { sideBarItems } from '../pages'

export const SideBar = () => {
  const { sideBarOpen } = useContext(SideBarContext)
  return (
    <>
      <SideBarHead.Provider>
        <div style={{ paddingTop: 56 }}>
          {sideBarOpen ? 'opened' : 'closed'}
        </div>
      </SideBarHead.Provider>
      <SideBarNav.Provider>
        <SideBarNavigation items={sideBarItems} />
      </SideBarNav.Provider>
    </>
  )
}
