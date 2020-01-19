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
  defaultValue?: any
  [propName: string]: any
}

export const FormField = ({
  field,
  type = FormFieldType.text,
  size = 12,
  fullWidth = true,
  defaultValue,
  form,
  checkDisabled,
  checkChange,
  ...restProps
}: IFormField) => {
  const disabled = checkDisabled ? checkDisabled(form) : false
  const fieldProps = {
    fullWidth,
    disabled,
    ...restProps,
  }
  return <TextField {...fieldProps} />
}
