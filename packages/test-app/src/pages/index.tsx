import { TSideBarItem } from '@dckit/ui'
import { Divider } from '@material-ui/core'

export const sideBarItems: TSideBarItem[] = [
  {
    label: 'page1',
    to: '/',
  },
  {
    label: 'page2',
  },
  {
    label: 'page3',
  },
  {
    Component: Divider,
  },
  {
    label: 'page4',
  },
]
