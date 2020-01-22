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
  initialValue?: any
  suffix?: any
  [propName: string]: any
}
