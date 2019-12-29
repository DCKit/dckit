import React from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { SideBarItem, ISideBarItemProps } from '@/comp/SideBar/Item'

export const SideBarNavItem = (props: ISideBarItemProps) => {
  const { to, loading, ...itemProps } = props
  const history = useHistory()
  const match = useRouteMatch({ path: to })
  const selected = Boolean(!loading && match)
  const handleClick = () => to && history.push(to)

  return (
    <SideBarItem
      {...itemProps}
      loading={loading}
      selected={selected}
      onClick={handleClick}
    />
  )
}
