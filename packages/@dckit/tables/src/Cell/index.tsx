import { useLocation, useHistory } from 'react-router-dom'
import { useProxyHandler } from '../../UnsavedDialog'

export function Cell(props: any) {
  const { children } = props
  return <div style={{ display: 'flex', padding: '8px 16px' }}>{children}</div>
}

export function LinkCell(props: any) {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const { children, row, style = {}, path } = props

  const id = row?.original?.id

  const navigate = () => id && push(`${path || pathname}/${id}`)
  const proxyClick = useProxyHandler(navigate)

  return (
    <div
      style={{
        display: 'flex',
        padding: '12px 16px',
        cursor: 'pointer',
        ...style,
      }}
      onClick={proxyClick}
    >
      {children}
    </div>
  )
}
