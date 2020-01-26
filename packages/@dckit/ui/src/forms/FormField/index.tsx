import React from 'react'
import { _get } from '@dckit/store'
import { TextField } from '../TextField'
import { SwitchField } from '../SwitchField'
import { IFormField, FormFieldType } from '../types'

export const FormField = (props: IFormField) => {
  const {
    form,
    field,
    type = FormFieldType.text,
    size,
    defaultValue,
    useDefaults,
    hint,
    fullWidth = true,
    controlProps,
    controlChange,
    onChange,
    ...restProps
  } = props

  const errorObj = _get(form.errors, field, {})
  const helperText = errorObj ? errorObj.message : hint
  const error = Boolean(errorObj)

  const handleChange = (e: any, value: any) => {
    const newValue =
      type === FormFieldType.switch || type === FormFieldType.checkbox
        ? value
        : e.target.value
    controlChange && controlChange(form, newValue)
    onChange && onChange(e)
  }

  const injectedProps = controlProps ? controlProps(form) : {}
  if (useDefaults) injectedProps.disabled = true

  const fieldProps = {
    ...restProps,
    ...injectedProps,
    onChange: handleChange,
    fullWidth,
    error,
    helperText,
  }

  return type === FormFieldType.text ? (
    <TextField {...fieldProps} />
  ) : type === FormFieldType.switch ? (
    <SwitchField {...fieldProps} />
  ) : null
}
