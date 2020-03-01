import React from 'react'
import cn from 'clsx'
import { Grid, FormControl, FormLabel, RadioGroup } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'
import { Toggle } from './Toggle'

export function ToggleField(props: MuiFieldProps) {
  const classes = useStyles()
  const {
    container,
    directionColumn,
    directionRow,
    noselect,
    togglesContainer,
    togglesPadding,
  } = classes

  const {
    label,
    disabled,
    required,
    type,
    error,
    helperText,
    options = [],
    optionsConfig = {},
    onBlur,
    name,
    ...restProps
  } = props

  const {
    direction,
    small = false,
    size = 'auto',
    fullWidth = false,
  } = optionsConfig

  const labelProps = { disabled, required, error }
  const toggleProps = {
    name,
    disabled,
    small,
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
      <RadioGroup
        {...restProps}
        name={name}
        classes={{
          root: cn(
            togglesContainer,
            direction === 'column' ? directionColumn : directionRow
          ),
        }}
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
              <Toggle {...toggleProps} label={label} value={value} />
            </Grid>
          )
        })}
      </RadioGroup>
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </FormControl>
  )
}
