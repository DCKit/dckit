import React from 'react'
import { mapRoutes } from '../routes'
import { Layout } from './Layout'
import { Page1 } from './Page1'
import { Tab1 } from './Tab1'

export const tab1subtabs = [
  {
    id: 'subtab1',
    label: 'subTab1',
    route: { path: '/subtab1', component: () => <>Sub Tab 1</> },
  },
  {
    id: 'subtab2',
    label: 'subTab2',
    route: { path: '/subtab2', component: () => <>Sub Tab 2</> },
  },
  {
    id: 'subtab3',
    label: 'subTab3',
    route: { path: '/subtab3', component: () => <>Sub Tab 3</> },
  },
]

export const page1tabs = [
  {
    id: 'tab1',
    label: 'tab1',
    route: { path: '/tab1', component: Tab1, routes: mapRoutes(tab1subtabs) },
  },
  {
    id: 'tab2',
    label: 'tab2',
    route: { path: '/tab2', component: () => <>Tab 2</> },
  },
  {
    id: 'tab3',
    label: 'tab3',
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
      component: () => <>Page 2</>,
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
