import { useStyles } from './styles'
import './styles.css'

export function LoadingText(props: any) {
  const { children } = props
  const cls = useStyles()
  return <div className={cls.loading}>{children}</div>
}
