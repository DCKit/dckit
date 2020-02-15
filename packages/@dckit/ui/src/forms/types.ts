import { GridSize } from '@material-ui/core'
import { FormikProps } from 'formik'

export const enum FormFieldTypes {
  text = 'text',
  check = 'check',
  switch = 'switch',
  component = 'component',
}

export type FormFieldType = keyof typeof FormFieldTypes

export type FieldTypeDict = {
  [key in FormFieldType]?: any
}

export type FormFieldConfig = {
  name?: string
  label: string
  type?: FormFieldType
  size?: GridSize
  required?: boolean
  disabled?: boolean
  hint?: string
  initialValue?: any
  suffix?: any
}

export type FormFieldProps = Omit<FormFieldConfig, 'size' | 'type'> & {
  form: FormikProps<unknown>
  name: string
  type: FormFieldType
}
