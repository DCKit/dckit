import React from 'react'
import { List } from '@material-ui/core'
import { SideBarNavItem } from '@comp/SideBar/NavItem'
import { TSideBarItem } from 'types'

interface ISideBarNavigationProps {
  items: TSideBarItem[]
  ListComponent?: any
  listProps?: any
}

export const SideBarNavigation = ({
  items,
  ListComponent = List,
  listProps = {},
}: ISideBarNavigationProps) => (
  <ListComponent {...listProps}>
    {items.map((item, index) => {
      const { Component: Item = SideBarNavItem, id, ...itemProps } = item
      const itemId = `sidebar-item-${id || index}`
      return <Item key={itemId} {...itemProps} id={itemId} />
    })}
  </ListComponent>
)
