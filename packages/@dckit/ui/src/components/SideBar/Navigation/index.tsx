import React from 'react'
import { List, Divider } from '@material-ui/core'
import { SideBarItem } from '@comp/SideBar/Item'
import { SideBarNavItem } from '@comp/SideBar/NavItem'

interface ISideBarItem {
  label: string
  icon: any
  to?: string
  id?: string
  divider?: boolean
  isHidden?: () => boolean
  isDisabled?: () => boolean
}

interface ISideBarNavigationProps {
  items: ISideBarItem[]
  loading?: boolean
}

export const SideBarNavigation = ({
  items,
  loading,
}: ISideBarNavigationProps) => {
  return (
    <List>
      {items.map((item, index) => {
        const {
          label,
          icon,
          to,
          id: itemId,
          divider,
          isHidden,
          isDisabled,
        } = item

        const id = `sidebar-item-${itemId || index}`

        const itemProps = {
          id,
          label,
          icon,
          loading,
          isHidden,
          isDisabled,
        }

        if (divider) return <Divider key={id} />
        if (to) return <SideBarNavItem key={id} {...itemProps} to={to} />
        return <SideBarItem key={id} {...itemProps} />
      })}
    </List>
  )
}
