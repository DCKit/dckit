import React from 'react'
import { GridSize, TextField } from '@material-ui/core'

export enum FormFieldType {
  text = 'text',
}

export interface IFormField {
  field: string
  type?: FormFieldType
  size?: GridSize
  fullWidth?: boolean
  disabled?: boolean
  defaultValue?: any
  [propName: string]: any
}

export const FormField = (props: IFormField) => {
  const {
    form,
    field,
    type = FormFieldType.text,
    size,
    fullWidth = true,
    defaultValue,
    disabled: propDisabled,
    checkDisabled,
    onChange,
    checkChange,
    ...restProps
  } = props

  const disabled = Boolean(checkDisabled ? checkDisabled(form) : propDisabled)

  const fieldProps = {
    fullWidth,
    disabled,
    ...restProps,
  }

  const handleChange = (e: any) => {
    checkChange && checkChange(form, e.target.value)
    onChange && onChange(e)
  }

  return type === FormFieldType.text ? (
    <TextField {...fieldProps} onChange={handleChange} />
  ) : null
}
