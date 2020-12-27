import * as React from 'react'
import { stub } from '../utils'
import { TCallback } from '../types'

interface ISideBarContext {
  sideBarOpen: boolean
  showSideBar: TCallback
}

const defaultSideBarContext: ISideBarContext = {
  sideBarOpen: true,
  showSideBar: stub,
}

export const SideBarContext = React.createContext(defaultSideBarContext)
