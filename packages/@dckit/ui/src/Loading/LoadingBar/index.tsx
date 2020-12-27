import cn from 'clsx'
import { LinearProgress } from '@material-ui/core'
import { useStyles } from './styles'

export function LoadingBar(props: any) {
  const { loading, style = {} } = props
  const cls = useStyles()

  return (
    <LinearProgress
      className={cn(!loading && cls.hidden)}
      classes={{ root: cls.root, bar: cls.bar }}
      style={style}
    />
  )
}
