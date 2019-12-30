import React from 'react'
import { mapRoutes } from '@dckit/ui'
import { TestItem } from '../items'
import { Layout } from '../components/Layout'
import { Page1 } from '../components/Page1'
import { Items } from '../components/Items'

export const page1tabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    route: { path: '/tab1', component: () => <>Tab 2</> },
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    route: { path: '/tab2', component: () => <>Tab 2</> },
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    route: { path: '/tab3', component: () => <>Tab 3</> },
  },
]

export const sideBarItems = [
  {
    label: 'page1',
    route: {
      path: '/page1',
      component: Page1,
      routes: mapRoutes(page1tabs),
    },
  },
  {
    label: 'page2',
    route: {
      path: '/page2',
      component: () => (
        <div style={{ padding: 16 }}>
          <Items itemType={TestItem} optedItemId={3} />
        </div>
      ),
    },
  },
  {
    label: 'page3',
  },
  {
    divider: true,
  },
  {
    label: 'page4',
  },
]

export const routes = [
  {
    path: '/',
    component: Layout,
    routes: mapRoutes(sideBarItems),
  },
]
