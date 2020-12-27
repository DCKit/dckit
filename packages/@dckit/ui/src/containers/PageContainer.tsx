import { Grid } from '@material-ui/core'

export function PageContainer(props: any) {
  const { style, children, maxWidth, ...other } = props
  return (
    <Grid
      container
      style={{
        ...(maxWidth && { maxWidth }),
        padding: '0 32px 24px 36px',
        ...style,
      }}
      {...other}
    >
      {children}
    </Grid>
  )
}
