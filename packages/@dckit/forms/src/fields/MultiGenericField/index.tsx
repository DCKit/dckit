import React from 'react'
import { Grid, FormControl, FormLabel } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

export type MultiContainerProps = {
  direction?: 'column' | 'row'
  children?: any
}

function MultiContainer(props: MultiContainerProps) {
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

type GenericMultiFieldProps = {
  ControlContainer?: any
  Control: any
}

export function MultiGenericField(
  props: MuiFieldProps & GenericMultiFieldProps
) {
  const classes = useStyles()
  const { container, noselect } = classes

  const {
    label,
    disabled,
    required,
    error,
    helperText,
    options = [],
    optionsConfig = {},
    name,
    value: values = [],
    Control,
    ControlContainer = MultiContainer,
  } = props

  const { direction, fullWidth = false, size = 'auto', small } = optionsConfig
  const optionValues = options.map((el: any) => el.value)
  const labelProps = { disabled, required, error }

  const controlProps = {
    size,
    name,
    small,
    values,
    optionValues,
    disabled,
    label,
    fullWidth,
  }

  return (
    <FormControl component="fieldset" classes={{ root: container }}>
      <FormLabel
        {...labelProps}
        component="legend"
        classes={{ root: noselect }}
      >
        {label}
      </FormLabel>
      <ControlContainer direction={direction}>
        {options.map((option: any, index: number) => {
          const { label, value } = option
          return (
            <Control
              key={`${name}${index}`}
              {...controlProps}
              label={label}
              value={value}
            />
          )
        })}
      </ControlContainer>
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </FormControl>
  )
}
