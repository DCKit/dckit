import React from 'react'
import cn from 'clsx'
import { ListItem, ListItemIcon } from '@material-ui/core'
import { ItemLoader } from '@comp/SideBar/ItemLoader'
import { useStyles } from './styles'
import { TCallback } from 'types'

export interface ISideBarItemProps {
  label?: string
  icon?: any
  onClick?: TCallback
  selected?: boolean
  loading?: boolean
  id?: string
  disabled?: boolean
  Component?: React.FC<any>
  children?: any
}

export const SideBarItem = (props: ISideBarItemProps) => {
  const classes = useStyles()
  const { Component, children, ...itemProps } = props
  const { label, icon, onClick, selected, loading, id, disabled } = itemProps

  if (Component) return <Component {...itemProps}>{children}</Component>
  if (loading) return <ItemLoader />
  return (
    <ListItem
      id={id}
      data-testid={id}
      button={true}
      dense={true}
      disableRipple={true}
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
      {label || children}
    </ListItem>
  )
}
