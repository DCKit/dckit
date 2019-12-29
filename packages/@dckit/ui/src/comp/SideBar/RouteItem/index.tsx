import React from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { SideBarItem, ISideBarItem } from '@/comp/SideBar/Item'
import { IRoute } from '@/routes'

export interface ISideBarRouteItem extends ISideBarItem {
  route: IRoute
}

export const SideBarRouteItem = (props: ISideBarRouteItem) => {
  const { route, loading, ...itemProps } = props
  const { path } = route
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