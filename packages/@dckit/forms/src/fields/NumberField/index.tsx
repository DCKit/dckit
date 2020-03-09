import React from 'react'
import { TextField } from '../TextField'
import { MuiFieldProps } from '../../types'

export function NumberField(props: MuiFieldProps) {
  const numericProps = {
    inputProps: {
      inputMode: 'numeric',
      pattern: '[0-9]*',
    },
  }
  return <TextField {...props} {...numericProps} />
}
