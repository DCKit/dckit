import React from 'react'
import { List, Divider } from '@material-ui/core'
import { SideBarItem, ISideBarItemProps } from '@comp/SideBar/Item'
import { SideBarNavItem } from '@comp/SideBar/NavItem'

interface ISideBarNavigationProps {
  items: ISideBarItemProps[]
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
      const { Component, id, ...itemProps } = item
      const itemId = `sidebar-item-${id || index}`

      if (item.divider) return <Divider key={itemId} />

      const Item = Component
        ? Component
        : item.to
        ? SideBarNavItem
        : SideBarItem

      return <Item key={itemId} {...itemProps} id={itemId} />
    })}
  </ListComponent>
)
