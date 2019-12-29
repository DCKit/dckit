import React from 'react'
import cn from 'clsx'
import { ListItem, ListItemIcon } from '@material-ui/core'
import { ItemLoader } from '@/comp/SideBar/ItemLoader'
import { useStyles } from './styles'
import { TCallback } from '@/types'

export interface ISideBarItemProps {
  id?: string
  label?: string
  icon?: any
  to?: string
  divider?: boolean
  onClick?: TCallback
  selected?: boolean
  loading?: boolean
  disabled?: boolean
  Component?: React.FC<any>
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
}: ISideBarItemProps) => {
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
