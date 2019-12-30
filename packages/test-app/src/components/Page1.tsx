import React from 'react'
import { AppBarNav, AppTabs } from '@dckit/ui'
import { page1tabs } from '../pages'

export const Page1: React.FC<any> = props => {
  return (
    <>
      <AppBarNav.Provider>
        <AppTabs tabs={page1tabs} path={props.match.url} />
      </AppBarNav.Provider>
      <h4>Page 1</h4>
      {props.children}
    </>
  )
}
