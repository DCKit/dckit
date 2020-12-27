import { CircularProgress } from '@material-ui/core'

export function LoadingCircle(props: any) {
  const { loading, size = 32, marginRight = 28, color = 'primary' } = props
  if (!loading) return null

  const style = { width: size, height: size, marginRight }

  return <CircularProgress color={color} style={style} />
}
