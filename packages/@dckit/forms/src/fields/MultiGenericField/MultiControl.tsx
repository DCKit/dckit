import React from 'react'
import {
  Grid,
  useFormControl,
  FormControlLabel,
  GridSize,
} from '@material-ui/core'

import { useField } from 'formik'
import { useStyles } from '../styles'
import { toggle } from '../index'

export type MultiControlProps = {
  name: string
  label?: string
  size?: GridSize
  disabled?: boolean
  small?: boolean
  value?: any
  values?: any[]
  optionValues?: any[]
  Control: any
}

export function MultiControl(props: MultiControlProps) {
  const classes = useStyles()
  const { noselect, smallLabel } = classes

  const {
    name,
    label,
    size = 'auto',
    disabled,
    small,
    values = [],
    optionValues = [],
    value,
    Control = <div />,
  } = props

  const formControl = useFormControl()
  const [, , helpers] = useField(name)

  const handleChange = (value: any) => {
    formControl.onFocus()
    helpers.setValue(toggle(optionValues, values, value))
  }

  return (
    <Grid item xs={size}>
      <FormControlLabel
        control={
          <Control
            color="primary"
            size={small ? 'small' : 'medium'}
            checked={values.includes(value)}
            value={value}
            disabled={disabled}
            onChange={() => handleChange(value)}
          />
        }
        label={label}
        disabled={disabled}
        classes={{ root: noselect, label: small ? smallLabel : '' }}
      />
    </Grid>
  )
}
