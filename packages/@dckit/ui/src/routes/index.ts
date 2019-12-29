import { useLocation } from 'react-router-dom'

export const useLocationTail = () => {
  const location = useLocation().pathname
  const match = location.match(/\/([a-z0-9-]+)\/?$/i)
  const urlTail = (match && match[1]) || ''
  return urlTail.toLowerCase()
}
