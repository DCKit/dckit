import React from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { SideBarItem, ISideBarItemProps } from '@/comp/SideBar/Item'

export const SideBarNavItem = (props: ISideBarItemProps) => {
  const { path, loading, ...itemProps } = props
  const history = useHistory()
  const match = useRouteMatch({ path })
  const selected = Boolean(!loading && match)
  const handleClick = () => path && history.push(path)

  return (
    <SideBarItem
      {...itemProps}
      loading={loading}
      selected={selected}
      onClick={handleClick}
    />
  )
}
