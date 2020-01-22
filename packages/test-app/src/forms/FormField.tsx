import React from 'react'
import { _get } from '@dckit/store'
import { FormFieldType, IFormField } from './types'
import { TextField } from './TextField'

export const FormField = (props: IFormField) => {
  const {
    form,
    field,
    type = FormFieldType.text,
    size,
    defaultValue,
    fullWidth = true,
    disabled: propDisabled,
    checkDisabled,
    onChange,
    checkChange,
    ...restProps
  } = props

  const disabled = Boolean(checkDisabled ? checkDisabled(form) : propDisabled)
  const errorObj = _get(form.errors, field, {})
  const helperText = errorObj ? errorObj.message : undefined
  const error = Boolean(errorObj)

  const handleChange = (e: any) => {
    checkChange && checkChange(form, e.target.value)
    onChange && onChange(e)
  }

  const fieldProps = {
    ...restProps,
    name: field,
    onChange: handleChange,
    fullWidth,
    disabled,
    error,
    helperText,
  }

  return type === FormFieldType.text ? <TextField {...fieldProps} /> : null
}
