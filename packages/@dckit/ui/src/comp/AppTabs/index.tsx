import React from 'react'
import { useHistory } from 'react-router-dom'
import { Tabs, Tab } from '@material-ui/core'
import { useLocationTail, IRoute } from '@/routes'
import { useTabsStyles, useTabItemStyles } from './styles'

export interface IAppTabItem {
  label: string
  route: IRoute
  id?: string
  disabled?: boolean
}

interface IAppTabsProps {
  tabs: IAppTabItem[]
  path?: string
}

export const useLocationTab = (tabs: IAppTabItem[]) => {
  const locationTail = useLocationTail()
  const tabIndex = tabs.findIndex(tab => tab.route.path === locationTail)
  const locationTab = tabIndex === -1 ? false : tabIndex
  return locationTab
}

export const AppTabs = ({ tabs, path }: IAppTabsProps) => {
  const classesTabs = useTabsStyles()
  const classesTabItem = useTabItemStyles()
  const locationTab = useLocationTab(tabs)
  const history = useHistory()

  const handleChange = (event: React.ChangeEvent<{}>, tabIndex: number) => {
    const basePath = !path || path === '/' ? '' : path
    history.push(`${basePath}${tabs[tabIndex].route.path}`)
  }

  return (
    <Tabs
      value={locationTab}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      classes={classesTabs}
    >
      {tabs.map((tab, index) => {
        const { id, label, disabled } = tab
        const tabId = `app-tab-${id || index}`
        return (
          <Tab
            key={tabId}
            id={tabId}
            label={label}
            disabled={disabled}
            classes={classesTabItem}
          />
        )
      })}
    </Tabs>
  )
}
