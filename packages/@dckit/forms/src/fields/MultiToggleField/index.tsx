import React from 'react'
import cn from 'clsx'
import { Grid } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { MultiGenericField, MultiContainerProps } from '../MultiGenericField'
import { useStyles } from '../styles'
import { MultiToggle } from './MultiToggle'

function MultiContainer(props: MultiContainerProps) {
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

export const MultiToggleField = (props: MuiFieldProps) => (
  <MultiGenericField
    {...props}
    Control={MultiToggle}
    ControlContainer={MultiContainer}
  />
)
