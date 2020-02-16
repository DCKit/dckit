import React from 'react'
import { Grid, GridSize } from '@material-ui/core'

export const DefaultFormContainer = ({ children }: { children: any }) => (
  <Grid container spacing={4}>
    {children}
  </Grid>
)

export const DefaultFieldContainer = ({
  size = 12,
  children,
}: {
  size?: GridSize
  children: any
}) => (
  <Grid container item xs={12} sm={size}>
    {children}
  </Grid>
)

export const DefaultActionsContainer = ({ children }: { children: any }) => (
  <Grid container>{children}</Grid>
)
