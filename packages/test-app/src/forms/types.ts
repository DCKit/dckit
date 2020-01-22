import { GridSize } from '@material-ui/core'

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
