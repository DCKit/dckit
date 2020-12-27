import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function PageTitle(props: any) {
  const { push } = useHistory()
  const cls = useStyles()
  const { children, style = {}, to } = props

  return to ? (
    <div
      role="button"
      className={cls.header}
      style={{
        borderBottomColor: style?.color || '#777',
        ...style,
      }}
      onClick={() => push(to)}
    >
      {children}
    </div>
  ) : (
    <span className={cls.span} style={{ ...style }}>
      {children}
    </span>
  )
}
