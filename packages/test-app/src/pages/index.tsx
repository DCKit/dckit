import { TNavigationItem } from '@dckit/ui'

export const sideBarItems: TNavigationItem[] = [
  {
    label: 'page1',
    route: { path: '/page1', component: () => null },
  },
  {
    label: 'page2',
    route: { path: '/page2', component: () => null },
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
