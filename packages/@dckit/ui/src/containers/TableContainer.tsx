import { Paper } from '@material-ui/core'

export function TableContainer(props: any) {
  const { style, children, elevation = 1, ...other } = props
  return (
    <Paper
      elevation={elevation}
      style={{
        width: '100%',
        border: '1px solid #ddd',
        padding: '4px 24px 16px 24px',
        ...style,
      }}
      {...other}
    >
      {children}
    </Paper>
  )
}
