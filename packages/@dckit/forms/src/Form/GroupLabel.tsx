import { Grid } from '@material-ui/core'

export function GroupLabel({
  desc,
  children,
}: {
  desc?: string
  children: string
}) {
  return (
    <Grid container item xs={12}>
      <div
        style={{
          color: 'gray',
          fontWeight: 500,
          textTransform: 'uppercase',
          width: '100%',
        }}
      >
        {children}
      </div>
      {desc && (
        <div
          style={{
            color: 'gray',
            fontSize: 'small',
            width: '100%',
            paddingTop: 8,
          }}
        >
          {desc}
        </div>
      )}
    </Grid>
  )
}
