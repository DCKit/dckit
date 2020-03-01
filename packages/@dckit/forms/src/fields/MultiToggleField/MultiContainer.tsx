import React from 'react'
import cn from 'clsx'
import { Grid } from '@material-ui/core'
import { MultiContainerProps } from '../MultiGenericField/MultiContainer'
import { useStyles } from '../styles'

export function MultiContainer(props: MultiContainerProps) {
  const classes = useStyles()
  const { togglesContainer, directionColumn, directionRow } = classes
  const { direction, children } = props

  return (
    <Grid
      container
      className={cn(
        togglesContainer,
        direction === 'column' ? directionColumn : directionRow
      )}
    >
      {children}
    </Grid>
  )
}
