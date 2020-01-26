import React from 'react'
import { Switch, FormControlLabel } from '@material-ui/core'
import { IFormField } from '../types'

export const SwitchField = (props: IFormField) => {
  const { label, disabled, value, onChange } = props

  const fieldProps = {
    value,
    onChange,
    disabled,
  }

  return (
    <FormControlLabel
      control={<Switch {...fieldProps} color="primary" />}
      disabled={disabled}
      label={label}
    />
  )
}
