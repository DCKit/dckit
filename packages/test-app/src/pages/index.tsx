import React from 'react'
import { mapRoutes } from '@dckit/ui'
import { TestItem } from '../items'
import { Layout } from '../components/Layout'
import { Page1 } from '../components/Page1'
import { Tab1 } from '../components/Tab1'
import { Items } from '../components/Items'
import { DemoForm } from '../forms'

export const tab1subtabs = [
  {
    id: 'subtab1',
    label: 'Sub Tab 1',
    route: { path: '/subtab1', component: () => <>Sub Tab 1</> },
  },
  {
    id: 'subtab2',
    label: 'Sub Tab 2',
    route: { path: '/subtab2', component: () => <>Sub Tab 2</> },
  },
  {
    id: 'subtab3',
    label: 'Sub Tab 3',
    route: { path: '/subtab3', component: () => <>Sub Tab 3</> },
  },
]

export const page1tabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    route: { path: '/tab1', component: Tab1, routes: mapRoutes(tab1subtabs) },
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
    label: 'items',
    route: {
      path: '/items',
      component: () => (
        <div style={{ padding: 16 }}>
          <Items itemType={TestItem} optedItemId={3} />
        </div>
      ),
    },
  },
  {
    label: 'forms',
    route: {
      path: '/forms',
      component: DemoForm,
    },
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
