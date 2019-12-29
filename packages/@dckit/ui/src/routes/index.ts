import { useLocation } from 'react-router-dom'

export const useLocationTail = () => {
  const location = useLocation().pathname
  const match = location.match(/(\/[a-z0-9_-]+)\/?$/i)
  const locationTail = (match && match[1]) || ''
  return locationTail.toLowerCase()
}
