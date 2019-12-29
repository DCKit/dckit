import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Tabs, Tab } from '@material-ui/core'
import { useLocationTail } from '@/routes'
import { useTabsStyles, useTabItemStyles } from './styles'

export interface IAppTab {
  id: string
  label: string
  disabled?: boolean
}

interface IAppTabsProps {
  tabs: IAppTab[]
  path?: string
}

export const useLocationTab = (tabs: IAppTab[]) => {
  const locationTail = useLocationTail()
  const tabIndex = tabs.findIndex(tab => tab.id === locationTail)
  const locationTab = tabIndex === -1 ? false : tabIndex
  return locationTab
}

export const AppTabs = ({ tabs, path }: IAppTabsProps) => {
  const classesTabs = useTabsStyles()
  const classesTabItem = useTabItemStyles()
  const locationTab = useLocationTab(tabs)
  const [currentTab, selectTab] = useState(locationTab)
  const history = useHistory()

  const handleChange = (event: React.ChangeEvent<{}>, tabIndex: number) => {
    selectTab(tabIndex)
    history.push(`${path || ''}/${tabs[tabIndex].id}`)
  }

  return (
    <Tabs
      value={currentTab}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      classes={classesTabs}
    >
      {tabs.map((tab, index) => {
        const { id, label, disabled } = tab
        const tabId = `app-tab-${id}`
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
