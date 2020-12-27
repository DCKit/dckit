import { useStyles } from './styles'

export function Badge(props: any) {
  const { children, color = '#999', style, ...other } = props
  const cls = useStyles()

  return (
    <div
      className={cls.badge}
      style={{ color, borderColor: color, ...style }}
      {...other}
    >
      {children}
    </div>
  )
}
