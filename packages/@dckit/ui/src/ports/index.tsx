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

const SideBarHeader = createTeleporter()
export const SideBarHeaderConsumer = SideBarHeader.Target
export const SideBarHeaderProvider = ({ children }: { children: any }) => (
  <SideBarHeader.Source>{children}</SideBarHeader.Source>
)
const SideBarNavigation = createTeleporter()
export const SideBarNavigationConsumer = SideBarNavigation.Target
export const SideBarNavigationProvider = ({ children }: { children: any }) => (
  <SideBarNavigation.Source>{children}</SideBarNavigation.Source>
)
const SideBarFooter = createTeleporter()
export const SideBarFooterConsumer = SideBarFooter.Target
export const SideBarFooterProvider = ({ children }: { children: any }) => (
  <SideBarFooter.Source>{children}</SideBarFooter.Source>
)
