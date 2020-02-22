import React from 'react'
import { Grid, GridSize } from '@material-ui/core'

export const EmptyContainer = ({ children }: { children: any }) => children

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
  <Grid container style={{ paddingTop: 32 }} justify="flex-end">
    {children}
  </Grid>
)
