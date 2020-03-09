import React from 'react'
import { setIn } from 'formik'
import { TextField } from '../TextField'
import { MuiFieldProps } from '../../types'

export function NumberField(props: MuiFieldProps) {
  const numberProps = setIn(
    props,
    'controlProps.inputProps.inputMode',
    'numeric'
  )
  return <TextField {...numberProps} />
}
