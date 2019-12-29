import React, { ComponentType } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

export interface IRoute {
  path: string
  exact?: boolean
  component: ComponentType
  routes?: IRoute[]
}

export const useLocationTail = () => {
  const location = useLocation().pathname
  const match = location.match(/(\/[a-z0-9_-]+)\/?$/i)
  const locationTail = (match && match[1]) || ''
  return locationTail.toLowerCase()
}

export function renderRoutes(rootRoutes: IRoute[], rootPath?: string) {
  const basePath = !rootPath || rootPath === '/' ? '' : rootPath
  return (
    <Switch>
      {rootRoutes.map(route => {
        const { path, exact, component, routes } = route
        return (
          <>
            <Route
              path={`${basePath}/${path}`}
              exact={exact}
              component={component}
            />
            {routes && renderRoutes(routes, path)}
          </>
        )
      })}
    </Switch>
  )
}
