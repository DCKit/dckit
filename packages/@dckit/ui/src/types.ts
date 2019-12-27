import { ISideBarItemProps } from '@comp/SideBar/Item'
import { ISideBarNavItemProps } from '@comp/SideBar/NavItem'

export type TSideBarItem = ISideBarItemProps | ISideBarNavItemProps | any
export type TRenderProp = (...args: any[]) => JSX.Element
export type TCallback = (...args: any[]) => any
