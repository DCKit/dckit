import React from 'react'
import cn from 'clsx'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { ListItem, ListItemIcon, Divider } from '@material-ui/core'
import { Loader } from './Loader'
import { useStyles } from './styles'
import { identity } from '@utils'
import { TCallback } from 'types'

interface ISideBarItemProps {
  label: string
  onClick?: TCallback
  loading?: boolean
  divider?: boolean
  icon?: any
  acl?: string
  to?: string
  id?: string
}

export const SideBarItem = ({
  label,
  onClick = identity,
  divider,
  loading,
  icon,
  acl,
  to,
  id,
}: ISideBarItemProps) => {
  const classes = useStyles()
  const history = useHistory()
  const match = useRouteMatch({ path: to })
  const selected = Boolean(!loading && to && match)
  const sideBarItemId = `sidebar-item-${id || acl}`
  const handleClick = () => (to ? history.push(to) : onClick)

  return (
    <>
      {divider && <Divider className={classes.divider} />}
      {!divider && loading && <Loader />}
      {!divider && !loading && (
        <ListItem
          id={sideBarItemId}
          data-testid={sideBarItemId}
          button={true}
          dense={true}
          disableRipple={true}
          selected={selected}
          className={cn(classes.root, selected && '-selected')}
          onClick={handleClick}
        >
          <ListItemIcon className={cn(classes.icon, selected && '-selected')}>
            {icon}
          </ListItemIcon>
          {label}
        </ListItem>
      )}
    </>
  )
}
