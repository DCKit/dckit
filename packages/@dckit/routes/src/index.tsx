import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

export const normalizePath = (path?: string) =>
  !path || path === '/' ? '' : path

export interface IRoute {
  path: string
  component: any
  routes?: Partial<IRoute>[]
}

export const useLocationTail = () => {
  const location = useLocation().pathname
  const match = location.match(/(\/[a-z0-9_-]+)\/?$/i)
  const locationTail = (match && match[1]) || ''
  return locationTail.toLowerCase()
}

export function renderRoutes(rootRoutes: Partial<IRoute>[], rootPath?: string) {
  const basePath = normalizePath(rootPath)
  return (
    <Switch>
      {rootRoutes.map(route => {
        const { path, component: Component, routes } = route
        const routePath = `${basePath}${normalizePath(path)}`
        return (
          <Route
            key={`route-to-${routePath}`}
            path={routePath}
            render={routeProps => (
              <Component {...routeProps}>
                {routes && renderRoutes(routes, routePath)}
              </Component>
            )}
          />
        )
      })}
    </Switch>
  )
}

export const mapRoutes = (items: any[]) => {
  const routes = items
    .filter((item: any) => 'route' in item)
    .map((item: any): Partial<IRoute> => item.route)
  return routes
}
