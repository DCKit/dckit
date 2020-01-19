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
  ...fieldProps
}: IFormField) => {
  return <TextField fullWidth {...fieldProps} />
}
