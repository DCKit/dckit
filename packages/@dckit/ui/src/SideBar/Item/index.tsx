import * as React from 'react'
import cn from 'clsx'
import { ListItem, ListItemIcon, Tooltip } from '@material-ui/core'
import { useStyles } from './styles'
import { useStylesDark } from './stylesDark'
import { TCallback } from '../../types'
import { SideBarContext } from '../context'
import { useTheme } from '../../constateTheme'
import { useProxyHandler } from '../../UnsavedDialog'

export interface ISideBarItem {
  id?: string
  label?: string
  icon?: any
  onClick?: TCallback
  closeOnClick?: boolean
  selected?: boolean
  disabled?: boolean
}

export interface ISideBarDivider {
  divider: boolean
}

export interface ISideBarCustomItem {
  component: React.ComponentType
  [propName: string]: any
}

export function SideBarItem(props: ISideBarItem) {
  const { id, label, icon: Icon, onClick, selected, disabled } = props

  const { sidebarDark } = useTheme()
  const clsLight = useStyles()
  const clsDark = useStylesDark()
  const classes = sidebarDark ? clsDark : clsLight
  const { sideBarOpen } = React.useContext(SideBarContext)
  const proxyClick = useProxyHandler(onClick)

  const itemIcon = Icon ? (
    <Icon
      style={{
        color: sidebarDark ? '#80d0ff' : selected ? '#777' : '#0288d1',
      }}
    />
  ) : null

  return (
    <ListItem
      id={id}
      button={true}
      dense={true}
      selected={selected}
      className={cn(classes.root, selected && '-selected')}
      onClick={proxyClick}
      disabled={disabled}
    >
      {itemIcon && sideBarOpen && (
        <ListItemIcon className={cn(classes.icon, selected && '-selected')}>
          {itemIcon}
        </ListItemIcon>
      )}
      {itemIcon && !sideBarOpen && (
        <ListItemIcon className={cn(classes.icon, selected && '-selected')}>
          <Tooltip title={label || ''} placement="right">
            {itemIcon}
          </Tooltip>
        </ListItemIcon>
      )}
      <span>{label}</span>
    </ListItem>
  )
}
