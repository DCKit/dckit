import React from 'react'
import { createTeleporter } from 'react-teleporter'

export const createPort = () => {
  const Port = createTeleporter()
  const Consumer = Port.Target
  const Provider = ({ children }: { children: any }) => (
    <Port.Source>{children}</Port.Source>
  )
  return { Provider, Consumer }
}

export const AppBarHead = createPort()
export const AppBarNav = createPort()
export const AppBarTail = createPort()

export const PageBarHead = createPort()
export const PageBarNav = createPort()
export const PageBarTail = createPort()

export const SideBarHead = createPort()
export const SideBarNav = createPort()
export const SideBarTail = createPort()
