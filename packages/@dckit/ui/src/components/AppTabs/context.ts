import React from 'react'
import { identity } from '@utils'
import { TCallback } from 'types'

interface IAppTabsContext {
  currentTab: string
  selectTab: TCallback
}

const defaultAppTabsContext: IAppTabsContext = {
  currentTab: '',
  selectTab: identity,
}

export const AppTabsContext = React.createContext(defaultAppTabsContext)
