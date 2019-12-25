import React from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { SideBarItem } from '@comp/SideBar/Item'

interface ISideBarNavItemProps {
  label: string
  icon: any
  to: string
  loading?: boolean
  id?: string
  hidden?: boolean
  disabled?: boolean
}

export const SideBarNavItem = (props: ISideBarNavItemProps) => {
  const { to, loading, ...itemProps } = props
  const history = useHistory()
  const match = useRouteMatch({ path: to })
  const selected = Boolean(!loading && match)
  const handleClick = () => history.push(to)

  return (
    <SideBarItem
      {...itemProps}
      loading={loading}
      selected={selected}
      onClick={handleClick}
    />
  )
}
