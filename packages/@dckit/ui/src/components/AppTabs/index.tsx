import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Tabs, Tab } from '@material-ui/core'

interface IAppTabsProps {
  tabs: any[]
  path: string
}

export const AppTabs = ({ tabs, path }: IAppTabsProps) => {
  const location = useLocation().pathname
  const history = useHistory()
  const match = location.match(/\/([a-z0-9-]+)\/?$/)
  const locationTab = match && match[1]
  const locationTabIndex = tabs.findIndex(tab => tab.id === locationTab)
  const [tabIndex, selectTab] = useState(
    locationTabIndex === -1 ? false : locationTabIndex
  )

  console.log(location, tabIndex)

  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    if (!event) return
    selectTab(newTabIndex)
    history.push(`${path}/${tabs[newTabIndex].id}`)
  }

  return (
    <Tabs
      value={tabIndex}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
    >
      {tabs.map((tab, index) => {
        return <Tab key={index} label={tab.label} id={`app-tab-${tab.id}`} />
      })}
    </Tabs>
  )
}
