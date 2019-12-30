import React from 'react'
import { AppBarNav, AppTabs } from '@dckit/ui'
import { tab1subtabs } from '../pages'

export const Tab1: React.FC<any> = props => {
  return (
    <>
      <AppBarNav.Provider>
        <AppTabs tabs={tab1subtabs} path={props.match.url} />
      </AppBarNav.Provider>
      <h4>Tab 1</h4>
      {props.children}
    </>
  )
}
