import React from 'react'
import { stub } from '@/utils'
import { TCallback } from '@/types'

interface IAppTabsContext {
  currentTab: string
  selectTab: TCallback
}

const defaultAppTabsContext: IAppTabsContext = {
  currentTab: '',
  selectTab: stub,
}

export const AppTabsContext = React.createContext(defaultAppTabsContext)
