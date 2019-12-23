import React from 'react'
import { createTeleporter } from 'react-teleporter'

const PageTitle = createTeleporter()
export const PageTitleConsumer = PageTitle.Target
export const PageTitleProvider = ({ children }: { children: any }) => (
  <PageTitle.Source>{children}</PageTitle.Source>
)

const AppBar = createTeleporter()
export const AppBarConsumer = AppBar.Target
export const AppBarProvider = ({ children }: { children: any }) => (
  <AppBar.Source>{children}</AppBar.Source>
)

const PageBar = createTeleporter()
export const PageBarConsumer = PageBar.Target
export const PageBarProvider = ({ children }: { children: any }) => (
  <PageBar.Source>{children}</PageBar.Source>
)

const SideBar = createTeleporter()
export const SideBarConsumer = SideBar.Target
export const SideBarProvider = ({ children }: { children: any }) => (
  <SideBar.Source>{children}</SideBar.Source>
)
