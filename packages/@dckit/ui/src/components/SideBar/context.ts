import React from 'react'
import { identity } from '@utils'
import { TCallback } from 'types'

interface ISideBarContext {
  sideBarOpen: boolean
  showSideBar: TCallback
}

const defaultSideBarContext: ISideBarContext = {
  sideBarOpen: false,
  showSideBar: identity,
}

export const SideBarContext = React.createContext(defaultSideBarContext)
