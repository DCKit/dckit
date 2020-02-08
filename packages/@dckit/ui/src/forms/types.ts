import { GridSize } from '@material-ui/core'

export const enum FormFieldType {
  text = 'text',
  check = 'check',
  switch = 'switch',
  component = 'component',
}

type FieldType = keyof typeof FormFieldType

export type FieldTypeDict = {
  [key in FieldType]?: any
}

export interface IFormField {
  field: string
  label: string
  type?: FormFieldType
  size?: GridSize
  disabled?: boolean
  formDisabled?: boolean
  initialValue?: any
  suffix?: any
  useDefaults?: boolean
  [propName: string]: any
}
