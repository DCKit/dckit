import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from '../styles'

export type MultiContainerProps = {
  direction?: 'column' | 'row'
  children?: any
}

export function MultiContainer(props: MultiContainerProps) {
  const classes = useStyles()
  const { directionColumn, directionRow } = classes
  const { direction, children } = props

  return (
    <Grid
      container
      className={direction === 'column' ? directionColumn : directionRow}
    >
      {children}
    </Grid>
  )
}
