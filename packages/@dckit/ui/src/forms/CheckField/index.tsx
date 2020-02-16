import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { FormFieldProps } from '../types'
import { useStyles } from './styles'

export const CheckField = (props: FormFieldProps) => {
  const classes = useStyles()
  const {
    label,
    disabled,
    type,
    error,
    helperText,
    value,
    ...restProps
  } = props

  return (
    <FormControlLabel
      classes={{
        root: classes.noselect,
      }}
      label={label}
      control={
        <Checkbox
          color="primary"
          {...restProps}
          checked={value ?? false}
          value={value ?? false}
          disabled={disabled}
        />
      }
      disabled={disabled}
    />
  )
}
