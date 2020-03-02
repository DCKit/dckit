import React from 'react'
import cn from 'clsx'

import {
  Grid,
  useFormControl,
  FormControlLabel,
  GridSize,
} from '@material-ui/core'

import { useField } from 'formik'
import { useStyles } from '../styles'
import { toggle } from '../util'

export type MultiControlProps = {
  name: string
  label?: string
  size?: GridSize
  disabled?: boolean
  small?: boolean
  fullWidth?: boolean
  value?: any
  values?: any[]
  optionValues?: any[]
  Control: any
}

export function MultiControl(props: MultiControlProps) {
  const classes = useStyles()
  const { noselect, marginRight, marginZero, flexGrow, smallLabel } = classes

  const {
    name,
    label,
    size = 'auto',
    disabled,
    small,
    fullWidth = false,
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
        labelPlacement={fullWidth ? 'start' : 'end'}
        classes={{
          root: cn(
            noselect,
            size === 'auto' && marginRight,
            fullWidth && flexGrow
          ),
          label: cn(small ? smallLabel : '', fullWidth && flexGrow),
          labelPlacementStart: cn(fullWidth ? marginZero : ''),
        }}
      />
    </Grid>
  )
}
