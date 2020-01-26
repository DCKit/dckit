import { GridSize } from '@material-ui/core'

export enum FormFieldType {
  text = 'text',
  checkbox = 'checkbox',
  switch = 'switch',
}

export interface IFormField {
  field: string
  type?: FormFieldType
  size?: GridSize
  fullWidth?: boolean
  disabled?: boolean
  initialValue?: any
  suffix?: any
  [propName: string]: any
}
