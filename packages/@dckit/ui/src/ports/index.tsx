import React from 'react'
import { createTeleporter } from 'react-teleporter'

const PageTitle = createTeleporter()
export const PageTitleTarget = PageTitle.Target
export const PageTitleSource = ({ children }: { children: any }) => (
  <PageTitle.Source>{children}</PageTitle.Source>
)

const AppBar = createTeleporter()
export const AppBarTarget = AppBar.Target
export const AppBarSource = ({ children }: { children: any }) => (
  <AppBar.Source>{children}</AppBar.Source>
)

const PageBar = createTeleporter()
export const PageBarTarget = PageBar.Target
export const PageBarSource = ({ children }: { children: any }) => (
  <PageBar.Source>{children}</PageBar.Source>
)

const SideBar = createTeleporter()
export const SideBarTarget = SideBar.Target
export const SideBarSource = ({ children }: { children: any }) => (
  <SideBar.Source>{children}</SideBar.Source>
)
