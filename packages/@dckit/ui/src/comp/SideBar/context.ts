import React from 'react'
import { stub } from '@/utils'
import { TCallback } from '@/types'

interface ISideBarContext {
  sideBarOpen: boolean
  showSideBar: TCallback
}

const defaultSideBarContext: ISideBarContext = {
  sideBarOpen: false,
  showSideBar: stub,
}

export const SideBarContext = React.createContext(defaultSideBarContext)
