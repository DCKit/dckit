import React, { ReactElement, ComponentType } from 'react'
import cn from 'clsx'
import { ListItem, ListItemIcon } from '@material-ui/core'
import { ItemLoader } from '@/comp/SideBar/ItemLoader'
import { useStyles } from './styles'
import { TCallback } from '@/types'

export interface ISideBarItem {
  id?: string
  label?: string
  icon?: ReactElement<any>
  onClick?: TCallback
  selected?: boolean
  loading?: boolean
  disabled?: boolean
}

export interface ISideBarDivider {
  divider: boolean
}

export interface ISideBarCustomItem {
  component: ComponentType
  [propName: string]: any
}

export const SideBarItem = ({
  id,
  label,
  icon,
  onClick,
  selected,
  loading,
  disabled,
}: ISideBarItem) => {
  const classes = useStyles()

  if (loading) return <ItemLoader />

  return (
    <ListItem
      id={id}
      button={true}
      dense={true}
      selected={selected}
      className={cn(classes.root, selected && '-selected')}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <ListItemIcon className={cn(classes.icon, selected && '-selected')}>
          {icon}
        </ListItemIcon>
      )}
      {label}
    </ListItem>
  )
}
