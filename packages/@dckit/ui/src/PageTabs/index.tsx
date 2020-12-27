import * as React from 'react'
import { Grid, Tab } from '@material-ui/core'
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import { useTabsStyles, useTabItemStyles } from './styles'
import { useProxyHandler } from '../UnsavedDialog'

export interface PageTabItem {
  label: string
  id: string
  component: any
  disabled?: boolean
}

interface PageTabsProps {
  tabs: PageTabItem[]
  firstTab?: number
  drillProps?: any
  Container?: any
  containerProps?: any
}

export function PageTabs({
  tabs,
  firstTab = 0,
  drillProps = {},
}: PageTabsProps) {
  const classesTabs = useTabsStyles()
  const classesTabItem = useTabItemStyles()
  const [tabId, setTabId] = React.useState(tabs[firstTab].id)

  const handleChange = (event: any, id: any) => setTabId(id)
  const proxyChange = useProxyHandler(handleChange)

  return (
    <Grid item xs={12}>
      <TabContext value={tabId}>
        <TabList
          value={tabId}
          variant="standard"
          classes={classesTabs}
          onChange={proxyChange}
        >
          {tabs.map((tab, index) => {
            const { id, label, disabled } = tab
            return (
              <Tab
                value={id}
                key={id}
                label={label}
                disabled={disabled}
                classes={classesTabItem}
              />
            )
          })}
        </TabList>
        {tabs.map((tab, index) => {
          const { id, component: Component } = tab
          return (
            <TabPanel
              key={id}
              value={id}
              style={{
                margin: 0,
                padding: 0,
                width: '100%',
                display: 'flex',
              }}
            >
              <Component {...drillProps} />
            </TabPanel>
          )
        })}
      </TabContext>
    </Grid>
  )
}
