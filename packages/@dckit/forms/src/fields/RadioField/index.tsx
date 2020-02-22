import React from 'react'
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { useStyles } from '../styles'

export const RadioField = (props: MuiFieldProps) => {
  const classes = useStyles()
  const {
    label,
    disabled: fieldDisabled,
    type,
    error,
    helperText,
    options = [],
    direction,
    ...restProps
  } = props

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        {...restProps}
        classes={{
          root:
            direction === 'column'
              ? classes.directionColumn
              : classes.directionRow,
        }}
      >
        {options.map((option: any, index: number) => {
          const { label, value, disabled } = option
          return (
            <FormControlLabel
              key={`${index}-${label}`}
              control={<Radio color="primary" />}
              label={label}
              value={value}
              disabled={disabled ?? fieldDisabled}
              classes={{
                root: classes.noselect,
              }}
            />
          )
        })}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
