import React from 'react'
import cn from 'clsx'
import { ListItem, ListItemIcon } from '@material-ui/core'
import { ItemLoader } from '@comp/SideBar/ItemLoader'
import { useStyles } from './styles'
import { TCallback } from 'types'

interface ISideBarItemProps {
  label: string
  icon: any
  onClick?: TCallback
  selected?: boolean
  loading?: boolean
  id?: string
  isHidden?: () => boolean
  isDisabled?: () => boolean
}

export const SideBarItem = ({
  label,
  icon,
  onClick,
  selected,
  loading,
  id,
  isHidden,
  isDisabled,
}: ISideBarItemProps) => {
  const classes = useStyles()

  if (isHidden && isHidden()) return null
  const disabled = isDisabled && isDisabled()

  return loading ? (
    <ItemLoader />
  ) : (
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
      <ListItemIcon className={cn(classes.icon, selected && '-selected')}>
        {icon}
      </ListItemIcon>
      {label}
    </ListItem>
  )
}
