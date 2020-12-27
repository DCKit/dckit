import { Grid } from '@material-ui/core'

export function HeaderContainer(props: any) {
  const { style, children, maxWidth, ...other } = props
  return (
    <Grid
      container
      item
      xs={12}
      style={{ paddingTop: 22, paddingBottom: 28, ...style }}
      {...other}
    >
      {children}
    </Grid>
  )
}
