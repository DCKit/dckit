import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Tabs, Tab } from '@material-ui/core'
import { useTabs, useTabItem } from './styles'

export interface IAppTabProps {
  id?: string
  label?: string
  disabled?: boolean
}

interface IAppTabsProps {
  tabs: IAppTabProps[]
  path: string
}

export const AppTabs = ({ tabs, path }: IAppTabsProps) => {
  const classesTabs = useTabs()
  const classesTabItem = useTabItem()
  const location = useLocation().pathname
  const history = useHistory()
  const match = location.match(/\/([a-z0-9-]+)\/?$/)
  const locationTab = match && match[1]
  const locationTabIndex = tabs.findIndex(tab => tab.id === locationTab)
  const [tabIndex, selectTab] = useState(
    locationTabIndex === -1 ? false : locationTabIndex
  )

  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    selectTab(newTabIndex)
    history.push(`${path}/${tabs[newTabIndex].id}`)
  }

  return (
    <Tabs
      value={tabIndex}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      classes={classesTabs}
    >
      {tabs.map((tab, index) => {
        const { id, label, disabled } = tab
        return (
          <Tab
            key={index}
            label={label}
            id={`app-tab-${id}`}
            disabled={disabled}
            classes={classesTabItem}
          />
        )
      })}
    </Tabs>
  )
}
