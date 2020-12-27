import { Grid } from '@material-ui/core'

export const EmptyContainer = ({ children }: { children: any }) => children

export const DefaultContainer = (props: any) => {
  const { size = 12, children, ...rest } = props
  return (
    <Grid container item xs={size} {...rest}>
      {children}
    </Grid>
  )
}

export const DefaultActionsContainer = ({ children }: { children: any }) => (
  <Grid container style={{ paddingTop: 32 }} justify="flex-end">
    {children}
  </Grid>
)
