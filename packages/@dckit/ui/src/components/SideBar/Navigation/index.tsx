import React from 'react'
import { List, Divider } from '@material-ui/core'
import { SideBarItem } from '@comp/SideBar/Item'
import { SideBarNavItem } from '@comp/SideBar/NavItem'

export interface ISideBarItem {
  label: string
  icon?: any
  to?: string
  id?: string
  hidden?: boolean
  disabled?: boolean
  Component?: any
}

interface ISideBarNavigationProps {
  items: ISideBarItem[]
  loading?: boolean
}

export const SideBarNavigation = ({
  items,
  loading,
}: ISideBarNavigationProps) => (
  <List>
    {items.map((item, index) => {
      const { label, icon, to, id: itemId, hidden, disabled } = item
      const { Component, ...itemProps } = item
      const id = `sidebar-item-${itemId || index}`

      if (Component) {
        return <Component key={id} {...itemProps} loading={loading} />
      }
      if (label === '---') {
        return <Divider key={id} />
      }

      const sideBarItemProps = {
        id,
        label,
        icon,
        loading,
        hidden,
        disabled,
      }

      if (to) {
        return <SideBarNavItem key={id} {...sideBarItemProps} to={to} />
      }
      return <SideBarItem key={id} {...sideBarItemProps} />
    })}
  </List>
)
