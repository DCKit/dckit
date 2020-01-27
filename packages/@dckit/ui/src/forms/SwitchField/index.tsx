import React from 'react'
import { Switch, FormControlLabel } from '@material-ui/core'
import { IFormField } from '../types'
import { useStyles } from './styles'

export const SwitchField = (props: IFormField) => {
  const classes = useStyles()
  const { label, disabled, value, checked, onChange } = props

  const fieldProps = {
    value,
    checked,
    onChange,
    disabled,
  }

  return (
    <FormControlLabel
      classes={{
        root: classes.noselect,
      }}
      control={<Switch {...fieldProps} color="primary" />}
      disabled={disabled}
      label={label}
    />
  )
}
