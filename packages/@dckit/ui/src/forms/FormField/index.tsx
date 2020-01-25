import React from 'react'
import { _get } from '@dckit/store'
import { TextField } from '../TextField'
import { IFormField, FormFieldType } from '../types'

export const FormField = (props: IFormField) => {
  const {
    form,
    field,
    type = FormFieldType.text,
    size,
    initialValue,
    fullWidth = true,
    controlProps,
    controlChange,
    onChange,
    ...restProps
  } = props

  const errorObj = _get(form.errors, field, {})
  const helperText = errorObj ? errorObj.message : undefined
  const error = Boolean(errorObj)

  const handleChange = (e: any) => {
    controlChange && controlChange(form, e.target.value)
    onChange && onChange(e)
  }

  const injectedProps = controlProps ? controlProps(form) : {}

  const fieldProps = {
    ...restProps,
    ...injectedProps,
    field,
    onChange: handleChange,
    fullWidth,
    error,
    helperText,
  }

  return type === FormFieldType.text ? <TextField {...fieldProps} /> : null
}
