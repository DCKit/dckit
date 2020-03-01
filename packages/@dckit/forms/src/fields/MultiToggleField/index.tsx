import React from 'react'
import { Grid, FormControl, FormLabel } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'
import { MultiToggle } from './MultiToggle'

export function MultiToggleField(props: MuiFieldProps) {
  const classes = useStyles()
  const {
    container,
    directionColumn,
    directionRow,
    noselect,
    togglesPadding,
  } = classes

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
  } = props

  const {
    direction,
    small = false,
    size = 'auto',
    fullWidth = false,
  } = optionsConfig

  const labelProps = { disabled, required, error }
  const optionValues = options.map((el: any) => el.value)

  const toggleProps = {
    name,
    disabled,
    small,
    fullWidth,
    values,
    optionValues,
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
      <Grid
        container
        className={direction === 'column' ? directionColumn : directionRow}
      >
        {options.map((option: any, index: number) => {
          const { label, value } = option
          return (
            <Grid
              key={`${name}${index}`}
              item
              xs={size}
              className={togglesPadding}
            >
              <MultiToggle {...toggleProps} label={label} value={value} />
            </Grid>
          )
        })}
      </Grid>
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </FormControl>
  )
}
