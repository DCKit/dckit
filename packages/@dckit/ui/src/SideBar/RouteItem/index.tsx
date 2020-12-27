import * as React from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { SideBarItem, ISideBarItem } from '../Item'
import { SideBarContext } from '../context'
import { useMediaMobile } from '../../utils'
import { IRoute } from '../../routes'

export interface ISideBarRouteItem extends ISideBarItem {
  route: IRoute
}

export const SideBarRouteItem = (props: ISideBarRouteItem) => {
  const { route, closeOnClick, ...itemProps } = props
  const { path } = route
  const { showSideBar } = React.useContext(SideBarContext)
  const selected = Boolean(useRouteMatch({ path }))
  const isMobile = useMediaMobile()
  const history = useHistory()

  const handleClick = () => {
    path && history.push(path)
    if (closeOnClick || isMobile) showSideBar(false)
  }

  return (
    <SideBarItem {...itemProps} selected={selected} onClick={handleClick} />
  )
}
