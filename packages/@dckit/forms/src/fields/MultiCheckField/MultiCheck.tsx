import React from 'react'
import { Checkbox, useFormControl } from '@material-ui/core'
import { useField } from 'formik'
import { toggle } from '../index'

type MultiCheckProps = {
  name: string
  disabled?: boolean
  small?: boolean
  value?: any
  values?: any[]
  optionValues?: any[]
}

export function MultiCheck(props: MultiCheckProps) {
  const { name, disabled, small, values = [], optionValues = [], value } = props
  const formControl = useFormControl()
  const [, , helpers] = useField(name)

  const handleChange = (value: any) => {
    formControl.onFocus()
    helpers.setValue(toggle(optionValues, values, value))
  }

  return (
    <Checkbox
      color="primary"
      size={small ? 'small' : 'medium'}
      checked={values.includes(value)}
      value={value}
      disabled={disabled}
      onChange={() => handleChange(value)}
    />
  )
}
