import React from 'react'
import { useLocation } from 'react-router-dom'

export interface IRoute {
  path: string
  exact?: boolean
  component: React.ReactNode
}

export const useLocationTail = () => {
  const location = useLocation().pathname
  const match = location.match(/(\/[a-z0-9_-]+)\/?$/i)
  const locationTail = (match && match[1]) || ''
  return locationTail.toLowerCase()
}
